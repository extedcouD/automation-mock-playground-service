// import { Request } from 'express';
// import {
//     httpValidationError,
//     OndcProtocolError,
// } from '../errors/custom-errors';
// import { OndcRequest } from '../types/request-types';
// import logger from '../utils/logger';
// import { err, ok, Result } from '../utils/result';
// import { performL1_validations } from '../validations/common/L1_validations';
// import { validateSchemaForAction } from './schema-service';
// import { isValidJson } from '../utils/general';
// import { getLoggerMeta } from '../utils/req-utils';
// import gcrConfig from '../config/gcr-config';
// import { validateHeader } from '../utils/header-utils';
// import { supportedActions } from '../constants/supportedActions';

// type Validator<T> = (input: T) => Promise<Result<T, Error>>;

// function composeValidators<T>(...validators: Validator<T>[]): Validator<T> {
//     return async (input: T): Promise<Result<T, Error>> => {
//         for (const validator of validators) {
//             const result = await validator(input);
//             if (!result.valid) {
//                 return result;
//             }
//         }
//         return ok(input);
//     };
// }

// const validateOndcContext: Validator<OndcRequest> = async req => {
//     if (!req.context) {
//         return err(
//             new OndcProtocolError('31001', 'Missing context in request.')
//         );
//     }
//     if (!(req.context.action === req.params.action)) {
//         return err(
//             new OndcProtocolError(
//                 '30000',
//                 'Action mismatch between context and endpoint.',
//                 `Context action: ${req.context.action}, Endpoint action: ${req.params.action}`
//             )
//         );
//     }
//     if (supportedActions.indexOf(req.context.action) === -1) {
//         return err(
//             new OndcProtocolError(
//                 '30000',
//                 'Unsupported action in request context.',
//                 `Action: ${req.context.action} is not supported. Supported actions are: ${supportedActions.join(', ')}`
//             )
//         );
//     }
//     return ok(req);
// };

// const validateSchema: Validator<OndcRequest> = async req => {
//     const result = validateSchemaForAction(req.body, req.context!.action);
//     logger.debug(
//         'Schema validation result',
//         { result: result },
//         getLoggerMeta(req)
//     );
//     if (!result.valid) {
//         return err(
//             new OndcProtocolError(
//                 '30000',
//                 'Request schema validation failed.',
//                 JSON.stringify(result.schemaErrors)
//             )
//         );
//     }
//     return ok(req);
// };

// const validateL1: Validator<OndcRequest> = async req => {
//     const result = await performL1_validations(req.context!.action, req.body);
//     const invalid = result.filter(v => !v.valid);
//     logger.debug('L1 validation results', { result: result });
//     if (invalid.length > 0) {
//         const description = invalid.map(v => v.description).join('; ');
//         return err(
//             new OndcProtocolError('30000', 'L1 validation failed', description)
//         );
//     }
//     return ok(req);
// };

// export const validateRetailSearchRequest = composeValidators<OndcRequest>(
//     validateOndcContext,
//     validateSchema,
//     validateL1
// );

// const validateJsonBody: Validator<Request> = async req => {
//     const body = req.body;
//     if (!body) {
//         return err(new httpValidationError('Empty request body', []));
//     }
//     const jsonResult = isValidJson(body, getLoggerMeta(req));
//     if (!jsonResult.valid) {
//         return err(
//             new httpValidationError('Invalid JSON in request body', [
//                 jsonResult.error!,
//             ])
//         );
//     }
//     return ok(req);
// };

// const validateContextPresenceInBody: Validator<Request> = async req => {
//     const body = req.body;
//     if (!body.context) {
//         logger.error(
//             'Request body missing context field.',
//             { body: body },
//             getLoggerMeta(req)
//         );
//         return err(
//             new httpValidationError('Missing context in request body', [])
//         );
//     }
//     return ok(req);
// };

// export const validateRequest = composeValidators<Request>(
//     validateJsonBody,
//     validateContextPresenceInBody
// );

// export const validateHeaderInRequest: Validator<Request> = async req => {
//     logger.info(
//         `value of SKIP_HEADERS: ${process.env.SKIP_HEADERS}`,
//         {},
//         getLoggerMeta(req)
//     );
//     if (process.env.SKIP_HEADERS === 'true') {
//         logger.warning(
//             'Header validation is skipped as per configuration',
//             {},
//             getLoggerMeta(req)
//         );
//         return ok(req);
//     }
//     const auth = req.headers.authorization;
//     if (!auth) {
//         return err(
//             new OndcProtocolError(
//                 '30016',
//                 'Missing Authorization header',
//                 'Authorization header is required for ONDC requests.'
//             )
//         );
//     }
//     const payload = req.body;
//     const isHeaderValid = await validateHeader(
//         req.headers,
//         payload,
//         gcrConfig.GCR_PRIVATE_KEY()
//     );
//     if (!isHeaderValid) {
//         return err(
//             new OndcProtocolError(
//                 '30016',
//                 'Invalid Authorization header',
//                 'The provided Authorization header is invalid.'
//             )
//         );
//     }
//     return ok(req);
// };
