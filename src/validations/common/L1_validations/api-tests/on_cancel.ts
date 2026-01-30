import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function on_cancel(input: validationInput): validationOutput {
    let totalResults = on_cancelValidations(input);

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
                r => r.testName === 'on_cancelValidations'
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

function on_cancelValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function ON_CANCEL_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const action = ['on_cancel'];

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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
>     - ["on_cancel"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
>     - ["on_cancel"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
>     - all elements of ["on_cancel"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_cancel"]}]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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

- All elements of $.context.action must be in ["on_cancel"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
>     - ["on_cancel"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_cancel"]}
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
                                const action = ['on_cancel'];

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
>     - all elements of ["on_cancel"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_cancel"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_cancel"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_cancel"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_cancel"]}]}
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
                    testName: 'ON_CANCEL_CONTEXT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_CONTEXT","_DESCRIPTION_":"Validate on_cancel context","action":["on_cancel"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_cancel"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_cancel"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_cancel"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_cancel"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_ORDER(input: validationInput): validationOutput {
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
                        const var_enum = ['Cancelled'];

                        const validate = validations.allIn(attr, var_enum);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_STATE',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_STATE**

- All elements of $.message.order.state must be in ["Cancelled"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Cancelled"],"_RETURN_":"attr all in var_enum"}
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
{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Cancelled"],"_RETURN_":"attr all in var_enum"}
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

                        function CANCELLED_BY(
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

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CANCELLED_BY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CANCELLED_BY**

- $.message.order.cancellation.cancelled_by must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'CANCELLED_BY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
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
                                if (!testObj || typeof testObj !== 'object')
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    '$.message.order.cancellation.reason.id',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'CANCELLATION_REASON_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **CANCELLATION_REASON_ID**

- $.message.order.cancellation.reason.id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}
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
{"_NAME_":"CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            CANCELLED_BY,
                            CANCELLATION_REASON_ID,
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
{"_NAME_":"ORDER_CANCELLATION","_RETURN_":[{"_NAME_":"CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}]}
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
                function ORDER_ITEMS(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function ORDER_ITEM_ID(
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
                                            testName: 'ORDER_ITEM_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ORDER_ITEM_ID**

**All of the following must be true:**
  - $.message.order.items[*].id must be present in the payload
  - All elements of $.message.order.items[*].id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ORDER_ITEM_ID","attr":"$.message.order.items[*].id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ORDER_ITEM_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_ITEM_ID","attr":"$.message.order.items[*].id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ORDER_ITEM_FULFILLMENT_ID(
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
                                            testName:
                                                'ORDER_ITEM_FULFILLMENT_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ORDER_ITEM_FULFILLMENT_ID**

- $.message.order.items[*].fulfillment_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ORDER_ITEM_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ORDER_ITEM_FULFILLMENT_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_ITEM_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ORDER_ITEM_QUANTITY_COUNT(
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
                                            testName:
                                                'ORDER_ITEM_QUANTITY_COUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ORDER_ITEM_QUANTITY_COUNT**

- $.message.order.items[*].quantity.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ORDER_ITEM_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ORDER_ITEM_QUANTITY_COUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_ITEM_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ORDER_ITEM_ID,
                            ORDER_ITEM_FULFILLMENT_ID,
                            ORDER_ITEM_QUANTITY_COUNT,
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
{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ORDER_ITEM_ID","attr":"$.message.order.items[*].id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_ITEM_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_ITEM_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}]}
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
  - All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["Cancelled", "RTO-Initiated", "RTO-Disposed", "RTO-Delivered"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"}
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
{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"}
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

                                        function FULFILLMENTS_START_LOCATION_ID(
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
                                                        '$.message.order.fulfillments[*].start.location.id',
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
                                                                'FULFILLMENTS_START_LOCATION_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **FULFILLMENTS_START_LOCATION_ID**

- $.message.order.fulfillments[*].start.location.id must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"}
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
                                                        'FULFILLMENTS_START_LOCATION_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
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

- $.message.order.fulfillments[*].start.location.gps must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].start.location.address.locality must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].start.location.address.city must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].start.location.address.state must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_START_LOCATION_ID,
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
{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]}
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

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_START_TIME_RANGE_START,
                                                FULFILLMENTS_START_TIME_RANGE_END,
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
{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}]}
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

- $.message.order.fulfillments[*].start.contact.phone must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_START_LOCATION,
                                    FULFILLMENTS_START_TIME,
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
{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]}
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

- $.message.order.fulfillments[*].end.location.gps must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.name must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.building must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.country must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.city must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.location.address.state must be present in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}
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
{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]}
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

                                        const testFunctions: testFunctionArray =
                                            [
                                                FULFILLMENTS_END_TIME_RANGE_START,
                                                FULFILLMENTS_END_TIME_RANGE_END,
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
{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function FULFILLMENTS_END_PERSON_NAME(
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
                                            '$.message.order.fulfillments[*].end.person.name',
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'FULFILLMENTS_END_PERSON_NAME',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **FULFILLMENTS_END_PERSON_NAME**

- $.message.order.fulfillments[*].end.person.name must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_PERSON_NAME","attr":"$.message.order.fulfillments[*].end.person.name","_RETURN_":"attr are present"}
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
                                                'FULFILLMENTS_END_PERSON_NAME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_PERSON_NAME","attr":"$.message.order.fulfillments[*].end.person.name","_RETURN_":"attr are present"}
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

- $.message.order.fulfillments[*].end.contact.phone must be present in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_END_LOCATION,
                                    FULFILLMENTS_END_TIME,
                                    FULFILLMENTS_END_PERSON_NAME,
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
{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_PERSON_NAME","attr":"$.message.order.fulfillments[*].end.person.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]}
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

                                function TAGS_CANCEL_REQUEST(
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

                                        function CANCEL_REQUEST_ID(
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
                                                        "$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value",
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
                                                                'CANCEL_REQUEST_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CANCEL_REQUEST_ID**

- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
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
                                                        'CANCEL_REQUEST_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function CANCEL_REQUEST_REASON_ID(
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
                                                        "$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value",
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
                                                                'CANCEL_REQUEST_REASON_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CANCEL_REQUEST_REASON_ID**

- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
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
                                                        'CANCEL_REQUEST_REASON_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function CANCEL_REQUEST_INITIATED_BY(
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
                                                        "$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value",
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
                                                                'CANCEL_REQUEST_INITIATED_BY',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CANCEL_REQUEST_INITIATED_BY**

- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}
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
                                                        'CANCEL_REQUEST_INITIATED_BY',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function CANCEL_REQUEST_RETRY_COUNT(
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
                                                        "$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value",
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
                                                                'CANCEL_REQUEST_RETRY_COUNT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CANCEL_REQUEST_RETRY_COUNT**

- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"}
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
                                                        'CANCEL_REQUEST_RETRY_COUNT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function CANCEL_REQUEST_RTO_ID(
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
                                                        "$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value",
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
                                                                'CANCEL_REQUEST_RTO_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CANCEL_REQUEST_RTO_ID**

- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}
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
                                                        'CANCEL_REQUEST_RTO_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                CANCEL_REQUEST_ID,
                                                CANCEL_REQUEST_REASON_ID,
                                                CANCEL_REQUEST_INITIATED_BY,
                                                CANCEL_REQUEST_RETRY_COUNT,
                                                CANCEL_REQUEST_RTO_ID,
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
                                            testName: 'TAGS_CANCEL_REQUEST',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_IGM_REQUEST(
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

                                        function IGM_REQUEST_ID(
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
                                                        "$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value",
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
                                                                'IGM_REQUEST_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **IGM_REQUEST_ID**

- $.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'IGM_REQUEST_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [IGM_REQUEST_ID];

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
                                            testName: 'TAGS_IGM_REQUEST',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_IGM_REQUEST","_RETURN_":[{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_PRE_CANCEL_STATE(
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

                                        function PRE_CANCEL_FULFILLMENT_STATE(
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
                                                        "$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'cancelled',
                                                    'pending',
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
                                                                'PRE_CANCEL_FULFILLMENT_STATE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **PRE_CANCEL_FULFILLMENT_STATE**

**All of the following must be true:**
  - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value must be present in the payload
  - All elements of $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value must be in ["cancelled", "pending"]

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"}
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
                                                        'PRE_CANCEL_FULFILLMENT_STATE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function PRE_CANCEL_UPDATED_AT(
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
                                                        "$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value",
                                                        true
                                                    );
                                                const pattern = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                    validations.followRegex(
                                                        attr,
                                                        pattern
                                                    );

                                                if (!validate) {
                                                    // delete testObj._EXTERNAL;
                                                    return [
                                                        {
                                                            testName:
                                                                'PRE_CANCEL_UPDATED_AT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **PRE_CANCEL_UPDATED_AT**

**All of the following must be true:**
  - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value must be present in the payload
  - All elements of $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}
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
                                                        'PRE_CANCEL_UPDATED_AT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                PRE_CANCEL_FULFILLMENT_STATE,
                                                PRE_CANCEL_UPDATED_AT,
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
                                            testName: 'TAGS_PRE_CANCEL_STATE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_PRE_CANCEL_STATE","_RETURN_":[{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_QUOTE_TRAIL(
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

                                        function QUOTE_TRAIL_TYPE(
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
                                                        "$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value",
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
                                                                'QUOTE_TRAIL_TYPE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **QUOTE_TRAIL_TYPE**

- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}
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
                                                        'QUOTE_TRAIL_TYPE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function QUOTE_TRAIL_ID(
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
                                                        "$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value",
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
                                                                'QUOTE_TRAIL_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **QUOTE_TRAIL_ID**

- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'QUOTE_TRAIL_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function QUOTE_TRAIL_CURRENCY(
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
                                                        "$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value",
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
                                                                'QUOTE_TRAIL_CURRENCY',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **QUOTE_TRAIL_CURRENCY**

- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"}
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
                                                        'QUOTE_TRAIL_CURRENCY',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function QUOTE_TRAIL_VALUE(
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
                                                        "$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value",
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
                                                                'QUOTE_TRAIL_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **QUOTE_TRAIL_VALUE**

- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
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
                                                        'QUOTE_TRAIL_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                QUOTE_TRAIL_TYPE,
                                                QUOTE_TRAIL_ID,
                                                QUOTE_TRAIL_CURRENCY,
                                                QUOTE_TRAIL_VALUE,
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
                                            testName: 'TAGS_QUOTE_TRAIL',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_QUOTE_TRAIL","_RETURN_":[{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    TAGS_CANCEL_REQUEST,
                                    TAGS_IGM_REQUEST,
                                    TAGS_PRE_CANCEL_STATE,
                                    TAGS_QUOTE_TRAIL,
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
{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_IGM_REQUEST","_RETURN_":[{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_PRE_CANCEL_STATE","_RETURN_":[{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]},{"_NAME_":"TAGS_QUOTE_TRAIL","_RETURN_":[{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}]}
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
                            FULFILLMENTS_START,
                            FULFILLMENTS_END,
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
{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_PERSON_NAME","attr":"$.message.order.fulfillments[*].end.person.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_IGM_REQUEST","_RETURN_":[{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_PRE_CANCEL_STATE","_RETURN_":[{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]},{"_NAME_":"TAGS_QUOTE_TRAIL","_RETURN_":[{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}]}]}
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
                                                    'delivery',
                                                    'packing',
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

- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "offer"]`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"}
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
{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"}
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
                                                                        'BREAKUP_ITEM_ITEM_PRICE_CURRENCY',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**

- $.message.order.quote.breakup[*].item.price.currency must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.price.currency is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"}
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
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"}
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
                                                                        'BREAKUP_ITEM_ITEM_PRICE_VALUE',
                                                                    valid: false,
                                                                    code: 30000,
                                                                    description: `#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**

- $.message.order.quote.breakup[*].item.price.value must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.price.value is not in the payload`,
                                                                    _debugInfo:
                                                                        {
                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"}
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
{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"}
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
                                                                                'customization',
                                                                            ];

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

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item", "customization"]`,
                                                                                    _debugInfo:
                                                                                        {
                                                                                            fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}
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
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}
`,
                                                                                },
                                                                        },
                                                                        ...subResults,
                                                                    ];
                                                                }

                                                                const testFunctions: testFunctionArray =
                                                                    [
                                                                        BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE,
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
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}
`,
                                                                        },
                                                                },
                                                                ...subResults,
                                                            ];
                                                        }

                                                        const testFunctions: testFunctionArray =
                                                            [
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
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}
`,
                                                            },
                                                        },
                                                        ...subResults,
                                                    ];
                                                }

                                                const testFunctions: testFunctionArray =
                                                    [
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
{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}]}
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
                                                BREAKUP_ITEM_TITLE_TYPE,
                                                BREAKUP_ITEM_PRICE_CURRENCY,
                                                BREAKUP_ITEM_PRICE_VALUE,
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
{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}]}]}
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
{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
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

                        const testFunctions: testFunctionArray = [
                            QUOTE_PRICE_CURRENCY,
                            QUOTE_PRICE_VALUE,
                            QUOTE_BREAKUP,
                            QUOTE_TTL,
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
{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]},{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}]}
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

                        const testFunctions: testFunctionArray = [
                            PAYMENT_URI,
                            PAYMENT_TL_METHOD,
                            PAYMENT_PARAMS,
                            PAYMENT_STATUS,
                            PAYMENT_TYPE,
                            PAYMENT_COLLECTED_BY,
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
{"_NAME_":"ORDER_PAYMENT_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"}]}
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
                    ORDER_CANCELLATION,
                    ORDER_PROVIDER,
                    ORDER_ITEMS,
                    ORDER_BILLING,
                    ORDER_FULFILLMENTS,
                    ORDER_QUOTE,
                    ORDER_PAYMENT,
                    ORDER_PAYMENT_ADDITIONAL_PROPERTIES,
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
                    testName: 'ON_CANCEL_ORDER',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_ORDER","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.order.id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Cancelled"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ORDER_CANCELLATION","_RETURN_":[{"_NAME_":"CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_PROVIDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ORDER_ITEM_ID","attr":"$.message.order.items[*].id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_ITEM_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_ITEM_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_BILLING","_RETURN_":[{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS","_RETURN_":[{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}]},{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"},{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"},{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_PERSON_NAME","attr":"$.message.order.fulfillments[*].end.person.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_IGM_REQUEST","_RETURN_":[{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_PRE_CANCEL_STATE","_RETURN_":[{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]},{"_NAME_":"TAGS_QUOTE_TRAIL","_RETURN_":[{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}]}]},{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]},{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_PAYMENT_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"}]},{"_NAME_":"ORDER_CREATED_AT","attr":"$.message.order.created_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_UPDATED_AT","attr":"$.message.order.updated_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_CANCEL_CONTEXT,
            ON_CANCEL_ORDER,
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
            testName: 'on_cancelValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_cancelValidations","_RETURN_":[{"_NAME_":"ON_CANCEL_CONTEXT","_DESCRIPTION_":"Validate on_cancel context","action":["on_cancel"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_cancel"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_cancel"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_cancel"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_cancel"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_cancel"]}]}]},{"_NAME_":"ON_CANCEL_ORDER","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.order.id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_STATE","attr":"$.message.order.state","var_enum":["Cancelled"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ORDER_CANCELLATION","_RETURN_":[{"_NAME_":"CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present"},{"_NAME_":"CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_PROVIDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_PROVIDER_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ORDER_ITEM_ID","attr":"$.message.order.items[*].id","pattern":["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_ITEM_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_ITEM_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_BILLING","_RETURN_":[{"_NAME_":"BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS","_RETURN_":[{"_NAME_":"BILLING_ADDRESS_NAME","attr":"$.message.order.billing.address.name","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_BUILDING","attr":"$.message.order.billing.address.building","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_LOCALITY","attr":"$.message.order.billing.address.locality","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_CITY","attr":"$.message.order.billing.address.city","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_STATE","attr":"$.message.order.billing.address.state","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_COUNTRY","attr":"$.message.order.billing.address.country","_RETURN_":"attr are present"},{"_NAME_":"BILLING_ADDRESS_AREA_CODE","attr":"$.message.order.billing.address.area_code","_RETURN_":"attr are present"}]},{"_NAME_":"BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present"},{"_NAME_":"BILLING_EMAIL","attr":"$.message.order.billing.email","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BILLING_CREATED_AT","attr":"$.message.order.billing.created_at","_RETURN_":"attr are present"},{"_NAME_":"BILLING_UPDATED_AT","attr":"$.message.order.billing.updated_at","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Cancelled","RTO-Initiated","RTO-Disposed","RTO-Delivered"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_ONDC_ORG_PROVIDER_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ID","attr":"$.message.order.fulfillments[*].start.location.id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.location.descriptor.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_GPS","attr":"$.message.order.fulfillments[*].start.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].start.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].start.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].start.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].start.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_START_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_START_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_START_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].start.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_START_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].start.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_GPS","attr":"$.message.order.fulfillments[*].end.location.gps","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_NAME","attr":"$.message.order.fulfillments[*].end.location.address.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING","attr":"$.message.order.fulfillments[*].end.location.address.building","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY","attr":"$.message.order.fulfillments[*].end.location.address.locality","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY","attr":"$.message.order.fulfillments[*].end.location.address.country","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_CITY","attr":"$.message.order.fulfillments[*].end.location.address.city","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE","attr":"$.message.order.fulfillments[*].end.location.address.area_code","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_LOCATION_ADDRESS_STATE","attr":"$.message.order.fulfillments[*].end.location.address.state","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_END_TIME","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.start","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_TIME_RANGE_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.time.range.end","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_END_PERSON_NAME","attr":"$.message.order.fulfillments[*].end.person.name","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_CONTACT_PHONE","attr":"$.message.order.fulfillments[*].end.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END_CONTACT_EMAIL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].end.contact.email","_RETURN_":"attr are present"}]}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_RTO_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_IGM_REQUEST","_RETURN_":[{"_NAME_":"IGM_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_PRE_CANCEL_STATE","_RETURN_":[{"_NAME_":"PRE_CANCEL_FULFILLMENT_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value","var_enum":["cancelled","pending"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PRE_CANCEL_UPDATED_AT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]},{"_NAME_":"TAGS_QUOTE_TRAIL","_RETURN_":[{"_NAME_":"QUOTE_TRAIL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_TRAIL_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}]}]},{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","delivery","packing","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item","customization"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]},{"_NAME_":"QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present"}]},{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']","var_enum":["percent","amount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT","attr":"$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr are present && attr follow regex reg"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].upi_address","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].bank_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].branch_name","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_PAYMENT_ADDITIONAL_PROPERTIES","_RETURN_":[{"_NAME_":"PAYMENT_URI","attr":"$.message.order.payment.uri","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TL_METHOD","attr":"$.message.order.payment.tl_method","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_PARAMS","_RETURN_":[{"_NAME_":"PAYMENT_CURRENCY","attr":"$.message.order.payment.params.currency","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_TRANSACTION_ID","attr":"$.message.order.payment.params.transaction_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_AMOUNT","attr":"$.message.order.payment.params.amount","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_STATUS","var_enum":["NOT-PAID","PAID"],"attr":"$.message.order.payment.status","_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_TYPE","attr":"$.message.order.payment.type","var_enum":["ON-ORDER","ON-FULFILLMENT"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"PAYMENT_COLLECTED_BY","var_enum":["BAP","BPP"],"attr":"$.message.order.payment.collected_by","_RETURN_":"attr are present && attr all in var_enum"}]},{"_NAME_":"ORDER_CREATED_AT","attr":"$.message.order.created_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"},{"_NAME_":"ORDER_UPDATED_AT","attr":"$.message.order.updated_at","pattern":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex pattern"}]}]}
`,
            },
        },
        ...subResults,
    ];
}
