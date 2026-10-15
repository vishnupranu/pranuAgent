# 18 — Implementation Roadmap

Status markers are maintained by implementers. The creation of these specifications does not imply implementation.

## Phase 0 — Discovery and decisions
Inspect current repository; identify current app (GSC Studio), package/deployment shape, licenses and reusable modules. Write architecture decisions and baseline build/test report. Preserve existing application behavior.

Exit: repository inventory and agreed architecture decisions exist.

## Phase 1 — Application shell and design system
Implement real navigation, resizable panels, theme tokens, project list and settings with typed state. Eliminate fake controls or mark planned controls explicitly.

Exit: UI smoke tests and accessibility checks pass.

## Phase 2 — Local projects and editor
Project create/open, safe file tree, read/write, editor tabs, diffs, save/conflict protection, checkpoints.

Exit: project can be created and files edited/reopened without data loss.

## Phase 3 — Ollama provider
Connection detection, installed model list, select model, streaming test response, connection errors and local-only policy.

Exit: tested against a real available Ollama installation; CI mock suite passes.

## Phase 4 — Preview/process manager
Start real Vite preview, port reservation, readiness, logs, restart/stop, orphan cleanup.

Exit: create app and view it in a real preview; lifecycle tests pass.

## Phase 5 — Single coding agent
Typed tools, plan, filesystem reads/writes, approval gate, task state and event streaming, cancellation, bounded repair.

Exit: end-to-end prompt → file changes → preview → test and build is verified.

## Phase 6 — Shell and Git workflows
Windows PowerShell/macOS shell adapter, command approval, logs, Git status/diff/checkpoint/commit with confirmation.

Exit: platform tests, cancellation and protected-operation tests pass.

## Phase 7 — QA/debugging and multi-agent orchestration
Architect, frontend, backend, QA and review roles; task dependencies; ownership/worktrees or patch isolation; evidence-based completion.

Exit: multi-agent sample project completes with no silent conflicting edits.

## Phase 8 — Knowledge/vector retrieval
Incremental index, local embeddings, hybrid search, source citations, ignore rules, delete/reindex.

Exit: retrieval, citations, privacy and access-isolation tests pass.

## Phase 9 — Skills/plugins/MCP/connectors
Permissioned registry, manifest validation, install/remove/update, audit, connector health and scoped tool calls.

Exit: malicious skill and permission tests pass.

## Phase 10 — API, webhooks and SDK
Versioned API, OpenAPI, signed webhooks, idempotency, rate limits and typed client.

Exit: contract and security tests pass.

## Phase 11 — Deployment and CI
GitHub Actions, dependency/secret scan, Vercel frontend deployment, optional Coolify/VPS adapters and rollback.

Exit: preview deployment, smoke tests, deployment docs and credentials scopes verified.

## Phase 12 — Desktop packaging and release
Windows x64 and Intel macOS packaging, upgrades, diagnostics, backups and release notes.

Exit: separate clean-machine install and acceptance test on each OS.

## Prioritization
Deliver one complete vertical slice before wide feature coverage. Do not implement five providers, multiple vector databases or ten external agent runtimes before the local end-to-end workflow works.