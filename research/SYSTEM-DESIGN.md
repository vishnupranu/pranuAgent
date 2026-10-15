# Unified System Dashboard — Design Specification

## Purpose
Build one operator dashboard that catalogues tools and orchestrates independent services. Do NOT concatenate vendor source trees into one application. Integrate via documented APIs, MCP, OpenAPI, CLI and webhooks.

## Main navigation
1. Overview — service health, running agents, recent jobs, model availability, usage and alerts.
2. Model Hub — installed Ollama models, remote OpenAI-compatible providers, model metadata, context/window details and provider quotas.
3. Repositories — owner/project, canonical URL, category, license link, default branch, clone status/path, upstream release, local changes and security scan status.
4. Coding Agents — OpenHands, OpenCode and approved agents; task queue, workspace selector, allowed paths, logs, approvals, stop/cancel.
5. Workflows — n8n/Dify/Langflow connections, workflow list, run history, webhook state and errors.
6. Tools & Plugins — integrations catalog, protocol, capabilities, connection and health status, permissions, secrets reference, version.
7. Research & Crawling — Firecrawl jobs, source URLs, scrape/crawl status, findings and rate limits.
8. Knowledge — documents, ingestion jobs, Qdrant collections and indexing status.
9. Observability — Langfuse traces, task/agent logs, error rate, timings and quotas.
10. Deployment — Coolify projects/services, staging/production state, deployment logs, rollbacks.
11. Remote Access — documented URLs for VPN-protected Guacamole/RustDesk/MeshCentral, never public exposed shell access.
12. Settings — users, role-based access, audit logs, API connection health, backups and retention.

## Data model
- Service: id, name, category, kind, url, health_check, enabled, version, license_url, documentation_url, secret_reference, status, last_checked_at.
- Repository: id, owner, name, clone_url, default_branch, license, license_url, install_method, categories[], clone_path, clone_status, upstream_checked_at, notes.
- Model: id, runtime_id, model_name, quantization, disk_size, context_size, tags[], installed, capabilities[], last_seen_at.
- Provider: id, name, api_compatibility, base_url, quota_url, secret_reference, free_tier_notes, status.
- Job: id, category, project_path, agent_id, model_id, prompt, status, started_at, finished_at, exit_code, log_reference, requires_approval.
- Integration: id, name, protocol, manifest, permissions[], enabled, health, last_error, secret_reference.
- AuditEvent: id, actor, action, resource, timestamp, outcome, request_id.
- User: id, role, identity_provider_id, status, created_at.

## Permission model
- Owner: manage identity, integration credentials, deployments and policy.
- Admin: configure services, models, repositories and jobs, no billing/secret export by default.
- Operator: run approved tasks, stop jobs, view logs.
- Viewer: read dashboards and docs only.

Enforce all roles at API endpoints. The front-end alone is not an access-control boundary.

## Security
- Keep provider keys in server-side secrets/env, never browser local storage or source control.
- For arbitrary agent shell/browser access, use isolated container/VM workspaces, non-root user, read-only mounts by default, outbound allowlists, CPU/RAM/time quotas and explicit confirmation for write/delete/deploy actions.
- Do not expose Ollama 11434, Docker socket, database ports, MCP admin ports or raw remote desktop ports to the public internet.
- Use VPN/private access or HTTPS behind an identity-aware proxy.
- Redact secrets from logs and add audit events for actions.
- Validate all URLs, prevent SSRF (especially localhost, RFC1918, link-local and cloud metadata endpoints), and use allowlisted target hosts for crawler/integration features.

## First build milestone
Implement catalog CRUD, local config file import/export, service health checks, repository clone queue, Ollama model listing and documentation pages before launching agents or deployment mutations. Treat upstream repos as external projects.
