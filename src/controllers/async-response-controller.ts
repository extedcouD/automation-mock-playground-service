// import { NextFunction, Response } from 'express';
// import logger from '../utils/logger';
// import { getLoggerMeta } from '../utils/req-utils';
// import { sendAck } from '../utils/res-utils';
// import { OndcRequest } from '../types/request-types';
// import { OndcProtocolError } from '../errors/custom-errors';
// import { IQueueService } from '../queue/IQueueService';
// import { SearchRequestData } from '../service/response-handler';

// /**
//  * Async response controller factory
//  *
//  * Dependencies are injected through constructor parameters, making the controller
//  * testable and decoupled from global state.
//  *
//  * @param queueService - Queue service for async job processing
//  * @returns Controller methods
//  */
// export const asyncResponseControllers = (queueService: IQueueService) => {
//     return {
//         respondWithAsyncOnSearch: async (
//             req: OndcRequest,
//             res: Response,
//             next: NextFunction
//         ) => {
//             try {
//                 const jobId = await queueService.enqueue<SearchRequestData>(
//                     'search-response',
//                     {
//                         searchRequest: req.body,
//                         buyerId: req.context!.bap_id,
//                         buyerUri: req.context!.bap_uri,
//                     }
//                 );
//                 logger.info(
//                     'Enqueued async search response job responding ACK',
//                     {
//                         ...getLoggerMeta(req),
//                         jobId,
//                     }
//                 );
//                 return sendAck(res, req.context!);
//             } catch (error) {
//                 logger.error('Error enqueuing async response job', {
//                     ...getLoggerMeta(req),
//                     error,
//                 });
//                 return next(
//                     new OndcProtocolError(
//                         '31001',
//                         'Error initializing processing async response'
//                     )
//                 );
//             }
//         },
//     };
// };
