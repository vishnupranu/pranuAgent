# Plugins, Skills, MCP Servers, CLI, API and Tool Integrations

The aim is a registry that can discover, document and connect tools. A repository is not always an installable plugin, and not every integration exposes a CLI. Use the project's official release and documentation as source of truth.

## Integration protocol types
- HTTP REST / OpenAI-compatible APIs
- MCP (stdio or streamable HTTP), after reviewing tool permissions
- CLI with explicit binary/path and allowed command list
- Webhooks (signature validation, retries and idempotency)
- OAuth integrations with least-privilege scopes
- Docker/container-based integrations
- Browser automation (Playwright/browser-use) in sandbox
- Plugin/skill directories with a manifest, version and permission declarations

## Initial catalog
| Name | Type | How to connect |
|---|---|---|
| Ollama | local model API + CLI | Ollama endpoint, `ollama list/pull/run` |
| Open WebUI | web application/API | self-hosted app; connect Ollama or supported OpenAI-compatible endpoints |
| LiteLLM | gateway/API | server-side provider config and secured gateway |
| OpenHands | coding agent | follow its official deploy docs; isolate each workspace |
| OpenCode | coding agent CLI | follow current official docs and configured providers |
| OpenClaw | agent/tools | follow official docs; audit integrations and computer/file privileges |
| Dify | AI app/workflow platform | configure model provider credentials server-side |
| n8n | workflow automation | credentials store, webhooks, approved nodes |
| Langflow | visual AI workflow | configured API/model connections |
| LibreChat | chat interface | provider configuration and account/session settings |
| AnythingLLM | workspace/RAG app | model provider and document ingestion config |
| Firecrawl | search/scrape/crawl API | API key in server secret store; respect quota and site rules |
| Playwright | browser automation library/CLI | use isolated browser context and controlled domains |
| browser-use | browser automation agent | configured LLM plus isolated browser session |
| Qdrant | vector database API | private endpoint and collection credentials |
| Graphiti | memory/knowledge graph | database/backend config per upstream docs |
| Langfuse | observability | project keys stored server-side; redact sensitive content |
| Coolify | deployment control plane | scoped token, internal URL; gate deploy/delete/rollback actions |
| MCP server catalog | tool protocol | inspect manifest, tools and permission scope before registration |

## Plugin manifest example
```json
{
  "id": "ollama",
  "name": "Ollama",
  "version": "1",
  "category": "models",
  "connectionType": "http",
  "healthCheck": "/api/tags",
  "permissions": ["models:list", "models:run"],
  "secretRefs": [],
  "enabled": false
}
```

## Skills
Skills are instructional packages; do not auto-execute arbitrary skill shell snippets. Import skills with source URL, version/hash, declared tools, expected secrets, filesystem scope and risk level. Require a human review before granting write, shell, browser, deployment or billing permissions.

## Security rules
- Never store API keys in browser storage or commit them.
- Never expose unrestricted shell or Docker socket to a dashboard.
- Use role-based access control server-side, audit events, task timeouts and cancellation.
- Use hostname allowlists for crawlers, prevent SSRF, and rate limit provider/API calls.
