# ONDC GCR Buyer POC - Postman Collection

This directory contains Postman collections and environments for testing the ONDC GCR (Gateway, Catalog, Registry) Buyer Proof of Concept service.

## Files Structure

```
postman/
├── collections/
│   ├── ONDC_GCR_Buyer_POC.postman_collection.json  # Main API collection
│   └── New Collection.postman_collection.json       # Basic template
├── environments/
│   ├── Development.postman_environment.json         # Local development
│   └── Staging.postman_environment.json            # Staging environment
├── globals/
└── README.md                                        # This file
```

## Setup Instructions

### 1. Import Collection

1. Open Postman
2. Click **Import** button
3. Select `collections/ONDC_GCR_Buyer_POC.postman_collection.json`
4. Collection will be imported with all endpoints and tests

### 2. Import Environment

**For Development:**
1. Import `environments/Development.postman_environment.json`
2. Set as active environment
3. Update `baseUrl` if your local server runs on different port

**For Staging:**
1. Import `environments/Staging.postman_environment.json`
2. Update URLs to match your staging deployment
3. Add authentication token if required

### 3. Environment Variables

The collection uses these key variables:

| Variable | Description | Development | Staging |
|----------|-------------|-------------|---------|
| `baseUrl` | Service URL | `http://localhost:3000` | `https://staging-gcr-buyer.ondc.org` |
| `bapId` | Buyer App ID | `buyer-app-dev.ondc.org` | `buyer-app-staging.ondc.org` |
| `bapUri` | Buyer App URI | `https://buyer-app-dev.ondc.org` | `https://buyer-app-staging.ondc.org` |
| `domain` | ONDC Domain | `ONDC:RET10` | `ONDC:RET10` |
| `version` | Core Version | `1.2.0` | `1.2.0` |
| `city` | City Code | `std:080` (Bangalore) | `std:080` |
| `authToken` | Auth Token | (optional) | (required for staging) |

### 4. Dynamic Variables

The collection automatically generates:

- `{{correlationId}}` - UUID for request tracing
- `{{transactionId}}` - Unique transaction identifier
- `{{messageId}}` - Unique message identifier  
- `{{timestamp}}` - Current ISO timestamp

## Collection Structure

### 1. Health & Status
- **Health Check**: Verify service health and system metrics

### 2. ONDC Protocol
- **Search Request**: Send ONDC search request with validation

### 3. Error Scenarios
- **Invalid JSON**: Test malformed JSON handling
- **Missing Context**: Test validation errors
- **Wrong Action**: Test action validation

## Pre-Request Scripts

### Global Pre-Request
- Logs request URL
- Sets current timestamp

### Search Request Pre-Request
- Generates unique transaction and message IDs
- Sets timestamp for ONDC context

## Test Scripts

### Global Tests
- Response time validation (< 10 seconds)
- Content-Type validation
- Response logging

### Health Check Tests
- Status code validation (200)
- Response structure validation
- Performance checks (< 1 second)

### Search Request Tests
- Status code validation (200)
- ONDC context validation
- ACK message validation
- Transaction ID storage for chaining

### Error Tests
- Appropriate error status codes
- Error response structure validation

## Usage Examples

### 1. Quick Health Check

```bash
# Set environment to Development
# Run "Health Check" request
# Should return 200 with system health info
```

### 2. Valid Search Request

```bash
# Set environment to Development  
# Run "Search Request" from ONDC Protocol folder
# Should return 200 with ACK response
```

### 3. Error Testing

```bash
# Run requests from "Error Scenarios" folder
# Verify error handling and response formats
```

## Customization

### Adding New Requests

1. Right-click on appropriate folder
2. Select "Add Request"
3. Configure URL: `{{baseUrl}}/your-endpoint`
4. Add headers:
   ```
   Content-Type: application/json
   X-Correlation-ID: {{correlationId}}
   ```
5. Add test scripts for validation

### Environment-Specific Configuration

Update environment files for different deployments:

```json
{
  "key": "baseUrl", 
  "value": "https://your-deployment-url.com"
}
```

### Authentication

If your deployment requires auth:

1. Add `authToken` to environment
2. Enable Authorization header in requests
3. Update test scripts to handle auth errors

## Troubleshooting

### Common Issues

1. **Connection Refused**
   - Ensure service is running
   - Verify `baseUrl` in environment
   - Check firewall/network settings

2. **Invalid JSON Errors**
   - Check Content-Type header
   - Validate JSON syntax in request body
   - Ensure proper variable substitution

3. **ONDC Validation Errors**
   - Verify all required context fields
   - Check domain and version values
   - Ensure proper timestamp format

4. **Test Failures**
   - Check console for detailed error logs
   - Verify expected response structure
   - Update test assertions if API changed

### Debug Mode

Enable Postman Console (View > Show Postman Console) to see:
- Generated variable values
- Request/response details
- Script execution logs
- Error stack traces

## API Documentation

For detailed API documentation, refer to:
- OpenAPI/Swagger docs (if available)
- Source code in `src/routes/`
- ONDC Protocol documentation

## Support

For issues with this collection:
1. Check service logs for errors
2. Verify environment configuration
3. Review ONDC protocol requirements
4. Contact development team

## Updates

When API changes:
1. Update request bodies/URLs
2. Modify test assertions
3. Update environment variables
4. Document changes in git commits
