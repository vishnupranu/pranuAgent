# 05 — Backend Services and Data

## Modules
Project service, filesystem broker, task service, agent orchestrator, provider registry, execution broker, preview manager, Git service, knowledge service, skills/plugins registry, connector service, deployment service, audit service and optional team auth service.

Each module owns a defined contract and avoids direct UI access to storage or OS processes.

## Local persistence
Use SQLite migrations for desktop metadata. Suggested tables:
- projects(id, name, root_path, created_at, updated_at, archived_at)
- tasks(id, project_id, status, prompt, plan_json, created_at, updated_at, cancelled_at)
- task_events(id, task_id, sequence, type, payload_json, created_at)
- agents(id, name, role, definition_json, enabled)
- provider_configs(id, provider_type, label, endpoint, model_preferences_json, enabled, created_at)
- approvals(id, task_id, action_type, details_json, decision, decided_at)
- preview_sessions(id, project_id, command, cwd, port, pid, status, created_at, stopped_at)
- knowledge_sources(id, project_id, source_path, checksum, status, indexed_at)
- audit_events(id, actor, action, target, outcome, redacted_metadata_json, created_at)

Secrets must be stored separately in OS credential storage or a supported encrypted store. Do not persist API secrets in the ordinary provider table. Add foreign keys, indexes, transactions, schema migrations and backup/restore.

## Optional server mode
PostgreSQL with versioned migrations and organization/project ownership. Every query must enforce tenant scope; never trust client-supplied organization IDs. Use row-level security where applicable, backed by server authorization rather than RLS alone.

## API conventions
- Version APIs under `/api/v1`.
- Validate all request and response contracts.
- Use consistent errors: code, message, requestId, retryable, safeDetails.
- Paginate list endpoints.
- Support idempotency keys for operations that create jobs, commits or deployments.
- Limit payload sizes and request rates.
- Redact tokens and secrets from logs.

## Required service operations
Project create/open/import/export; file list/read/write with safe-path validation; task create/get/cancel/resume; task-event streaming; provider list/test; model discovery; agent CRUD/run; approvals list/decide; preview start/stop/status/logs; terminal session start/input/stop/output; Git status/diff/commit/branch; indexing jobs/search; skill/plugin discovery/install/remove; webhook subscriptions; deployment plan/execute/status.

## File safety
Resolve paths against the authorized project root, reject traversal and unauthorized symlinks, apply per-operation size limits, use atomic writes where practical, create backups/checkpoints for multi-file agent patches and detect concurrent edits.

## Team authentication
Optional for hosted mode. Use a proven authentication implementation, secure sessions, CSRF protection where relevant, rate limits and role/tenant checks. Local single-user mode should not require a cloud account.

## Background jobs
Persist queued/running/terminal state and heartbeats. Use bounded retries, deduplication, cancellation and orphan detection. A job must distinguish execution failure from unavailable infrastructure.