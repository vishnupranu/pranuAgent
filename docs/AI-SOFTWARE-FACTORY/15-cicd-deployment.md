# 15 — CI/CD and Deployment

## CI workflow
On pull request and main branch:
- install reproducibly from lockfile
- formatting/lint
- type checking
- unit and integration tests
- dependency and secret scans
- frontend build
- desktop build matrix for Windows x64 and Intel macOS where runners/toolchains permit
- upload artifacts with commit SHA and retention policy

Pin third-party actions to reviewed versions/SHAs when practical. Use least-privilege GitHub workflow permissions. Never print secrets.

## Environments
Development, staging and production should have distinct credentials/configuration. Production deploys require approvals and successful gates. Use environment-specific secret store and rollback instructions.

## Vercel
Vercel is suitable for a hosted frontend and compatible serverless endpoints, but it must not be treated as a safe host for unrestricted local shell execution or arbitrary generated-code sandboxes. The local desktop runtime is the source for project file editing and local model execution. If hosted features require durable worker processes, isolate them in a suitable separately managed service.

For a static/web frontend, configure project root/build/output based on the actual framework and repository structure. Add environment variables in Vercel settings, not committed files. Verify preview deployment, production build and runtime behavior before assigning a domain.

## Domain
Requested hostname: `pranu.ux.ui.dev`. Before configuring:
- verify domain/subdomain control and DNS record access
- verify Vercel team/project permissions
- add the hostname to the correct Vercel project
- follow Vercel's currently displayed DNS/verification instructions
- wait for certificate provisioning and verify HTTPS
Do not claim the domain has been connected until live DNS and HTTPS checks pass.

## Deployment plan
1. Validate working tree and intended commit.
2. Run tests/build/security checks.
3. inspect generated artifacts and environment variables.
4. Produce preview deployment.
5. verify health and smoke tests.
6. obtain explicit production approval.
7. deploy and verify.
8. retain prior deployment and rollback steps.

## Coolify/VPS
Optional adapter. Store SSH/deploy credentials securely; produce an exact plan and require approval before remote mutation. Health checks and rollback are required. Never expose VPS credentials to the LLM prompt.
