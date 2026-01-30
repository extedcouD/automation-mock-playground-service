/**
 * @fileoverview Rule to prevent direct response methods and enforce res-utils usage
 * @author Your Team
 */

import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
    name => `https://your-docs.com/rules/${name}`
);

export default createRule({
    name: 'no-direct-response',
    meta: {
        type: 'problem',
        docs: {
            description:
                'Enforce using res-utils functions instead of direct response methods',
            recommended: 'error',
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    allowedFiles: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        description:
                            'Files where direct response methods are allowed',
                    },
                    resUtilsFunctions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        description: 'List of res-utils function names',
                        default: [
                            'sendSuccess',
                            'sendError',
                            'sendAck',
                            'sendNack',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            noDirectResponse:
                'Use res-utils functions ({{resUtilsFunctions}}) instead of direct response methods. Found: {{method}}',
            missingResUtilsImport:
                'Import res-utils functions ({{resUtilsFunctions}}) to handle HTTP responses properly',
        },
    },
    defaultOptions: [
        {
            allowedFiles: [
                '**/res-utils.ts',
                '**/res-utils.js',
                '**/*.test.ts',
                '**/*.test.js',
                '**/*.spec.ts',
                '**/*.spec.js',
            ],
            resUtilsFunctions: [
                'sendSuccess',
                'sendError',
                'sendAck',
                'sendNack',
            ],
        },
    ],
    create(context, options) {
        const { allowedFiles = [], resUtilsFunctions = [] } = options[0] || {};
        const filename = context.getFilename();
        // Check if current file is in allowed files list
        const isAllowedFile = allowedFiles.some(pattern => {
            const regex = new RegExp(
                pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*')
            );
            return regex.test(filename);
        });

        if (isAllowedFile) {
            return {};
        }

        // Track imports to check if res-utils functions are imported
        let hasResUtilsImport = false;
        const importedResUtilsFunctions = new Set();

        // Forbidden response methods
        const forbiddenMethods = [
            'json',
            'send',
            'sendFile',
            'sendStatus',
            'end',
            'redirect',
            'render',
            'status',
        ];

        return {
            ImportDeclaration(node) {
                // Check for res-utils imports
                if (
                    node.source.value &&
                    (node.source.value.includes('res-utils') ||
                        node.source.value.includes('./res-utils') ||
                        node.source.value.includes('../utils/res-utils'))
                ) {
                    hasResUtilsImport = true;

                    // Track which res-utils functions are imported
                    node.specifiers.forEach(specifier => {
                        if (
                            specifier.type === 'ImportSpecifier' &&
                            resUtilsFunctions.includes(specifier.imported.name)
                        ) {
                            importedResUtilsFunctions.add(
                                specifier.imported.name
                            );
                        }
                    });
                }
            },

            CallExpression(node) {
                // Check for res.method() calls
                if (
                    node.callee.type === 'MemberExpression' &&
                    node.callee.object.type === 'Identifier' &&
                    node.callee.object.name === 'res' &&
                    node.callee.property.type === 'Identifier' &&
                    forbiddenMethods.includes(node.callee.property.name)
                ) {
                    // Special handling for res.status().json() or res.status().send() patterns
                    let methodName = node.callee.property.name;

                    // Check if this is a chained call like res.status(200).json()
                    let parent = node.parent;
                    while (parent && parent.type === 'MemberExpression') {
                        if (
                            parent.property.type === 'Identifier' &&
                            forbiddenMethods.includes(parent.property.name)
                        ) {
                            methodName = `${methodName}.${parent.property.name}`;
                        }
                        parent = parent.parent;
                    }

                    context.report({
                        node,
                        messageId: 'noDirectResponse',
                        data: {
                            method: `res.${methodName}()`,
                            resUtilsFunctions: resUtilsFunctions.join(', '),
                        },
                    });
                }
            },

            'Program:exit'() {
                // Check if file contains Express response handling but no res-utils import
                const sourceCode = context.getSourceCode();
                const text = sourceCode.getText();

                // Look for Express response patterns
                const hasResponseHandling =
                    /res\s*\.\s*(json|send|sendFile|sendStatus|end|redirect|render|status)\s*\(/g.test(
                        text
                    );

                if (hasResponseHandling && !hasResUtilsImport) {
                    context.report({
                        loc: { line: 1, column: 0 },
                        messageId: 'missingResUtilsImport',
                        data: {
                            resUtilsFunctions: resUtilsFunctions.join(', '),
                        },
                    });
                }
            },
        };
    },
});
