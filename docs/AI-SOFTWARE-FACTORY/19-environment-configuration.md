# 19 — Environment Configuration

## Rules
Commit only safe defaults and `.env.example`; never commit real tokens or local secrets. Validate configuration at startup and expose a safe diagnostics view that redacts sensitive values.

## Example variables (optional server/team deployment)
```dotenv
NODE_ENV=development
APP_MODE=local
APP_BASE_URL=http://127.0.0.1:5173
API_BASE_URL=http://127.0.0.1:8787
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_DEFAULT_MODEL=
DATABASE_URL=
VECTOR_BACKEND=sqlite
VECTOR_DATABASE_URL=
GITHUB_APP_ID=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
VERCEL_TOKEN=
VERCEL_TEAM_ID=
VERCEL_PROJECT_ID=
PUBLIC_APP_DOMAIN=pranu.ux.ui.dev
```

All values above are examples/placeholders; do not populate real secrets in a committed file. Some variables may not be needed in local mode. Prefer OS credential storage for desktop secret values instead of environment files.

## Startup diagnostics
Check runtime versions, OS/architecture, config validity, port availability, writable workspace, Ollama health, selected-model availability, database migrations and optional integrations. Each check reports pass/warning/fail and an actionable next step.

## Modes
- local: no account required; local model and local project workspace.
- cloud-providers: only explicitly enabled provider calls.
- team-server: authenticated API and PostgreSQL; not assumed enabled.
- demo: read-only or safe sandbox; never pretend full code execution is available.

## Configuration UI
Display labels and masked values. Support validate/test, enable/disable, scope and connection history. Do not leak secret values back to the UI after storing them.