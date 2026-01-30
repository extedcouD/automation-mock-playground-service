export type Result<T, E> =
    | { valid: true; data: T }
    | { valid: false; error: E };
export function ok<T>(data: T): Result<T, never> {
    return {
        valid: true,
        data: data,
    };
}

export function err<E>(error: E): Result<never, E> {
    return {
        valid: false,
        error: error,
    };
}
