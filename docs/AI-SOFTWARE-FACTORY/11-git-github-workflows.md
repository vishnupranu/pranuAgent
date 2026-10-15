# 11 — Git and GitHub Workflows

## Local Git
Show branch, dirty files, staged/unstaged diffs, status and recent commits. Support create/switch branch, stage selected files, commit, revert/checkpoint and stash only after clear user confirmation. Never discard user changes without a confirmation dialog.

## Agent change workflow
1. Inspect Git state.
2. Capture a baseline checkpoint or create a dedicated branch/worktree.
3. Plan file ownership and changes.
4. Edit files.
5. Display diff and generated file list.
6. Run tests and security checks.
7. Ask user to approve commit or remote push.
8. Commit with a meaningful message.
9. Show resulting commit and rollback instructions.

## GitHub integration
Use official GitHub APIs or OAuth/App installation with minimum scopes. Never ask users to paste tokens into project source or logs. Use a supported credential store. Respect repository permissions. Features may include list repositories, clone, branch, create PR, fetch issues, create issues and CI status checks, each tested against granted scopes.

Remote writes require explicit authorization. Avoid force pushes by default. Verify destination repository and branch before every push/PR action. Never commit secrets, local databases, model files or generated build artifacts unless explicitly intended.

## CI
Pull requests run formatting, lint, type checking, unit tests, integration tests, dependency scanning and build. Protect main with required checks where repository settings permit. Build artifacts are labeled with commit SHA.

## Conflict handling
Detect unexpected branch head changes; do not overwrite another user's commit. Use expected SHA/lease checks or open a conflict resolution view. A rejected push must trigger a fetch and inspection, not blind force push.

## Recovery
Keep human-readable diffs and checkpoints. Revert only agent-owned changes where possible. Document how to restore prior state.