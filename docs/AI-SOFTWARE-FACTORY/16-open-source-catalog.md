# 16 — Open-Source Integration Catalog

This catalog identifies projects to evaluate, not a directive to clone every repository or a claim that integration is complete. Before adopting any project, verify the current repository, maintenance activity, license, security posture, supported OS, runtime model, dependencies and extension interfaces.

| Project | Official repository | Candidate use | Integration approach to evaluate |
|---|---|---|---|
| OpenHands | https://github.com/All-Hands-AI/OpenHands | Software-engineering agent runtime | API/service integration or selected libraries; review runtime requirements |
| OpenCode | https://github.com/anomalyco/opencode | Coding-agent UX and tools | CLI/service integration after compatibility and license review |
| Open WebUI | https://github.com/open-webui/open-webui | Local model UI, tools and knowledge concepts | Evaluate APIs/extensions; avoid embedding a whole independent app without need |
| Continue | https://github.com/continuedev/continue | IDE assistance and model adapters | Reuse compatible public extension/config patterns |
| Aider | https://github.com/Aider-AI/aider | Repository-aware edits | Optional command adapter in controlled workspace |
| LangGraph | https://github.com/langchain-ai/langgraph | Stateful orchestration | Library integration for workflows if complexity warrants |
| LiteLLM | https://github.com/BerriAI/litellm | Model gateway and normalization | Optional provider routing, especially in server mode |
| Ollama | https://github.com/ollama/ollama | Local model inference | Local HTTP API and health/model inventory |
| Playwright | https://github.com/microsoft/playwright | Browser automation/testing | Test worker and optional browser agent |
| MCP | https://github.com/modelcontextprotocol | Tool/connectivity protocol | Use a maintained client implementation and permissions broker |
| Monaco Editor | https://github.com/microsoft/monaco-editor | Code editor | Frontend dependency/package integration |
| Vite | https://github.com/vitejs/vite | Web application dev server | Project preview lifecycle |
| Tauri | https://github.com/tauri-apps/tauri | Desktop shell | Cross-platform packaging evaluation |

## Repository/model/template discovery
Prefer official repositories and model registries. Search public GitHub for focused templates (React/Vite, Next.js, API starter, Docker/CI, MCP server, agent skills) and curate results rather than automatically downloading/running everything. Record URL, pinned commit/version, license, checksum, date checked, purpose, compatibility, setup instructions and security findings.

## Model catalog
Do not hardcode availability claims. Ollama model names/tags change; discover installed models and use provider APIs where possible. For remote providers, list only models available to the configured account/endpoint. Tag capabilities based on tested provider behavior, not model marketing copy.

## Skills and prompts
Create first-party starter skills for: project discovery, UI implementation, API implementation, database migrations, test writing, debugging, security review, documentation, Git operations and deployment planning. Keep each skill small, versioned, scoped, licensed and testable.

## Licensing
Maintain a third-party notices file and an inventory per dependency/template/skill. Do not copy source code unless compatible with the intended distribution. Respect licenses, attribution, trademarks, model terms and dataset conditions.