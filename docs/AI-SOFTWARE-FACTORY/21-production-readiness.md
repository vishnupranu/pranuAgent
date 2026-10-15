# 21 — Production Readiness Checklist

A checkbox requires evidence, not a design statement.

## Product
- [ ] Prompt-to-project workflow is usable and actual runtime status is shown.
- [ ] No fake controls or simulated success.
- [ ] User data export, backup and restore are tested.

## Engineering
- [ ] Lint, type checks, unit/integration/E2E tests pass.
- [ ] Windows x64 and Intel macOS are tested independently.
- [ ] Migrations, cancellation and process cleanup are tested.
- [ ] Reproducible lockfile-based install works.

## AI
- [ ] Ollama provider and selected model verified.
- [ ] Unsupported model capabilities handled explicitly.
- [ ] Timeouts, retries, cancellation and recovery work.
- [ ] Completion requires actual test/build evidence.
- [ ] No silent cloud fallback.

## Security
- [ ] No secrets committed or logged.
- [ ] Path traversal and unauthorized symlinks rejected.
- [ ] Terminal approvals and limits work.
- [ ] Preview is isolated from privileged APIs.
- [ ] Skill/plugin permissions enforced.
- [ ] SSRF, prompt injection and secret redaction tested.
- [ ] Dependency/license inventory reviewed.

## CI and deploy
- [ ] CI uses least-privilege permissions and runs quality gates.
- [ ] Vercel build settings match actual framework.
- [ ] Preview deployment smoke tests pass.
- [ ] Production environment secrets are configured securely.
- [ ] Domain/DNS/HTTPS verified.
- [ ] Rollback instructions tested.
- [ ] Production deployment requires approval.

## Evidence
Attach real build/test output, platform installers, dependency/license record, security findings, migration status and rollback procedure.