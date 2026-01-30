import 'dotenv/config';
import { isAxiosError } from 'axios';
import { createLogger } from './winston/logger';
import pino from 'pino';
import {
    formatError,
    formatAxiosError,
    createLogContext,
} from './winston/format';
import { correlationIdMiddleware } from './middleware/correlation-middleware';

class AutomationLogger {
    private static instance: AutomationLogger | undefined;
    public logger: pino.Logger;
    constructor() {
        console.log('Initializing AutomationLogger...');
        AutomationLogger.instance = this;
        if (!process.env.SERVICE_NAME) {
            console.warn(
                "SERVICE_NAME environment variable is not set. Defaulting to 'default-service'. This may lead to confusion in log aggregation. \n"
            );
        }
        if (!process.env.LOG_LEVEL) {
            console.warn(
                "LOG_LEVEL environment variable is not set. Defaulting to 'info'. This may lead to missing debug logs. \n"
            );
        }
        if (!process.env.NODE_ENV) {
            throw new Error(
                'NODE_ENV environment variable is not set. This is required to determine the logging environment. \n'
            );
        }
        if (process.env.NODE_ENV !== 'production') {
            console.warn(
                'Running in non-production environment. Logs may not be sent to Grafana Loki. \n'
            );
        }
        this.logger = createLogger({
            serviceName: process.env.SERVICE_NAME || 'mock-playground-service',
        });
    }
    static getInstance(): AutomationLogger {
        if (!AutomationLogger.instance) {
            AutomationLogger.instance = new AutomationLogger();
        }
        AutomationLogger.instance.logger.info(
            'AutomationLogger instance created'
        );
        return AutomationLogger.instance;
    }

    info(message: string, ...args: any[]) {
        const meta = this.processMeta(args);
        const context = this.createContext('info', meta);
        this.logger.info(context, message);
    }

    error(message: string, meta?: any, error?: unknown) {
        let context = { ...meta };

        if (isAxiosError(error)) {
            context = { ...context, ...formatAxiosError(error) };
        } else if (error) {
            context = { ...context, ...formatError(error) };
        }

        const logContext = this.createContext('error', context);
        this.logger.error(logContext, message);
    }

    debug(message: string, ...args: any[]) {
        const meta = this.processMeta(args);
        const context = this.createContext('debug', meta);
        this.logger.debug(context, message);
    }

    warning(message: string, ...args: any[]) {
        const meta = this.processMeta(args);
        const context = this.createContext('warning', meta);
        this.logger.warn(context, message);
    }

    startTimer() {
        const start = Date.now();
        return {
            done: (message: string, meta?: Record<string, unknown>) => {
                const duration = Date.now() - start;
                this.info(message, { duration, ...meta });
            },
        };
    }

    getCorrelationIdMiddleware() {
        return correlationIdMiddleware;
    }

    child(scope: string, meta?: any): AutomationLogger {
        const pinoChild = this.logger.child({ scope: scope, ...meta });
        const childLogger = Object.create(this);
        childLogger.logger = pinoChild;
        return childLogger;
    }

    private processMeta(args: any[]): Record<string, unknown> {
        return args.reduce((acc, arg, index) => {
            if (typeof arg === 'string') {
                acc[`message_${index + 2}`] = arg;
            } else if (typeof arg === 'object' && arg !== null) {
                Object.assign(acc, arg);
            }
            return acc;
        }, {});
    }

    private createContext(
        level: 'info' | 'error' | 'debug' | 'warning',
        meta: Record<string, unknown>
    ): Record<string, unknown> {
        const correlationId = meta.correlationId as string | undefined;

        return createLogContext(
            undefined, // scope is handled by child loggers
            correlationId,
            meta
        );
    }

    public getLoggerInstance(): pino.Logger {
        return this.logger;
    }
}

export default AutomationLogger.getInstance();
