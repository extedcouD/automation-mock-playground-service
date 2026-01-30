// import { OndcRequest } from '../types/request-types';
import logger from '../utils/logger';
import http from 'pino-http';

export const httpLogger = http({
    logger: logger.getLoggerInstance(),
    redact: {
        paths: [
            'req.headers.authorization',
            'req.headers.cookie',
            'req.body.password',
            'req.body.token',
            'req.body.apiKey',
            'req.body.secret',
        ],
        censor: '[REDACTED]',
    },
    autoLogging: {
        ignore: req => req.url === '/health' || req.url === '/ping',
    },
});
