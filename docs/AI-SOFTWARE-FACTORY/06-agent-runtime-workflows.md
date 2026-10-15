# 06 — Agent Runtime and Workflows

## Agent loop
1. Load request, project policy, task state and relevant history.
2. Retrieve minimum necessary project context.
3. Produce a structured plan with acceptance criteria and dependencies.
4. Select a tool permitted by policy.
5. Validate tool arguments.
6. Ask for approval if policy requires.
7. Execute tool through the broker, not directly from model output.
8. Capture structured result, duration, exit code and redacted output.
9. Append durable event and update state.
10. Evaluate result against acceptance criteria.
11. Continue within configured iteration/time/token/tool budgets, or stop with a truthful explanation.

Models propose actions; trusted runtime code authorizes and executes them. Never execute raw model output as a shell command without parsing, validation and policy checks.

## Task states
QUEUED → PLANNING → RUNNING → WAITING_FOR_APPROVAL → TESTING → REPAIRING → COMPLETED / FAILED / CANCELLED. Support transitions only through validated state-machine functions. Interrupted tasks become recoverable/interrupted and must not be silently marked complete.

## Default agents
- Architect: architecture and trade-offs.
- Planner: dependency-aware task plan.
- Frontend: UI implementation.
- Backend: APIs and business rules.
- Database: schema and migration.
- Coding: repository modifications.
- QA: test design and execution.
- Debugger: diagnostics and repair proposal.
- Security: permission, dependency and secret review.
- DevOps: build, CI/CD and deployment manifests.
- Reviewer: acceptance criteria, diff and evidence review.

Agents share typed tasks and artifacts, not unlimited context. Require explicit ownership or patch/worktree isolation for parallel edits. Merge changes only after conflict checks and tests.

## Workflows
### New app
Parse requirements → clarify only essential missing details → plan → scaffold → implement incremental slices → launch preview → run checks → repair bounded failures → final evidence report.

### Existing repo
Inspect package manifests and git state → map structure → identify conventions → plan small diff → checkpoint → edit → tests/build → show diff → explain rollback.

### Debug
Capture error → find source and reproduce → formulate hypotheses → apply minimal patch → rerun failing command → run regression tests → retain diagnostics.

### Visual change
Select supported preview element → map source with confidence score → propose change → show patch → apply to real source → rebuild → refresh preview.

### Deployment
Inspect app/build output → detect platform constraints → create deployment plan → scan secrets/config → run tests → request explicit approval → deploy through authorized adapter → health check → provide rollback.

## Context management
Prioritize system safety policy, current task, repository conventions, relevant files, recent tool outputs and accepted requirements. Summarize older history, link artifacts and retrieve files as needed. Respect context windows and provider limits. Avoid repeatedly sending the entire repository to the model.

## Reliability controls
Timeout every tool; bound retries; use exponential backoff only for retryable operations; cancel child processes; persist checkpoints; detect looped identical actions; limit file and command output; provide pause/resume/cancel. Completion requires tool evidence appropriate to the task.

## Prompt-injection defense
Treat repository content, webpages, README files, issues and tool outputs as untrusted data, not instructions that override system policy. Do not expose secrets or widen permissions because project content requests it.