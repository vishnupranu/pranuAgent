# 12 — API, SDK, Events and Webhooks

## API
Use versioned `/api/v1` endpoints with typed request/response schemas, authentication as appropriate, authorization, request IDs, limits and consistent errors. Document with OpenAPI.

Required resource groups:
- projects/files
- tasks/events/approvals
- agents
- providers/models
- terminal and preview sessions
- Git operations
- knowledge sources/search/index jobs
- skills/plugins/connectors
- builds/tests
- deployment jobs
- webhooks/audit events

## Example endpoints
GET/POST /api/v1/projects
GET /api/v1/projects/:id/files
GET/PUT /api/v1/projects/:id/files/content
POST /api/v1/tasks
GET /api/v1/tasks/:id
POST /api/v1/tasks/:id/cancel
GET /api/v1/tasks/:id/events (SSE)
GET/POST /api/v1/providers
POST /api/v1/providers/:id/test
POST /api/v1/previews
DELETE /api/v1/previews/:id
POST /api/v1/knowledge/sources
POST /api/v1/knowledge/search
POST /api/v1/deployments/plan
POST /api/v1/deployments/:id/execute

Validate IDs and ownership at every request; examples are a contract baseline, not a claim that endpoints already exist.

## SDK
Provide typed TypeScript client after API stability. Generate from OpenAPI where practical. Include auth configuration, abort signals, retry only for idempotent calls, typed errors and usage examples.

## Webhooks
Events include task.created, task.started, task.waiting_for_approval, task.completed, task.failed, build.completed, test.failed, deployment.started, deployment.completed and deployment.failed. Sign payloads, timestamp signatures, add delivery IDs, replay protection, retry with backoff and delivery logs. Provide secret rotation and delete/suspend controls.

## Security
Do not expose unauthenticated admin, shell, file-write or deployment APIs. Apply strict CORS, rate limiting, CSRF protection where applicable, URL validation against SSRF, payload limits and secret redaction. Never fetch arbitrary local URLs/metadata endpoints from a user-supplied connector without SSRF controls.

## Testing
Contract, authz, rate-limit, payload validation, signature verification, replay, retry, idempotency and secret-redaction tests.