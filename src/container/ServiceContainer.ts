import { ICacheService } from '../cache/cache-interface';
import { IQueueService } from '../queue/IQueueService';
import { createCache } from '../cache/cache-factory';
import { createInMemoryQueue } from '../queue/InMemoryQueue';
// import {
//     handleSearchRequestJob,
//     SearchRequestData,
//     searchRequestJobComplete,
//     searchRequestJobFailed,
// } from '../service/response-handler';
import {
    WorkbenchCacheService,
    WorkbenchCacheServiceType,
} from '../service/cache/workbench-cache';

/**
 * ServiceContainer - Centralized dependency injection container
 *
 * This container manages the lifecycle of application services and provides
 * a single source of truth for dependency injection. It uses lazy initialization
 * to create services only when they're first requested.
 *
 * Benefits:
 * - Centralized service configuration and initialization
 * - Easy testing through dependency injection
 * - Explicit dependency management
 * - Ability to override services for testing or different environments
 */
class ServiceContainer {
    private static instance: ServiceContainer;

    private _cacheService: ICacheService | null = null;
    private _queueService: IQueueService | null = null;
    private _workbenchCacheService: WorkbenchCacheServiceType | null = null;

    private constructor() {
        // Private constructor enforces singleton pattern
    }

    /**
     * Get the singleton instance of ServiceContainer
     */
    public static getInstance(): ServiceContainer {
        if (!ServiceContainer.instance) {
            ServiceContainer.instance = new ServiceContainer();
        }
        return ServiceContainer.instance;
    }

    /**
     * Get the cache service instance (lazy initialization)
     */
    public getCacheService(): ICacheService {
        if (!this._cacheService) {
            this._cacheService = createCache('mock');
        }
        return this._cacheService;
    }

    /**     * Get the workbench cache service instance (lazy initialization)
     */
    public getWorkbenchCacheService(): WorkbenchCacheServiceType {
        if (!this._workbenchCacheService) {
            this._workbenchCacheService = WorkbenchCacheService(
                this.getCacheService()
            );
        }
        return this._workbenchCacheService;
    }

    /**
     * Get the queue service instance (lazy initialization)
     */
    public getQueueService(): IQueueService {
        if (!this._queueService) {
            this._queueService = this.initializeQueueService();
        }
        return this._queueService;
    }

    /**
     * Override cache service (useful for testing)
     */
    public setCacheService(service: ICacheService): void {
        this._cacheService = service;
        this._workbenchCacheService = WorkbenchCacheService(service);
    }

    /**
     * Override queue service (useful for testing)
     */
    public setQueueService(service: IQueueService): void {
        this._queueService = service;
    }

    /**
     * Reset all services (useful for testing)
     */
    public reset(): void {
        this._cacheService = null;
        this._queueService = null;
        this._workbenchCacheService = null;
    }

    /**
     * Initialize queue service with processors and event handlers
     */
    private initializeQueueService(): IQueueService {
        const queue = createInMemoryQueue();

        // // Register job processors
        // queue.process<SearchRequestData>(
        //     'search-response',
        //     handleSearchRequestJob
        // );

        // // Register event handlers
        // queue.on<SearchRequestData>('completed', searchRequestJobComplete);
        // queue.on<SearchRequestData>('failed', searchRequestJobFailed);

        return queue;
    }

    /**
     * Graceful shutdown - close all services
     */
    public async shutdown(): Promise<void> {
        if (this._queueService) {
            await this._queueService.close();
        }
    }
}

export default ServiceContainer;
