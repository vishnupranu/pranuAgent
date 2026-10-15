# Repository Inventory: AI System Dashboard

## Model runtimes
| Repo | Purpose | Clone |
|---|---|---|
| ollama/ollama | Local model runtime; supports downloadable open-weight models | https://github.com/ollama/ollama.git |
| ggml-org/llama.cpp | Local CPU/GPU inference for GGUF models | https://github.com/ggml-org/llama.cpp.git |
| vllm-project/vllm | High-throughput model serving, generally Linux/GPU-focused | https://github.com/vllm-project/vllm.git |

## Chat, workspaces, knowledge
| Repo | Purpose | Clone |
|---|---|---|
| open-webui/open-webui | Self-hosted model chat interface | https://github.com/open-webui/open-webui.git |
| LibreChat-AI/LibreChat | Self-hosted multi-provider chat | https://github.com/LibreChat-AI/LibreChat.git |
| Mintplex-Labs/anything-llm | Documents/RAG and AI workspaces | https://github.com/Mintplex-Labs/anything-llm.git |

## Coding agents and tools
| Repo | Purpose | Clone |
|---|---|---|
| OpenHands/OpenHands | Software engineering agent platform | https://github.com/OpenHands/OpenHands.git |
| anomalyco/opencode | Terminal coding agent | https://github.com/anomalyco/opencode.git |
| openclaw/openclaw | Personal assistant and agent tools; review security carefully | https://github.com/openclaw/openclaw.git |
| browser-use/browser-use | Browser automation for agents | https://github.com/browser-use/browser-use.git |
| microsoft/playwright | Browser automation and testing engine | https://github.com/microsoft/playwright.git |

## Models gateway and app/workflow builder
| Repo | Purpose | Clone |
|---|---|---|
| BerriAI/litellm | OpenAI-compatible gateway/router for many model providers | https://github.com/BerriAI/litellm.git |
| langgenius/dify | AI app and workflow platform | https://github.com/langgenius/dify.git |
| n8n-io/n8n | App/workflow automation; fair-code/source-available license, inspect for commercial use | https://github.com/n8n-io/n8n.git |
| langflow-ai/langflow | Visual AI workflow builder | https://github.com/langflow-ai/langflow.git |
| FlowiseAI/Flowise | Visual LLM flow builder; connector metadata indicated archived status at research time, verify status before use | https://github.com/FlowiseAI/Flowise.git |

## Data and observability
| Repo | Purpose | Clone |
|---|---|---|
| qdrant/qdrant | Vector database for RAG | https://github.com/qdrant/qdrant.git |
| getzep/graphiti | Graph-based memory/knowledge layer | https://github.com/getzep/graphiti.git |
| langfuse/langfuse | LLM tracing, evaluation and observability | https://github.com/langfuse/langfuse.git |

## Web discovery and deployment
| Repo | Purpose | Clone |
|---|---|---|
| firecrawl/firecrawl | Web scraping/crawling/search implementation | https://github.com/firecrawl/firecrawl.git |
| coollabsio/coolify | Self-hosted deployment and PaaS | https://github.com/coollabsio/coolify.git |
| modelcontextprotocol/servers | MCP server examples and integrations | https://github.com/modelcontextprotocol/servers.git |

## Local clone notes
Do not run every repository simultaneously. Several contain multiple services, require databases, have large build dependencies or need secrets. Keep each upstream in its own checkout under `vendor/`; select a smaller deployment stack first. Open-source status and license are not guaranteed by repository name alone.
