# 04 — Frontend and Workspace

## Suggested implementation
React + TypeScript + Vite, a maintained component system, Monaco Editor for code, a virtualized tree for large repositories, and a split-pane layout library selected after compatibility review. Use accessible semantic HTML and route-level boundaries.

## Pages
- Workspace home and recent projects.
- Builder/IDE workspace.
- Project settings.
- Agents and task history.
- Model providers and model inventory.
- Skills and plugin registry.
- Connectors/MCP.
- Knowledge bases and indexing jobs.
- Git and change review.
- Test/build results.
- Deployment environments and history.
- Security/audit settings.
- Preferences and diagnostics.

## State ownership
Server/local runtime is source of truth for projects, tasks, agents, tool permissions, model capabilities and process status. UI state owns panel sizes, open tabs, prompt drafts and ephemeral selections. Avoid deriving task completion from chat text. Use typed API clients and invalidate/refetch state on authoritative task events.

## Editor requirements
Real file contents, tabs, dirty markers, save, conflict detection, undo/redo, project-wide search, find/replace, formatting, language diagnostics, diff view, readonly handling and encoding/newline preservation where feasible. Large files should not block the main UI. Protect unsaved buffers from agent changes with conflict resolution or merge UI.

## Preview requirements
Render the actual dev server output in an isolated browser frame. Use explicit origin allowlists and a controlled bridge. Do not let preview content call privileged desktop APIs. Display preview URL, startup state, reload/restart/stop controls, responsive viewport sizes and console/process logs.

## Error handling
Normalize API, provider, filesystem, process and preview errors into actionable UI. Include correlation/task ID when available. Avoid swallowing errors or rendering fake success states. Provide safe retry only when operations are idempotent.

## Frontend tests
Component tests for prompt composer, editor dirty-state, approval dialog, provider form, preview status and task timeline. Browser tests cover create project, prompt streaming, change review, theme selection, preview failure/recovery, keyboard accessibility and responsive layouts.