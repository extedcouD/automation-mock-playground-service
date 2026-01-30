# Logger Migration: Winston to Pino

This document outlines the migration of the logging system from Winston to Pino for improved performance and better structured logging.

## Why Pino?

- **Performance**: Pino is significantly faster than Winston, especially in production environments
- **Structured Logging**: Better support for JSON logging and structured data
- **Lower Memory Usage**: More efficient memory usage
- **Better Transport System**: More flexible and performant transport system
- **Active Development**: More actively maintained and modern

## Changes Made

### Dependencies
- **Removed**: `winston`, `winston-daily-rotate-file`, `winston-loki`
- **Added**: `pino`, `pino-pretty`, `pino-loki`

### Key Changes

1. **Logger Interface**: The AutomationLogger class maintains the same public API, so existing code should work without changes
2. **Transport Configuration**: Moved from Winston transports to Pino streams and transports
3. **Formatting**: Replaced Winston formatters with Pino's built-in JSON formatting and pino-pretty for development
4. **Error Handling**: Improved structured error logging with better context preservation

### Configuration

The logger automatically configures itself based on environment:

- **Development**: Uses `pino-pretty` for colorized, readable output
- **Production**: Uses JSON format with optional Loki integration

### Environment Variables

```bash
# Required
NODE_ENV=development|production|test

# Optional
LOG_LEVEL=debug|info|warn|error  # Default: info
SERVICE_NAME=your-service-name   # Default: main-service

# Loki Integration (Production only)
LOKI_HOST=http://localhost:3100
LOKI_USERNAME=username           # If basic auth is needed
LOKI_PASSWORD=password           # If basic auth is needed
LOKI_BASIC_AUTH=true            # Enable basic auth
```

## Usage Examples

### Basic Logging
```typescript
import logger from './utils/logger';

// Info logging
logger.info('User logged in', { userId: '123', email: 'user@example.com' });

// Error logging
logger.error('Database connection failed', { host: 'db.example.com' }, error);

// Debug logging
logger.debug('Processing request', { requestId: 'req-123' });

// Warning logging
logger.warning('Rate limit approaching', { currentCount: 95, limit: 100 });
```

### Child Loggers
```typescript
const requestLogger = logger.child('request-handler', { 
  requestId: 'req-123',
  userId: '456' 
});

requestLogger.info('Processing request');
requestLogger.error('Request failed', {}, error);
```

### Timer/Profiling
```typescript
const timer = logger.startTimer();

// Do some work...

timer.done('Operation completed', { recordsProcessed: 100 });
```

### Express Middleware
```typescript
import { correlationIdMiddleware } from './utils/logger/middleware/correlation-middleware';

app.use(correlationIdMiddleware);
```

## Migration Checklist

- [x] Update package.json dependencies
- [x] Migrate logger configuration
- [x] Update transport system
- [x] Maintain API compatibility
- [x] Update test mocks
- [x] Update environment variable handling
- [ ] Install new dependencies: `npm install`
- [ ] Update any direct Winston usage in other files
- [ ] Test logging in development and production modes

## Installation

```bash
# Remove old dependencies
npm uninstall winston winston-daily-rotate-file winston-loki

# Install new dependencies
npm install pino pino-pretty pino-loki
```

## Performance Benefits

- **~5x faster** JSON stringification
- **~2-3x lower** memory usage
- **Better backpressure** handling
- **Asynchronous logging** by default
- **Child logger efficiency** - shared bindings instead of object copying

## Production Considerations

1. **Log Rotation**: Use external log rotation tools (logrotate) instead of built-in rotation
2. **Transport Streams**: Pino uses streams which are more efficient than Winston's transport system
3. **Loki Integration**: Uses `pino-loki` which is more efficient than `winston-loki`
4. **Error Handling**: Better structured error logging with preserved stack traces

## Troubleshooting

If you encounter issues:

1. Ensure all environment variables are set correctly
2. Check that log directory exists and is writable
3. Verify Loki connection (if using) with proper credentials
4. Check console output for any transport errors