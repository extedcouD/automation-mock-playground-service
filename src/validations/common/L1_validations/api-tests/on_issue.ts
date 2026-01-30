import payloadUtils from '../utils/json-path-utils';
import validations from '../utils/validation-utils';
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from '../types/test-config';

export default function on_issue(input: validationInput): validationOutput {
    let totalResults = on_issueValidations(input);

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
                r => r.testName === 'on_issueValidations'
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

function on_issueValidations(input: validationInput): validationOutput {
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

        const testFunctions: testFunctionArray = [REQUIRED_MESSAGE_ID];

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
            testName: 'on_issueValidations',
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_issueValidations","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ID","attr":"$.message.issue.id","_RETURN_":"attr are present"}]}
`,
            },
        },
        ...subResults,
    ];
}
