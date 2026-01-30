import { NextFunction, Response } from 'express';
import { IQueueService } from '../queue/IQueueService';
import { ApiRequest } from '../routes/manualRoutes';
import { WorkbenchCacheServiceType } from '../service/cache/workbench-cache';
import { getFlowStatusQuerySchema } from '../types/request-types';
import {
    httpValidationError,
    OndcProtocolError,
} from '../errors/custom-errors';
import logger from '../utils/logger';
import { getLoggerData } from '../utils/logger/winston/loggerUtils';
import { sendSuccess } from '../utils/res-utils';
import { getFlowCompleteStatus } from '../service/flows/flow-mapper';

export const flowControllers = (
    queueService: IQueueService,
    workbenchCache: WorkbenchCacheServiceType
) => {
    return {
        getFlowStatusController: async (
            req: ApiRequest,
            res: Response,
            next: NextFunction
        ) => {
            try {
                const query = req.query;
                const zodSchema = getFlowStatusQuerySchema;
                const parsedQuery = zodSchema.safeParse(query);
                if (!parsedQuery.success) {
                    next(
                        new httpValidationError('Invalid query parameters', [
                            parsedQuery.error.message,
                        ])
                    );
                    return;
                }
                const { transaction_id, session_id } = parsedQuery.data;
                const sessionData = await workbenchCache
                    .NpSessionalCacheService()
                    .getSessionData(session_id);
                const subscriberURL = sessionData?.subscriberUrl;
                const transactionData = await workbenchCache
                    .TransactionalCacheService()
                    .getTransactionData(transaction_id, subscriberURL);
                const mockSessionData = await workbenchCache
                    .TxnBusinessCacheService()
                    .getMockSessionData(transaction_id, subscriberURL);
                const flowWorkingState = await workbenchCache
                    .FlowStatusCacheService()
                    .getFlowStatus(
                        transaction_id,
                        subscriberURL,
                        getLoggerData(req)
                    );
                const flowId = transactionData?.flowId;
                if (!flowId) {
                    throw new Error(
                        `Flow ID not found in transaction data for transaction ID: ${transaction_id}`
                    );
                }
                const flow = sessionData.flowConfigs[flowId];
                const flowStatus = getFlowCompleteStatus(
                    transactionData,
                    flow,
                    flowWorkingState.status,
                    mockSessionData
                );
                sendSuccess(res, flowStatus);
                return;
            } catch (error) {
                logger.error(
                    'Error in getFlowStatusController',
                    req.query,
                    error
                );
                return next(
                    new OndcProtocolError(
                        '31001',
                        'Error fetching flow status',
                        (error as Error)?.message ?? 'Unknown error'
                    )
                );
            }
        },
    };
};
