/**
 * Jest setup file to configure the testing environment.
 */
// Global test configuration
beforeAll(() => {
    // Set up any global test configuration
    process.env.NODE_ENV = 'test';
});

afterAll(() => {
    // Clean up after all tests
});

beforeEach(() => {
    // Reset any mocks or state before each test
    jest.clearAllMocks();
});

afterEach(() => {
    // Clean up after each test
});
// Mock logger to prevent console spam during tests
jest.mock('../utils/logger', () => ({
    info: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
    warning: jest.fn(),
    child: jest.fn().mockReturnThis(),
    startTimer: jest.fn(() => ({
        done: jest.fn(),
    })),
    getCorrelationIdMiddleware: jest.fn(),
}));
