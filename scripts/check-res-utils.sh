#!/bin/bash

# Test ESLint res-utils rule across the codebase
# This script will show which files violate the res-utils rule

echo "🔍 Checking for direct response method violations..."
echo "================================================="

# Run ESLint only on TypeScript files in src directory
echo "Scanning src/**/*.ts files for res-utils rule violations..."
npx eslint "src/**/*.ts" --format compact | grep "custom/no-direct-response" || echo "✅ No violations found!"

echo ""
echo "📋 Summary:"
echo "- Rule: custom/no-direct-response"  
echo "- Purpose: Enforce res-utils usage instead of direct Express response methods"
echo "- Allowed files: res-utils.ts, *.test.ts, *.spec.ts"
echo "- Required functions: sendSuccess, sendError, sendAck, sendNack"
echo ""
echo "📖 For more details, see: docs/eslint-rules.md"