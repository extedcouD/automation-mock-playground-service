export const ERROR_CODES = {
    INTERNAL_ERROR: {
        code: 'GEN_000',
        message: 'Internal server error.',
        httpStatus: 500,
    },
    TOO_MANY_REQUESTS: {
        code: 'GEN_001',
        message: 'Too many requests. Please try again later.',
        httpStatus: 429,
    },
    HEALTH_CHECK_FAILED: {
        code: 'GEN_004',
        message: 'Health check failed.',
        httpStatus: 503,
    },
    BAD_REQUEST: {
        code: 'GEN_002',
        message: 'Bad request.',
        httpStatus: 400,
    },
};

export const ONDC_ERROR_CODES = {
    '10000': {
        type: 'Gateway',
        message: 'Bad or Invalid request error',
        description: 'Generic bad or invalid request error',
    },
    '10001': {
        type: 'Gateway',
        message: 'Invalid Signature',
        description: 'Cannot verify signature for request',
    },
    '10002': {
        type: 'Gateway',
        message: 'Invalid City Code',
        description: 'Valid city code needs to be passed for search',
    },

    '20000': {
        type: 'BNP',
        message: 'Invalid catalog',
        description: 'Catalog refresh is invalid',
    },
    '20001': {
        type: 'BNP',
        message: 'Invalid Signature',
        description: 'Cannot verify signature for response',
    },
    '20002': {
        type: 'BNP',
        message: 'Stale Request',
        description: 'Cannot process stale request',
    },
    '20003': {
        type: 'BNP',
        message: 'Provider not found',
        description: 'Provider not found',
    },
    '20004': {
        type: 'BNP',
        message: 'Provider location not found',
        description: 'Provider location not found',
    },
    '20005': {
        type: 'BNP',
        message: 'Item not found',
        description: 'Item not found',
    },
    '20006': {
        type: 'BNP',
        message: 'Invalid response',
        description:
            'Invalid response does not meet API contract specifications',
    },
    '20007': {
        type: 'BNP',
        message: 'Invalid order state',
        description: 'Order/fulfillment state is stale or not valid',
    },
    '20008': {
        type: 'BNP',
        message: 'Response out of sequence',
        description:
            'Callback received prior to ACK for request or out of sequence',
    },
    '20009': {
        type: 'BNP',
        message: 'Timeout',
        description: 'Callback received late, session timed out',
    },
    '21001': {
        type: 'BNP',
        message: 'Feature not supported',
        description: 'Feature not supported',
    },
    '21002': {
        type: 'BNP',
        message: 'Increase in item quantity',
        description: 'Increase in item quantity',
    },
    '21003': {
        type: 'BNP',
        message: 'Change in item quote',
        description: 'Change in item quote without change in quantity',
    },
    '22501': {
        type: 'BNP',
        message: 'Part Fill Unacceptable',
        description:
            "Buyer doesn't accept part fill for the order, wants to cancel the order",
    },
    '22502': {
        type: 'BNP',
        message: 'Cancellation unacceptable',
        description: 'Invalid cancellation reason',
    },
    '22503': {
        type: 'BNP',
        message: 'Cancellation unacceptable',
        description:
            'Updated quote does not match original order value and cancellation terms',
    },
    '22504': {
        type: 'BNP',
        message: 'Invalid Fulfillment TAT',
        description:
            'Fulfillment TAT is different from what was quoted earlier',
    },
    '22505': {
        type: 'BNP',
        message: 'Invalid Cancellation Terms',
        description:
            'Cancellation terms are different from what was quoted earlier',
    },
    '22506': {
        type: 'BNP',
        message: 'Invalid Terms of Reference',
        description:
            'Terms of Reference are different from what was quoted earlier',
    },
    '22507': {
        type: 'BNP',
        message: 'Invalid Quote',
        description:
            'Quote is invalid as it does not meet the API contract specifications',
    },
    '22508': {
        type: 'BNP',
        message: 'Invalid Part Cancel Request',
        description: 'Part cancel request is invalid',
    },
    '22509': {
        type: 'BNP',
        message: 'Cancel Return Request',
        description: 'Buyer cancelling return request',
    },
    '23001': {
        type: 'BNP',
        message: 'Internal Error',
        description:
            'Cannot process response due to internal error, please retry',
    },
    '23002': {
        type: 'BNP',
        message: 'Order validation failure',
        description: 'Order validation failure',
    },
    '25001': {
        type: 'BNP',
        message: 'Order Confirm Failure',
        description:
            'Buyer App cannot confirm order as no response from Seller App',
    },
    '27501': {
        type: 'BNP',
        message: 'Terms and Conditions unacceptable',
        description:
            'Seller App terms and conditions not acceptable to Buyer App',
    },
    '27502': {
        type: 'BNP',
        message: 'Order terminated',
        description:
            'Order terminated as Seller App did not accept terms and conditions proposed by Buyer App',
    },

    '30000': {
        type: 'SNP',
        message: 'Invalid request',
        description:
            'Invalid request does not meet API contract specifications',
    },
    '30001': {
        type: 'SNP',
        message: 'Provider not found',
        description: 'Unable to find the provider id sent by Buyer App',
    },
    '30002': {
        type: 'SNP',
        message: 'Provider location not found',
        description:
            'Unable to find the provider location id sent by Buyer App',
    },
    '30003': {
        type: 'SNP',
        message: 'Provider category not found',
        description:
            'Unable to find the provider category id sent by Buyer App',
    },
    '30004': {
        type: 'SNP',
        message: 'Item not found',
        description: 'Unable to find details for item, may have been deleted',
    },
    '30005': {
        type: 'SNP',
        message: 'Invalid return request',
        description: 'Return reason is invalid',
    },
    '30006': {
        type: 'SNP',
        message: 'Offer code invalid',
        description: 'Offer code is not valid anymore',
    },
    '30007': {
        type: 'SNP',
        message: 'Offer fulfillment error',
        description: 'Offer cannot be fulfilled at this time',
    },
    '30008': {
        type: 'SNP',
        message: 'Location Serviceability error',
        description: 'Pickup location not serviceable',
    },
    '30009': {
        type: 'SNP',
        message: 'Location Serviceability error',
        description: 'Dropoff location not serviceable',
    },
    '30010': {
        type: 'SNP',
        message: 'Location Serviceability error',
        description: 'Delivery distance exceeds maximum serviceability',
    },
    '30011': {
        type: 'SNP',
        message: 'Order Serviceability error',
        description: 'Delivery Partners not available',
    },
    '30012': {
        type: 'SNP',
        message: 'Invalid cancellation reason',
        description: 'Cancellation reason is invalid',
    },
    '30013': {
        type: 'SNP',
        message: 'Invalid Fulfillment TAT',
        description:
            'Fulfillment TAT is different from what was quoted earlier',
    },
    '30014': {
        type: 'SNP',
        message: 'Cancellation unacceptable',
        description:
            'Cancellation request rejected as fulfillment TAT not breached',
    },
    '30015': {
        type: 'SNP',
        message: 'Invalid rating value',
        description: 'Invalid rating value received',
    },
    '30016': {
        type: 'SNP',
        message: 'Invalid Signature',
        description: 'Cannot verify signature for request',
    },
    '30017': {
        type: 'SNP',
        message: 'Merchant unavailable',
        description: 'Merchant not taking orders',
    },
    '30018': {
        type: 'SNP',
        message: 'Invalid Order',
        description: 'Order not found',
    },
    '30019': {
        type: 'SNP',
        message: 'Order Confirm Error',
        description: 'Seller App unable to confirm the order',
    },
    '30020': {
        type: 'SNP',
        message: 'Order Confirm Failure',
        description:
            'Seller App cannot confirm order as no response from Buyer App',
    },
    '30021': {
        type: 'SNP',
        message: 'Merchant Inactive',
        description: 'Merchant inactive',
    },
    '30022': {
        type: 'SNP',
        message: 'Stale Request',
        description: 'Cannot process stale request',
    },
    '30023': {
        type: 'SNP',
        message: 'Minimum order value error',
        description: 'Cart value is less than MOV',
    },
    '31001': {
        type: 'SNP',
        message: 'Internal Error',
        description:
            'Cannot process request due to internal error, please retry',
    },
    '31002': {
        type: 'SNP',
        message: 'Order validation failure',
        description: 'Order validation failure',
    },
    '31003': {
        type: 'SNP',
        message: 'Order processing in progress',
        description: 'Order processing in progress',
    },

    '40000': {
        type: 'SNP',
        message: 'Business Error',
        description: 'Generic business error',
    },
    '40001': {
        type: 'SNP',
        message: 'Feature not supported',
        description: 'Feature not supported',
    },
    '40002': {
        type: 'SNP',
        message: 'Item quantity unavailable',
        description: 'Unable to fulfill requested quantity',
    },
    '40003': {
        type: 'SNP',
        message: 'Quote unavailable',
        description: 'Quote no longer available',
    },
    '40004': {
        type: 'SNP',
        message: 'Payment type not supported',
        description: 'Payment type not supported',
    },
    '40005': {
        type: 'SNP',
        message: 'Tracking not enabled',
        description: 'Tracking not enabled',
    },
    '40006': {
        type: 'SNP',
        message: 'Fulfilment agent unavailable',
        description: 'Fulfilment agent unavailable',
    },
    '40007': {
        type: 'SNP',
        message: 'Change in item quantity',
        description: 'Change in item quantity',
    },
    '40008': {
        type: 'SNP',
        message: 'Change in quote',
        description: 'Change in quote',
    },
    '40009': {
        type: 'SNP',
        message: 'Maximum order qty exceeded',
        description: 'Maximum order quantity exceeded',
    },
    '40010': {
        type: 'SNP',
        message: 'Expired authorization',
        description: 'Authorization expired',
    },
    '40011': {
        type: 'SNP',
        message: 'Invalid authorization',
        description: 'Authorization invalid',
    },
    '40012': {
        type: 'SNP',
        message: 'Minimum order qty required',
        description: 'Minimum order qty required',
    },
    '41001': {
        type: 'SNP',
        message: 'Finder fee not acceptable',
        description: 'Buyer finder fee not acceptable',
    },
    '41002': {
        type: 'SNP',
        message: 'Differential weight charges rejected',
        description: 'Differential weight charges rejected',
    },

    '50000': {
        type: 'SNP',
        message: 'Policy Error',
        description: 'Generic Policy Error',
    },
    '50001': {
        type: 'SNP',
        message: 'Cancellation not possible',
        description: 'Cancellation not possible due to Seller App policy',
    },
    '50002': {
        type: 'SNP',
        message: 'Updation not possible',
        description: 'Updation not possible due to Seller App policy',
    },
    '50003': {
        type: 'SNP',
        message: 'Unsupported rating category',
        description: 'Unsupported rating category',
    },
    '50004': {
        type: 'SNP',
        message: 'Support unavailable',
        description: 'Support not provided for the object',
    },
    '50005': {
        type: 'SNP',
        message: 'Terms and Conditions unacceptable',
        description: 'Buyer App T&C not acceptable',
    },
    '50006': {
        type: 'SNP',
        message: 'Order terminated',
        description: 'Order terminated as Buyer App did not accept terms',
    },
    '50007': {
        type: 'SNP',
        message: 'Fulfillment not found',
        description: 'Fulfillment not found',
    },
    '50008': {
        type: 'SNP',
        message: 'Fulfillment cannot be updated',
        description: 'Fulfillment in terminal state',
    },

    '60001': {
        type: 'LSP',
        message: 'Location Serviceability Error',
        description: 'Pickup location not serviceable',
    },
    '60002': {
        type: 'LSP',
        message: 'Location Serviceability Error',
        description: 'Dropoff location not serviceable',
    },
    '60003': {
        type: 'LSP',
        message: 'Location Serviceability Error',
        description: 'Delivery distance exceeds limit',
    },
    '60004': {
        type: 'LSP',
        message: 'Order Serviceability Error',
        description: 'Delivery partners not available',
    },
    '60005': {
        type: 'LSP',
        message: 'Invalid Signature',
        description: 'Cannot verify signature',
    },
    '60006': {
        type: 'LSP',
        message: 'Invalid Request',
        description: 'Invalid request',
    },
    '60007': {
        type: 'LSP',
        message: 'Policy Error',
        description: 'Cancellation not possible due to LP policy',
    },
    '60008': {
        type: 'LSP',
        message: 'Invalid Fulfillment TAT',
        description: 'Fulfillment TAT changed',
    },
    '60009': {
        type: 'LSP',
        message: 'Invalid cancellation request',
        description: 'Cancellation reason invalid',
    },
    '60010': {
        type: 'LSP',
        message: 'Cancellation unacceptable',
        description: 'Fulfillment TAT not breached',
    },
    '60011': {
        type: 'LSP',
        message: 'Difference in packaging details',
        description: 'Packaging details differ',
    },
    '60012': {
        type: 'LSP',
        message: 'Tracking not enabled',
        description: 'Tracking not enabled',
    },

    '61001': {
        type: 'LSP',
        message: 'Feature not supported',
        description: 'Feature not supported',
    },
    '61002': {
        type: 'LSP',
        message: 'PCC OTP Retrigger Request',
        description: 'Request retrigger for Pickup OTP',
    },
    '61003': {
        type: 'LSP',
        message: 'DCC OTP Retrigger Request',
        description: 'Request retrigger for Delivery OTP',
    },
    '61004': {
        type: 'LSP',
        message: 'LSP Requests LBNP for Support Callback',
        description: 'Support callback requested',
    },

    '62501': {
        type: 'LBNP',
        message: 'Terms and Conditions unacceptable',
        description: 'LP T&C not acceptable',
    },
    '62502': {
        type: 'LBNP',
        message: 'Order terminated',
        description: 'Order terminated as LP did not accept terms',
    },
    '62503': {
        type: 'LBNP',
        message: 'RTO rejected',
        description: 'RTO quote mismatch',
    },
    '62504': {
        type: 'LBNP',
        message: 'Differential weight charges rejected',
        description: 'Differential weight charges rejected',
    },
    '62505': {
        type: 'LBNP',
        message: 'Cancellation terms unacceptable',
        description: 'Cancellation terms not acceptable',
    },
    '62506': {
        type: 'LBNP',
        message: 'Invalid Fulfillment TAT',
        description: 'Fulfillment TAT changed',
    },
    '62507': {
        type: 'LBNP',
        message: 'Difference in packaging details',
        description: 'Packaging details differ',
    },
    '62508': {
        type: 'LBNP',
        message: 'Quote difference',
        description: 'Total price changed',
    },
    '62509': {
        type: 'LBNP',
        message: 'Invalid Cancellation Terms',
        description: 'Cancellation terms differ',
    },
    '62510': {
        type: 'LBNP',
        message: 'Expired authorization',
        description: 'Authorization expired',
    },
    '62511': {
        type: 'LBNP',
        message: 'Invalid authorization',
        description: 'Authorization invalid',
    },
    '62512': {
        type: 'LBNP',
        message: 'Pickup status rejected',
        description: 'Pickup auth not complete',
    },
    '62513': {
        type: 'LBNP',
        message: 'Delivery status rejected',
        description: 'Delivery auth not complete',
    },

    '63001': {
        type: 'LBNP',
        message: 'Internal Error',
        description: 'Internal error',
    },
    '63002': {
        type: 'LBNP',
        message: 'Order validation failure',
        description: 'Order validation failure',
    },

    '64001': {
        type: 'LBNP',
        message: 'Feature not supported',
        description: 'Feature not supported',
    },
    '64002': {
        type: 'LBNP',
        message: 'Order validation failure',
        description: 'Order validation failure',
    },

    '65001': {
        type: 'LSP',
        message: 'Order Confirm Error',
        description: 'LP unable to confirm order',
    },
    '65002': {
        type: 'LSP',
        message: 'Order terminated',
        description: 'Order terminated as LB did not accept terms',
    },
    '65003': {
        type: 'LSP',
        message: 'Stale Request',
        description: 'Cannot process stale request',
    },
    '65004': {
        type: 'LSP',
        message: 'Terms unacceptable',
        description: 'LB terms not acceptable',
    },
    '65005': {
        type: 'LSP',
        message: 'Invalid fulfillment terms',
        description: 'Immediate delivery requires RTS at confirm',
    },

    '66001': {
        type: 'LSP',
        message: 'Internal Error',
        description: 'Internal error',
    },
    '66002': {
        type: 'LSP',
        message: 'Order validation failure',
        description: 'Order validation failure',
    },
    '66003': {
        type: 'LSP',
        message: 'Order processing in progress',
        description: 'Order processing in progress',
    },
    '66004': {
        type: 'LSP',
        message: 'Invalid Order',
        description: 'Order not found',
    },
    '66005': {
        type: 'LSP',
        message: 'Quote unavailable',
        description: 'Quote no longer available',
    },
};

export type OndcErrorCodeKey = keyof typeof ONDC_ERROR_CODES;
export type ErrorCodeKey = keyof typeof ERROR_CODES;
