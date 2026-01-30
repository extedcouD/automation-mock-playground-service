import { Response, NextFunction } from 'express';
import { asyncResponseControllers } from '../../controllers/async-response-controller';
import { IQueueService } from '../../queue/IQueueService';
import { ICacheService } from '../../cache/cache-interface';
import { OndcRequest } from '../../types/request-types';
import { OndcProtocolError } from '../../errors/custom-errors';
import { sendAck } from '../../utils/res-utils';
import ServiceContainer from '../../container/ServiceContainer';

/**
 * Test Suite: Async Response Controller with Dependency Injection
 *
 * This test demonstrates how dependency injection enables easy testing
 * by allowing us to inject mock implementations of services.
 *
 * Key Benefits Demonstrated:
 * - Complete control over service behavior in tests
 * - No global state pollution between tests
 * - Ability to test error scenarios easily
 * - Type-safe mocks using Jest
 */

// Mock the logger to avoid console output during tests
jest.mock('../../utils/logger', () => ({
    info: jest.fn(),
    error: jest.fn(),
}));

// Mock the res-utils to verify they're called correctly
jest.mock('../../utils/res-utils', () => ({
    sendAck: jest.fn(res => res),
}));

describe('asyncResponseControllers', () => {
    let mockQueueService: jest.Mocked<IQueueService>;
    let mockCacheService: jest.Mocked<ICacheService>;
    let mockRequest: Partial<OndcRequest>;
    let mockResponse: Partial<Response>;
    let mockNext: jest.MockedFunction<NextFunction>;

    beforeEach(() => {
        // Create fresh mocks before each test
        mockQueueService = {
            enqueue: jest.fn(),
            process: jest.fn(),
            on: jest.fn(),
            close: jest.fn(),
        } as jest.Mocked<IQueueService>;

        mockCacheService = {
            get: jest.fn(),
        } as jest.Mocked<ICacheService>;

        mockRequest = {
            body: {
                context: {
                    action: 'search',
                    transaction_id: 'test-txn-123',
                },
                message: {
                    intent: {
                        item: {
                            descriptor: {
                                name: 'test product',
                            },
                        },
                    },
                },
            },
            context: {
                bap_id: 'test-buyer-id',
                bap_uri: 'https://test-buyer.com',
                transaction_id: 'test-txn-123',
                message_id: 'test-msg-123',
                action: 'search',
                domain: 'ONDC:RET10',
                country: 'IND',
                city: 'std:080',
                core_version: '1.2.0',
                timestamp: new Date().toISOString(),
                ttl: 'PT30S',
            },
        };

        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        mockNext = jest.fn();
    });

    describe('respondWithAsyncOnSearch', () => {
        it('should enqueue job and send ACK on success', async () => {
            // Arrange: Set up successful enqueue
            const expectedJobId = 'job-123';
            mockQueueService.enqueue.mockResolvedValue(expectedJobId);

            // Inject mocks into controller
            const controller = asyncResponseControllers(mockQueueService);

            // Act: Call the controller method
            await controller.respondWithAsyncOnSearch(
                mockRequest as OndcRequest,
                mockResponse as Response,
                mockNext
            );

            // Assert: Verify queue was called with correct data
            expect(mockQueueService.enqueue).toHaveBeenCalledWith(
                'search-response',
                {
                    searchRequest: mockRequest.body,
                    buyerId: 'test-buyer-id',
                    buyerUri: 'https://test-buyer.com',
                }
            );

            // Verify sendAck was called (mocked)
            expect(sendAck).toHaveBeenCalledWith(
                mockResponse,
                mockRequest.context
            );

            // Verify next was NOT called (no error)
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should call next with OndcProtocolError when enqueue fails', async () => {
            // Arrange: Set up failed enqueue
            const enqueueError = new Error('Queue service unavailable');
            mockQueueService.enqueue.mockRejectedValue(enqueueError);

            // Inject mocks into controller
            const controller = asyncResponseControllers(mockQueueService);

            // Act: Call the controller method
            await controller.respondWithAsyncOnSearch(
                mockRequest as OndcRequest,
                mockResponse as Response,
                mockNext
            );

            // Assert: Verify next was called with OndcProtocolError
            expect(mockNext).toHaveBeenCalledWith(
                expect.any(OndcProtocolError)
            );

            const errorArg = mockNext.mock
                .calls[0][0] as unknown as OndcProtocolError;
            expect(errorArg.code).toBe('31001');
            expect(errorArg.message).toBe(
                'Error initializing processing async response'
            );

            // Verify sendAck was NOT called
            expect(sendAck).not.toHaveBeenCalled();
        });
    });

    describe('Integration with ServiceContainer', () => {
        it('demonstrates how to override services for testing', () => {
            // This example shows how you can use ServiceContainer in integration tests
            // by overriding services with mocks

            const container = ServiceContainer.getInstance();

            // Override services with mocks
            container.setQueueService(mockQueueService);
            container.setCacheService(mockCacheService);

            // Now when you import routes/controllers that use the container,
            // they'll use your mocked services
            const controller = asyncResponseControllers(
                container.getQueueService()
            );

            expect(controller).toBeDefined();

            // Clean up: Reset container after test
            container.reset();
        });
    });
});
