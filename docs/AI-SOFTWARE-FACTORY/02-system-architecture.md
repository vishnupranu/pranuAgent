# 02 — System Architecture

## Architecture principle
Start as a modular desktop-first application with a reusable web UI and explicit provider/tool interfaces. Split services only when measured load or trust boundaries require it.

## Suggested layout
- `apps/web`: React/TypeScript UI.
- `apps/desktop`: Tauri 2 wrapper and permissioned native bridge (verify Windows/macOS Intel support).
- `apps/server`: optional authenticated API for team mode; not required for local single-user MVP.
- `apps/worker`: optional process for durable background jobs.
- `packages/contracts`: request/event/result schemas.
- `packages/agent-runtime`: agent loop, planning, state machine and policy checks.
- `packages/model-providers`: Ollama and remote provider adapters.
- `packages/tool-runtime`: filesystem, shell, git, browser, test and deployment tool contracts.
- `packages/preview-manager`: development server lifecycle, ports and logs.
- `packages/knowledge`: parsing, chunking, embeddings, lexical/vector search.
- `packages/security`: permissions, approvals, secrets redaction and audit records.
- `packages/ui`: shared tokens and components.
- `docs`: specifications and decisions.

## Runtime topology
UI → typed local API/desktop bridge → policy layer → orchestrator → tools/providers.
Tool execution runs in a per-project working directory and, where available, an isolated container or OS-level sandbox. Preview server is a separate process with bounded resources. Local model calls go to a configurable Ollama endpoint. Cloud calls occur only when an explicitly enabled provider is chosen.

## State model
Persist projects, tasks, task events, provider metadata (not plaintext secrets), agent definitions, tool approvals, indexes, preview sessions, and audit events. Use SQLite for single-user desktop metadata. For optional team mode use PostgreSQL and migrations. Store file content in project folders, not duplicate blob storage by default.

## Contracts
Use versioned TypeScript schemas (for example Zod) for tool inputs, outputs, provider capabilities, task events, API responses and persisted records. Reject invalid payloads at boundaries. Stream task events over SSE; use WebSockets only for bidirectional terminal or interaction sessions that require them. REST endpoints use consistent error envelopes and request IDs.

## Process lifecycle
A preview/task process must be registered with its project, command, cwd, port, start time, owner, and status. Support stop, timeout, exit detection and orphan cleanup on app restart. Never kill processes based only on an assumed port owner.

## Failure behavior
- Provider unavailable: show a useful connection error and do not fake a response.
- Model lacks a capability: downgrade workflow or explain the missing capability.
- Tool fails: capture exit code/stdout/stderr (with secret redaction), return a structured failure to the agent.
- Worker crashes: persist last event and restore as interrupted; resume only if state is safe.
- Build fails: display exact diagnostics and allow a bounded repair attempt.
- Network disabled: continue local features where dependencies/model are cached; show which feature requires connectivity.

## Deployment profiles
1. Local desktop: SQLite, local project folders, Ollama, local process manager.
2. Self-hosted team: API, PostgreSQL, queue if needed, authenticated users, container execution.
3. Public web demo: static/hosted UI only unless secure backend execution is deliberately deployed. Do not run arbitrary generated code in shared serverless request handlers.

## Architecture decisions
Document meaningful trade-offs under `docs/decisions/`. In particular, decide and test Tauri vs Electron, SQLite vs PostgreSQL for local state, sandbox strategy per OS, chosen vector backend, and whether team mode is included in MVP.