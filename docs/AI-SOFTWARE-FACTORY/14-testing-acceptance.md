# 14 — Testing and Acceptance

## Layers
- Unit: provider normalization, state machine, permissions, path validation, task planning, chunking, configuration.
- Integration: SQLite/PostgreSQL migrations, Ollama adapter, filesystem broker, Git, preview lifecycle, tool broker.
- UI: prompt streaming, provider config, editor conflicts, approvals, task timeline, preview errors.
- E2E: project prompt through generated app, real preview and repair cycle.
- Security: path traversal, untrusted tool output, secret redaction, SSRF, plugin permissions and tenant isolation.
- Cross-platform: Windows x64 and Intel macOS built/tested separately.

## Core acceptance scenario
1. Start app and run diagnostics.
2. Detect Ollama and list installed models.
3. Select a real installed model and test the connection.
4. Create a new project from a natural-language prompt.
5. See a plan and task states based on real runtime events.
6. Generate real files; open and modify them in editor.
7. Launch real Vite preview and verify HTTP readiness.
8. Prompt for a code change; inspect diff and apply.
9. Verify preview reflects change.
10. Cause a controlled build error.
11. Capture real error output and propose a repair.
12. Apply repair and rerun failed command.
13. Run project tests/build and record results.
14. Cancel another long task and verify process cleanup.
15. Restart the app and ensure persisted project/task history is accurate.

## CI commands
Use the commands actually defined in package manifests, such as lint, typecheck, test and build. Do not invent commands. Record environment, commit SHA, command, exit code and summary.

## Quality gates
No TypeScript errors, lint failures, failing tests or failed production build for a release candidate unless explicitly documented as a blocker. No unreviewed secrets or critical dependency vulnerabilities. Core operations have actionable failures and do not fake completion.

## Test data
Use toy repositories and local fixtures. Never run destructive tests against the user's active repository or production services. Provider tests should be mocked in CI; local Ollama smoke tests can be optional when no model server is present.

## Release evidence
Include test report, platform builds, known limitations, SBOM/dependency inventory where appropriate, license notice, migration status and rollback procedure.