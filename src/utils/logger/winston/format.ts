import { inspect } from 'util';

/**
 * -----------------------------------------------------------------------
 * Pino Logger Utilities
 * -----------------------------------------------------------------------
 * Pino handles formatting internally through transports, but we can provide
 * utility functions for consistent logging patterns and error handling.
 */

/**
 * Formats error objects for structured logging
 */
export function formatError(error: unknown): Record<string, unknown> {
    if (error instanceof Error) {
        return {
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack,
            },
        };
    }

    if (typeof error === 'object' && error !== null) {
        return { error };
    }

    return { error: String(error) };
}

/**
 * Formats axios errors with detailed context
 */
export function formatAxiosError(error: any): Record<string, unknown> {
    return {
        error: {
            code: error.code,
            message: error.message,
            stack: error.stack,
            request: {
                method: error.config?.method,
                url: error.config?.url,
            },
            response: {
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data,
            },
        },
    };
}

/**
 * Pretty formats objects for development logging
 */
export function formatMeta(meta: unknown): string {
    if (typeof meta === 'object' && meta !== null) {
        return inspect(meta, { colors: true, depth: Infinity });
    }
    return String(meta);
}

/**
 * Creates consistent log context with correlation ID
 */
export function createLogContext(
    scope?: string,
    correlationId?: string,
    meta?: Record<string, unknown>
): Record<string, unknown> {
    return {
        ...(scope && { scope }),
        ...(correlationId && { correlationId }),
        ...meta,
    };
}
