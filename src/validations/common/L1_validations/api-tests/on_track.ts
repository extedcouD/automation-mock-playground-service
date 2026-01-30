import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function on_track(input: validationInput): validationOutput {
    let totalResults = on_trackValidations(input);

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
                r => r.testName === 'on_trackValidations'
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

function on_trackValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function ON_TRACK_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const action = ['on_track'];

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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
>     - ["on_track"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
>     - ["on_track"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_track"]}
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
                                const action = ['on_track'];

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
>     - all elements of ["on_track"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_track"]}]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_track"]}
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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_track"]}
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
                                const action = ['on_track'];

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

- All elements of $.context.action must be in ["on_track"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_track"]}
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
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_track"]}
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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_track"]}
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
                                const action = ['on_track'];

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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_track"]}
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
                                const action = ['on_track'];

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
>     - ["on_track"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_track"]}
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
                                const action = ['on_track'];

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
>     - all elements of ["on_track"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_track"]}
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
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_track"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_track"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_track"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_track"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_track"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_track"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_track"]}]}
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
                    testName: 'ON_TRACK_CONTEXT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_TRACK_CONTEXT","_DESCRIPTION_":"Validate on_track context","action":["on_track"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_track"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_track"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_track"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_track"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_track"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_track"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_track"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_TRACK_TRACKING(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function TRACKING_ID(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            '$.message.tracking.id',
                            true
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'TRACKING_ID',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **TRACKING_ID**

- $.message.tracking.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_ID","attr":"$.message.tracking.id","_RETURN_":"attr are present"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'TRACKING_ID',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TRACKING_ID","attr":"$.message.tracking.id","_RETURN_":"attr are present"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TRACKING_STATUS(
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
                            '$.message.tracking.status',
                            true
                        );
                        const var_enum = ['active', 'inactive'];

                        const validate =
                            validations.arePresent(attr) &&
                            validations.allIn(attr, var_enum);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'TRACKING_STATUS',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **TRACKING_STATUS**

**All of the following must be true:**
  - $.message.tracking.status must be present in the payload
  - All elements of $.message.tracking.status must be in ["active", "inactive"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_STATUS","attr":"$.message.tracking.status","var_enum":["active","inactive"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'TRACKING_STATUS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TRACKING_STATUS","attr":"$.message.tracking.status","var_enum":["active","inactive"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TRACKING_LOCATION(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TRACKING_LOCATION_GPS(
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
                                    '$.message.tracking.location.gps',
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'TRACKING_LOCATION_GPS',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TRACKING_LOCATION_GPS**

- $.message.tracking.location.gps must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TRACKING_LOCATION_GPS","attr":"$.message.tracking.location.gps","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TRACKING_LOCATION_GPS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_LOCATION_GPS","attr":"$.message.tracking.location.gps","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TRACKING_LOCATION_TIME_TIMESTAMP(
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
                                    '$.message.tracking.location.time.timestamp',
                                    true
                                );
                                const reg = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const validate = validations.followRegex(
                                    attr,
                                    reg
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TRACKING_LOCATION_TIME_TIMESTAMP',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TRACKING_LOCATION_TIME_TIMESTAMP**

- All elements of $.message.tracking.location.time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TRACKING_LOCATION_TIME_TIMESTAMP","attr":"$.message.tracking.location.time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
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
                                        'TRACKING_LOCATION_TIME_TIMESTAMP',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_LOCATION_TIME_TIMESTAMP","attr":"$.message.tracking.location.time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TRACKING_LOCATION_UPDATED_AT(
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
                                    '$.message.tracking.location.updated_at',
                                    true
                                );
                                const reg = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const validate = validations.followRegex(
                                    attr,
                                    reg
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TRACKING_LOCATION_UPDATED_AT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TRACKING_LOCATION_UPDATED_AT**

- All elements of $.message.tracking.location.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TRACKING_LOCATION_UPDATED_AT","attr":"$.message.tracking.location.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TRACKING_LOCATION_UPDATED_AT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_LOCATION_UPDATED_AT","attr":"$.message.tracking.location.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TRACKING_LOCATION_GPS,
                            TRACKING_LOCATION_TIME_TIMESTAMP,
                            TRACKING_LOCATION_UPDATED_AT,
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
                            testName: 'TRACKING_LOCATION',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TRACKING_LOCATION","_RETURN_":[{"_NAME_":"TRACKING_LOCATION_GPS","attr":"$.message.tracking.location.gps","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_LOCATION_TIME_TIMESTAMP","attr":"$.message.tracking.location.time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"TRACKING_LOCATION_UPDATED_AT","attr":"$.message.tracking.location.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TRACKING_TAGS(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TRACKING_ORDER_TAG(
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

                                function ORDER_ID(
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
                                            "$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value",
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'ORDER_ID',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **ORDER_ID**

- $.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"ORDER_ID","attr":"$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
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
{"_NAME_":"ORDER_ID","attr":"$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    ORDER_ID,
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
                                    testName: 'TRACKING_ORDER_TAG',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_ORDER_TAG","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TRACKING_CONFIG_TAG(
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

                                function CONFIG_ATTR(
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
                                            "$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value",
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'CONFIG_ATTR',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **CONFIG_ATTR**

- $.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CONFIG_ATTR","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'CONFIG_ATTR',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONFIG_ATTR","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function CONFIG_TYPE(
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
                                            "$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value",
                                            true
                                        );
                                        const var_enum = [
                                            'live_poll',
                                            'deferred',
                                        ];

                                        const validate = validations.allIn(
                                            attr,
                                            var_enum
                                        );

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'CONFIG_TYPE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **CONFIG_TYPE**

- All elements of $.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value must be in ["live_poll", "deferred"]`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"CONFIG_TYPE","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value","var_enum":["live_poll","deferred"],"_RETURN_":"attr all in var_enum"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'CONFIG_TYPE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONFIG_TYPE","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value","var_enum":["live_poll","deferred"],"_RETURN_":"attr all in var_enum"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    CONFIG_ATTR,
                                    CONFIG_TYPE,
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
                                    testName: 'TRACKING_CONFIG_TAG',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_CONFIG_TAG","_RETURN_":[{"_NAME_":"CONFIG_ATTR","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value","_RETURN_":"attr are present"},{"_NAME_":"CONFIG_TYPE","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value","var_enum":["live_poll","deferred"],"_RETURN_":"attr all in var_enum"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TRACKING_PATH_TAG(
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

                                function PATH_LAT_LNG(
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
                                            "$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value",
                                            true
                                        );

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'PATH_LAT_LNG',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PATH_LAT_LNG**

- $.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PATH_LAT_LNG","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value","_RETURN_":"attr are present"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'PATH_LAT_LNG',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PATH_LAT_LNG","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function PATH_SEQUENCE(
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
                                            "$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value",
                                            true
                                        );
                                        const var_enum = ['1', '2', '3'];

                                        const validate =
                                            validations.arePresent(attr) &&
                                            validations.allIn(attr, var_enum);

                                        if (!validate) {
                                            // delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: 'PATH_SEQUENCE',
                                                    valid: false,
                                                    code: 30000,
                                                    description: `#### **PATH_SEQUENCE**

**All of the following must be true:**
  - $.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value must be present in the payload
  - All elements of $.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value must be in ["1", "2", "3"]`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"PATH_SEQUENCE","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value","var_enum":["1","2","3"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        // delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: 'PATH_SEQUENCE',
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PATH_SEQUENCE","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value","var_enum":["1","2","3"],"_RETURN_":"attr are present && attr all in var_enum"}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    PATH_LAT_LNG,
                                    PATH_SEQUENCE,
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
                                    testName: 'TRACKING_PATH_TAG',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TRACKING_PATH_TAG","_RETURN_":[{"_NAME_":"PATH_LAT_LNG","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value","_RETURN_":"attr are present"},{"_NAME_":"PATH_SEQUENCE","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value","var_enum":["1","2","3"],"_RETURN_":"attr are present && attr all in var_enum"}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TRACKING_ORDER_TAG,
                            TRACKING_CONFIG_TAG,
                            TRACKING_PATH_TAG,
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
                            testName: 'TRACKING_TAGS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TRACKING_TAGS","_RETURN_":[{"_NAME_":"TRACKING_ORDER_TAG","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TRACKING_CONFIG_TAG","_RETURN_":[{"_NAME_":"CONFIG_ATTR","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value","_RETURN_":"attr are present"},{"_NAME_":"CONFIG_TYPE","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value","var_enum":["live_poll","deferred"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TRACKING_PATH_TAG","_RETURN_":[{"_NAME_":"PATH_LAT_LNG","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value","_RETURN_":"attr are present"},{"_NAME_":"PATH_SEQUENCE","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value","var_enum":["1","2","3"],"_RETURN_":"attr are present && attr all in var_enum"}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    TRACKING_ID,
                    TRACKING_STATUS,
                    TRACKING_LOCATION,
                    TRACKING_TAGS,
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
                    testName: 'ON_TRACK_TRACKING',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_TRACK_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_ID","attr":"$.message.tracking.id","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_STATUS","attr":"$.message.tracking.status","var_enum":["active","inactive"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"TRACKING_LOCATION","_RETURN_":[{"_NAME_":"TRACKING_LOCATION_GPS","attr":"$.message.tracking.location.gps","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_LOCATION_TIME_TIMESTAMP","attr":"$.message.tracking.location.time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"TRACKING_LOCATION_UPDATED_AT","attr":"$.message.tracking.location.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TRACKING_TAGS","_RETURN_":[{"_NAME_":"TRACKING_ORDER_TAG","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TRACKING_CONFIG_TAG","_RETURN_":[{"_NAME_":"CONFIG_ATTR","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value","_RETURN_":"attr are present"},{"_NAME_":"CONFIG_TYPE","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value","var_enum":["live_poll","deferred"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TRACKING_PATH_TAG","_RETURN_":[{"_NAME_":"PATH_LAT_LNG","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value","_RETURN_":"attr are present"},{"_NAME_":"PATH_SEQUENCE","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value","var_enum":["1","2","3"],"_RETURN_":"attr are present && attr all in var_enum"}]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_TRACK_CONTEXT,
            ON_TRACK_TRACKING,
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
            testName: 'on_trackValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_trackValidations","_RETURN_":[{"_NAME_":"ON_TRACK_CONTEXT","_DESCRIPTION_":"Validate on_track context","action":["on_track"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_track"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["on_track"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["on_track"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["on_track"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["on_track"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_track"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["on_track"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["on_track"]}]}]},{"_NAME_":"ON_TRACK_TRACKING","_RETURN_":[{"_NAME_":"TRACKING_ID","attr":"$.message.tracking.id","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_STATUS","attr":"$.message.tracking.status","var_enum":["active","inactive"],"_RETURN_":"attr are present && attr all in var_enum"},{"_NAME_":"TRACKING_LOCATION","_RETURN_":[{"_NAME_":"TRACKING_LOCATION_GPS","attr":"$.message.tracking.location.gps","_RETURN_":"attr are present"},{"_NAME_":"TRACKING_LOCATION_TIME_TIMESTAMP","attr":"$.message.tracking.location.time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"},{"_NAME_":"TRACKING_LOCATION_UPDATED_AT","attr":"$.message.tracking.location.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg"}]},{"_NAME_":"TRACKING_TAGS","_RETURN_":[{"_NAME_":"TRACKING_ORDER_TAG","_RETURN_":[{"_NAME_":"ORDER_ID","attr":"$.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value","_RETURN_":"attr are present"}]},{"_NAME_":"TRACKING_CONFIG_TAG","_RETURN_":[{"_NAME_":"CONFIG_ATTR","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value","_RETURN_":"attr are present"},{"_NAME_":"CONFIG_TYPE","attr":"$.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value","var_enum":["live_poll","deferred"],"_RETURN_":"attr all in var_enum"}]},{"_NAME_":"TRACKING_PATH_TAG","_RETURN_":[{"_NAME_":"PATH_LAT_LNG","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value","_RETURN_":"attr are present"},{"_NAME_":"PATH_SEQUENCE","attr":"$.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value","var_enum":["1","2","3"],"_RETURN_":"attr are present && attr all in var_enum"}]}]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
