// import { Response, NextFunction, Request } from 'express';
// import { OndcRequest } from '../types/request-types';
// import { OndcProtocolError } from '../errors/custom-errors';
// import logger from '../utils/logger';
// import { getLoggerMeta } from '../utils/req-utils';
// import {
//     validateHeaderInRequest,
//     validateRetailSearchRequest,
// } from '../service/validator-service';

// export async function validateRetailSearch(
//     req: OndcRequest,
//     res: Response,
//     next: NextFunction
// ) {
//     try {
//         const result = await validateRetailSearchRequest(req);
//         if (!result.valid) {
//             logger.error(
//                 'Retail search request schema validation failed.',
//                 getLoggerMeta(req)
//             );
//             return next(result.error);
//         }
//         logger.info(
//             'Retail search request schema validated successfully.',
//             getLoggerMeta(req)
//         );
//         next();
//     } catch (err) {
//         logger.error(
//             'Unexpected error during retail search schema validation.',
//             getLoggerMeta(req),
//             err
//         );
//         return next(
//             new OndcProtocolError(
//                 '31001',
//                 'Unexpected error during retail search schema validation.',
//                 (err as Error).message
//             )
//         );
//     }
// }

// export async function validateOndcAuthHeader(
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) {
//     try {
//         const validationResult = await validateHeaderInRequest(req);
//         if (!validationResult.valid) {
//             logger.error(
//                 'ONDC auth header validation failed.',
//                 getLoggerMeta(req)
//             );
//             return next(validationResult.error);
//         }
//         logger.info(
//             'ONDC auth header validated successfully.',
//             getLoggerMeta(req)
//         );
//         next();
//     } catch (err) {
//         logger.error(
//             'Unexpected error during ONDC auth header validation.',
//             getLoggerMeta(req),
//             err
//         );
//         return next(
//             new OndcProtocolError(
//                 '31001',
//                 'Unexpected error during ONDC auth header validation.',
//                 (err as Error).message
//             )
//         );
//     }
// }
