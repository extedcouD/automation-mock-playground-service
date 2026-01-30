import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function on_select(input: validationInput): validationOutput {
    let totalResults = on_selectValidations(input);

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
                r => r.testName === 'on_selectValidations'
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

function on_selectValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function ON_SELECT_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const action = ['on_select'];

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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
>     - ["on_select"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
>     - ["on_select"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"]}
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
                                const action = ['on_select'];

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
>     - all elements of ["on_select"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_select"]}]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_select"]}
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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_select"]}
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
                                const action = ['on_select'];

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

- All elements of $.context.action must be in ["on_select"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_select"]}
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
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_select"]}
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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_select"]}
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
                                const action = ['on_select'];

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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"]}
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
                                const action = ['on_select'];

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
>     - ["on_select"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_select"]}
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
                                const action = ['on_select'];

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
>     - all elements of ["on_select"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_select"]}
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
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_select"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_select"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_select"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_select"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_select"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_select"]}]}
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
                    testName: 'ON_SELECT_CONTEXT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_CONTEXT","_DESCRIPTION_":"Validate on_select context","action":["on_select"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_select"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_select"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_select"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_select"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_select"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ORDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function ORDER_PROVIDER(
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
                            '$.message.order.provider.id',
                            true
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ORDER_PROVIDER',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ORDER_PROVIDER**

- $.message.order.provider.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ORDER_PROVIDER',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present"}
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

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ITEMS_PARENT_ITEM_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEMS_PARENT_ITEM_ID**

- $.message.order.items[*].parent_item_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present"}
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
{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present"}
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
{"_NAME_":"ITEMS_TAGS_PARENT_ID","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
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
{"_NAME_":"ITEMS_TAGS_PARENT_ID","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
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
{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ITEMS_ID,
                            ITEMS_FULFILLMENT_ID,
                            ITEMS_PARENT_ITEM_ID,
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
{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}]}
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
                        function FULFILLMENTS_PROVIDER_NAME(
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

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'FULFILLMENTS_PROVIDER_NAME',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_PROVIDER_NAME**

- $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_PROVIDER_NAME","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_PROVIDER_NAME',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_PROVIDER_NAME","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"}
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

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_TRACKING',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_TRACKING**

- $.message.order.fulfillments[*].tracking must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_TRACKING","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"}
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
{"_NAME_":"FULFILLMENTS_TRACKING","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_CATEGORY(
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
                                    "$.message.order.fulfillments[*]['@ondc/org/category']",
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_CATEGORY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_CATEGORY**

- $.message.order.fulfillments[*]['@ondc/org/category'] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*]['@ondc/org/category']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_CATEGORY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*]['@ondc/org/category']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_TAT(
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

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_TAT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_TAT**

- $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_TAT","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_TAT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_TAT","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILLMENTS_STATE_CODE(
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
                                    'Serviceable',
                                    'Non-serviceable',
                                ];

                                const validate = validations.allIn(
                                    attr,
                                    var_enum
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILLMENTS_STATE_CODE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILLMENTS_STATE_CODE**

- All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["Serviceable", "Non-serviceable"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILLMENTS_STATE_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Serviceable","Non-serviceable"],"_RETURN_":"attr all in var_enum"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILLMENTS_STATE_CODE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILLMENTS_STATE_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Serviceable","Non-serviceable"],"_RETURN_":"attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            FULFILLMENTS_ID,
                            FULFILLMENTS_PROVIDER_NAME,
                            FULFILLMENTS_TRACKING,
                            FULFILLMENTS_CATEGORY,
                            FULFILLMENTS_TAT,
                            FULFILLMENTS_STATE_CODE,
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
{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_PROVIDER_NAME","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*]['@ondc/org/category']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TAT","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Serviceable","Non-serviceable"],"_RETURN_":"attr all in var_enum"}]}
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
                function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value",
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
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID**

- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value",
                                    true
                                );
                                const var_enum = ['delivery', 'discount'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE**

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value must be in ["delivery", "discount"]

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value","var_enum":["delivery","discount"],"_RETURN_":"attr all in var_enum"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value","var_enum":["delivery","discount"],"_RETURN_":"attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value",
                                    true
                                );
                                const var_enum = ['yes', 'no'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO**

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value must be in ["yes", "no"]

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value",
                                    true
                                );
                                const var_enum = ['yes', 'no'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE**

- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value must be in ["yes", "no"]

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value",
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
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID**

- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value",
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
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE**

- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value","_RETURN_":"attr are present"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT(
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
                                    "$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value",
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
                                                'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT**

- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value","_RETURN_":"attr are present"}
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
                                        'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID,
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE,
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO,
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE,
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID,
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE,
                            BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT,
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
                            testName: 'BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value","var_enum":["delivery","discount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ERROR(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function ERROR_TYPE(
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
                                    '$.error.type',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ERROR_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ERROR_TYPE**

- $.error.type must be present in the payload

> **Skip if:**
>
>     - $.error.type is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ERROR_TYPE","attr":"$.error.type","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ERROR_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ERROR_TYPE","attr":"$.error.type","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ERROR_CODE(
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
                                    '$.error.code',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ERROR_CODE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ERROR_CODE**

- $.error.code must be present in the payload

> **Skip if:**
>
>     - $.error.code is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ERROR_CODE","attr":"$.error.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ERROR_CODE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ERROR_CODE","attr":"$.error.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ERROR_MESSAGE(
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
                                    '$.error.message',
                                    true
                                );

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'ERROR_MESSAGE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ERROR_MESSAGE**

- $.error.message must be present in the payload

> **Skip if:**
>
>     - $.error.message is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'ERROR_MESSAGE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ERROR_TYPE,
                            ERROR_CODE,
                            ERROR_MESSAGE,
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
                            testName: 'ERROR',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ERROR","_RETURN_":[{"_NAME_":"ERROR_TYPE","attr":"$.error.type","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ERROR_CODE","attr":"$.error.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    ORDER_PROVIDER,
                    ORDER_ITEMS,
                    ORDER_FULFILLMENTS,
                    ORDER_QUOTE,
                    BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER,
                    ERROR,
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
                    testName: 'ON_SELECT_ORDER',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ORDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_PROVIDER_NAME","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*]['@ondc/org/category']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TAT","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Serviceable","Non-serviceable"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}]},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value","var_enum":["delivery","discount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value","_RETURN_":"attr are present"}]},{"_NAME_":"ERROR","_RETURN_":[{"_NAME_":"ERROR_TYPE","attr":"$.error.type","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ERROR_CODE","attr":"$.error.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_SELECT_CONTEXT,
            ON_SELECT_ORDER,
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
            testName: 'on_selectValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_selectValidations","_RETURN_":[{"_NAME_":"ON_SELECT_CONTEXT","_DESCRIPTION_":"Validate on_select context","action":["on_select"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_select"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_select"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_select"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_select"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_select"]}]}]},{"_NAME_":"ON_SELECT_ORDER","_RETURN_":[{"_NAME_":"ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present"},{"_NAME_":"ORDER_ITEMS","_RETURN_":[{"_NAME_":"ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_FULFILLMENT_ID","attr":"$.message.order.items[*].fulfillment_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_QUANTITY_COUNT","attr":"$.message.order.items[*].quantity.count","_RETURN_":"attr are present"},{"_NAME_":"ITEMS_TAGS","_RETURN_":[{"_NAME_":"ITEMS_TAGS_TYPE","attr":"$.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"ITEMS_TAGS_PARENT_ID","attr":"$.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}]},{"_NAME_":"ORDER_FULFILLMENTS","_RETURN_":[{"_NAME_":"FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_PROVIDER_NAME","attr":"$.message.order.fulfillments[*]['@ondc/org/provider_name']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TRACKING","attr":"$.message.order.fulfillments[*].tracking","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*]['@ondc/org/category']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_TAT","attr":"$.message.order.fulfillments[*]['@ondc/org/TAT']","_RETURN_":"attr are present"},{"_NAME_":"FULFILLMENTS_STATE_CODE","attr":"$.message.order.fulfillments[*].state.descriptor.code","var_enum":["Serviceable","Non-serviceable"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"ORDER_QUOTE","_RETURN_":[{"_NAME_":"QUOTE_PRICE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_PRICE_VALUE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present"},{"_NAME_":"QUOTE_BREAKUP","_RETURN_":[{"_NAME_":"BREAKUP_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ID","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_id']","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_QUANTITY_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TITLE_TYPE","attr":"$.message.order.quote.breakup[*]['@ondc/org/title_type']","var_enum":["item","tax","misc","discount","offer"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_TTL","attr":"$.message.order.quote.breakup[*].ttl","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_PARENT_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.parent_item_id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.available.count","var_enum":["99","0"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.quantity.maximum.count","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value","var_enum":["item","customization"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_PARENT_ID","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value","var_enum":["fulfillment","order","item"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value","var_enum":["delivery","packaging","misc"],"_RETURN_":"attr all in var_enum"}]}]}]}]}]}]},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER","_RETURN_":[{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value","var_enum":["delivery","discount"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value","var_enum":["yes","no"],"_RETURN_":"attr all in var_enum"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value","_RETURN_":"attr are present"},{"_NAME_":"BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT","_CONTINUE_":"!(attr are present)","attr":"$.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value","_RETURN_":"attr are present"}]},{"_NAME_":"ERROR","_RETURN_":[{"_NAME_":"ERROR_TYPE","attr":"$.error.type","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ERROR_CODE","attr":"$.error.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
