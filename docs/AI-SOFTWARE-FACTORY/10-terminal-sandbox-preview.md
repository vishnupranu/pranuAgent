# 10 — Terminal, Sandbox and Preview

## Terminal
Provide multiple sessions with cwd, shell, command text, streaming stdout/stderr, exit code, start/duration, cancellation and process status. Use PowerShell on Windows and a supported shell on macOS. Do not assume shell syntax is portable; provide OS-specific command templates.

## Execution broker
All shell/filesystem/browser/deployment operations go through a broker with typed operations, permission checks, cwd validation, timeout, output limits, resource limits and audit records. Display agent-initiated commands and require approval for destructive or privileged operations. Prevent arbitrary host access by default.

## Sandboxing
Evaluate Docker/Podman and OS-level isolation per OS. If no sandbox is available, degrade to a restricted mode, clearly state limitations, and require explicit approval before executing generated code. Containers are not a complete security boundary on their own. Never mount the entire home directory or host secrets into an execution container.

## Preview manager
Start a project-specific dev server with known executable, validated cwd, captured logs, bounded ports and readiness polling. Track PID/process group, command, environment allowlist and project. Stop processes on request and clean up owned orphan processes after restart.

## Port allocation
Reserve an available port, detect races and retry within a bounded range. Never assume a given port belongs to this application. Show the actual preview URL only after the server responds.

## Browser
Use a real embedded browser/iframe or controlled external browser. Preview origin is untrusted; do not expose desktop bridge credentials or privileged APIs. A preview inspection bridge should be temporary, origin-bound and limited to DOM metadata/visual edits.

## Error repair
Collect concise, redacted build/runtime diagnostics and send to the configured model. Propose minimal diffs and re-run the failed command. Bound repair rounds and report unresolved errors. Do not claim repair succeeded until a subsequent test/build passes.

## Acceptance
Run two projects with separate ports; stop/restart; handle occupied port, missing dependency, crash, malformed command, timeout, oversized logs and a malicious preview page. Confirm cancellation and cleanup.