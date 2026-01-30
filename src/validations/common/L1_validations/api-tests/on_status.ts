import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function on_status(input: validationInput): validationOutput {
    let totalResults = on_statusValidations(input);

    if (input.config._debug === false) {
        totalResults.forEach(r => {
            delete r._debugInfo;
        });
    }
    if (input.config.hideParentErrors === true) {
        // delete results with valid false and no description
        totalResults = totalResults.filter(
            r => !(r.valid === false && !r.description)
        );
    }
    if (input.config.onlyInvalid === true) {
        const res = totalResults.filter(r => r.valid === false);
        if (res.length === 0) {
            const targetSuccess = totalResults.find(
                r => r.testName === 'on_statusValidations'
            );
            if (!targetSuccess) {
                throw new Error('Critical: Overall test result not found');
            }
            return [targetSuccess];
        }
        return res;
    }

    return totalResults;
}

function on_statusValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function ON_STATUS_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const action = ['on_status'];

                function CONTEXT_REQUIRED(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function CONTEXT_REQUIRED_DOMAIN(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.domain',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REQUIRED_DOMAIN',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_DOMAIN**

- $.context.domain must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_DOMAIN',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_ACTION(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.action',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REQUIRED_ACTION',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_ACTION**

- $.context.action must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_ACTION',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_COUNTRY(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.country',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_COUNTRY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_COUNTRY**

- $.context.country must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_COUNTRY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_CITY(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.city',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REQUIRED_CITY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_CITY**

- $.context.city must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_CITY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_VERSION(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.core_version',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_VERSION',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_VERSION**

- $.context.core_version must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_VERSION',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_BAP_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.bap_id',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REQUIRED_BAP_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_BAP_ID**

- $.context.bap_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_BAP_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_BAP_URI(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.bap_uri',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_BAP_URI',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_BAP_URI**

- $.context.bap_uri must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_BAP_URI',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_BPP_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const search = ['search'];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.bap_id',
                                    true
                                );
                                const action = ['on_status'];

                                const skipCheck = validations.equalTo(
                                    action,
                                    search
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REQUIRED_BPP_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_BPP_ID**

- $.context.bap_id must be present in the payload

> **Skip if:**
>
>     - ["on_status"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_BPP_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_BPP_URI(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const search = ['search'];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.bap_uri',
                                    true
                                );
                                const action = ['on_status'];

                                const skipCheck = validations.equalTo(
                                    action,
                                    search
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_BPP_URI',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_BPP_URI**

- $.context.bap_uri must be present in the payload

> **Skip if:**
>
>     - ["on_status"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_BPP_URI',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_TRANSACTION_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.transaction_id',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_TRANSACTION_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_TRANSACTION_ID**

- $.context.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_TRANSACTION_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_MESSAGE_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.message_id',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_MESSAGE_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_MESSAGE_ID**

- $.context.message_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_MESSAGE_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_TIMESTAMP(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.timestamp',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CONTEXT_REQUIRED_TIMESTAMP',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_TIMESTAMP**

- $.context.timestamp must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_TIMESTAMP',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REQUIRED_TTL(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.ttl',
                                    true
                                );
                                const optional_vars = [
                                    'on_search',
                                    'on_select',
                                    'on_confirm',
                                    'on_init',
                                    'on_cancel',
                                    'on_track',
                                    'on_update',
                                    'on_status',
                                ];
                                const action = ['on_status'];

                                const skipCheck = validations.allIn(
                                    action,
                                    optional_vars
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REQUIRED_TTL',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REQUIRED_TTL**

- $.context.ttl must be present in the payload

> **Skip if:**
>
>     - all elements of ["on_status"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REQUIRED_TTL',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            CONTEXT_REQUIRED_DOMAIN,
                            CONTEXT_REQUIRED_ACTION,
                            CONTEXT_REQUIRED_COUNTRY,
                            CONTEXT_REQUIRED_CITY,
                            CONTEXT_REQUIRED_VERSION,
                            CONTEXT_REQUIRED_BAP_ID,
                            CONTEXT_REQUIRED_BAP_URI,
                            CONTEXT_REQUIRED_BPP_ID,
                            CONTEXT_REQUIRED_BPP_URI,
                            CONTEXT_REQUIRED_TRANSACTION_ID,
                            CONTEXT_REQUIRED_MESSAGE_ID,
                            CONTEXT_REQUIRED_TIMESTAMP,
                            CONTEXT_REQUIRED_TTL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'CONTEXT_REQUIRED',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_status"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CONTEXT_ENUM(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function CONTEXT_ENUM_DOMAIN(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const domain = [
                                    'ONDC:RET10',
                                    'ONDC:RET11',
                                    'ONDC:RET12',
                                    'ONDC:RET13',
                                    'ONDC:RET14',
                                    'ONDC:RET15',
                                    'ONDC:RET16',
                                    'ONDC:RET18',
                                ];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.domain',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.allIn(
                                    attr,
                                    domain
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_ENUM_DOMAIN',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_ENUM_DOMAIN**

- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_ENUM_DOMAIN',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_ENUM_ACTION(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.action',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.allIn(
                                    attr,
                                    action
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_ENUM_ACTION',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_ENUM_ACTION**

- All elements of $.context.action must be in ["on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_ENUM_ACTION',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_ENUM_VERSION(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const version = ['1.2.0'];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.core_version',
                                    true
                                );
                                const action = ['on_status'];

                                const validate = validations.allIn(
                                    attr,
                                    version
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_ENUM_VERSION',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_ENUM_VERSION**

- All elements of $.context.core_version must be in ["1.2.0"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_ENUM_VERSION',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REG_BAP_URI(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.bap_uri',
                                    true
                                );
                                const reg = ['^https?\\:\\/\\/'];
                                const action = ['on_status'];

                                const validate = validations.followRegex(
                                    attr,
                                    reg
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REG_BAP_URI',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REG_BAP_URI**

- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REG_BAP_URI',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REG_BPP_URI(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.bpp_uri',
                                    true
                                );
                                const reg = ['^https?\\:\\/\\/'];
                                const search = ['search'];
                                const action = ['on_status'];

                                const skipCheck = validations.equalTo(
                                    action,
                                    search
                                );
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    reg
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REG_BPP_URI',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REG_BPP_URI**

- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]

> **Skip if:**
>
>     - ["on_status"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REG_BPP_URI',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CONTEXT_REG_TTL(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.context.ttl',
                                    true
                                );
                                const reg = [
                                    '^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$',
                                ];
                                const optional_vars = [
                                    'on_search',
                                    'on_select',
                                    'on_confirm',
                                    'on_init',
                                    'on_cancel',
                                    'on_track',
                                    'on_update',
                                ];
                                const action = ['on_status'];

                                const skipCheck = validations.allIn(
                                    action,
                                    optional_vars
                                );
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    reg
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CONTEXT_REG_TTL',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CONTEXT_REG_TTL**

- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]

> **Skip if:**
>
>     - all elements of ["on_status"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_status"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CONTEXT_REG_TTL',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_status"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            CONTEXT_ENUM_DOMAIN,
                            CONTEXT_ENUM_ACTION,
                            CONTEXT_ENUM_VERSION,
                            CONTEXT_REG_BAP_URI,
                            CONTEXT_REG_BPP_URI,
                            CONTEXT_REG_TTL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'CONTEXT_ENUM',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_status"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_status"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_status"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_status"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_status"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_status"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    CONTEXT_REQUIRED,
                    CONTEXT_ENUM,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every(r => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'ON_STATUS_CONTEXT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_STATUS_CONTEXT","_DESCRIPTION_":"Validate on_status context","action":["on_status"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_status"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_status"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_status"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_status"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_status"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_status"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_status"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_STATUS_ORDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function ORDER_ID(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            '$.message.order.id',
                            true
                        );
                        const pattern = [
                            '^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
                        ];

                        const validate =
                            validations.arePresent(attr) &&
                            validations.followRegex(attr, pattern);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_ID',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_ID**

**All of the following must be true:**
  - $.message.order.id must be present in the payload
  - All elements of $.message.order.id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_ID","attr":"$.message.order.id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_ID',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_ID","attr":"$.message.order.id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_STATE(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            '$.message.order.state',
                            true
                        );
                        const var_enum = [
                            'Created',
                            'Accepted',
                            'In-progress',
                            'Cancelled',
                        ];

                        const validate = validations.allIn(attr, var_enum);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_STATE',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_STATE**

- All elements of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Cancelled"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Created","Accepted","In-progress","Cancelled"],"_RETURN_":"attr all in var_enum"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_STATE',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Created","Accepted","In-progress","Cancelled"],"_RETURN_":"attr all in var_enum"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_PROVIDER(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function ORDER_PROVIDER_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.provider.id',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ORDER_PROVIDER_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ORDER_PROVIDER_ID**

- $.message.order.provider.id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ORDER_PROVIDER_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ORDER_PROVIDER_LOCATIONS_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.provider.locations[*].id',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'ORDER_PROVIDER_LOCATIONS_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ORDER_PROVIDER_LOCATIONS_ID**

- $.message.order.provider.locations[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ORDER_PROVIDER_LOCATIONS_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ORDER_PROVIDER_ID,
                            ORDER_PROVIDER_LOCATIONS_ID,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_PROVIDER',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_PROVIDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_CANCELLATION(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function CANCELLATION_CANCELLED_BY(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.cancellation.cancelled_by',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'CANCELLATION_CANCELLED_BY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CANCELLATION_CANCELLED_BY**

- $.message.order.cancellation.cancelled_by must be present in the payload

> **Skip if:**
>
>     - $.message.order.cancellation.cancelled_by is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CANCELLATION_CANCELLED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CANCELLATION_CANCELLED_BY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CANCELLATION_CANCELLED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function CANCELLATION_REASON(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function CANCELLATION_REASON_ID(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.cancellation.reason.id',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'CANCELLATION_REASON_ID',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **CANCELLATION_REASON_ID**

- $.message.order.cancellation.reason.id must be present in the payload

> **Skip if:**
>
>     - $.message.order.cancellation.reason.id is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCELLATION_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'CANCELLATION_REASON_ID',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CANCELLATION_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function CANCELLATION_REASON_STATE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.cancellation.reason.state',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'CANCELLATION_REASON_STATE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **CANCELLATION_REASON_STATE**

- $.message.order.cancellation.reason.state must be present in the payload

> **Skip if:**
>
>     - $.message.order.cancellation.reason.state is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCELLATION_REASON_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.state","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'CANCELLATION_REASON_STATE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CANCELLATION_REASON_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.state","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    CANCELLATION_REASON_ID,
                                    CANCELLATION_REASON_STATE,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CANCELLATION_REASON',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CANCELLATION_REASON","_RETURN_":[{"_NAME_":"CANCELLATION_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.state","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            CANCELLATION_CANCELLED_BY,
                            CANCELLATION_REASON,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_CANCELLATION',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_CANCELLATION","_RETURN_":[{"_NAME_":"CANCELLATION_CANCELLED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON","_RETURN_":[{"_NAME_":"CANCELLATION_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.state","_RETURN_":"attr are present"}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_ITEMS(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function ITEMS_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.items[*].id',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ITEMS_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEMS_ID**

- $.message.order.items[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ITEMS_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEMS_PARENT_ITEM_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.items[*].parent_item_id',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ITEMS_PARENT_ITEM_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEMS_PARENT_ITEM_ID**

- $.message.order.items[*].parent_item_id must be present in the payload

> **Skip if:**
>
>     - $.message.order.items[*].parent_item_id is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ITEMS_PARENT_ITEM_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEMS_FULFILLMENT_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.items[*].fulfillment_id',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ITEMS_FULFILLMENT_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEMS_FULFILLMENT_ID**

- $.message.order.items[*].fulfillment_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ITEMS_FULFILLMENT_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEMS_QUANTITY_COUNT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.items[*].quantity.count',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ITEMS_QUANTITY_COUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEMS_QUANTITY_COUNT**

- $.message.order.items[*].quantity.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ITEMS_QUANTITY_COUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEMS_TAGS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function ITEMS_TAGS_TYPE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value",
                                            true
                                        );
                                        const var_enum = [
                                            'item',
                                            'customization',
                                        ];

                                        const validate = validations.allIn(
                                            attr,
                                            var_enum
                                        );

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'ITEMS_TAGS_TYPE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **ITEMS_TAGS_TYPE**

- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'ITEMS_TAGS_TYPE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function ITEMS_TAGS_PARENT_ID(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'ITEMS_TAGS_PARENT_ID',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **ITEMS_TAGS_PARENT_ID**

- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"ITEMS_TAGS_PARENT_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'ITEMS_TAGS_PARENT_ID',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_TAGS_PARENT_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    ITEMS_TAGS_TYPE,
                                    ITEMS_TAGS_PARENT_ID,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ITEMS_TAGS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ITEMS_ID,
                            ITEMS_PARENT_ITEM_ID,
                            ITEMS_FULFILLMENT_ID,
                            ITEMS_QUANTITY_COUNT,
                            ITEMS_TAGS,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_ITEMS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_BILLING(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function BILLING_NAME(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.billing.name',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'BILLING_NAME',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BILLING_NAME**

- $.message.order.billing.name must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'BILLING_NAME',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BILLING_ADDRESS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function BILLING_ADDRESS_NAME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.name',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_NAME',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_NAME**

- $.message.order.billing.address.name must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'BILLING_ADDRESS_NAME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function BILLING_ADDRESS_BUILDING(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.building',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_BUILDING',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_BUILDING**

- $.message.order.billing.address.building must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'BILLING_ADDRESS_BUILDING',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function BILLING_ADDRESS_LOCALITY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.locality',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_LOCALITY',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_LOCALITY**

- $.message.order.billing.address.locality must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'BILLING_ADDRESS_LOCALITY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function BILLING_ADDRESS_CITY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.city',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_CITY',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_CITY**

- $.message.order.billing.address.city must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'BILLING_ADDRESS_CITY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function BILLING_ADDRESS_STATE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.state',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_STATE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_STATE**

- $.message.order.billing.address.state must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'BILLING_ADDRESS_STATE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function BILLING_ADDRESS_COUNTRY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.country',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_COUNTRY',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_COUNTRY**

- $.message.order.billing.address.country must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'BILLING_ADDRESS_COUNTRY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function BILLING_ADDRESS_AREA_CODE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.billing.address.area_code',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'BILLING_ADDRESS_AREA_CODE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **BILLING_ADDRESS_AREA_CODE**

- $.message.order.billing.address.area_code must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'BILLING_ADDRESS_AREA_CODE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    BILLING_ADDRESS_NAME,
                                    BILLING_ADDRESS_BUILDING,
                                    BILLING_ADDRESS_LOCALITY,
                                    BILLING_ADDRESS_CITY,
                                    BILLING_ADDRESS_STATE,
                                    BILLING_ADDRESS_COUNTRY,
                                    BILLING_ADDRESS_AREA_CODE,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'BILLING_ADDRESS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BILLING_ADDRESS","_RETURN_":[{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BILLING_PHONE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.billing.phone',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'BILLING_PHONE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BILLING_PHONE**

- $.message.order.billing.phone must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'BILLING_PHONE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BILLING_EMAIL(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.billing.email',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'BILLING_EMAIL',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BILLING_EMAIL**

- $.message.order.billing.email must be present in the payload

> **Skip if:**
>
>     - $.message.order.billing.email is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'BILLING_EMAIL',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BILLING_CREATED_AT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.billing.created_at',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'BILLING_CREATED_AT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BILLING_CREATED_AT**

- $.message.order.billing.created_at must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'BILLING_CREATED_AT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BILLING_UPDATED_AT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.billing.updated_at',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'BILLING_UPDATED_AT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BILLING_UPDATED_AT**

- $.message.order.billing.updated_at must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'BILLING_UPDATED_AT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            BILLING_NAME,
                            BILLING_ADDRESS,
                            BILLING_PHONE,
                            BILLING_EMAIL,
                            BILLING_CREATED_AT,
                            BILLING_UPDATED_AT,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_BILLING',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_BILLING","_RETURN_":[{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS","_RETURN_":[{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}]},{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"},{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"},{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_FULFILLMENTS(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function FULFILLMENTS_ID(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.fulfillments[*].id',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_ID**

- $.message.order.fulfillments[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_STATE_DESCRIPTOR_CODE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.fulfillments[*].state.descriptor.code',
                                    true
                                );
                                const var_enum = [
                                    'Pending',
                                    'Packed',
                                    'Agent-assigned',
                                    'At-pickup',
                                    'At-delivery',
                                    'Order-picked-up',
                                    'Out-for-delivery',
                                    'Order-delivered',
                                    'Cancelled',
                                    'RTO-Initiated',
                                    'RTO-Disposed',
                                    'RTO-Delivered',
                                ];

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, var_enum);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_STATE_DESCRIPTOR_CODE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_STATE_DESCRIPTOR_CODE**

**All of the following must be true:**
  - $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
  - All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Packed", "Agent-assigned", "At-pickup", "At-delivery", "Order-picked-up", "Out-for-delivery", "Order-delivered", "Cancelled", "RTO-Initiated", "RTO-Disposed", "RTO-Delivered"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Pending","Packed","Agent-assigned","At-pickup","At-delivery","Order-picked-up","Out-for-delivery","Order-delivered","Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'FULFILLMENTS_STATE_DESCRIPTOR_CODE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Pending","Packed","Agent-assigned","At-pickup","At-delivery","Order-picked-up","Out-for-delivery","Order-delivered","Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_TYPE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.fulfillments[*].type',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_TYPE**

- $.message.order.fulfillments[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_ONDC_ORG_PROVIDER_NAME(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*]['@ondc/org/provider_name']",
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_ONDC_ORG_PROVIDER_NAME',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_ONDC_ORG_PROVIDER_NAME**

- $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*]['@ondc/org/provider_name'] is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'FULFILLMENTS_ONDC_ORG_PROVIDER_NAME',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_TRACKING(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.fulfillments[*].tracking',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_TRACKING',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_TRACKING**

- $.message.order.fulfillments[*].tracking must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tracking is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_TRACKING',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_ONDC_ORG_TAT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*]['@ondc/org/TAT']",
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_ONDC_ORG_TAT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_ONDC_ORG_TAT**

- $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*]['@ondc/org/TAT'] is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_ONDC_ORG_TAT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_ONDC_ORG_TAT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_ONDC_ORG_TAT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_START(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function FULFILLMENTS_START_LOCATION(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.location.descriptor.name',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME**

- $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.location.descriptor.name is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_LOCATION_GPS(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.location.gps',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_LOCATION_GPS',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_LOCATION_GPS**

- $.message.order.fulfillments[*].start.location.gps must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.location.gps is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_LOCATION_GPS',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_LOCATION_ADDRESS(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;

                                                function FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].start.location.address.locality',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY**

- $.message.order.fulfillments[*].start.location.address.locality must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.location.address.locality is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_START_LOCATION_ADDRESS_CITY(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].start.location.address.city',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_START_LOCATION_ADDRESS_CITY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_START_LOCATION_ADDRESS_CITY**

- $.message.order.fulfillments[*].start.location.address.city must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.location.address.city is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_LOCATION_ADDRESS_CITY',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].start.location.address.area_code',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE**

- $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.location.address.area_code is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_START_LOCATION_ADDRESS_STATE(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].start.location.address.state',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_START_LOCATION_ADDRESS_STATE',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_START_LOCATION_ADDRESS_STATE**

- $.message.order.fulfillments[*].start.location.address.state must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.location.address.state is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_LOCATION_ADDRESS_STATE',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }

                                                const testFunctions: testFunctionArray =
                                                    [
                                                        FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY,
                                                        FULFILLMENTS_START_LOCATION_ADDRESS_CITY,
                                                        FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE,
                                                        FULFILLMENTS_START_LOCATION_ADDRESS_STATE,
                                                    ];

                                                let allResults: validationOutput =
                                                    [];
                                                for (const fn of testFunctions) {
                                                    const subResult = fn(input);
                                                    allResults = [
                                                        ...allResults,
                                                        ...subResult,
                                                    ];
                                                }
                                                subResults = allResults;
                                                valid = subResults.every(
                                                    r => r.valid
                                                );

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_LOCATION_ADDRESS',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME,
                                                FULFILLMENTS_START_LOCATION_GPS,
                                                FULFILLMENTS_START_LOCATION_ADDRESS,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_START_LOCATION',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_START_TIME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_START_TIME_RANGE_START(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.time.range.start',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_TIME_RANGE_START',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_TIME_RANGE_START**

- $.message.order.fulfillments[*].start.time.range.start must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.time.range.start is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_TIME_RANGE_START',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_TIME_RANGE_END(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.time.range.end',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_TIME_RANGE_END',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_TIME_RANGE_END**

- $.message.order.fulfillments[*].start.time.range.end must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.time.range.end is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_TIME_RANGE_END',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_TIME_TIMESTAMP(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.time.timestamp',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_TIME_TIMESTAMP',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_TIME_TIMESTAMP**

- $.message.order.fulfillments[*].start.time.timestamp must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.time.timestamp is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_TIME_TIMESTAMP',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_START_TIME_RANGE_START,
                                                FULFILLMENTS_START_TIME_RANGE_END,
                                                FULFILLMENTS_START_TIME_TIMESTAMP,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_START_TIME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_START_INSTRUCTIONS(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_START_INSTRUCTIONS_CODE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.instructions.code',
                                                        true
                                                    );
                                                const var_enum = [
                                                    '1',
                                                    '2',
                                                    '3',
                                                    '4',
                                                ];

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    ) &&
                                                    validations.allIn(
                                                        attr,
                                                        var_enum
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_INSTRUCTIONS_CODE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_INSTRUCTIONS_CODE**

**All of the following must be true:**
  - $.message.order.fulfillments[*].start.instructions.code must be present in the payload
  - All elements of $.message.order.fulfillments[*].start.instructions.code must be in ["1", "2", "3", "4"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.instructions.code is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_INSTRUCTIONS_CODE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_INSTRUCTIONS_NAME(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.instructions.name',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_INSTRUCTIONS_NAME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_INSTRUCTIONS_NAME**

- $.message.order.fulfillments[*].start.instructions.name must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.instructions.name is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_INSTRUCTIONS_NAME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.instructions.short_desc',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC**

- $.message.order.fulfillments[*].start.instructions.short_desc must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.instructions.short_desc is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.instructions.additional_desc.content_type',
                                                        true
                                                    );
                                                const var_enum = [
                                                    'text/plain',
                                                    'text/html',
                                                ];

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.allIn(
                                                        attr,
                                                        var_enum
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE**

- All elements of $.message.order.fulfillments[*].start.instructions.additional_desc.content_type must be in ["text/plain", "text/html"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.instructions.additional_desc.content_type is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_START_INSTRUCTIONS_CODE,
                                                FULFILLMENTS_START_INSTRUCTIONS_NAME,
                                                FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC,
                                                FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_START_INSTRUCTIONS',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_START_CONTACT(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_START_CONTACT_PHONE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.contact.phone',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_CONTACT_PHONE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_CONTACT_PHONE**

- $.message.order.fulfillments[*].start.contact.phone must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.contact.phone is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_CONTACT_PHONE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_START_CONTACT_EMAIL(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].start.contact.email',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_START_CONTACT_EMAIL',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_CONTACT_EMAIL**

- $.message.order.fulfillments[*].start.contact.email must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].start.contact.email is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_START_CONTACT_EMAIL',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_START_CONTACT_PHONE,
                                                FULFILLMENTS_START_CONTACT_EMAIL,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_START_CONTACT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_START_LOCATION,
                                    FULFILLMENTS_START_TIME,
                                    FULFILLMENTS_START_INSTRUCTIONS,
                                    FULFILLMENTS_START_CONTACT,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_START',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_END(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function FULFILLMENTS_END_LOCATION(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_END_LOCATION_GPS(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.location.gps',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_GPS',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_LOCATION_GPS**

- $.message.order.fulfillments[*].end.location.gps must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.gps is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_LOCATION_GPS',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_LOCATION_ADDRESS(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;

                                                function FULFILLMENTS_END_LOCATION_ADDRESS_NAME(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.name',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_NAME',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**

- $.message.order.fulfillments[*].end.location.address.name must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.name is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_NAME',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.building',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**

- $.message.order.fulfillments[*].end.location.address.building must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.building is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.locality',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**

- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.locality is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.country',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**

- $.message.order.fulfillments[*].end.location.address.country must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.country is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_END_LOCATION_ADDRESS_CITY(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.city',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_CITY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**

- $.message.order.fulfillments[*].end.location.address.city must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.city is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_CITY',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.area_code',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**

- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.area_code is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function FULFILLMENTS_END_LOCATION_ADDRESS_STATE(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.fulfillments[*].end.location.address.state',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'FULFILLMENTS_END_LOCATION_ADDRESS_STATE',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**

- $.message.order.fulfillments[*].end.location.address.state must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.location.address.state is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_LOCATION_ADDRESS_STATE',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }

                                                const testFunctions: testFunctionArray =
                                                    [
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_NAME,
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING,
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY,
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY,
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_CITY,
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE,
                                                        FULFILLMENTS_END_LOCATION_ADDRESS_STATE,
                                                    ];

                                                let allResults: validationOutput =
                                                    [];
                                                for (const fn of testFunctions) {
                                                    const subResult = fn(input);
                                                    allResults = [
                                                        ...allResults,
                                                        ...subResult,
                                                    ];
                                                }
                                                subResults = allResults;
                                                valid = subResults.every(
                                                    r => r.valid
                                                );

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_LOCATION_ADDRESS',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_END_LOCATION_GPS,
                                                FULFILLMENTS_END_LOCATION_ADDRESS,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_END_LOCATION',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_END_TIME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_END_TIME_RANGE_START(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.time.range.start',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_TIME_RANGE_START',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_TIME_RANGE_START**

- $.message.order.fulfillments[*].end.time.range.start must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.time.range.start is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_TIME_RANGE_START',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_TIME_RANGE_END(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.time.range.end',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_TIME_RANGE_END',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_TIME_RANGE_END**

- $.message.order.fulfillments[*].end.time.range.end must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.time.range.end is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_TIME_RANGE_END',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_TIME_TIMESTAMP(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.time.timestamp',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_TIME_TIMESTAMP',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_TIME_TIMESTAMP**

- $.message.order.fulfillments[*].end.time.timestamp must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.time.timestamp is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_TIME_TIMESTAMP',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_END_TIME_RANGE_START,
                                                FULFILLMENTS_END_TIME_RANGE_END,
                                                FULFILLMENTS_END_TIME_TIMESTAMP,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_END_TIME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_END_INSTRUCTIONS(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_END_INSTRUCTIONS_CODE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.instructions.code',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_INSTRUCTIONS_CODE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_INSTRUCTIONS_CODE**

- $.message.order.fulfillments[*].end.instructions.code must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.instructions.code is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_INSTRUCTIONS_CODE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_INSTRUCTIONS_NAME(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.instructions.name',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_INSTRUCTIONS_NAME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_INSTRUCTIONS_NAME**

- $.message.order.fulfillments[*].end.instructions.name must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.instructions.name is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_INSTRUCTIONS_NAME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.instructions.short_desc',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC**

- $.message.order.fulfillments[*].end.instructions.short_desc must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.instructions.short_desc is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.instructions.long_desc',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC**

- $.message.order.fulfillments[*].end.instructions.long_desc must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.instructions.long_desc is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_END_INSTRUCTIONS_CODE,
                                                FULFILLMENTS_END_INSTRUCTIONS_NAME,
                                                FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC,
                                                FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_END_INSTRUCTIONS',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_END_CONTACT(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function FULFILLMENTS_END_CONTACT_PHONE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.contact.phone',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_CONTACT_PHONE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_CONTACT_PHONE**

- $.message.order.fulfillments[*].end.contact.phone must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.contact.phone is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_CONTACT_PHONE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function FULFILLMENTS_END_CONTACT_EMAIL(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.fulfillments[*].end.contact.email',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'FULFILLMENTS_END_CONTACT_EMAIL',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_END_CONTACT_EMAIL**

- $.message.order.fulfillments[*].end.contact.email must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.contact.email is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_CONTACT_EMAIL',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_END_CONTACT_PHONE,
                                                FULFILLMENTS_END_CONTACT_EMAIL,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_END_CONTACT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_END_LOCATION,
                                    FULFILLMENTS_END_TIME,
                                    FULFILLMENTS_END_INSTRUCTIONS,
                                    FULFILLMENTS_END_CONTACT,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_END',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_AGENT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function FULFILLMENTS_AGENT_NAME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.fulfillments[*].agent.name',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_AGENT_NAME',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **FULFILLMENTS_AGENT_NAME**

- $.message.order.fulfillments[*].agent.name must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].agent.name is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_AGENT_NAME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.name","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_AGENT_PHONE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.fulfillments[*].agent.phone',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_AGENT_PHONE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **FULFILLMENTS_AGENT_PHONE**

- $.message.order.fulfillments[*].agent.phone must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].agent.phone is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.phone","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_AGENT_PHONE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.phone","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_AGENT_NAME,
                                    FULFILLMENTS_AGENT_PHONE,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_AGENT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_AGENT","_RETURN_":[{"_NAME_":"FULFILLMENTS_AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.phone","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_VEHICLE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function FULFILLMENTS_VEHICLE_CATEGORY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.fulfillments[*].vehicle.category',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_VEHICLE_CATEGORY',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **FULFILLMENTS_VEHICLE_CATEGORY**

- $.message.order.fulfillments[*].vehicle.category must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].vehicle.category is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_VEHICLE_CATEGORY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_VEHICLE_CATEGORY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_VEHICLE_CATEGORY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_VEHICLE_SIZE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.fulfillments[*].vehicle.size',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_VEHICLE_SIZE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **FULFILLMENTS_VEHICLE_SIZE**

- $.message.order.fulfillments[*].vehicle.size must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].vehicle.size is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_VEHICLE_SIZE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.size","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_VEHICLE_SIZE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_VEHICLE_SIZE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.size","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_VEHICLE_CATEGORY,
                                    FULFILLMENTS_VEHICLE_SIZE,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_VEHICLE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_VEHICLE","_RETURN_":[{"_NAME_":"FULFILLMENTS_VEHICLE_CATEGORY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_VEHICLE_SIZE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.size","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_TAGS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function TAGS_ROUTING(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function ROUTING_TYPE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value",
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'ROUTING_TYPE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **ROUTING_TYPE**

- $.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'ROUTING_TYPE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [ROUTING_TYPE];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'TAGS_ROUTING',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_ROUTING","_RETURN_":[{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_TRACKING(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function TRACKING_GPS_ENABLED(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value",
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'TRACKING_GPS_ENABLED',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **TRACKING_GPS_ENABLED**

- $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'TRACKING_GPS_ENABLED',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function TRACKING_URL_ENABLED(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value",
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'TRACKING_URL_ENABLED',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **TRACKING_URL_ENABLED**

- $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'TRACKING_URL_ENABLED',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function TRACKING_URL(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value",
                                                        true
                                                    );
                                                const reg = ['^https?://.*$'];

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.followRegex(
                                                        attr,
                                                        reg
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'TRACKING_URL',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **TRACKING_URL**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value must follow every regex in ["^https?://.*$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'TRACKING_URL',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                TRACKING_GPS_ENABLED,
                                                TRACKING_URL_ENABLED,
                                                TRACKING_URL,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'TAGS_TRACKING',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_FULFILLMENT_DELAY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function DELAY_STATE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'Order-picked-up',
                                                    'Order-delivered',
                                                ];

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.allIn(
                                                        attr,
                                                        var_enum
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'DELAY_STATE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DELAY_STATE**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'DELAY_STATE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DELAY_REASON_ID(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value",
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'DELAY_REASON_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DELAY_REASON_ID**

- $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'DELAY_REASON_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DELAY_TIMESTAMP(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$',
                                                ];

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.followRegex(
                                                        attr,
                                                        reg
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'DELAY_TIMESTAMP',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DELAY_TIMESTAMP**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'DELAY_TIMESTAMP',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                DELAY_STATE,
                                                DELAY_REASON_ID,
                                                DELAY_TIMESTAMP,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'TAGS_FULFILLMENT_DELAY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    TAGS_ROUTING,
                                    TAGS_TRACKING,
                                    TAGS_FULFILLMENT_DELAY,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_TAGS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_ROUTING","_RETURN_":[{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            FULFILLMENTS_ID,
                            FULFILLMENTS_STATE_DESCRIPTOR_CODE,
                            FULFILLMENTS_TYPE,
                            FULFILLMENTS_ONDC_ORG_PROVIDER_NAME,
                            FULFILLMENTS_TRACKING,
                            FULFILLMENTS_ONDC_ORG_TAT,
                            FULFILLMENTS_START,
                            FULFILLMENTS_END,
                            FULFILLMENTS_AGENT,
                            FULFILLMENTS_VEHICLE,
                            FULFILLMENTS_TAGS,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_FULFILLMENTS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Pending","Packed","Agent-assigned","At-pickup","At-delivery","Order-picked-up","Out-for-delivery","Order-delivered","Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_TAT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_AGENT","_RETURN_":[{"_NAME_":"FULFILLMENTS_AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.phone","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_VEHICLE","_RETURN_":[{"_NAME_":"FULFILLMENTS_VEHICLE_CATEGORY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_VEHICLE_SIZE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.size","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_ROUTING","_RETURN_":[{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}]}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_QUOTE(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function QUOTE_PRICE_CURRENCY(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.quote.price.currency',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'QUOTE_PRICE_CURRENCY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **QUOTE_PRICE_CURRENCY**

- $.message.order.quote.price.currency must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'QUOTE_PRICE_CURRENCY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function QUOTE_PRICE_VALUE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.quote.price.value',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'QUOTE_PRICE_VALUE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **QUOTE_PRICE_VALUE**

- $.message.order.quote.price.value must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'QUOTE_PRICE_VALUE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function QUOTE_BREAKUP(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function BREAKUP_ITEM(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;

                                        function BREAKUP_ITEM_ID(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.quote.breakup[*]['@ondc/org/item_id']",
                                                        true
                                                    );

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_ID**

- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'BREAKUP_ITEM_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_QUANTITY_COUNT(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count",
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_QUANTITY_COUNT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_QUANTITY_COUNT**

- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_QUANTITY_COUNT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_TITLE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.quote.breakup[*].title',
                                                        true
                                                    );

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_TITLE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_TITLE**

- $.message.order.quote.breakup[*].title must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_TITLE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_TITLE_TYPE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        "$.message.order.quote.breakup[*]['@ondc/org/title_type']",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'item',
                                                    'tax',
                                                    'misc',
                                                    'discount',
                                                    'offer',
                                                ];

                                                const validate =
                                                    validations.allIn(
                                                        attr,
                                                        var_enum
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_TITLE_TYPE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_TITLE_TYPE**

- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "tax", "misc", "discount", "offer"]`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_TITLE_TYPE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_PRICE_CURRENCY(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.quote.breakup[*].price.currency',
                                                        true
                                                    );

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_PRICE_CURRENCY',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_PRICE_CURRENCY**

- $.message.order.quote.breakup[*].price.currency must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_PRICE_CURRENCY',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_PRICE_VALUE(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.quote.breakup[*].price.value',
                                                        true
                                                    );

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_PRICE_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_PRICE_VALUE**

- $.message.order.quote.breakup[*].price.value must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_PRICE_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_TTL(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;
                                                const attr =
                                                    payloadUtils.getJsonPath(
                                                        testObj,
                                                        '$.message.order.quote.breakup[*].ttl',
                                                        true
                                                    );

                                                const skipCheck =
                                                    !validations.arePresent(
                                                        attr
                                                    );
                                                if (skipCheck) continue;

                                                const validate =
                                                    validations.arePresent(
                                                        attr
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_TTL',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **BREAKUP_ITEM_TTL**

- $.message.order.quote.breakup[*].ttl must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].ttl is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_TTL',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function BREAKUP_ITEM_ITEM(
                                            input: validationInput
                                        ): validationOutput {
                                            const scope =
                                                payloadUtils.getJsonPath(
                                                    input.payload,
                                                    '$'
                                                );
                                            let subResults: validationOutput =
                                                [];
                                            let valid = true;
                                            for (const testObj of scope) {
                                                if (
                                                    !testObj ||
                                                    typeof testObj !== 'object'
                                                )
                                                    continue;
                                                testObj._EXTERNAL =
                                                    input.externalData;

                                                function BREAKUP_ITEM_ITEM_PARENT_ITEM_ID(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.quote.breakup[*].item.parent_item_id',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_PARENT_ITEM_ID',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_PARENT_ITEM_ID**

- $.message.order.quote.breakup[*].item.parent_item_id must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.parent_item_id is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ITEM_PARENT_ITEM_ID',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.quote.breakup[*].item.quantity.available.count',
                                                                true
                                                            );
                                                        const var_enum = [
                                                            '99',
                                                            '0',
                                                        ];

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.allIn(
                                                                attr,
                                                                var_enum
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT**

- All elements of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["99", "0"]

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.quantity.available.count is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.quote.breakup[*].item.quantity.maximum.count',
                                                                true
                                                            );

                                                        const skipCheck =
                                                            !validations.arePresent(
                                                                attr
                                                            );
                                                        if (skipCheck) continue;

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT**

- $.message.order.quote.breakup[*].item.quantity.maximum.count must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.quantity.maximum.count is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function BREAKUP_ITEM_ITEM_PRICE_CURRENCY(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.quote.breakup[*].item.price.currency',
                                                                true
                                                            );

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_PRICE_CURRENCY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**

- $.message.order.quote.breakup[*].item.price.currency must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ITEM_PRICE_CURRENCY',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function BREAKUP_ITEM_ITEM_PRICE_VALUE(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;
                                                        const attr =
                                                            payloadUtils.getJsonPath(
                                                                testObj,
                                                                '$.message.order.quote.breakup[*].item.price.value',
                                                                true
                                                            );

                                                        const validate =
                                                            validations.arePresent(
                                                                attr
                                                            );

                                                        if (!validate) {
                                                            // delete testObj._EXTERNAL;
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_PRICE_VALUE',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**

- $.message.order.quote.breakup[*].item.price.value must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                            ];
                                                        }

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ITEM_PRICE_VALUE',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }
                                                function BREAKUP_ITEM_ITEM_TAGS(
                                                    input: validationInput
                                                ): validationOutput {
                                                    const scope =
                                                        payloadUtils.getJsonPath(
                                                            input.payload,
                                                            '$'
                                                        );
                                                    let subResults: validationOutput =
                                                        [];
                                                    let valid = true;
                                                    for (const testObj of scope) {
                                                        if (
                                                            !testObj ||
                                                            typeof testObj !==
                                                                'object'
                                                        )
                                                            continue;
                                                        testObj._EXTERNAL =
                                                            input.externalData;

                                                        function BREAKUP_ITEM_ITEM_TAGS_TYPE(
                                                            input: validationInput
                                                        ): validationOutput {
                                                            const scope =
                                                                payloadUtils.getJsonPath(
                                                                    input.payload,
                                                                    '$'
                                                                );
                                                            let subResults: validationOutput =
                                                                [];
                                                            let valid = true;
                                                            for (const testObj of scope) {
                                                                if (
                                                                    !testObj ||
                                                                    typeof testObj !==
                                                                        'object'
                                                                )
                                                                    continue;
                                                                testObj._EXTERNAL =
                                                                    input.externalData;
                                                                const attr =
                                                                    payloadUtils.getJsonPath(
                                                                        testObj,
                                                                        "$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value",
                                                                        true
                                                                    );
                                                                const var_enum =
                                                                    [
                                                                        'item',
                                                                        'customization',
                                                                    ];

                                                                const validate =
                                                                    validations.allIn(
                                                                        attr,
                                                                        var_enum
                                                                    );

                                                                if (!validate) {
                                                                    // delete testObj._EXTERNAL;
                                                                    return [
                                                                        {
                                                                            testName:
                                                                                'BREAKUP_ITEM_ITEM_TAGS_TYPE',
                                                                            valid: false,
                                                                            code: 30000,
                                                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TYPE**

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]`,
                                                                            _debugInfo:
                                                                                {
                                                                                    fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"}
`,
                                                                                },
                                                                        },
                                                                    ];
                                                                }

                                                                // delete testObj._EXTERNAL;
                                                            }
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_TAGS_TYPE',
                                                                    valid: valid,
                                                                    code: valid
                                                                        ? 200
                                                                        : 30000,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"}
`,
                                                                        },
                                                                },
                                                                ...subResults,
                                                            ];
                                                        }
                                                        function BREAKUP_ITEM_ITEM_TAGS_PARENT_ID(
                                                            input: validationInput
                                                        ): validationOutput {
                                                            const scope =
                                                                payloadUtils.getJsonPath(
                                                                    input.payload,
                                                                    '$'
                                                                );
                                                            let subResults: validationOutput =
                                                                [];
                                                            let valid = true;
                                                            for (const testObj of scope) {
                                                                if (
                                                                    !testObj ||
                                                                    typeof testObj !==
                                                                        'object'
                                                                )
                                                                    continue;
                                                                testObj._EXTERNAL =
                                                                    input.externalData;
                                                                const attr =
                                                                    payloadUtils.getJsonPath(
                                                                        testObj,
                                                                        "$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value",
                                                                        true
                                                                    );

                                                                const skipCheck =
                                                                    !validations.arePresent(
                                                                        attr
                                                                    );
                                                                if (skipCheck)
                                                                    continue;

                                                                const validate =
                                                                    validations.arePresent(
                                                                        attr
                                                                    );

                                                                if (!validate) {
                                                                    // delete testObj._EXTERNAL;
                                                                    return [
                                                                        {
                                                                            testName:
                                                                                'BREAKUP_ITEM_ITEM_TAGS_PARENT_ID',
                                                                            valid: false,
                                                                            code: 30000,
                                                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_PARENT_ID**

- $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload`,
                                                                            _debugInfo:
                                                                                {
                                                                                    fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                                                },
                                                                        },
                                                                    ];
                                                                }

                                                                // delete testObj._EXTERNAL;
                                                            }
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_TAGS_PARENT_ID',
                                                                    valid: valid,
                                                                    code: valid
                                                                        ? 200
                                                                        : 30000,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                                        },
                                                                },
                                                                ...subResults,
                                                            ];
                                                        }
                                                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE(
                                                            input: validationInput
                                                        ): validationOutput {
                                                            const scope =
                                                                payloadUtils.getJsonPath(
                                                                    input.payload,
                                                                    '$'
                                                                );
                                                            let subResults: validationOutput =
                                                                [];
                                                            let valid = true;
                                                            for (const testObj of scope) {
                                                                if (
                                                                    !testObj ||
                                                                    typeof testObj !==
                                                                        'object'
                                                                )
                                                                    continue;
                                                                testObj._EXTERNAL =
                                                                    input.externalData;

                                                                function BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE(
                                                                    input: validationInput
                                                                ): validationOutput {
                                                                    const scope =
                                                                        payloadUtils.getJsonPath(
                                                                            input.payload,
                                                                            '$'
                                                                        );
                                                                    let subResults: validationOutput =
                                                                        [];
                                                                    let valid = true;
                                                                    for (const testObj of scope) {
                                                                        if (
                                                                            !testObj ||
                                                                            typeof testObj !==
                                                                                'object'
                                                                        )
                                                                            continue;
                                                                        testObj._EXTERNAL =
                                                                            input.externalData;
                                                                        const attr =
                                                                            payloadUtils.getJsonPath(
                                                                                testObj,
                                                                                "$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value",
                                                                                true
                                                                            );
                                                                        const var_enum =
                                                                            [
                                                                                'fulfillment',
                                                                                'order',
                                                                                'item',
                                                                            ];

                                                                        const skipCheck =
                                                                            !validations.arePresent(
                                                                                attr
                                                                            );
                                                                        if (
                                                                            skipCheck
                                                                        )
                                                                            continue;

                                                                        const validate =
                                                                            validations.allIn(
                                                                                attr,
                                                                                var_enum
                                                                            );

                                                                        if (
                                                                            !validate
                                                                        ) {
                                                                            // delete testObj._EXTERNAL;
                                                                            return [
                                                                                {
                                                                                    testName:
                                                                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE',
                                                                                    valid: false,
                                                                                    code: 30000,
                                                                                    description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item"]

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value is not in the payload`,
                                                                                    _debugInfo:
                                                                                        {
                                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"}
`,
                                                                                        },
                                                                                },
                                                                            ];
                                                                        }

                                                                        // delete testObj._EXTERNAL;
                                                                    }
                                                                    return [
                                                                        {
                                                                            testName:
                                                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE',
                                                                            valid: valid,
                                                                            code: valid
                                                                                ? 200
                                                                                : 30000,
                                                                            _debugInfo:
                                                                                {
                                                                                    fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"}
`,
                                                                                },
                                                                        },
                                                                        ...subResults,
                                                                    ];
                                                                }
                                                                function BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE(
                                                                    input: validationInput
                                                                ): validationOutput {
                                                                    const scope =
                                                                        payloadUtils.getJsonPath(
                                                                            input.payload,
                                                                            '$'
                                                                        );
                                                                    let subResults: validationOutput =
                                                                        [];
                                                                    let valid = true;
                                                                    for (const testObj of scope) {
                                                                        if (
                                                                            !testObj ||
                                                                            typeof testObj !==
                                                                                'object'
                                                                        )
                                                                            continue;
                                                                        testObj._EXTERNAL =
                                                                            input.externalData;
                                                                        const attr =
                                                                            payloadUtils.getJsonPath(
                                                                                testObj,
                                                                                "$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value",
                                                                                true
                                                                            );
                                                                        const var_enum =
                                                                            [
                                                                                'delivery',
                                                                                'packaging',
                                                                                'misc',
                                                                            ];

                                                                        const skipCheck =
                                                                            !validations.arePresent(
                                                                                attr
                                                                            );
                                                                        if (
                                                                            skipCheck
                                                                        )
                                                                            continue;

                                                                        const validate =
                                                                            validations.allIn(
                                                                                attr,
                                                                                var_enum
                                                                            );

                                                                        if (
                                                                            !validate
                                                                        ) {
                                                                            // delete testObj._EXTERNAL;
                                                                            return [
                                                                                {
                                                                                    testName:
                                                                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE',
                                                                                    valid: false,
                                                                                    code: 30000,
                                                                                    description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE**

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value must be in ["delivery", "packaging", "misc"]

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value is not in the payload`,
                                                                                    _debugInfo:
                                                                                        {
                                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}
`,
                                                                                        },
                                                                                },
                                                                            ];
                                                                        }

                                                                        // delete testObj._EXTERNAL;
                                                                    }
                                                                    return [
                                                                        {
                                                                            testName:
                                                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE',
                                                                            valid: valid,
                                                                            code: valid
                                                                                ? 200
                                                                                : 30000,
                                                                            _debugInfo:
                                                                                {
                                                                                    fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}
`,
                                                                                },
                                                                        },
                                                                        ...subResults,
                                                                    ];
                                                                }

                                                                const testFunctions: testFunctionArray =
                                                                    [
                                                                        BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE,
                                                                        BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE,
                                                                    ];

                                                                let allResults: validationOutput =
                                                                    [];
                                                                for (const fn of testFunctions) {
                                                                    const subResult =
                                                                        fn(
                                                                            input
                                                                        );
                                                                    allResults =
                                                                        [
                                                                            ...allResults,
                                                                            ...subResult,
                                                                        ];
                                                                }
                                                                subResults =
                                                                    allResults;
                                                                valid =
                                                                    subResults.every(
                                                                        r =>
                                                                            r.valid
                                                                    );

                                                                // delete testObj._EXTERNAL;
                                                            }
                                                            return [
                                                                {
                                                                    testName:
                                                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE',
                                                                    valid: valid,
                                                                    code: valid
                                                                        ? 200
                                                                        : 30000,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}
`,
                                                                        },
                                                                },
                                                                ...subResults,
                                                            ];
                                                        }

                                                        const testFunctions: testFunctionArray =
                                                            [
                                                                BREAKUP_ITEM_ITEM_TAGS_TYPE,
                                                                BREAKUP_ITEM_ITEM_TAGS_PARENT_ID,
                                                                BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE,
                                                            ];

                                                        let allResults: validationOutput =
                                                            [];
                                                        for (const fn of testFunctions) {
                                                            const subResult =
                                                                fn(input);
                                                            allResults = [
                                                                ...allResults,
                                                                ...subResult,
                                                            ];
                                                        }
                                                        subResults = allResults;
                                                        valid =
                                                            subResults.every(
                                                                r => r.valid
                                                            );

                                                        // delete testObj._EXTERNAL;
                                                    }
                                                    return [
                                                        {
                                                            testName:
                                                                'BREAKUP_ITEM_ITEM_TAGS',
                                                            valid: valid,
                                                            code: valid
                                                                ? 200
                                                                : 30000,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }

                                                const testFunctions: testFunctionArray =
                                                    [
                                                        BREAKUP_ITEM_ITEM_PARENT_ITEM_ID,
                                                        BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT,
                                                        BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT,
                                                        BREAKUP_ITEM_ITEM_PRICE_CURRENCY,
                                                        BREAKUP_ITEM_ITEM_PRICE_VALUE,
                                                        BREAKUP_ITEM_ITEM_TAGS,
                                                    ];

                                                let allResults: validationOutput =
                                                    [];
                                                for (const fn of testFunctions) {
                                                    const subResult = fn(input);
                                                    allResults = [
                                                        ...allResults,
                                                        ...subResult,
                                                    ];
                                                }
                                                subResults = allResults;
                                                valid = subResults.every(
                                                    r => r.valid
                                                );

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName:
                                                        'BREAKUP_ITEM_ITEM',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                BREAKUP_ITEM_ID,
                                                BREAKUP_ITEM_QUANTITY_COUNT,
                                                BREAKUP_ITEM_TITLE,
                                                BREAKUP_ITEM_TITLE_TYPE,
                                                BREAKUP_ITEM_PRICE_CURRENCY,
                                                BREAKUP_ITEM_PRICE_VALUE,
                                                BREAKUP_ITEM_TTL,
                                                BREAKUP_ITEM_ITEM,
                                            ];

                                        let allResults: validationOutput = [];
                                        for (const fn of testFunctions) {
                                            const subResult = fn(input);
                                            allResults = [
                                                ...allResults,
                                                ...subResult,
                                            ];
                                        }
                                        subResults = allResults;
                                        valid = subResults.every(r => r.valid);

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'BREAKUP_ITEM',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    BREAKUP_ITEM,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'QUOTE_BREAKUP',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            QUOTE_PRICE_CURRENCY,
                            QUOTE_PRICE_VALUE,
                            QUOTE_BREAKUP,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_QUOTE',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_QUOTE_ADDITIONAL_PROPERTIES(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function QUOTE_TTL(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.quote.ttl',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'QUOTE_TTL',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **QUOTE_TTL**

- $.message.order.quote.ttl must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'QUOTE_TTL',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [QUOTE_TTL];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_QUOTE_ADDITIONAL_PROPERTIES',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_QUOTE_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_PAYMENT(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']",
                                    true
                                );
                                const var_enum = ['percent', 'amount'];

                                const validate = validations.allIn(
                                    attr,
                                    var_enum
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE**

- All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']",
                                    true
                                );
                                const reg = ['^(\\d*.?\\d{1,2})$'];

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.followRegex(attr, reg);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT**

**All of the following must be true:**
  - $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
  - All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty",
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase",
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type",
                                            true
                                        );
                                        const var_enum = [
                                            'upi',
                                            'neft',
                                            'rtgs',
                                        ];

                                        const validate = validations.allIn(
                                            attr,
                                            var_enum
                                        );

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**

- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].upi_address",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS**

- $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].upi_address is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].bank_name",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME**

- $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].bank_name is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME**

- $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].branch_name",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME**

- $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].branch_name is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE,
                            PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT,
                            PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_PAYMENT',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_PAYMENT_ADDITIONAL_PROPERTIES(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function PAYMENT_URI(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.payment.uri',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_URI',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_URI**

- $.message.order.payment.uri must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment.uri is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_URI',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_TL_METHOD(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.payment.tl_method',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_TL_METHOD',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_TL_METHOD**

- $.message.order.payment.tl_method must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment.tl_method is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_TL_METHOD',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_PARAMS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function PAYMENT_CURRENCY(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.payment.params.currency',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_CURRENCY',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_CURRENCY**

- $.message.order.payment.params.currency must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'PAYMENT_CURRENCY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_TRANSACTION_ID(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.payment.params.transaction_id',
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_TRANSACTION_ID',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_TRANSACTION_ID**

- $.message.order.payment.params.transaction_id must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment.params.transaction_id is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'PAYMENT_TRANSACTION_ID',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_AMOUNT(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            '$.message.order.payment.params.amount',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'PAYMENT_AMOUNT',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_AMOUNT**

- $.message.order.payment.params.amount must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'PAYMENT_AMOUNT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    PAYMENT_CURRENCY,
                                    PAYMENT_TRANSACTION_ID,
                                    PAYMENT_AMOUNT,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_PARAMS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_STATUS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const var_enum = ['NOT-PAID', 'PAID'];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.payment.status',
                                    true
                                );

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, var_enum);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_STATUS',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_STATUS**

**All of the following must be true:**
  - $.message.order.payment.status must be present in the payload
  - All elements of $.message.order.payment.status must be in ["NOT-PAID", "PAID"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_STATUS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_TYPE(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.payment.type',
                                    true
                                );
                                const var_enum = ['ON-ORDER', 'ON-FULFILLMENT'];

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, var_enum);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_TYPE**

**All of the following must be true:**
  - $.message.order.payment.type must be present in the payload
  - All elements of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_COLLECTED_BY(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const var_enum = ['BAP', 'BPP'];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.payment.collected_by',
                                    true
                                );

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, var_enum);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_COLLECTED_BY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_COLLECTED_BY**

**All of the following must be true:**
  - $.message.order.payment.collected_by must be present in the payload
  - All elements of $.message.order.payment.collected_by must be in ["BAP", "BPP"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_COLLECTED_BY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.payment['@ondc/org/settlement_window']",
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW**

- $.message.order.payment['@ondc/org/settlement_window'] must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_window'] is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_window']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_window']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.payment['@ondc/org/withholding_amount']",
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT**

- $.message.order.payment['@ondc/org/withholding_amount'] must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/withholding_amount'] is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/withholding_amount']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/withholding_amount']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_ONDC_ORG_SETTLEMENT_BASIS(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const var_enum = [
                                    'shipment',
                                    'delivery',
                                    'return_Window_expiry',
                                ];
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.payment['@ondc/org/settlement_basis']",
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate =
                                    validations.arePresent(attr) &&
                                    validations.allIn(attr, var_enum);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_BASIS',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_BASIS**

**All of the following must be true:**
  - $.message.order.payment['@ondc/org/settlement_basis'] must be present in the payload
  - All elements of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_Window_expiry"]

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_basis'] is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_BASIS","var_enum":["shipment","delivery","return_Window_expiry"],"_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_basis']","_RETURN_":"attr are present && attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_SETTLEMENT_BASIS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_BASIS","var_enum":["shipment","delivery","return_Window_expiry"],"_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_basis']","_RETURN_":"attr are present && attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;

                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_status must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_status is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP(
                                    input: validationInput
                                ): validationOutput {
                                    const scope = payloadUtils.getJsonPath(
                                        input.payload,
                                        '$'
                                    );
                                    let subResults: validationOutput = [];
                                    let valid = true;
                                    for (const testObj of scope) {
                                        if (
                                            !testObj ||
                                            typeof testObj !== 'object'
                                        )
                                            continue;
                                        testObj._EXTERNAL = input.externalData;
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp",
                                            true
                                        );

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp must be present in the payload

> **Skip if:**
>
>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName:
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS,
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP,
                                ];

                                let allResults: validationOutput = [];
                                for (const fn of testFunctions) {
                                    const subResult = fn(input);
                                    allResults = [...allResults, ...subResult];
                                }
                                subResults = allResults;
                                valid = subResults.every(r => r.valid);

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            PAYMENT_URI,
                            PAYMENT_TL_METHOD,
                            PAYMENT_PARAMS,
                            PAYMENT_STATUS,
                            PAYMENT_TYPE,
                            PAYMENT_COLLECTED_BY,
                            PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW,
                            PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT,
                            PAYMENT_ONDC_ORG_SETTLEMENT_BASIS,
                            PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_PAYMENT_ADDITIONAL_PROPERTIES',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_PAYMENT_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_window']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/withholding_amount']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_BASIS","var_enum":["shipment","delivery","return_Window_expiry"],"_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_basis']","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_DOCUMENTS(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function DOCUMENTS_URL(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.documents[*].url',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'DOCUMENTS_URL',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **DOCUMENTS_URL**

- $.message.order.documents[*].url must be present in the payload

> **Skip if:**
>
>     - $.message.order.documents[*].url is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"DOCUMENTS_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'DOCUMENTS_URL',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"DOCUMENTS_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function DOCUMENTS_LABEL(
                            input: validationInput
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                '$'
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.documents[*].label',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'DOCUMENTS_LABEL',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **DOCUMENTS_LABEL**

- $.message.order.documents[*].label must be present in the payload

> **Skip if:**
>
>     - $.message.order.documents[*].label is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"DOCUMENTS_LABEL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].label","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'DOCUMENTS_LABEL',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"DOCUMENTS_LABEL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].label","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            DOCUMENTS_URL,
                            DOCUMENTS_LABEL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every(r => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_DOCUMENTS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_DOCUMENTS","_RETURN_":[{"_NAME_":"DOCUMENTS_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present"},{"_NAME_":"DOCUMENTS_LABEL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].label","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_CREATED_AT(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            '$.message.order.created_at',
                            true
                        );
                        const pattern = [
                            '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                        ];

                        const validate =
                            validations.arePresent(attr) &&
                            validations.followRegex(attr, pattern);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_CREATED_AT',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_CREATED_AT**

**All of the following must be true:**
  - $.message.order.created_at must be present in the payload
  - All elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_CREATED_AT","attr":"$.message.order.created_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_CREATED_AT',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_CREATED_AT","attr":"$.message.order.created_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ORDER_UPDATED_AT(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            '$.message.order.updated_at',
                            true
                        );
                        const pattern = [
                            '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                        ];

                        const validate =
                            validations.arePresent(attr) &&
                            validations.followRegex(attr, pattern);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_UPDATED_AT',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_UPDATED_AT**

**All of the following must be true:**
  - $.message.order.updated_at must be present in the payload
  - All elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_UPDATED_AT","attr":"$.message.order.updated_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_UPDATED_AT',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_UPDATED_AT","attr":"$.message.order.updated_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    ORDER_ID,
                    ORDER_STATE,
                    ORDER_PROVIDER,
                    ORDER_CANCELLATION,
                    ORDER_ITEMS,
                    ORDER_BILLING,
                    ORDER_FULFILLMENTS,
                    ORDER_QUOTE,
                    ORDER_QUOTE_ADDITIONAL_PROPERTIES,
                    ORDER_PAYMENT,
                    ORDER_PAYMENT_ADDITIONAL_PROPERTIES,
                    ORDER_DOCUMENTS,
                    ORDER_CREATED_AT,
                    ORDER_UPDATED_AT,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every(r => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'ON_STATUS_ORDER',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_STATUS_ORDER","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.order.id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Created","Accepted","In-progress","Cancelled"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ORDER_PROVIDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_CANCELLATION","_RETURN_":[{"_NAME_":"CANCELLATION_CANCELLED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON","_RETURN_":[{"_NAME_":"CANCELLATION_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_BILLING","_RETURN_":[{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS","_RETURN_":[{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}]},{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"},{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"},{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Pending","Packed","Agent-assigned","At-pickup","At-delivery","Order-picked-up","Out-for-delivery","Order-delivered","Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_TAT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_AGENT","_RETURN_":[{"_NAME_":"FULFILLMENTS_AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.phone","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_VEHICLE","_RETURN_":[{"_NAME_":"FULFILLMENTS_VEHICLE_CATEGORY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_VEHICLE_SIZE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.size","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_ROUTING","_RETURN_":[{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}]}]}]},{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}]},{"_NAME_":"ORDER_QUOTE_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_PAYMENT_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_window']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/withholding_amount']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_BASIS","var_enum":["shipment","delivery","return_Window_expiry"],"_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_basis']","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_DOCUMENTS","_RETURN_":[{"_NAME_":"DOCUMENTS_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present"},{"_NAME_":"DOCUMENTS_LABEL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].label","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_CREATED_AT","attr":"$.message.order.created_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_UPDATED_AT","attr":"$.message.order.updated_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_STATUS_CONTEXT,
            ON_STATUS_ORDER,
        ];

        let allResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            allResults = [...allResults, ...subResult];
        }
        subResults = allResults;
        valid = subResults.every(r => r.valid);

        // delete testObj._EXTERNAL;
    }
    return [
        {
            testName: 'on_statusValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_statusValidations","_RETURN_":[{"_NAME_":"ON_STATUS_CONTEXT","_DESCRIPTION_":"Validate on_status context","action":["on_status"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_status"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_status"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_status"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_status"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_status"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_status"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_status"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_status"]}]}]},{"_NAME_":"ON_STATUS_ORDER","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.order.id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Created","Accepted","In-progress","Cancelled"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ORDER_PROVIDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_CANCELLATION","_RETURN_":[{"_NAME_":"CANCELLATION_CANCELLED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON","_RETURN_":[{"_NAME_":"CANCELLATION_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.cancellation.reason.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_BILLING","_RETURN_":[{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS","_RETURN_":[{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}]},{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"},{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"},{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Pending","Packed","Agent-assigned","At-pickup","At-delivery","Order-picked-up","Out-for-delivery","Order-delivered","Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_TAT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.code","var_enum":["1","2","3","4"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.timestamp","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.short_desc","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.instructions.long_desc","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_AGENT","_RETURN_":[{"_NAME_":"FULFILLMENTS_AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].agent.phone","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_VEHICLE","_RETURN_":[{"_NAME_":"FULFILLMENTS_VEHICLE_CATEGORY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_VEHICLE_SIZE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].vehicle.size","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_ROUTING","_RETURN_":[{"_NAME_":"ROUTING_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_GPS_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL_ENABLED","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.*Z$"],"_RETURN_":"attr follow regex reg"}]}]}]},{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}]},{"_NAME_":"ORDER_QUOTE_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_PAYMENT_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_window']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/withholding_amount']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_BASIS","var_enum":["shipment","delivery","return_Window_expiry"],"_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_basis']","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_status","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_DOCUMENTS","_RETURN_":[{"_NAME_":"DOCUMENTS_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present"},{"_NAME_":"DOCUMENTS_LABEL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.documents[*].label","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_CREATED_AT","attr":"$.message.order.created_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_UPDATED_AT","attr":"$.message.order.updated_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]}]}
`,
            },
        },
        ...subResults,
    ];
}
