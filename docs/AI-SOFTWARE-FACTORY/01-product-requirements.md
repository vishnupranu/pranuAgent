# 01 — Product Requirements

## Vision
PRANU AI Software Factory turns natural-language requirements into maintainable applications while giving users direct access to source files, tools, tests, and runtime output. The product combines prompt-to-app UX with an actual coding-agent runtime.

## Target users
- Solo builders who prefer prompts over manual coding.
- Product designers prototyping and refining web apps.
- Developers working across unfamiliar repositories.
- Small teams needing repeatable agent-assisted workflows.

## Product outcomes
- Create a new supported application from a prompt.
- Open and understand an existing local repository.
- Generate a plan and show its progress.
- Edit real files with diffs and undo/checkpoints.
- Run a real preview and show real logs/errors.
- Ask the agent to change the project and verify the result.
- Use a local Ollama model without mandatory external AI APIs.
- Optionally configure remote providers, GitHub, integrations, and deployment.
- Export all project source files without platform lock-in.

## Functional requirements
1. Workspace/project creation, import, open, rename, archive, export.
2. Prompt chat with streamed responses and preserved task history.
3. Plan/task breakdown, approvals, cancellation, retry, and resume.
4. File explorer and Monaco editor with tabs, search, diffs, diagnostics, save/undo.
5. Real preview sessions with port assignment, readiness detection, hot reload, logs, restart and stop.
6. Shell sessions for PowerShell on Windows and supported shells on macOS.
7. Model provider settings, model discovery, connection test, routing and provider status.
8. Sandboxed tool executor with least-privilege policies and audit records.
9. Specialized agents managed by an orchestrator with explicit task dependencies.
10. Skills, MCP servers, connectors, plugin metadata, permissions, install/update/uninstall lifecycle.
11. Repository/document indexing with citations, filtering, incremental refresh and deletion.
12. Git status, branches, diffs, commits, revert/checkpoints; GitHub operations only after user authorization.
13. Automated tests, build checks, security checks and explicit result reporting.
14. Docker/CI/deployment manifests and optional Vercel integration, with approval before production changes.
15. Local-first mode with no required account and no required cloud AI provider.

## Nonfunctional requirements
- Cross-platform: Windows 10/11 x64 and Intel-based macOS, tested separately.
- Privacy: local project data remains local unless an explicit remote provider or integration is selected.
- Safety: command/file/network permissions, approval gates, audit logging, secrets redaction.
- Reliability: recover persisted tasks after restart; timeouts and bounded retries; isolate task failures.
- Accessibility: keyboard navigation, focus visibility, semantic controls and readable contrast.
- Performance: stream output; index incrementally; keep UI responsive during long tasks.
- Observability: correlate task, agent, tool, process and provider events with request IDs.
- Maintainability: typed boundaries, modular packages, migrations, documented decisions and tests.

## MVP acceptance
A user chooses an installed Ollama model, enters a prompt to create a small React/Vite app, sees actual files in the editor, starts a real browser preview, prompts a change, sees the file diff and updated preview, intentionally triggers a build error, receives a diagnosis, approves a fix, and sees a passing production build. Every stage must be demonstrated and logged.

## Out of scope for MVP
- Training a foundation model.
- Cloning proprietary applications or bypassing their authentication/services.
- Unattended destructive commands or production deployments.
- Promising identical output quality across models.
- Claiming full offline operation before dependencies and chosen models have been cached locally.