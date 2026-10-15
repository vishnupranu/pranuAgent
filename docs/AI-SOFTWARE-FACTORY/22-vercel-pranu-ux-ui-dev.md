# 22 — Vercel Deployment: pranu.ux.ui.dev

## Target
Intended hostname: `pranu.ux.ui.dev`.

This is a deployment plan, not confirmation that DNS or the Vercel project is configured.

## Architecture boundary
Vercel can host the web frontend and compatible API routes. A hosted UI cannot safely get unrestricted access to the user's local filesystem, Ollama server, terminal or arbitrary generated-code processes. Keep those capabilities in the local desktop runtime or use a separately secured execution service.

## Preflight
- Verify ownership/control of the subdomain and DNS.
- Verify access to the intended Vercel account/team and project.
- Inspect actual repository root and framework/build scripts.
- Decide whether this is static frontend-only or includes authenticated server routes.
- Remove secrets and local machine data from client bundles.
- Set secrets in Vercel environment settings, never committed files.

## Deployment steps
1. Import the intended GitHub repository.
2. Select the actual frontend package/root directory; do not assume monorepo root.
3. Configure framework, build command and output directory based on package scripts.
4. Configure required variables securely.
5. Deploy a preview and inspect logs.
6. Run smoke tests and verify key routes.
7. Promote only after tests and explicit approval.
8. Add `pranu.ux.ui.dev` in the project's Domains settings.
9. Follow Vercel's currently displayed DNS/verification records for the subdomain.
10. Verify DNS resolution, valid HTTPS certificate and app health from an external client.

## Git workflow
Use feature branches, pull requests, required checks and preview deployments. Production should deploy only from the protected release branch after checks.

## Acceptance
The target hostname resolves to the correct project; HTTPS validates; expected build is served; smoke tests pass; no secrets appear in client code or logs. Only then report deployment as complete.