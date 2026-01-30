// import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
// import addFormats from 'ajv-formats';

// import logger from '../utils/logger';
// import ajvErrors from 'ajv-errors';
// import getSchema from '../validations/common/schemas';
// import { OndcPayload } from '../types/ondc-types';

// export function validateSchemaForAction(
//     actionPayload: OndcPayload,
//     action: string
// ) {
//     const schema = getSchema(action) as unknown;
//     if (!schema) {
//         return {
//             valid: false,
//             schemaErrors: `Schema for action '${action}' not found.`,
//         };
//     }

//     return validateGivenSchema(
//         schema as JSONSchemaType<unknown>,
//         actionPayload
//     );
// }

// export function validateGivenSchema(
//     schema: JSONSchemaType<unknown>,
//     actionPayload: OndcPayload
// ) {
//     const ajv = new Ajv({ allErrors: true });
//     addFormats(ajv);
//     ajvErrors(ajv);
//     ajv.addFormat('rfc3339-date-time', function (dateTimeString) {
//         // Parse the date-time string
//         const date = new Date(dateTimeString);

//         // Check if the date is valid and if it matches the RFC3339 format
//         if (isNaN(date.getTime())) {
//             return false; // Invalid date
//         }

//         // Convert the date to an RFC3339 string
//         const rfc3339String = date.toISOString();

//         // Compare the original string with the RFC3339 string
//         // This ensures the string is in the correct format and represents a valid date
//         return rfc3339String === dateTimeString;
//     });

//     const validate = ajv.compile(schema);
//     const valid = validate(actionPayload);
//     if (!valid) return createErrorMessage(validate, valid);
//     logger.debug('validations result', {
//         valid: valid,
//         schemaErrors: validate.errors,
//     });
//     return { valid: valid, schemaErrors: validate.errors };
// }

// function createErrorMessage(
//     validate: ValidateFunction<unknown>,
//     valid: boolean
// ) {
//     if (!validate.errors) {
//         return {
//             valid: true,
//         };
//     }
//     const errorMessages = validate.errors.map(error => {
//         const { instancePath, message, keyword, params } = error;

//         // Customize error messages based on validation keywords
//         switch (keyword) {
//             case 'additionalProperties': {
//                 const additionalProp = params.additionalProperty;
//                 return `${instancePath} ${message}: '${additionalProp}'`;
//             }
//             case 'type': {
//                 const expectedType = params.type;
//                 return `${instancePath} should be of type '${expectedType}'`;
//             }

//             case 'enum': {
//                 const allowedValues = params.allowedValues.join(', ');
//                 return `${instancePath} must be one of the allowed values: ${allowedValues}`;
//             }

//             case 'minLength':
//                 return `${instancePath} should have at least ${params.limit} characters`;

//             case 'maxLength':
//                 return `${instancePath} should have no more than ${params.limit} characters`;

//             case 'minimum':
//                 return `${instancePath} should be >= ${params.limit}`;
//             case 'const':
//                 return `${instancePath} should be equal to ${params.allowedValue}`;

//             case 'maximum':
//                 return `${instancePath} should be <= ${params.limit}`;

//             case 'required': {
//                 const missingProperty = params.missingProperty;
//                 return `Missing required property: '${missingProperty}' at ${instancePath}`;
//             }
//             default:
//                 // General message for other error types
//                 return `${instancePath} ${message}`;
//         }
//     });

//     return { valid: valid, schemaErrors: errorMessages.join(',') };
// }
