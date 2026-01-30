import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function search(input: validationInput): validationOutput {
    let totalResults = searchValidations(input);

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
                r => r.testName === 'searchValidations'
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

function searchValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function SEARCH_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const action = ['search'];
                const core_version = payloadUtils.getJsonPath(
                    testObj,
                    '$.context.core_version',
                    true
                );
                const var_120 = ['1.2.0'];

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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
>     - ["search"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
>     - ["search"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
>     - all elements of ["search"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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

- All elements of $.context.action must be in ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
>     - ["search"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
                                const action = ['search'];
                                const core_version = payloadUtils.getJsonPath(
                                    testObj,
                                    '$._EXTERNAL._SELF.context.core_version',
                                    true
                                );
                                const var_120 = ['1.2.0'];

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
>     - all elements of ["search"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}]}
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
                    testName: 'SEARCH_CONTEXT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_CONTEXT","_DESCRIPTION_":"Validate search context","action":["search"],"core_version":"$.context.core_version","var_120":["1.2.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_PAYMENT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function PAYMENT_REQUIRED(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function PAYMENT_REQUIRED_TYPE(
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
                                    "$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']",
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_REQUIRED_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_REQUIRED_TYPE**

- $.message.intent.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_REQUIRED_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_REQUIRED_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_REQUIRED_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_REQUIRED_AMOUNT(
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
                                    "$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']",
                                    true
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_REQUIRED_AMOUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_REQUIRED_AMOUNT**

- $.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_REQUIRED_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_REQUIRED_AMOUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_REQUIRED_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            PAYMENT_REQUIRED_TYPE,
                            PAYMENT_REQUIRED_AMOUNT,
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
                            testName: 'PAYMENT_REQUIRED',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"PAYMENT_REQUIRED","_RETURN_":[{"_NAME_":"PAYMENT_REQUIRED_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_REQUIRED_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function PAYMENT_ENUM(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function PAYMENT_ENUM_TYPE(
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
                                    "$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']",
                                    true
                                );
                                const var_fee_type = ['percent', 'amount'];

                                const validate = validations.allIn(
                                    attr,
                                    var_fee_type
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_ENUM_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_ENUM_TYPE**

- All elements of $.message.intent.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_ENUM_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","var_fee_type":["percent","amount"],"_RETURN_":"attr all in var_fee_type"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_ENUM_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_ENUM_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","var_fee_type":["percent","amount"],"_RETURN_":"attr all in var_fee_type"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function PAYMENT_REGEX_AMOUNT(
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
                                    "$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']",
                                    true
                                );
                                const reg = ['^(\\d*.?\\d{1,2})$'];

                                const validate = validations.followRegex(
                                    attr,
                                    reg
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'PAYMENT_REGEX_AMOUNT',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **PAYMENT_REGEX_AMOUNT**

- All elements of $.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"PAYMENT_REGEX_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr follow regex reg"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'PAYMENT_REGEX_AMOUNT',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_REGEX_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr follow regex reg"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            PAYMENT_ENUM_TYPE,
                            PAYMENT_REGEX_AMOUNT,
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
                            testName: 'PAYMENT_ENUM',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"PAYMENT_ENUM","_RETURN_":[{"_NAME_":"PAYMENT_ENUM_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","var_fee_type":["percent","amount"],"_RETURN_":"attr all in var_fee_type"},{"_NAME_":"PAYMENT_REGEX_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr follow regex reg"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    PAYMENT_REQUIRED,
                    PAYMENT_ENUM,
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
                    testName: 'SEARCH_PAYMENT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_REQUIRED","_RETURN_":[{"_NAME_":"PAYMENT_REQUIRED_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_REQUIRED_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_ENUM","_RETURN_":[{"_NAME_":"PAYMENT_ENUM_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","var_fee_type":["percent","amount"],"_RETURN_":"attr all in var_fee_type"},{"_NAME_":"PAYMENT_REGEX_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr follow regex reg"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_FULFILMENT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function FULFILMENT_REQUIRED(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function FULFILMENT_OPTIONAL_TYPE_ENUM(
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
                                    '$.message.intent.fulfillment.type',
                                    true
                                );
                                const allowed_types = [
                                    'Delivery',
                                    'Self-Pickup',
                                    'Delivery and Self-Pickup',
                                    'Buyer-Delivery',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    allowed_types
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'FULFILMENT_OPTIONAL_TYPE_ENUM',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILMENT_OPTIONAL_TYPE_ENUM**

- All elements of $.message.intent.fulfillment.type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup", "Buyer-Delivery"]

> **Skip if:**
>
>     - $.message.intent.fulfillment.type is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILMENT_OPTIONAL_TYPE_ENUM","attr":"$.message.intent.fulfillment.type","allowed_types":["Delivery","Self-Pickup","Delivery and Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in allowed_types"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILMENT_OPTIONAL_TYPE_ENUM',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILMENT_OPTIONAL_TYPE_ENUM","attr":"$.message.intent.fulfillment.type","allowed_types":["Delivery","Self-Pickup","Delivery and Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in allowed_types"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILMENT_REQUIRED_END_LOCATION_GPS(
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
                                    '$.message.intent.fulfillment.end.location.gps',
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
                                                'FULFILMENT_REQUIRED_END_LOCATION_GPS',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILMENT_REQUIRED_END_LOCATION_GPS**

- $.message.intent.fulfillment.end.location.gps must be present in the payload

> **Skip if:**
>
>     - $.message.intent.fulfillment.end.location.gps is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_GPS","attr":"$.message.intent.fulfillment.end.location.gps","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
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
                                        'FULFILMENT_REQUIRED_END_LOCATION_GPS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_GPS","attr":"$.message.intent.fulfillment.end.location.gps","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE(
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
                                    '$.message.intent.fulfillment.end.location.address.area_code',
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
                                                'FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE**

- $.message.intent.fulfillment.end.location.address.area_code must be present in the payload

> **Skip if:**
>
>     - $.message.intent.fulfillment.end.location.address.area_code is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE","attr":"$.message.intent.fulfillment.end.location.address.area_code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
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
                                        'FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE","attr":"$.message.intent.fulfillment.end.location.address.area_code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            FULFILMENT_OPTIONAL_TYPE_ENUM,
                            FULFILMENT_REQUIRED_END_LOCATION_GPS,
                            FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE,
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
                            testName: 'FULFILMENT_REQUIRED',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"FULFILMENT_REQUIRED","_RETURN_":[{"_NAME_":"FULFILMENT_OPTIONAL_TYPE_ENUM","attr":"$.message.intent.fulfillment.type","allowed_types":["Delivery","Self-Pickup","Delivery and Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in allowed_types"},{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_GPS","attr":"$.message.intent.fulfillment.end.location.gps","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE","attr":"$.message.intent.fulfillment.end.location.address.area_code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function FULFILMENT_ENUM(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function FULFILMENT_ENUM_TYPE(
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
                                    '$.message.intent.fulfillment.type',
                                    true
                                );
                                const var_types = [
                                    'Delivery',
                                    'Self-Pickup',
                                    'Buyer-Delivery',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_types
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'FULFILMENT_ENUM_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **FULFILMENT_ENUM_TYPE**

- All elements of $.message.intent.fulfillment.type must be in ["Delivery", "Self-Pickup", "Buyer-Delivery"]

> **Skip if:**
>
>     - $.message.intent.fulfillment.type is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"FULFILMENT_ENUM_TYPE","attr":"$.message.intent.fulfillment.type","var_types":["Delivery","Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_types"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'FULFILMENT_ENUM_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"FULFILMENT_ENUM_TYPE","attr":"$.message.intent.fulfillment.type","var_types":["Delivery","Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_types"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            FULFILMENT_ENUM_TYPE,
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
                            testName: 'FULFILMENT_ENUM',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"FULFILMENT_ENUM","_RETURN_":[{"_NAME_":"FULFILMENT_ENUM_TYPE","attr":"$.message.intent.fulfillment.type","var_types":["Delivery","Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_types"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    FULFILMENT_REQUIRED,
                    FULFILMENT_ENUM,
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
                    testName: 'SEARCH_FULFILMENT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_FULFILMENT","_RETURN_":[{"_NAME_":"FULFILMENT_REQUIRED","_RETURN_":[{"_NAME_":"FULFILMENT_OPTIONAL_TYPE_ENUM","attr":"$.message.intent.fulfillment.type","allowed_types":["Delivery","Self-Pickup","Delivery and Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in allowed_types"},{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_GPS","attr":"$.message.intent.fulfillment.end.location.gps","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE","attr":"$.message.intent.fulfillment.end.location.address.area_code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILMENT_ENUM","_RETURN_":[{"_NAME_":"FULFILMENT_ENUM_TYPE","attr":"$.message.intent.fulfillment.type","var_types":["Delivery","Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_types"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_ITEM(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function ITEM_REQUIRED_DESCRIPTOR_NAME(
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
                            '$.message.intent.item.descriptor.name',
                            true
                        );

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'ITEM_REQUIRED_DESCRIPTOR_NAME',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ITEM_REQUIRED_DESCRIPTOR_NAME**

- $.message.intent.item.descriptor.name must be present in the payload

> **Skip if:**
>
>     - $.message.intent.item.descriptor.name is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEM_REQUIRED_DESCRIPTOR_NAME","attr":"$.message.intent.item.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'ITEM_REQUIRED_DESCRIPTOR_NAME',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ITEM_REQUIRED_DESCRIPTOR_NAME","attr":"$.message.intent.item.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    ITEM_REQUIRED_DESCRIPTOR_NAME,
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
                    testName: 'SEARCH_ITEM',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_ITEM","_RETURN_":[{"_NAME_":"ITEM_REQUIRED_DESCRIPTOR_NAME","attr":"$.message.intent.item.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_CATEGORY(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function CATEGORY_REQUIRED_ID(
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
                            '$.message.intent.category.id',
                            true
                        );

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'CATEGORY_REQUIRED_ID',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **CATEGORY_REQUIRED_ID**

- $.message.intent.category.id must be present in the payload

> **Skip if:**
>
>     - $.message.intent.category.id is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CATEGORY_REQUIRED_ID","attr":"$.message.intent.category.id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'CATEGORY_REQUIRED_ID',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CATEGORY_REQUIRED_ID","attr":"$.message.intent.category.id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [CATEGORY_REQUIRED_ID];

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
                    testName: 'SEARCH_CATEGORY',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_CATEGORY","_RETURN_":[{"_NAME_":"CATEGORY_REQUIRED_ID","attr":"$.message.intent.category.id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_TAGS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;

                function SEARCH_TAG_INTENT_GROUP(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;
                        const code = payloadUtils.getJsonPath(
                            testObj,
                            '$.message.intent.tags[*].code',
                            true
                        );
                        const var_codes = [
                            'catalog_inc',
                            'bap_terms',
                            'catalog_full',
                            'bnp_features',
                            'bap_features',
                            'bap_promos',
                        ];

                        const skipCheck = !validations.arePresent(code);
                        if (skipCheck) continue;

                        const validate = validations.allIn(code, var_codes);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: 'SEARCH_TAG_INTENT_GROUP',
                                    valid: false,
                                    code: 30000,
                                    description: `#### **SEARCH_TAG_INTENT_GROUP**

- All elements of $.message.intent.tags[*].code must be in ["catalog_inc", "bap_terms", "catalog_full", "bnp_features", "bap_features", "bap_promos"]

> **Skip if:**
>
>     - $.message.intent.tags[*].code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"SEARCH_TAG_INTENT_GROUP","code":"$.message.intent.tags[*].code","_CONTINUE_":"!(code are present)","var_codes":["catalog_inc","bap_terms","catalog_full","bnp_features","bap_features","bap_promos"],"_RETURN_":"code all in var_codes"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: 'SEARCH_TAG_INTENT_GROUP',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"SEARCH_TAG_INTENT_GROUP","code":"$.message.intent.tags[*].code","_CONTINUE_":"!(code are present)","var_codes":["catalog_inc","bap_terms","catalog_full","bnp_features","bap_features","bap_promos"],"_RETURN_":"code all in var_codes"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TAGS_BNP_FEATURES(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TAGS_BNP_FEATURES_PAYLOAD_TYPE(
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
                                    "$.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value",
                                    true
                                );
                                const var_payload_types = ['link', 'inline'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.anyIn(
                                    attr,
                                    var_payload_types
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BNP_FEATURES_PAYLOAD_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BNP_FEATURES_PAYLOAD_TYPE**

- At least one of $.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value must be in ["link", "inline"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BNP_FEATURES_PAYLOAD_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value","var_payload_types":["link","inline"],"_RETURN_":"attr any in var_payload_types"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BNP_FEATURES_PAYLOAD_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BNP_FEATURES_PAYLOAD_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value","var_payload_types":["link","inline"],"_RETURN_":"attr any in var_payload_types"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TAGS_BNP_FEATURES_PAYLOAD_TYPE,
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
                            testName: 'TAGS_BNP_FEATURES',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TAGS_BNP_FEATURES","_RETURN_":[{"_NAME_":"TAGS_BNP_FEATURES_PAYLOAD_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value","var_payload_types":["link","inline"],"_RETURN_":"attr any in var_payload_types"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TAGS_BAP_TERMS(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TAGS_BAP_TERMS_STATIC_TERMS(
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
                                    "$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value",
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
                                                'TAGS_BAP_TERMS_STATIC_TERMS',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_TERMS_STATIC_TERMS**

- $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value must be present in the payload

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value","_RETURN_":"attr are present"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_TERMS_STATIC_TERMS',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value","_RETURN_":"attr are present"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_BAP_TERMS_STATIC_TERMS_NEW(
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
                                    "$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value",
                                    true
                                );
                                const var_enum_static_terms_new = [
                                    'https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_static_terms_new
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BAP_TERMS_STATIC_TERMS_NEW',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_TERMS_STATIC_TERMS_NEW**

- All elements of $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value must be in ["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS_NEW","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value","var_enum_static_terms_new":["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"],"_RETURN_":"attr all in var_enum_static_terms_new"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_TERMS_STATIC_TERMS_NEW',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS_NEW","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value","var_enum_static_terms_new":["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"],"_RETURN_":"attr all in var_enum_static_terms_new"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_BAP_TERMS_EFFECTIVE_DATE(
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
                                    "$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value",
                                    true
                                );
                                const var_date_regex = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    var_date_regex
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BAP_TERMS_EFFECTIVE_DATE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_TERMS_EFFECTIVE_DATE**

- All elements of $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS_EFFECTIVE_DATE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value","var_date_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex var_date_regex"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_TERMS_EFFECTIVE_DATE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS_EFFECTIVE_DATE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value","var_date_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex var_date_regex"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TAGS_BAP_TERMS_STATIC_TERMS,
                            TAGS_BAP_TERMS_STATIC_TERMS_NEW,
                            TAGS_BAP_TERMS_EFFECTIVE_DATE,
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
                            testName: 'TAGS_BAP_TERMS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TAGS_BAP_TERMS","_RETURN_":[{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value","_RETURN_":"attr are present"},{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS_NEW","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value","var_enum_static_terms_new":["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"],"_RETURN_":"attr all in var_enum_static_terms_new"},{"_NAME_":"TAGS_BAP_TERMS_EFFECTIVE_DATE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value","var_date_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex var_date_regex"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TAGS_CATALOG_FULL(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TAGS_CATALOG_FULL_PAYLOAD_TYPE(
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
                                    "$.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value",
                                    true
                                );
                                const var_enum_payload_type = ['link'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_payload_type
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_CATALOG_FULL_PAYLOAD_TYPE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_CATALOG_FULL_PAYLOAD_TYPE**

- All elements of $.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value must be in ["link"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_CATALOG_FULL_PAYLOAD_TYPE","attr":"$.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value","var_enum_payload_type":["link"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_payload_type"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_CATALOG_FULL_PAYLOAD_TYPE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_CATALOG_FULL_PAYLOAD_TYPE","attr":"$.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value","var_enum_payload_type":["link"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_payload_type"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TAGS_CATALOG_FULL_PAYLOAD_TYPE,
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
                            testName: 'TAGS_CATALOG_FULL',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TAGS_CATALOG_FULL","_RETURN_":[{"_NAME_":"TAGS_CATALOG_FULL_PAYLOAD_TYPE","attr":"$.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value","var_enum_payload_type":["link"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_payload_type"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TAGS_CATALOG_INC(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TAGS_CATALOG_INC_START_TIME(
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
                                    "$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value",
                                    true
                                );
                                const var_datetime_regex = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    var_datetime_regex
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_CATALOG_INC_START_TIME',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_CATALOG_INC_START_TIME**

- All elements of $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC_START_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_CATALOG_INC_START_TIME',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC_START_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_CATALOG_INC_END_TIME(
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
                                    "$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value",
                                    true
                                );
                                const var_datetime_regex = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    var_datetime_regex
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_CATALOG_INC_END_TIME',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_CATALOG_INC_END_TIME**

- All elements of $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC_END_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_CATALOG_INC_END_TIME',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC_END_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_CATALOG_INC_MODE(
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
                                    "$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value",
                                    true
                                );
                                const var_enum_mode = ['start', 'stop'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_mode
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'TAGS_CATALOG_INC_MODE',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_CATALOG_INC_MODE**

- All elements of $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value must be in ["start", "stop"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC_MODE","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value","var_enum_mode":["start","stop"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_mode"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_CATALOG_INC_MODE',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC_MODE","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value","var_enum_mode":["start","stop"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_mode"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TAGS_CATALOG_INC_START_TIME,
                            TAGS_CATALOG_INC_END_TIME,
                            TAGS_CATALOG_INC_MODE,
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
                            testName: 'TAGS_CATALOG_INC',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TAGS_CATALOG_INC","_RETURN_":[{"_NAME_":"TAGS_CATALOG_INC_START_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_CATALOG_INC_END_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_CATALOG_INC_MODE","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value","var_enum_mode":["start","stop"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_mode"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TAGS_BAP_FEATURES(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TAGS_BAP_FEATURES_ITEM_1(
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
                                    "$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value",
                                    true
                                );
                                const var_enum_bap_features = ['yes', 'no'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_bap_features
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BAP_FEATURES_ITEM_1',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_FEATURES_ITEM_1**

- All elements of $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value must be in ["yes", "no"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES_ITEM_1","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_FEATURES_ITEM_1',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES_ITEM_1","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_BAP_FEATURES_ITEM_2(
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
                                    "$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value",
                                    true
                                );
                                const var_enum_bap_features = ['yes', 'no'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_bap_features
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BAP_FEATURES_ITEM_2',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_FEATURES_ITEM_2**

- All elements of $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value must be in ["yes", "no"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES_ITEM_2","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_FEATURES_ITEM_2',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES_ITEM_2","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_BAP_FEATURES_ITEM_3(
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
                                    "$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value",
                                    true
                                );
                                const var_enum_bap_features = ['yes', 'no'];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_bap_features
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BAP_FEATURES_ITEM_3',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_FEATURES_ITEM_3**

- All elements of $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value must be in ["yes", "no"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES_ITEM_3","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_FEATURES_ITEM_3',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES_ITEM_3","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TAGS_BAP_FEATURES_ITEM_1,
                            TAGS_BAP_FEATURES_ITEM_2,
                            TAGS_BAP_FEATURES_ITEM_3,
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
                            testName: 'TAGS_BAP_FEATURES',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TAGS_BAP_FEATURES","_RETURN_":[{"_NAME_":"TAGS_BAP_FEATURES_ITEM_1","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"},{"_NAME_":"TAGS_BAP_FEATURES_ITEM_2","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"},{"_NAME_":"TAGS_BAP_FEATURES_ITEM_3","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function TAGS_BAP_PROMOS(
                    input: validationInput
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, '$');
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== 'object') continue;
                        testObj._EXTERNAL = input.externalData;

                        function TAGS_BAP_PROMOS_CATEGORY(
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
                                    "$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value",
                                    true
                                );
                                const var_enum_promo_categories = [
                                    'Fruits and Vegetables',
                                    'Masala & Seasoning',
                                    'Oil & Ghee',
                                    'Eggs, Meat & Fish',
                                    'Bakery, Cakes & Dairy',
                                    'Pet Care',
                                    'Detergents and Dishwash',
                                    'Dairy and Cheese',
                                    'Snacks, Dry Fruits, Nuts',
                                    'Pasta, Soup and Noodles',
                                    'Cereals and Breakfast',
                                    'Sauces, Spreads and Dips',
                                    'Chocolates and Biscuits',
                                    'Cooking and Baking Needs',
                                    'Tinned and Processed Food',
                                    'Atta, Flours and Sooji',
                                    'Rice and Rice Products',
                                    'Dals and Pulses',
                                    'Salt, Sugar and Jaggery',
                                    'Energy and Soft Drinks',
                                    'Water',
                                    'Tea and Coffee',
                                    'Fruit Juices and Fruit Drinks',
                                    'Snacks and Namkeen',
                                    'Ready to Cook and Eat',
                                    'Pickles and Chutney',
                                    'Indian Sweets',
                                    'Frozen Vegetables',
                                    'Frozen Snacks',
                                    'Gift Voucher',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    attr,
                                    var_enum_promo_categories
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                'TAGS_BAP_PROMOS_CATEGORY',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_PROMOS_CATEGORY**

- All elements of $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value must be in ["Fruits and Vegetables", "Masala & Seasoning", "Oil & Ghee", "Eggs, Meat & Fish", "Bakery, Cakes & Dairy", "Pet Care", "Detergents and Dishwash", "Dairy and Cheese", "Snacks, Dry Fruits, Nuts", "Pasta, Soup and Noodles", "Cereals and Breakfast", "Sauces, Spreads and Dips", "Chocolates and Biscuits", "Cooking and Baking Needs", "Tinned and Processed Food", "Atta, Flours and Sooji", "Rice and Rice Products", "Dals and Pulses", "Salt, Sugar and Jaggery", "Energy and Soft Drinks", "Water", "Tea and Coffee", "Fruit Juices and Fruit Drinks", "Snacks and Namkeen", "Ready to Cook and Eat", "Pickles and Chutney", "Indian Sweets", "Frozen Vegetables", "Frozen Snacks", "Gift Voucher"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS_CATEGORY","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value","var_enum_promo_categories":["Fruits and Vegetables","Masala & Seasoning","Oil & Ghee","Eggs, Meat & Fish","Bakery, Cakes & Dairy","Pet Care","Detergents and Dishwash","Dairy and Cheese","Snacks, Dry Fruits, Nuts","Pasta, Soup and Noodles","Cereals and Breakfast","Sauces, Spreads and Dips","Chocolates and Biscuits","Cooking and Baking Needs","Tinned and Processed Food","Atta, Flours and Sooji","Rice and Rice Products","Dals and Pulses","Salt, Sugar and Jaggery","Energy and Soft Drinks","Water","Tea and Coffee","Fruit Juices and Fruit Drinks","Snacks and Namkeen","Ready to Cook and Eat","Pickles and Chutney","Indian Sweets","Frozen Vegetables","Frozen Snacks","Gift Voucher"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_promo_categories"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_PROMOS_CATEGORY',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS_CATEGORY","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value","var_enum_promo_categories":["Fruits and Vegetables","Masala & Seasoning","Oil & Ghee","Eggs, Meat & Fish","Bakery, Cakes & Dairy","Pet Care","Detergents and Dishwash","Dairy and Cheese","Snacks, Dry Fruits, Nuts","Pasta, Soup and Noodles","Cereals and Breakfast","Sauces, Spreads and Dips","Chocolates and Biscuits","Cooking and Baking Needs","Tinned and Processed Food","Atta, Flours and Sooji","Rice and Rice Products","Dals and Pulses","Salt, Sugar and Jaggery","Energy and Soft Drinks","Water","Tea and Coffee","Fruit Juices and Fruit Drinks","Snacks and Namkeen","Ready to Cook and Eat","Pickles and Chutney","Indian Sweets","Frozen Vegetables","Frozen Snacks","Gift Voucher"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_promo_categories"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_BAP_PROMOS_FROM(
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
                                    "$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value",
                                    true
                                );
                                const var_datetime_regex = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    var_datetime_regex
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'TAGS_BAP_PROMOS_FROM',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_PROMOS_FROM**

- All elements of $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS_FROM","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_PROMOS_FROM',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS_FROM","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function TAGS_BAP_PROMOS_TO(
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
                                    "$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value",
                                    true
                                );
                                const var_datetime_regex = [
                                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$',
                                ];

                                const skipCheck = !validations.arePresent(attr);
                                if (skipCheck) continue;

                                const validate = validations.followRegex(
                                    attr,
                                    var_datetime_regex
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: 'TAGS_BAP_PROMOS_TO',
                                            valid: false,
                                            code: 30000,
                                            description: `#### **TAGS_BAP_PROMOS_TO**

- All elements of $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

> **Skip if:**
>
>     - $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS_TO","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: 'TAGS_BAP_PROMOS_TO',
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS_TO","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            TAGS_BAP_PROMOS_CATEGORY,
                            TAGS_BAP_PROMOS_FROM,
                            TAGS_BAP_PROMOS_TO,
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
                            testName: 'TAGS_BAP_PROMOS',
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"TAGS_BAP_PROMOS","_RETURN_":[{"_NAME_":"TAGS_BAP_PROMOS_CATEGORY","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value","var_enum_promo_categories":["Fruits and Vegetables","Masala & Seasoning","Oil & Ghee","Eggs, Meat & Fish","Bakery, Cakes & Dairy","Pet Care","Detergents and Dishwash","Dairy and Cheese","Snacks, Dry Fruits, Nuts","Pasta, Soup and Noodles","Cereals and Breakfast","Sauces, Spreads and Dips","Chocolates and Biscuits","Cooking and Baking Needs","Tinned and Processed Food","Atta, Flours and Sooji","Rice and Rice Products","Dals and Pulses","Salt, Sugar and Jaggery","Energy and Soft Drinks","Water","Tea and Coffee","Fruit Juices and Fruit Drinks","Snacks and Namkeen","Ready to Cook and Eat","Pickles and Chutney","Indian Sweets","Frozen Vegetables","Frozen Snacks","Gift Voucher"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_promo_categories"},{"_NAME_":"TAGS_BAP_PROMOS_FROM","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_BAP_PROMOS_TO","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    SEARCH_TAG_INTENT_GROUP,
                    TAGS_BNP_FEATURES,
                    TAGS_BAP_TERMS,
                    TAGS_CATALOG_FULL,
                    TAGS_CATALOG_INC,
                    TAGS_BAP_FEATURES,
                    TAGS_BAP_PROMOS,
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
                    testName: 'SEARCH_TAGS',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_TAGS","_RETURN_":[{"_NAME_":"SEARCH_TAG_INTENT_GROUP","code":"$.message.intent.tags[*].code","_CONTINUE_":"!(code are present)","var_codes":["catalog_inc","bap_terms","catalog_full","bnp_features","bap_features","bap_promos"],"_RETURN_":"code all in var_codes"},{"_NAME_":"TAGS_BNP_FEATURES","_RETURN_":[{"_NAME_":"TAGS_BNP_FEATURES_PAYLOAD_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value","var_payload_types":["link","inline"],"_RETURN_":"attr any in var_payload_types"}]},{"_NAME_":"TAGS_BAP_TERMS","_RETURN_":[{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value","_RETURN_":"attr are present"},{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS_NEW","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value","var_enum_static_terms_new":["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"],"_RETURN_":"attr all in var_enum_static_terms_new"},{"_NAME_":"TAGS_BAP_TERMS_EFFECTIVE_DATE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value","var_date_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex var_date_regex"}]},{"_NAME_":"TAGS_CATALOG_FULL","_RETURN_":[{"_NAME_":"TAGS_CATALOG_FULL_PAYLOAD_TYPE","attr":"$.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value","var_enum_payload_type":["link"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_payload_type"}]},{"_NAME_":"TAGS_CATALOG_INC","_RETURN_":[{"_NAME_":"TAGS_CATALOG_INC_START_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_CATALOG_INC_END_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_CATALOG_INC_MODE","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value","var_enum_mode":["start","stop"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_mode"}]},{"_NAME_":"TAGS_BAP_FEATURES","_RETURN_":[{"_NAME_":"TAGS_BAP_FEATURES_ITEM_1","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"},{"_NAME_":"TAGS_BAP_FEATURES_ITEM_2","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"},{"_NAME_":"TAGS_BAP_FEATURES_ITEM_3","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}]},{"_NAME_":"TAGS_BAP_PROMOS","_RETURN_":[{"_NAME_":"TAGS_BAP_PROMOS_CATEGORY","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value","var_enum_promo_categories":["Fruits and Vegetables","Masala & Seasoning","Oil & Ghee","Eggs, Meat & Fish","Bakery, Cakes & Dairy","Pet Care","Detergents and Dishwash","Dairy and Cheese","Snacks, Dry Fruits, Nuts","Pasta, Soup and Noodles","Cereals and Breakfast","Sauces, Spreads and Dips","Chocolates and Biscuits","Cooking and Baking Needs","Tinned and Processed Food","Atta, Flours and Sooji","Rice and Rice Products","Dals and Pulses","Salt, Sugar and Jaggery","Energy and Soft Drinks","Water","Tea and Coffee","Fruit Juices and Fruit Drinks","Snacks and Namkeen","Ready to Cook and Eat","Pickles and Chutney","Indian Sweets","Frozen Vegetables","Frozen Snacks","Gift Voucher"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_promo_categories"},{"_NAME_":"TAGS_BAP_PROMOS_FROM","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_BAP_PROMOS_TO","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            SEARCH_CONTEXT,
            SEARCH_PAYMENT,
            SEARCH_FULFILMENT,
            SEARCH_ITEM,
            SEARCH_CATEGORY,
            SEARCH_TAGS,
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
            testName: 'searchValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"searchValidations","_RETURN_":[{"_NAME_":"SEARCH_CONTEXT","_DESCRIPTION_":"Validate search context","action":["search"],"core_version":"$.context.core_version","var_120":["1.2.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_COUNTRY","attr":"$.context.country","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_CITY","attr":"$.context.city","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_VERSION","attr":"$.context.core_version","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_ID","search":["search"],"attr":"$.context.bap_id","_CONTINUE_":"(action equal to search)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_BPP_URI","search":["search"],"_CONTINUE_":"(action equal to search)","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REQUIRED_TTL","attr":"$.context.ttl","optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update","on_status"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr are present","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"CONTEXT_ENUM_DOMAIN","domain":["ONDC:RET10","ONDC:RET11","ONDC:RET12","ONDC:RET13","ONDC:RET14","ONDC:RET15","ONDC:RET16","ONDC:RET18"],"attr":"$.context.domain","_RETURN_":"attr all in domain","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_ENUM_ACTION","attr":"$.context.action","_RETURN_":"attr all in action","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_ENUM_VERSION","version":["1.2.0"],"attr":"$.context.core_version","_RETURN_":"attr all in version","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_BAP_URI","attr":"$.context.bap_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_BPP_URI","attr":"$.context.bpp_uri","reg":["^https?\\:\\/\\/"],"_RETURN_":"attr follow regex reg","search":["search"],"_CONTINUE_":"(action equal to search)","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]},{"_NAME_":"CONTEXT_REG_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T)(\\\\d+Y)?(\\\\d+M)?(\\\\d+W)?(\\\\d+D)?(T(?=\\\\d)(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"optional_vars":["on_search","on_select","on_confirm","on_init","on_cancel","on_track","on_update"],"_CONTINUE_":"(action all in optional_vars)","_RETURN_":"attr follow regex reg","action":["search"],"core_version":"$._EXTERNAL._SELF.context.core_version","var_120":["1.2.0"]}]}]},{"_NAME_":"SEARCH_PAYMENT","_RETURN_":[{"_NAME_":"PAYMENT_REQUIRED","_RETURN_":[{"_NAME_":"PAYMENT_REQUIRED_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","_RETURN_":"attr are present"},{"_NAME_":"PAYMENT_REQUIRED_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","_RETURN_":"attr are present"}]},{"_NAME_":"PAYMENT_ENUM","_RETURN_":[{"_NAME_":"PAYMENT_ENUM_TYPE","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_type']","var_fee_type":["percent","amount"],"_RETURN_":"attr all in var_fee_type"},{"_NAME_":"PAYMENT_REGEX_AMOUNT","attr":"$.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount']","reg":["^(\\\\d*.?\\\\d{1,2})$"],"_RETURN_":"attr follow regex reg"}]}]},{"_NAME_":"SEARCH_FULFILMENT","_RETURN_":[{"_NAME_":"FULFILMENT_REQUIRED","_RETURN_":[{"_NAME_":"FULFILMENT_OPTIONAL_TYPE_ENUM","attr":"$.message.intent.fulfillment.type","allowed_types":["Delivery","Self-Pickup","Delivery and Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in allowed_types"},{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_GPS","attr":"$.message.intent.fulfillment.end.location.gps","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"},{"_NAME_":"FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE","attr":"$.message.intent.fulfillment.end.location.address.area_code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"FULFILMENT_ENUM","_RETURN_":[{"_NAME_":"FULFILMENT_ENUM_TYPE","attr":"$.message.intent.fulfillment.type","var_types":["Delivery","Self-Pickup","Buyer-Delivery"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_types"}]}]},{"_NAME_":"SEARCH_ITEM","_RETURN_":[{"_NAME_":"ITEM_REQUIRED_DESCRIPTOR_NAME","attr":"$.message.intent.item.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"SEARCH_CATEGORY","_RETURN_":[{"_NAME_":"CATEGORY_REQUIRED_ID","attr":"$.message.intent.category.id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present"}]},{"_NAME_":"SEARCH_TAGS","_RETURN_":[{"_NAME_":"SEARCH_TAG_INTENT_GROUP","code":"$.message.intent.tags[*].code","_CONTINUE_":"!(code are present)","var_codes":["catalog_inc","bap_terms","catalog_full","bnp_features","bap_features","bap_promos"],"_RETURN_":"code all in var_codes"},{"_NAME_":"TAGS_BNP_FEATURES","_RETURN_":[{"_NAME_":"TAGS_BNP_FEATURES_PAYLOAD_TYPE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value","var_payload_types":["link","inline"],"_RETURN_":"attr any in var_payload_types"}]},{"_NAME_":"TAGS_BAP_TERMS","_RETURN_":[{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value","_RETURN_":"attr are present"},{"_NAME_":"TAGS_BAP_TERMS_STATIC_TERMS_NEW","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value","var_enum_static_terms_new":["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"],"_RETURN_":"attr all in var_enum_static_terms_new"},{"_NAME_":"TAGS_BAP_TERMS_EFFECTIVE_DATE","_CONTINUE_":"!(attr are present)","attr":"$.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value","var_date_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex var_date_regex"}]},{"_NAME_":"TAGS_CATALOG_FULL","_RETURN_":[{"_NAME_":"TAGS_CATALOG_FULL_PAYLOAD_TYPE","attr":"$.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value","var_enum_payload_type":["link"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_payload_type"}]},{"_NAME_":"TAGS_CATALOG_INC","_RETURN_":[{"_NAME_":"TAGS_CATALOG_INC_START_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_CATALOG_INC_END_TIME","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_CATALOG_INC_MODE","attr":"$.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value","var_enum_mode":["start","stop"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_mode"}]},{"_NAME_":"TAGS_BAP_FEATURES","_RETURN_":[{"_NAME_":"TAGS_BAP_FEATURES_ITEM_1","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"},{"_NAME_":"TAGS_BAP_FEATURES_ITEM_2","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"},{"_NAME_":"TAGS_BAP_FEATURES_ITEM_3","attr":"$.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value","var_enum_bap_features":["yes","no"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_bap_features"}]},{"_NAME_":"TAGS_BAP_PROMOS","_RETURN_":[{"_NAME_":"TAGS_BAP_PROMOS_CATEGORY","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value","var_enum_promo_categories":["Fruits and Vegetables","Masala & Seasoning","Oil & Ghee","Eggs, Meat & Fish","Bakery, Cakes & Dairy","Pet Care","Detergents and Dishwash","Dairy and Cheese","Snacks, Dry Fruits, Nuts","Pasta, Soup and Noodles","Cereals and Breakfast","Sauces, Spreads and Dips","Chocolates and Biscuits","Cooking and Baking Needs","Tinned and Processed Food","Atta, Flours and Sooji","Rice and Rice Products","Dals and Pulses","Salt, Sugar and Jaggery","Energy and Soft Drinks","Water","Tea and Coffee","Fruit Juices and Fruit Drinks","Snacks and Namkeen","Ready to Cook and Eat","Pickles and Chutney","Indian Sweets","Frozen Vegetables","Frozen Snacks","Gift Voucher"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr all in var_enum_promo_categories"},{"_NAME_":"TAGS_BAP_PROMOS_FROM","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"},{"_NAME_":"TAGS_BAP_PROMOS_TO","attr":"$.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value","var_datetime_regex":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex var_datetime_regex"}]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
