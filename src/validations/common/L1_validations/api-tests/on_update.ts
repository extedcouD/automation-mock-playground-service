import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function on_update(input: validationInput): validationOutput {
    let totalResults = on_updateValidations(input);

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
                r => r.testName === 'on_updateValidations'
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

function on_updateValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function ON_UPDATE_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const action = ['on_update'];

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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
>     - ["on_update"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
>     - ["on_update"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_update"]}
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
                                const action = ['on_update'];

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
>     - all elements of ["on_update"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_update"]}]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_update"]}
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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_update"]}
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
                                const action = ['on_update'];

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

- All elements of $.context.action must be in ["on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_update"]}
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
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_update"]}
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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_update"]}
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
                                const action = ['on_update'];

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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_update"]}
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
                                const action = ['on_update'];

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
>     - ["on_update"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_update"]}
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
                                const action = ['on_update'];

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
>     - all elements of ["on_update"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_update"]}
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
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_update"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_update"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_update"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_update"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_update"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_update"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_update"]}]}
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
                    testName: 'ON_UPDATE_CONTEXT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_CONTEXT","_DESCRIPTION_":"Validate on_update context","action":["on_update"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_update"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_update"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_update"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_update"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_update"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_update"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_ORDER(input: validationInput): validationOutput {
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

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_ID',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_ID**

- $.message.order.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present"}
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
{"_NAME_":"ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present"}
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

                                function FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE(
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
                                            '$.message.order.fulfillments[*].end.instructions.additional_desc.content_type',
                                            true
                                        );
                                        const var_enum = [
                                            'text/plain',
                                            'text/html',
                                        ];

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
                                                        'FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE**

- $.message.order.fulfillments[*].end.instructions.additional_desc.content_type must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].end.instructions.additional_desc.content_type is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","attr":"$.message.order.fulfillments[*].end.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
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
                                                'FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","attr":"$.message.order.fulfillments[*].end.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE,
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
{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","attr":"$.message.order.fulfillments[*].end.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}
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

                                function TAGS_RETURN_REQUEST(
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

                                        function RETURN_REQUEST_ID(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value",
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
                                                                'RETURN_REQUEST_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_ID**

- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
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
                                                        'RETURN_REQUEST_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_ITEM_ID(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value",
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
                                                                'RETURN_REQUEST_ITEM_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_ITEM_ID**

- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"}
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
                                                        'RETURN_REQUEST_ITEM_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_PARENT_ITEM_ID(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value",
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
                                                                'RETURN_REQUEST_PARENT_ITEM_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_PARENT_ITEM_ID**

- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"}
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
                                                        'RETURN_REQUEST_PARENT_ITEM_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_ITEM_QUANTITY(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value",
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
                                                                'RETURN_REQUEST_ITEM_QUANTITY',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_ITEM_QUANTITY**

- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"}
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
                                                        'RETURN_REQUEST_ITEM_QUANTITY',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_REASON_ID(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value",
                                                        true
                                                    );
                                                const reg = ['^\\d{3}$'];

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
                                                                'RETURN_REQUEST_REASON_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_REASON_ID**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value must follow every regex in ["^\d{3}$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'RETURN_REQUEST_REASON_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_REASON_DESC(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value",
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
                                                                'RETURN_REQUEST_REASON_DESC',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_REASON_DESC**

- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"}
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
                                                        'RETURN_REQUEST_REASON_DESC',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_IMAGES(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value",
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
                                                                'RETURN_REQUEST_IMAGES',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_IMAGES**

- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"}
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
                                                        'RETURN_REQUEST_IMAGES',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_TTL_APPROVAL(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value",
                                                        true
                                                    );
                                                const reg = ['^PT[0-9]+H$'];

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
                                                                'RETURN_REQUEST_TTL_APPROVAL',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_TTL_APPROVAL**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value must follow every regex in ["^PT[0-9]+H$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'RETURN_REQUEST_TTL_APPROVAL',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RETURN_REQUEST_TTL_REVERSEQC(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value",
                                                        true
                                                    );
                                                const reg = ['^P[0-9]+D$'];

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
                                                                'RETURN_REQUEST_TTL_REVERSEQC',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RETURN_REQUEST_TTL_REVERSEQC**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value must follow every regex in ["^P[0-9]+D$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'RETURN_REQUEST_TTL_REVERSEQC',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                RETURN_REQUEST_ID,
                                                RETURN_REQUEST_ITEM_ID,
                                                RETURN_REQUEST_PARENT_ITEM_ID,
                                                RETURN_REQUEST_ITEM_QUANTITY,
                                                RETURN_REQUEST_REASON_ID,
                                                RETURN_REQUEST_REASON_DESC,
                                                RETURN_REQUEST_IMAGES,
                                                RETURN_REQUEST_TTL_APPROVAL,
                                                RETURN_REQUEST_TTL_REVERSEQC,
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
                                            testName: 'TAGS_RETURN_REQUEST',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_RETURN_REQUEST","_RETURN_":[{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_STATE(
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

                                        function UPDATE_STATE_STATE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value",
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
                                                                'UPDATE_STATE_STATE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **UPDATE_STATE_STATE**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"}
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
                                                        'UPDATE_STATE_STATE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function UPDATE_STATE_REASON_ID(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value",
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
                                                                'UPDATE_STATE_REASON_ID',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **UPDATE_STATE_REASON_ID**

- $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
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
                                                        'UPDATE_STATE_REASON_ID',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                UPDATE_STATE_STATE,
                                                UPDATE_STATE_REASON_ID,
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
                                            testName: 'TAGS_UPDATE_STATE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_STATE","_RETURN_":[{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value",
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

- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"}
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
{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"}
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value",
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

- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
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
{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value",
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

- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}
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
{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                CANCEL_REQUEST_RETRY_COUNT,
                                                CANCEL_REQUEST_REASON_ID,
                                                CANCEL_REQUEST_INITIATED_BY,
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
{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_FULFILLMENT_TIME(
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

                                        function UPDATE_FULFILLMENT_TIME_STATE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'Order-picked-up',
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
                                                                'UPDATE_FULFILLMENT_TIME_STATE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **UPDATE_FULFILLMENT_TIME_STATE**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value must be in ["Order-picked-up"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"}
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
                                                        'UPDATE_FULFILLMENT_TIME_STATE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function UPDATE_FULFILLMENT_TIME_TIMESTAMP(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'UPDATE_FULFILLMENT_TIME_TIMESTAMP',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **UPDATE_FULFILLMENT_TIME_TIMESTAMP**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'UPDATE_FULFILLMENT_TIME_TIMESTAMP',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function UPDATE_FULFILLMENT_TIME_START(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'UPDATE_FULFILLMENT_TIME_START',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **UPDATE_FULFILLMENT_TIME_START**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'UPDATE_FULFILLMENT_TIME_START',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function UPDATE_FULFILLMENT_TIME_END(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'UPDATE_FULFILLMENT_TIME_END',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **UPDATE_FULFILLMENT_TIME_END**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'UPDATE_FULFILLMENT_TIME_END',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                UPDATE_FULFILLMENT_TIME_STATE,
                                                UPDATE_FULFILLMENT_TIME_TIMESTAMP,
                                                UPDATE_FULFILLMENT_TIME_START,
                                                UPDATE_FULFILLMENT_TIME_END,
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
                                                'TAGS_UPDATE_FULFILLMENT_TIME',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_FULFILLMENT_TIME","_RETURN_":[{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_AGENT_DETAILS(
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

                                        function AGENT_NAME(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value",
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
                                                                'AGENT_NAME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **AGENT_NAME**

- $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'AGENT_NAME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function AGENT_PHONE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value",
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
                                                                'AGENT_PHONE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **AGENT_PHONE**

- $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'AGENT_PHONE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [AGENT_NAME, AGENT_PHONE];

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
                                                'TAGS_UPDATE_AGENT_DETAILS',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_AGENT_DETAILS","_RETURN_":[{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"},{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_LABEL(
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

                                        function LABEL_TYPE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'webp',
                                                    'png',
                                                    'jpeg',
                                                    'pdf',
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
                                                                'LABEL_TYPE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **LABEL_TYPE**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value must be in ["webp", "png", "jpeg", "pdf"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'LABEL_TYPE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function LABEL_URL(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value",
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
                                                                'LABEL_URL',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **LABEL_URL**

- $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'LABEL_URL',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function LABEL_SHIPPING(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value",
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
                                                                'LABEL_SHIPPING',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **LABEL_SHIPPING**

- $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'LABEL_SHIPPING',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                LABEL_TYPE,
                                                LABEL_URL,
                                                LABEL_SHIPPING,
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
                                            testName: 'TAGS_UPDATE_LABEL',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_LABEL","_RETURN_":[{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"},{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_REVERSEQC_OUTPUT(
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

                                        function RQC_P001(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value",
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
                                                                'RQC_P001',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RQC_P001**

- $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'RQC_P001',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RQC_P003(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value",
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
                                                                'RQC_P003',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RQC_P003**

- $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'RQC_P003',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function RQC_Q001(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'yes',
                                                    'no',
                                                    'Y',
                                                    'N',
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
                                                                'RQC_Q001',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **RQC_Q001**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value must be in ["yes", "no", "Y", "N"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'RQC_Q001',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [RQC_P001, RQC_P003, RQC_Q001];

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
                                            testName: 'TAGS_REVERSEQC_OUTPUT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_REVERSEQC_OUTPUT","_RETURN_":[{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_BNP_RECEIVABLES_CLAIM(
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

                                        function CLAIM_TYPE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value",
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
                                                                'CLAIM_TYPE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CLAIM_TYPE**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'CLAIM_TYPE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function CLAIM_CURRENCY(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value",
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
                                                                'CLAIM_CURRENCY',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CLAIM_CURRENCY**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'CLAIM_CURRENCY',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function CLAIM_VALUE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value",
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
                                                                'CLAIM_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **CLAIM_VALUE**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'CLAIM_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                CLAIM_TYPE,
                                                CLAIM_CURRENCY,
                                                CLAIM_VALUE,
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
                                                'TAGS_BNP_RECEIVABLES_CLAIM',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BNP_RECEIVABLES_CLAIM","_RETURN_":[{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_BNP_DIFF_WEIGHT(
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

                                        function DIFF_WEIGHT_UNIT(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'unit',
                                                    'dozen',
                                                    'gram',
                                                    'kilogram',
                                                    'tonne',
                                                    'litre',
                                                    'millilitre',
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
                                                                'DIFF_WEIGHT_UNIT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_WEIGHT_UNIT**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value must be in ["unit", "dozen", "gram", "kilogram", "tonne", "litre", "millilitre"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"}
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
                                                        'DIFF_WEIGHT_UNIT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DIFF_WEIGHT_VALUE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value",
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
                                                                'DIFF_WEIGHT_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_WEIGHT_VALUE**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
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
                                                        'DIFF_WEIGHT_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                DIFF_WEIGHT_UNIT,
                                                DIFF_WEIGHT_VALUE,
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
                                            testName: 'TAGS_BNP_DIFF_WEIGHT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BNP_DIFF_WEIGHT","_RETURN_":[{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_BNP_DIFF_LENGTH(
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

                                        function DIFF_LENGTH_UNIT(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value",
                                                        true
                                                    );
                                                const var_enum = [
                                                    'centimeter',
                                                    'meter',
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
                                                                'DIFF_LENGTH_UNIT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_LENGTH_UNIT**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value must be in ["centimeter", "meter"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"}
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
                                                        'DIFF_LENGTH_UNIT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DIFF_LENGTH_VALUE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value",
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
                                                                'DIFF_LENGTH_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_LENGTH_VALUE**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
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
                                                        'DIFF_LENGTH_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                DIFF_LENGTH_UNIT,
                                                DIFF_LENGTH_VALUE,
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
                                            testName: 'TAGS_BNP_DIFF_LENGTH',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BNP_DIFF_LENGTH","_RETURN_":[{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_BNP_DIFF_BREADTH(
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

                                        function DIFF_BREADTH_UNIT(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value",
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
                                                                'DIFF_BREADTH_UNIT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_BREADTH_UNIT**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"}
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
                                                        'DIFF_BREADTH_UNIT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DIFF_BREADTH_VALUE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value",
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
                                                                'DIFF_BREADTH_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_BREADTH_VALUE**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
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
                                                        'DIFF_BREADTH_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                DIFF_BREADTH_UNIT,
                                                DIFF_BREADTH_VALUE,
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
                                            testName: 'TAGS_BNP_DIFF_BREADTH',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BNP_DIFF_BREADTH","_RETURN_":[{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_BNP_DIFF_HEIGHT(
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

                                        function DIFF_HEIGHT_UNIT(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value",
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
                                                                'DIFF_HEIGHT_UNIT',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_HEIGHT_UNIT**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"}
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
                                                        'DIFF_HEIGHT_UNIT',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DIFF_HEIGHT_VALUE(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value",
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
                                                                'DIFF_HEIGHT_VALUE',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DIFF_HEIGHT_VALUE**

- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
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
                                                        'DIFF_HEIGHT_VALUE',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                DIFF_HEIGHT_UNIT,
                                                DIFF_HEIGHT_VALUE,
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
                                            testName: 'TAGS_BNP_DIFF_HEIGHT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BNP_DIFF_HEIGHT","_RETURN_":[{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_STATE_TIMESTAMPS(
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

                                        function STATE_TIMESTAMP(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'STATE_TIMESTAMP',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **STATE_TIMESTAMP**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'STATE_TIMESTAMP',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function STATE_START_TIME(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'STATE_START_TIME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **STATE_START_TIME**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'STATE_START_TIME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function STATE_END_TIME(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'STATE_END_TIME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **STATE_END_TIME**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'STATE_END_TIME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }

                                        const testFunctions: testFunctionArray =
                                            [
                                                STATE_TIMESTAMP,
                                                STATE_START_TIME,
                                                STATE_END_TIME,
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
                                                'TAGS_UPDATE_STATE_TIMESTAMPS',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_STATE_TIMESTAMPS","_RETURN_":[{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_FULFILLMENT_DELAY(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value",
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

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"}
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
{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"}
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value",
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

- $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
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
{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DELAY_START_TIME(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'DELAY_START_TIME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DELAY_START_TIME**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                                        'DELAY_START_TIME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                    },
                                                },
                                                ...subResults,
                                            ];
                                        }
                                        function DELAY_END_TIME(
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
                                                        "$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value",
                                                        true
                                                    );
                                                const reg = [
                                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
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
                                                                'DELAY_END_TIME',
                                                            valid: false,
                                                            code: 30000,
                                                            description: `#### **DELAY_END_TIME**

- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value is not in the payload`,
                                                            _debugInfo: {
                                                                fedConfig: `
{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                                            },
                                                        },
                                                    ];
                                                }

                                                // delete testObj._EXTERNAL;
                                            }
                                            return [
                                                {
                                                    testName: 'DELAY_END_TIME',
                                                    valid: valid,
                                                    code: valid ? 200 : 30000,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                                DELAY_START_TIME,
                                                DELAY_END_TIME,
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
                                                'TAGS_UPDATE_FULFILLMENT_DELAY',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function TAGS_UPDATE_SALE_INVOICE_URL(
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
                                            "$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value",
                                            true
                                        );
                                        const reg = ['^https?://.*$'];

                                        const skipCheck =
                                            !validations.arePresent(attr);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.arePresent(attr) &&
                                            validations.followRegex(attr, reg);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'TAGS_UPDATE_SALE_INVOICE_URL',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **TAGS_UPDATE_SALE_INVOICE_URL**

**All of the following must be true:**
  - $.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value must be present in the payload
  - All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value must follow every regex in ["^https?://.*$"]

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value is not in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"TAGS_UPDATE_SALE_INVOICE_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr are present && attr follow regex reg"}
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
                                                'TAGS_UPDATE_SALE_INVOICE_URL',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_UPDATE_SALE_INVOICE_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr are present && attr follow regex reg"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    TAGS_RETURN_REQUEST,
                                    TAGS_UPDATE_STATE,
                                    TAGS_CANCEL_REQUEST,
                                    TAGS_UPDATE_FULFILLMENT_TIME,
                                    TAGS_UPDATE_AGENT_DETAILS,
                                    TAGS_UPDATE_LABEL,
                                    TAGS_REVERSEQC_OUTPUT,
                                    TAGS_BNP_RECEIVABLES_CLAIM,
                                    TAGS_BNP_DIFF_WEIGHT,
                                    TAGS_BNP_DIFF_LENGTH,
                                    TAGS_BNP_DIFF_BREADTH,
                                    TAGS_BNP_DIFF_HEIGHT,
                                    TAGS_UPDATE_STATE_TIMESTAMPS,
                                    TAGS_UPDATE_FULFILLMENT_DELAY,
                                    TAGS_UPDATE_SALE_INVOICE_URL,
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
{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_RETURN_REQUEST","_RETURN_":[{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_STATE","_RETURN_":[{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_TIME","_RETURN_":[{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_AGENT_DETAILS","_RETURN_":[{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"},{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_LABEL","_RETURN_":[{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"},{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_REVERSEQC_OUTPUT","_RETURN_":[{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TAGS_BNP_RECEIVABLES_CLAIM","_RETURN_":[{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_WEIGHT","_RETURN_":[{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_LENGTH","_RETURN_":[{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_BREADTH","_RETURN_":[{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_HEIGHT","_RETURN_":[{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_STATE_TIMESTAMPS","_RETURN_":[{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_SALE_INVOICE_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr are present && attr follow regex reg"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            FULFILLMENTS_ID,
                            FULFILLMENTS_TYPE,
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
{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","attr":"$.message.order.fulfillments[*].end.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_RETURN_REQUEST","_RETURN_":[{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_STATE","_RETURN_":[{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_TIME","_RETURN_":[{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_AGENT_DETAILS","_RETURN_":[{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"},{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_LABEL","_RETURN_":[{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"},{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_REVERSEQC_OUTPUT","_RETURN_":[{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TAGS_BNP_RECEIVABLES_CLAIM","_RETURN_":[{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_WEIGHT","_RETURN_":[{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_LENGTH","_RETURN_":[{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_BREADTH","_RETURN_":[{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_HEIGHT","_RETURN_":[{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_STATE_TIMESTAMPS","_RETURN_":[{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_SALE_INVOICE_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr are present && attr follow regex reg"}]}]}
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
                                            'wallet',
                                            'netbanking',
                                            'paylater',
                                            'card',
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

- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater", "card"]`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs","wallet","netbanking","paylater","card"],"_RETURN_":"attr all in var_enum"}
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
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs","wallet","netbanking","paylater","card"],"_RETURN_":"attr all in var_enum"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT(
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
                                            "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount",
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT**

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount","_RETURN_":"attr are present"}
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
                                                'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount","_RETURN_":"attr are present"}
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

- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}
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
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}
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
                                    PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT,
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
                                        'PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs","wallet","netbanking","paylater","card"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
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
{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs","wallet","netbanking","paylater","card"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    ORDER_ID,
                    ORDER_FULFILLMENTS,
                    ORDER_PAYMENT,
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
                    testName: 'ON_UPDATE_ORDER',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","attr":"$.message.order.fulfillments[*].end.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_RETURN_REQUEST","_RETURN_":[{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_STATE","_RETURN_":[{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_TIME","_RETURN_":[{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_AGENT_DETAILS","_RETURN_":[{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"},{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_LABEL","_RETURN_":[{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"},{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_REVERSEQC_OUTPUT","_RETURN_":[{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TAGS_BNP_RECEIVABLES_CLAIM","_RETURN_":[{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_WEIGHT","_RETURN_":[{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_LENGTH","_RETURN_":[{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_BREADTH","_RETURN_":[{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_HEIGHT","_RETURN_":[{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_STATE_TIMESTAMPS","_RETURN_":[{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_SALE_INVOICE_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr are present && attr follow regex reg"}]}]},{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs","wallet","netbanking","paylater","card"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_UPDATE_CONTEXT,
            ON_UPDATE_ORDER,
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
            testName: 'on_updateValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_updateValidations","_RETURN_":[{"_NAME_":"ON_UPDATE_CONTEXT","_DESCRIPTION_":"Validate on_update context","action":["on_update"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_update"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_update"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_update"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_update"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_update"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_update"]}]}]},{"_NAME_":"ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_END","_RETURN_":[{"_NAME_":"FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE","attr":"$.message.order.fulfillments[*].end.instructions.additional_desc.content_type","var_enum":["text/plain","text/html"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILLMENTS_TAGS","_RETURN_":[{"_NAME_":"TAGS_RETURN_REQUEST","_RETURN_":[{"_NAME_":"RETURN_REQUEST_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_PARENT_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_ITEM_QUANTITY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value","reg":["^\\d{3}$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_REASON_DESC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_IMAGES","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value","_RETURN_":"attr are present"},{"_NAME_":"RETURN_REQUEST_TTL_APPROVAL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value","reg":["^PT[0-9]+H$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"RETURN_REQUEST_TTL_REVERSEQC","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value","reg":["^P[0-9]+D$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_STATE","_RETURN_":[{"_NAME_":"UPDATE_STATE_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_STATE_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_CANCEL_REQUEST","_RETURN_":[{"_NAME_":"CANCEL_REQUEST_RETRY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"CANCEL_REQUEST_INITIATED_BY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_TIME","_RETURN_":[{"_NAME_":"UPDATE_FULFILLMENT_TIME_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value","var_enum":["Order-picked-up"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_START","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"UPDATE_FULFILLMENT_TIME_END","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_AGENT_DETAILS","_RETURN_":[{"_NAME_":"AGENT_NAME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value","_RETURN_":"attr are present"},{"_NAME_":"AGENT_PHONE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_LABEL","_RETURN_":[{"_NAME_":"LABEL_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value","var_enum":["webp","png","jpeg","pdf"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"LABEL_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value","_RETURN_":"attr are present"},{"_NAME_":"LABEL_SHIPPING","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_REVERSEQC_OUTPUT","_RETURN_":[{"_NAME_":"RQC_P001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_P003","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value","_RETURN_":"attr are present"},{"_NAME_":"RQC_Q001","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value","var_enum":["yes","no","Y","N"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TAGS_BNP_RECEIVABLES_CLAIM","_RETURN_":[{"_NAME_":"CLAIM_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_CURRENCY","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value","_RETURN_":"attr are present"},{"_NAME_":"CLAIM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_WEIGHT","_RETURN_":[{"_NAME_":"DIFF_WEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value","var_enum":["unit","dozen","gram","kilogram","tonne","litre","millilitre"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_WEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_LENGTH","_RETURN_":[{"_NAME_":"DIFF_LENGTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value","var_enum":["centimeter","meter"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DIFF_LENGTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_BREADTH","_RETURN_":[{"_NAME_":"DIFF_BREADTH_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_BREADTH_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_BNP_DIFF_HEIGHT","_RETURN_":[{"_NAME_":"DIFF_HEIGHT_UNIT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value","_RETURN_":"attr are present"},{"_NAME_":"DIFF_HEIGHT_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TAGS_UPDATE_STATE_TIMESTAMPS","_RETURN_":[{"_NAME_":"STATE_TIMESTAMP","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"STATE_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_FULFILLMENT_DELAY","_RETURN_":[{"_NAME_":"DELAY_STATE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value","var_enum":["Order-picked-up","Order-delivered"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"DELAY_REASON_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value","_RETURN_":"attr are present"},{"_NAME_":"DELAY_START_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"DELAY_END_TIME","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TAGS_UPDATE_SALE_INVOICE_URL","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value","reg":["^https?://.*$"],"_RETURN_":"attr are present && attr follow regex reg"}]}]},{"_NAME_":"ORDER_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS","_RETURN_":[{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type","var_enum":["upi","neft","rtgs","wallet","netbanking","paylater","card"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP","attr":"$.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp","_RETURN_":"attr are present"}]}]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
