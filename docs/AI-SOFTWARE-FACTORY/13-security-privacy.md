# 13 — Security and Privacy

## Threat model
Assets include source code, API keys, local files, Git credentials, model provider credentials, user prompts, connector access and deployment credentials. Threats include prompt injection in repository/web content, malicious skills, path traversal, command injection, SSRF, cross-project/tenant access, secret logging, unsafe preview bridge, dependency compromise and destructive agent actions.

## Principles
- Local-first and least privilege.
- Explicit remote-provider opt-in.
- Project-root filesystem boundary.
- Tool calls validated by trusted code.
- Approval for destructive/high-impact actions.
- Secrets stored outside project files and model context.
- Audit and explain consequential operations.
- Dependency/license provenance.

## Permission tiers
Read project; edit files; install packages; execute commands; network access; named-secret use; Git commit; remote repository write; deployment; admin changes. Defaults are deny for sensitive capabilities. Permissions are scoped to project, agent, connector and duration as appropriate.

## Prompt injection
Treat source files, README content, web pages, issues, model output and tool results as untrusted data. They cannot alter system policy or grant permissions. Summarize untrusted content separately from trusted instructions; apply allowlists to tools and arguments.

## Filesystem and terminal
Reject path traversal and unauthorized symlinks; restrict cwd; validate executable/arguments; use shell policy and allowlists where feasible; limit timeout/output; terminate child processes; prevent writes outside allowed workspace. Do not expose SSH keys, browser profiles or OS credential stores by default.

## Secrets
Use OS credential storage or a suitable encrypted secret store. Redact known tokens from logs, telemetry, error messages and model context. Never commit .env files containing real secrets. Provide rotation/revocation and secret access audit records.

## Network and connectors
Default to no broad network access for generated processes. Use explicit egress policy and URL allowlists. Prevent SSRF to loopback/private networks/metadata endpoints unless local service access is deliberately allowed. Require confirmation for remote writes and deployments.

## Preview isolation
Treat project preview pages as untrusted. Do not expose desktop IPC or server credentials. Use origin allowlists, restrictive CSP where feasible, and a minimal inspection bridge.

## Supply chain
Pin dependencies where appropriate, run audit/scanning, inspect open-source licenses, record versions and origin, avoid unreviewed install scripts, and support update/rollback.

## Privacy
Provide visible local/remote mode, clear provider selection, retention/export/delete controls, and explain which data is sent to each external service. No hidden cloud fallback.

## Release gate
Threat model review, dependency scan, secret scan, authorization tests, sandbox escape review appropriate to deployment, and documented limitations before public release.