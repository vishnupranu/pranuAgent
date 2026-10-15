# 03 — UX and Visual Design System

## Experience goal
Premium coding workspace inspired by common AI builder workflows, while retaining an original design language and brand. The app should feel like a practical integrated development environment, not a marketing dashboard.

## Main shell
- Top bar: brand, current workspace/project, branch/status, model selector, task state, settings.
- Left rail/sidebar: projects, files, agents, skills, knowledge, integrations, Git, deployments.
- Center: chat/planner/editor tabs and task details.
- Right pane: live preview/browser, viewport controls and element inspection.
- Bottom panel: integrated terminal, problems, test results, logs and process manager.
- Panels are resizable and collapsible; layout persists between sessions.

## Design tokens
Use semantic CSS variables for background, surface, elevated surface, border, primary text, secondary text, accent, success, warning, danger, focus, and code surfaces. Provide light and dark themes. Avoid hardcoded color values inside components. Use consistent spacing, typography, radii, shadows and motion durations.

## Components
Button, IconButton, Tooltip, Dialog, Drawer, Tabs, CommandPalette, Toast, StatusBadge, ProgressTimeline, TreeView, FileTab, DiffViewer, CodeEditorFrame, ChatMessage, PromptComposer, AgentCard, AgentRunTimeline, ApprovalCard, PreviewToolbar, ViewportSwitcher, TerminalTabs, LogViewer, ProviderCard, ModelPicker, SkillCard, PluginPermissionDialog, ConnectionStatus, EmptyState, ErrorState and ConfirmDialog.

## UX requirements
- Every async operation has a real status sourced from the backend.
- Distinguish queued, planning, running, waiting for approval, testing, repairing, completed, failed and cancelled.
- Use skeletons only while loading real data.
- Provide cancellation for long-running work.
- Preserve prompt drafts and unsaved editor changes.
- Display diffs before consequential bulk edits.
- Do not hide build errors behind generic “something went wrong” messages.
- Keyboard shortcuts must be discoverable and remappable where practical.
- Provide accessible focus handling, reduced motion, contrast, labels and keyboard operation.
- Responsive layouts must keep core controls available at laptop size; mobile layout may prioritize monitoring and prompt entry over full IDE editing.

## Visual element editing
Preview inspection must use an explicit bridge injected only into supported local preview origins. Identify a selected element and mapped source file/component when possible. If mapping is uncertain, offer safe CSS/DOM inspection instead of pretending to edit source code exactly. All generated changes must modify project files and be previewed again.

## Empty and failure states
Each page must have a useful first action, explanatory text and recovery path. Unconfigured connectors must clearly say “Not connected”. A missing model must show a setup action. A failed preview must show process logs and a restart option.

## Acceptance
Panel resizing, theme switching, project navigation, task states, code/preview synchronization, keyboard navigation, responsive behavior and error states are covered by UI tests or documented manual tests.