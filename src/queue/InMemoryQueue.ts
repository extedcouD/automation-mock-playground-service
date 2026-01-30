import {
    IQueueService,
    JobEventHandler,
    QueueJob,
    QueueOptions,
} from './IQueueService';
import logger from '../utils/logger';
import { randomUUID } from 'crypto';

interface QueuedJob<T> extends QueueJob<T> {
    options?: QueueOptions;
    jobName: string;
    attemptsLeft: number;
}

interface QueueState {
    queue: QueuedJob<unknown>[];
    processing: boolean;
    handlers: Map<string, (data: unknown) => Promise<unknown>>;
    eventHandlers: {
        completed: JobEventHandler<unknown>[];
        failed: JobEventHandler<unknown>[];
    };
    processingLoop: NodeJS.Timeout | null;
}

const createQueueState = (): QueueState => ({
    queue: [],
    processing: false,
    handlers: new Map(),
    eventHandlers: {
        completed: [],
        failed: [],
    },
    processingLoop: null,
});

const generateJobId = (jobName: string): string =>
    `${jobName}_${Date.now()}_${randomUUID()}`;

const createJob = <T>(
    jobName: string,
    data: T,
    options?: QueueOptions
): QueuedJob<T> => ({
    id: generateJobId(jobName),
    data,
    timestamp: new Date(),
    jobName,
    options,
    attemptsLeft: options?.attempts || 1,
});

const withTimeout = async <T>(
    promise: Promise<T>,
    timeout: number
): Promise<T> => {
    return Promise.race([
        promise,
        new Promise<T>((_, reject) =>
            setTimeout(() => reject(new Error('Job timed out')), timeout)
        ),
    ]);
};

const calculateRetryDelay = (
    option: QueueOptions,
    attemptNumber: number
): number => {
    if (!option.backoff) return 1000;
    if (option.backoff.type === 'exponential') {
        return option.backoff.delay * Math.pow(2, attemptNumber - 1);
    } else {
        return option.backoff.delay;
    }
};

const emitEvent = <T>(
    state: QueueState,
    eventType: 'completed' | 'failed',
    job: QueueJob<T>,
    result?: unknown,
    error?: Error
): void => {
    state.eventHandlers[eventType].forEach(handler => {
        try {
            handler(job, result, error);
        } catch (err) {
            logger.error(
                `Error in ${eventType} event handler for job ${job.id}: ${
                    (err as Error).message
                }`
            );
        }
    });
};

const processNextJob = async (state: QueueState): Promise<void> => {
    if (state.processing || state.queue.length === 0) return;
    state.processing = true;
    const job = state.queue.shift()!;
    const handler = state.handlers.get(job.jobName);

    if (!handler) {
        logger.error(`No handler registered for job: ${job.jobName}`);
        state.processing = false;
        return;
    }
    try {
        const result = job.options?.timeout
            ? await withTimeout(handler(job.data), job.options.timeout)
            : await handler(job.data);
        emitEvent(state, 'completed', job, result);
        logger.info(`Job ${job.id} completed successfully.`);
    } catch (error) {
        logger.error(`Job ${job.id} failed: ${(error as Error).message}`);
        job.attemptsLeft -= 1;
        if (job.attemptsLeft > 0) {
            const delay = calculateRetryDelay(
                job.options || {},
                (job.options?.attempts || 1) - job.attemptsLeft
            );
            logger.info(
                `Re-enqueuing job ${job.id} after ${delay}ms, attempts left: ${job.attemptsLeft}`
            );
            setTimeout(() => {
                state.queue.push(job);
            }, delay);
        } else {
            emitEvent(state, 'failed', job, undefined, error as Error);
        }
    } finally {
        state.processing = false;
    }
};

export const createInMemoryQueue = (): IQueueService => {
    const state = createQueueState();

    state.processingLoop = setInterval(() => {
        if (!state.processing && state.queue.length > 0) {
            processNextJob(state);
        }
    }, 100); // Check every 100ms

    return {
        process<T>(
            jobName: string,
            handler: (data: T) => Promise<unknown>
        ): void {
            state.handlers.set(
                jobName,
                handler as (data: unknown) => Promise<unknown>
            );
        },

        async enqueue<T>(
            jobName: string,
            data: T,
            options?: QueueOptions
        ): Promise<string> {
            const job = createJob(jobName, data, options);
            state.queue.push(job);
            logger.info(`Enqueued job ${job.id} of type ${jobName}`);
            return job.id;
        },

        on<T>(
            event: 'completed' | 'failed',
            handler: JobEventHandler<T>
        ): void {
            state.eventHandlers[event].push(
                handler as JobEventHandler<unknown>
            );
        },

        async close(): Promise<void> {
            if (state.processingLoop) {
                clearInterval(state.processingLoop);
                state.processingLoop = null;
            }
            state.queue = [];
            state.processing = false;
            state.handlers.clear();
            state.eventHandlers.completed = [];
            state.eventHandlers.failed = [];
        },
    };
};

export type queueServiceType = ReturnType<typeof createInMemoryQueue>;
