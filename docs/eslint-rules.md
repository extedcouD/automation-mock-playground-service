# Custom ESLint Rule: no-direct-response

## Overview

This custom ESLint rule enforces the use of standardized response utilities (`res-utils`) instead of direct Express response methods throughout your application.

## Purpose

- **Consistency**: Ensures all HTTP responses follow the same structure and format
- **Error Handling**: Standardizes error response patterns across the application
- **Maintainability**: Makes it easier to modify response formats globally
- **Type Safety**: Leverages TypeScript types for better development experience

## Rule Details

### ❌ What's Forbidden

The following Express response methods are forbidden in your route handlers:

```typescript
// Direct response methods - NOT ALLOWED
res.json({ data: 'something' });
res.send('response');
res.status(400).json({ error: 'bad request' });
res.sendFile(filePath);
res.sendStatus(404);
res.end();
res.redirect('/path');
res.render('template');
```

### ✅ What's Allowed

Use these standardized response functions from `res-utils`:

```typescript
import { sendSuccess, sendError, sendAck, sendNack } from '../utils/res-utils';

// Success responses
sendSuccess(res, { userId: 123 }, 'User created successfully', 201);

// Error responses
sendError(res, 'VALIDATION_ERROR', 'Invalid email format');

// ONDC specific responses
sendAck(res, context);
sendNack(res, context, 'ONDC_ERROR_CODE');
```

## Configuration

The rule is configured in `eslint.config.mjs`:

```javascript
'custom/no-direct-response': [
    'error',
    {
        allowedFiles: [
            '**/res-utils.ts',          // The utility file itself
            '**/res-utils.js', 
            '**/*.test.ts',             // Test files
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
```

## Error Messages

### Missing Import Error
```
Import res-utils functions (sendSuccess, sendError, sendAck, sendNack) to handle HTTP responses properly
```

**Triggered when**: A file contains Express response methods but doesn't import res-utils functions.

**Fix**: Add the appropriate import statement:
```typescript
import { sendSuccess, sendError } from '../utils/res-utils';
```

### Direct Response Method Error
```
Use res-utils functions (sendSuccess, sendError, sendAck, sendNack) instead of direct response methods. Found: res.json()
```

**Triggered when**: Code uses direct Express response methods like `res.json()`, `res.send()`, etc.

**Fix**: Replace with appropriate res-utils function:
```typescript
// Before
res.json({ data: result });

// After  
sendSuccess(res, result, 'Operation completed');
```

## Examples

### Route Handler - Before (❌ Violations)
```typescript
import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    // ESLint Error: Use res-utils functions instead
    res.json({ users: [] }); 
});

router.post('/users', (req, res) => {
    // ESLint Error: Use res-utils functions instead
    res.status(400).send('Bad request');
});
```

### Route Handler - After (✅ Compliant)
```typescript
import { Router } from 'express';
import { sendSuccess, sendError } from '../utils/res-utils';

const router = Router();

router.get('/users', (req, res) => {
    sendSuccess(res, { users: [] }, 'Users retrieved successfully');
});

router.post('/users', (req, res) => {
    sendError(res, 'VALIDATION_ERROR', 'Invalid user data');
});
```

## Benefits

1. **Standardized Responses**: All responses follow the same structure
   ```typescript
   // Success Response
   {
       success: true,
       data: T,
       message: string,
       timestamp: string
   }
   
   // Error Response  
   {
       success: false,
       errorCode: string,
       message: string,
       details?: object,
       timestamp: string
   }
   ```

2. **Better Error Handling**: Consistent error codes and messages
3. **Type Safety**: TypeScript ensures correct response types
4. **Maintainability**: Easy to modify response format globally
5. **Double-Send Protection**: Built-in guards against sending responses twice

## Testing the Rule

You can test the rule by creating a file with violations:

```typescript
// test-violations.ts
import { Router } from 'express';

const router = Router();

// This will trigger ESLint errors
router.get('/test', (req, res) => {
    res.json({ test: true }); // Error!
});
```

Run ESLint to see the violations:
```bash
npx eslint src/routes/test-violations.ts
```

## File Exceptions

The rule automatically allows direct response methods in:
- `**/res-utils.ts` - The utility file itself
- Test files (`**/*.test.ts`, `**/*.spec.ts`)

## Disabling the Rule

If you need to temporarily disable the rule for a specific line:
```typescript
// eslint-disable-next-line custom/no-direct-response
res.json({ legacy: 'response' });
```

Or for an entire file:
```typescript
/* eslint-disable custom/no-direct-response */
```

## Migration Guide

To migrate existing code:

1. **Add res-utils import**:
   ```typescript
   import { sendSuccess, sendError } from '../utils/res-utils';
   ```

2. **Replace direct methods**:
   - `res.json(data)` → `sendSuccess(res, data)`
   - `res.status(code).json(error)` → `sendError(res, 'ERROR_CODE')`
   - Custom status codes: `sendSuccess(res, data, 'message', statusCode)`

3. **Update error handling**:
   - Use predefined error codes from `error-codes.ts`
   - Leverage the consistent error structure

This rule ensures your application maintains consistent, type-safe, and maintainable HTTP responses across all endpoints.