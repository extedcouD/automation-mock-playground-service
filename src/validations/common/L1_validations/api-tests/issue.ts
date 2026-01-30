import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function issue(input: validationInput): validationOutput {
    let totalResults = issueValidations(input);

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
                r => r.testName === 'issueValidations'
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

function issueValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, '$');
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== 'object') continue;
        testObj._EXTERNAL = input.externalData;

        function REQUIRED_MESSAGE_ID(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    '$.message.issue.id',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_ID',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_ID**

- $.message.issue.id must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ID","attr":"$.message.issue.id","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_ID',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ID","attr":"$.message.issue.id","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_STATUS(
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
                    '$.message.issue.status',
                    true
                );
                const enumList = [
                    'OPEN',
                    'CLOSED',
                    'PROCESSING',
                    'RESOLVED',
                    'NEED_MORE_INFO',
                    'INFO_PROVIDED',
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList) &&
                    validations.areUnique(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_STATUS',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_STATUS**

**All of the following must be true:**
  - **All of the following must be true:**
    - $.message.issue.status must be present in the payload
    - All elements of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "NEED_MORE_INFO", "INFO_PROVIDED"]
  - All values of $.message.issue.status are unique`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_STATUS","attr":"$.message.issue.status","_RETURN_":"attr are present && attr all in enumList && attr are unique","enumList":["OPEN","CLOSED","PROCESSING","RESOLVED","NEED_MORE_INFO","INFO_PROVIDED"]}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_STATUS',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_STATUS","attr":"$.message.issue.status","_RETURN_":"attr are present && attr all in enumList && attr are unique","enumList":["OPEN","CLOSED","PROCESSING","RESOLVED","NEED_MORE_INFO","INFO_PROVIDED"]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_LEVEL(
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
                    '$.message.issue.level',
                    true
                );
                const enumList = ['ISSUE', 'GREVIENCE', 'DISPUTE'];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_LEVEL',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_LEVEL**

**All of the following must be true:**
  - $.message.issue.level must be present in the payload
  - All elements of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_LEVEL","attr":"$.message.issue.level","_RETURN_":"attr are present && attr all in enumList","enumList":["ISSUE","GREVIENCE","DISPUTE"]}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_LEVEL',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_LEVEL","attr":"$.message.issue.level","_RETURN_":"attr are present && attr all in enumList","enumList":["ISSUE","GREVIENCE","DISPUTE"]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_CREATED_AT(
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
                    '$.message.issue.created_at',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_CREATED_AT',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_CREATED_AT**

- $.message.issue.created_at must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CREATED_AT","attr":"$.message.issue.created_at","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_CREATED_AT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CREATED_AT","attr":"$.message.issue.created_at","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_UPDATED_AT(
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
                    '$.message.issue.updated_at',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_UPDATED_AT',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_UPDATED_AT**

- $.message.issue.updated_at must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_UPDATED_AT","attr":"$.message.issue.updated_at","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_UPDATED_AT',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_UPDATED_AT","attr":"$.message.issue.updated_at","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_REF_ID(
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
                    '$.message.issue.refs[*].ref_id',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_REF_ID',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_REF_ID**

- $.message.issue.refs[*].ref_id must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_REF_ID","attr":"$.message.issue.refs[*].ref_id","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_REF_ID',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_REF_ID","attr":"$.message.issue.refs[*].ref_id","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_REF_TYPE(
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
                    '$.message.issue.refs[*].ref_type',
                    true
                );
                const enumList = [
                    'ORDER',
                    'ITEM',
                    'FULFILLMENT',
                    'TRANSACTION_ID',
                    'MESSAGE_ID',
                    'PROVIDER',
                    'COMPLAINT',
                    'ACTION',
                    'PAYMENT',
                    'CUSTOMER',
                    'AGENT',
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_REF_TYPE',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_REF_TYPE**

**All of the following must be true:**
  - $.message.issue.refs[*].ref_type must be present in the payload
  - All elements of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_REF_TYPE","attr":"$.message.issue.refs[*].ref_type","_RETURN_":"attr are present && attr all in enumList","enumList":["ORDER","ITEM","FULFILLMENT","TRANSACTION_ID","MESSAGE_ID","PROVIDER","COMPLAINT","ACTION","PAYMENT","CUSTOMER","AGENT"]}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_REF_TYPE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_REF_TYPE","attr":"$.message.issue.refs[*].ref_type","_RETURN_":"attr are present && attr all in enumList","enumList":["ORDER","ITEM","FULFILLMENT","TRANSACTION_ID","MESSAGE_ID","PROVIDER","COMPLAINT","ACTION","PAYMENT","CUSTOMER","AGENT"]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_ID_10(
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
                    '$.message.issue.actors[*].id',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_ID_10',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_ID_10**

- $.message.issue.actors[*].id must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ID_10","attr":"$.message.issue.actors[*].id","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_ID_10',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ID_10","attr":"$.message.issue.actors[*].id","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_TYPE(
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
                    '$.message.issue.actors[*].type',
                    true
                );
                const enumList = [
                    'INTERFACING_NP',
                    'COUNTERPARTY_NP',
                    'CASCADED_NP',
                    'PROVIDER',
                    'AGENT',
                    'CUSTOMER',
                    'INTERFACING_NP_GRO',
                    'COUNTERPARTY_NP_GRO',
                    'CASCADED_NP_GRO',
                    'CONSUMER',
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_TYPE',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_TYPE**

**All of the following must be true:**
  - $.message.issue.actors[*].type must be present in the payload
  - All elements of $.message.issue.actors[*].type must be in ["INTERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO", "CONSUMER"]`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_TYPE","attr":"$.message.issue.actors[*].type","_RETURN_":"attr are present && attr all in enumList","enumList":["INTERFACING_NP","COUNTERPARTY_NP","CASCADED_NP","PROVIDER","AGENT","CUSTOMER","INTERFACING_NP_GRO","COUNTERPARTY_NP_GRO","CASCADED_NP_GRO","CONSUMER"]}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_TYPE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_TYPE","attr":"$.message.issue.actors[*].type","_RETURN_":"attr are present && attr all in enumList","enumList":["INTERFACING_NP","COUNTERPARTY_NP","CASCADED_NP","PROVIDER","AGENT","CUSTOMER","INTERFACING_NP_GRO","COUNTERPARTY_NP_GRO","CASCADED_NP_GRO","CONSUMER"]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_NAME(
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
                    '$.message.issue.actors[*].info.person.name',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_NAME',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_NAME**

- $.message.issue.actors[*].info.person.name must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_NAME","attr":"$.message.issue.actors[*].info.person.name","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_NAME',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_NAME","attr":"$.message.issue.actors[*].info.person.name","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_NAME_13(
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
                    '$.message.issue.actors[*].info.person.name',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_NAME_13',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_NAME_13**

- $.message.issue.actors[*].info.person.name must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_NAME_13","attr":"$.message.issue.actors[*].info.person.name","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_NAME_13',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_NAME_13","attr":"$.message.issue.actors[*].info.person.name","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_PHONE(
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
                    '$.message.issue.actors[*].info.contact.phone',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_PHONE',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_PHONE**

- $.message.issue.actors[*].info.contact.phone must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PHONE","attr":"$.message.issue.actors[*].info.contact.phone","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_PHONE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PHONE","attr":"$.message.issue.actors[*].info.contact.phone","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_EMAIL(
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
                    '$.message.issue.actors[*].info.contact.email',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_EMAIL',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_EMAIL**

- $.message.issue.actors[*].info.contact.email must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_EMAIL","attr":"$.message.issue.actors[*].info.contact.email","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_EMAIL',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_EMAIL","attr":"$.message.issue.actors[*].info.contact.email","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_SOURCE_ID(
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
                    '$.message.issue.source_id',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_SOURCE_ID',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_SOURCE_ID**

- $.message.issue.source_id must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_SOURCE_ID","attr":"$.message.issue.source_id","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_SOURCE_ID',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_SOURCE_ID","attr":"$.message.issue.source_id","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_CODE(
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
                    '$.message.issue.descriptor.code',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_CODE',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_CODE**

- $.message.issue.descriptor.code must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CODE","attr":"$.message.issue.descriptor.code","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_CODE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CODE","attr":"$.message.issue.descriptor.code","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_SHORT_DESC(
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
                    '$.message.issue.descriptor.short_desc',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_SHORT_DESC',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_SHORT_DESC**

- $.message.issue.descriptor.short_desc must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_SHORT_DESC","attr":"$.message.issue.descriptor.short_desc","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_SHORT_DESC',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_SHORT_DESC","attr":"$.message.issue.descriptor.short_desc","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_LONG_DESC(
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
                    '$.message.issue.descriptor.long_desc',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_LONG_DESC',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_LONG_DESC**

- $.message.issue.descriptor.long_desc must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_LONG_DESC","attr":"$.message.issue.descriptor.long_desc","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_LONG_DESC',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_LONG_DESC","attr":"$.message.issue.descriptor.long_desc","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_URL(
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
                    '$.message.issue.descriptor.additional_desc.url',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_URL',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_URL**

- $.message.issue.descriptor.additional_desc.url must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_URL","attr":"$.message.issue.descriptor.additional_desc.url","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_URL',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_URL","attr":"$.message.issue.descriptor.additional_desc.url","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_CONTENT_TYPE(
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
                    '$.message.issue.descriptor.additional_desc.content_type',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_CONTENT_TYPE',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_CONTENT_TYPE**

- $.message.issue.descriptor.additional_desc.content_type must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CONTENT_TYPE","attr":"$.message.issue.descriptor.additional_desc.content_type","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_CONTENT_TYPE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CONTENT_TYPE","attr":"$.message.issue.descriptor.additional_desc.content_type","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_LAST_ACTION_ID(
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
                    '$.message.issue.last_action_id',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_LAST_ACTION_ID',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_LAST_ACTION_ID**

- $.message.issue.last_action_id must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_LAST_ACTION_ID","attr":"$.message.issue.last_action_id","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_LAST_ACTION_ID',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_LAST_ACTION_ID","attr":"$.message.issue.last_action_id","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_ID_25(
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
                    '$.message.issue.actions[*].id',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_ID_25',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_ID_25**

- $.message.issue.actions[*].id must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ID_25","attr":"$.message.issue.actions[*].id","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_ID_25',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ID_25","attr":"$.message.issue.actions[*].id","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_CODE_26(
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
                    '$.message.issue.actions[*].descriptor.code',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_CODE_26',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_CODE_26**

- $.message.issue.actions[*].descriptor.code must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CODE_26","attr":"$.message.issue.actions[*].descriptor.code","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_CODE_26',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CODE_26","attr":"$.message.issue.actions[*].descriptor.code","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_SHORT_DESC_27(
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
                    '$.message.issue.actions[*].descriptor.short_desc',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_SHORT_DESC_27',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_SHORT_DESC_27**

- $.message.issue.actions[*].descriptor.short_desc must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_SHORT_DESC_27","attr":"$.message.issue.actions[*].descriptor.short_desc","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_SHORT_DESC_27',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_SHORT_DESC_27","attr":"$.message.issue.actions[*].descriptor.short_desc","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_UPDATED_AT_28(
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
                    '$.message.issue.actions[*].updated_at',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_UPDATED_AT_28',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_UPDATED_AT_28**

- $.message.issue.actions[*].updated_at must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_UPDATED_AT_28","attr":"$.message.issue.actions[*].updated_at","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_UPDATED_AT_28',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_UPDATED_AT_28","attr":"$.message.issue.actions[*].updated_at","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function REQUIRED_MESSAGE_ACTION_BY(
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
                    '$.message.issue.actions[*].action_by',
                    true
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'REQUIRED_MESSAGE_ACTION_BY',
                            valid: false,
                            code: 30000,
                            description: `#### **REQUIRED_MESSAGE_ACTION_BY**

- $.message.issue.actions[*].action_by must be present in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ACTION_BY","attr":"$.message.issue.actions[*].action_by","_RETURN_":"attr are present"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'REQUIRED_MESSAGE_ACTION_BY',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ACTION_BY","attr":"$.message.issue.actions[*].action_by","_RETURN_":"attr are present"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function VALID_ENUM_MESSAGE_STATUS(
            input: validationInput
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    'OPEN',
                    'CLOSED',
                    'PROCESSING',
                    'RESOLVED',
                    'INFO_PROVIDED',
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    '$.message.issue.status',
                    true
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'VALID_ENUM_MESSAGE_STATUS',
                            valid: false,
                            code: 30000,
                            description: `#### **VALID_ENUM_MESSAGE_STATUS**

- All elements of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_PROVIDED"]

> **Skip if:**
>
>     - $.message.issue.status is not in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_STATUS","enumList":["OPEN","CLOSED","PROCESSING","RESOLVED","INFO_PROVIDED"],"enumPath":"$.message.issue.status","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'VALID_ENUM_MESSAGE_STATUS',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_STATUS","enumList":["OPEN","CLOSED","PROCESSING","RESOLVED","INFO_PROVIDED"],"enumPath":"$.message.issue.status","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function VALID_ENUM_MESSAGE_LEVEL(
            input: validationInput
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const enumList = ['ISSUE', 'GREVIENCE', 'DISPUTE'];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    '$.message.issue.level',
                    true
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'VALID_ENUM_MESSAGE_LEVEL',
                            valid: false,
                            code: 30000,
                            description: `#### **VALID_ENUM_MESSAGE_LEVEL**

- All elements of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]

> **Skip if:**
>
>     - $.message.issue.level is not in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_LEVEL","enumList":["ISSUE","GREVIENCE","DISPUTE"],"enumPath":"$.message.issue.level","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'VALID_ENUM_MESSAGE_LEVEL',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_LEVEL","enumList":["ISSUE","GREVIENCE","DISPUTE"],"enumPath":"$.message.issue.level","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function VALID_ENUM_MESSAGE_REF_TYPE(
            input: validationInput
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    'ORDER',
                    'ITEM',
                    'FULFILLMENT',
                    'TRANSACTION_ID',
                    'MESSAGE_ID',
                    'PROVIDER',
                    'COMPLAINT',
                    'ACTION',
                    'PAYMENT',
                    'CUSTOMER',
                    'AGENT',
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    '$.message.issue.refs[*].ref_type',
                    true
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'VALID_ENUM_MESSAGE_REF_TYPE',
                            valid: false,
                            code: 30000,
                            description: `#### **VALID_ENUM_MESSAGE_REF_TYPE**

- All elements of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]

> **Skip if:**
>
>     - $.message.issue.refs[*].ref_type is not in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_REF_TYPE","enumList":["ORDER","ITEM","FULFILLMENT","TRANSACTION_ID","MESSAGE_ID","PROVIDER","COMPLAINT","ACTION","PAYMENT","CUSTOMER","AGENT"],"enumPath":"$.message.issue.refs[*].ref_type","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'VALID_ENUM_MESSAGE_REF_TYPE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_REF_TYPE","enumList":["ORDER","ITEM","FULFILLMENT","TRANSACTION_ID","MESSAGE_ID","PROVIDER","COMPLAINT","ACTION","PAYMENT","CUSTOMER","AGENT"],"enumPath":"$.message.issue.refs[*].ref_type","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                    },
                },
                ...subResults,
            ];
        }
        function VALID_ENUM_MESSAGE_TYPE(
            input: validationInput
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, '$');
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== 'object') continue;
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    'INTERFACING_NP',
                    'COUNTERPARTY_NP',
                    'CASCADED_NP',
                    'PROVIDER',
                    'AGENT',
                    'CUSTOMER',
                    'INTERFACING_NP_GRO',
                    'COUNTERPARTY_NP_GRO',
                    'CASCADED_NP_GRO',
                    'CONSUMER',
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    '$.message.issue.actors[*].type',
                    true
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    // delete testObj._EXTERNAL;
                    return [
                        {
                            testName: 'VALID_ENUM_MESSAGE_TYPE',
                            valid: false,
                            code: 30000,
                            description: `#### **VALID_ENUM_MESSAGE_TYPE**

- All elements of $.message.issue.actors[*].type must be in ["INTERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO", "CONSUMER"]

> **Skip if:**
>
>     - $.message.issue.actors[*].type is not in the payload`,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_TYPE","enumList":["INTERFACING_NP","COUNTERPARTY_NP","CASCADED_NP","PROVIDER","AGENT","CUSTOMER","INTERFACING_NP_GRO","COUNTERPARTY_NP_GRO","CASCADED_NP_GRO","CONSUMER"],"enumPath":"$.message.issue.actors[*].type","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                            },
                        },
                    ];
                }

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: 'VALID_ENUM_MESSAGE_TYPE',
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"VALID_ENUM_MESSAGE_TYPE","enumList":["INTERFACING_NP","COUNTERPARTY_NP","CASCADED_NP","PROVIDER","AGENT","CUSTOMER","INTERFACING_NP_GRO","COUNTERPARTY_NP_GRO","CASCADED_NP_GRO","CONSUMER"],"enumPath":"$.message.issue.actors[*].type","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_STATUS,
            REQUIRED_MESSAGE_LEVEL,
            REQUIRED_MESSAGE_CREATED_AT,
            REQUIRED_MESSAGE_UPDATED_AT,
            REQUIRED_MESSAGE_REF_ID,
            REQUIRED_MESSAGE_REF_TYPE,
            REQUIRED_MESSAGE_ID_10,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_NAME_13,
            REQUIRED_MESSAGE_PHONE,
            REQUIRED_MESSAGE_EMAIL,
            REQUIRED_MESSAGE_SOURCE_ID,
            REQUIRED_MESSAGE_CODE,
            REQUIRED_MESSAGE_SHORT_DESC,
            REQUIRED_MESSAGE_LONG_DESC,
            REQUIRED_MESSAGE_URL,
            REQUIRED_MESSAGE_CONTENT_TYPE,
            REQUIRED_MESSAGE_LAST_ACTION_ID,
            REQUIRED_MESSAGE_ID_25,
            REQUIRED_MESSAGE_CODE_26,
            REQUIRED_MESSAGE_SHORT_DESC_27,
            REQUIRED_MESSAGE_UPDATED_AT_28,
            REQUIRED_MESSAGE_ACTION_BY,
            VALID_ENUM_MESSAGE_STATUS,
            VALID_ENUM_MESSAGE_LEVEL,
            VALID_ENUM_MESSAGE_REF_TYPE,
            VALID_ENUM_MESSAGE_TYPE,
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
            testName: 'issueValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"issueValidations","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ID","attr":"$.message.issue.id","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_STATUS","attr":"$.message.issue.status","_RETURN_":"attr are present && attr all in enumList && attr are unique","enumList":["OPEN","CLOSED","PROCESSING","RESOLVED","NEED_MORE_INFO","INFO_PROVIDED"]},{"_NAME_":"REQUIRED_MESSAGE_LEVEL","attr":"$.message.issue.level","_RETURN_":"attr are present && attr all in enumList","enumList":["ISSUE","GREVIENCE","DISPUTE"]},{"_NAME_":"REQUIRED_MESSAGE_CREATED_AT","attr":"$.message.issue.created_at","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_UPDATED_AT","attr":"$.message.issue.updated_at","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_REF_ID","attr":"$.message.issue.refs[*].ref_id","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_REF_TYPE","attr":"$.message.issue.refs[*].ref_type","_RETURN_":"attr are present && attr all in enumList","enumList":["ORDER","ITEM","FULFILLMENT","TRANSACTION_ID","MESSAGE_ID","PROVIDER","COMPLAINT","ACTION","PAYMENT","CUSTOMER","AGENT"]},{"_NAME_":"REQUIRED_MESSAGE_ID_10","attr":"$.message.issue.actors[*].id","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_TYPE","attr":"$.message.issue.actors[*].type","_RETURN_":"attr are present && attr all in enumList","enumList":["INTERFACING_NP","COUNTERPARTY_NP","CASCADED_NP","PROVIDER","AGENT","CUSTOMER","INTERFACING_NP_GRO","COUNTERPARTY_NP_GRO","CASCADED_NP_GRO","CONSUMER"]},{"_NAME_":"REQUIRED_MESSAGE_NAME","attr":"$.message.issue.actors[*].info.person.name","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_NAME_13","attr":"$.message.issue.actors[*].info.person.name","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_PHONE","attr":"$.message.issue.actors[*].info.contact.phone","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_EMAIL","attr":"$.message.issue.actors[*].info.contact.email","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_SOURCE_ID","attr":"$.message.issue.source_id","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_CODE","attr":"$.message.issue.descriptor.code","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_SHORT_DESC","attr":"$.message.issue.descriptor.short_desc","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_LONG_DESC","attr":"$.message.issue.descriptor.long_desc","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_URL","attr":"$.message.issue.descriptor.additional_desc.url","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_CONTENT_TYPE","attr":"$.message.issue.descriptor.additional_desc.content_type","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_LAST_ACTION_ID","attr":"$.message.issue.last_action_id","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_ID_25","attr":"$.message.issue.actions[*].id","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_CODE_26","attr":"$.message.issue.actions[*].descriptor.code","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_SHORT_DESC_27","attr":"$.message.issue.actions[*].descriptor.short_desc","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_UPDATED_AT_28","attr":"$.message.issue.actions[*].updated_at","_RETURN_":"attr are present"},{"_NAME_":"REQUIRED_MESSAGE_ACTION_BY","attr":"$.message.issue.actions[*].action_by","_RETURN_":"attr are present"},{"_NAME_":"VALID_ENUM_MESSAGE_STATUS","enumList":["OPEN","CLOSED","PROCESSING","RESOLVED","INFO_PROVIDED"],"enumPath":"$.message.issue.status","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"},{"_NAME_":"VALID_ENUM_MESSAGE_LEVEL","enumList":["ISSUE","GREVIENCE","DISPUTE"],"enumPath":"$.message.issue.level","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"},{"_NAME_":"VALID_ENUM_MESSAGE_REF_TYPE","enumList":["ORDER","ITEM","FULFILLMENT","TRANSACTION_ID","MESSAGE_ID","PROVIDER","COMPLAINT","ACTION","PAYMENT","CUSTOMER","AGENT"],"enumPath":"$.message.issue.refs[*].ref_type","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"},{"_NAME_":"VALID_ENUM_MESSAGE_TYPE","enumList":["INTERFACING_NP","COUNTERPARTY_NP","CASCADED_NP","PROVIDER","AGENT","CUSTOMER","INTERFACING_NP_GRO","COUNTERPARTY_NP_GRO","CASCADED_NP_GRO","CONSUMER"],"enumPath":"$.message.issue.actors[*].type","_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList"}]}
`,
            },
        },
        ...subResults,
    ];
}
