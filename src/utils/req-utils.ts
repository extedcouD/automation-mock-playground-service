import { Request } from 'express';
import logger from './logger';

export function getLoggerMeta(req: Request) {
    return {
        correlationId: req.correlationId,
        transactionId: req.body?.context?.transaction_id,
        messageId: req.body?.context?.message_id,
    };
}

export function getBecknContext(req: Request) {
    const context = req.body?.context || undefined;
    if (context === undefined) {
        logger.warning(
            'Beckn context is missing in the request body',
            getLoggerMeta(req)
        );
        return {};
    }
    return context;
}
