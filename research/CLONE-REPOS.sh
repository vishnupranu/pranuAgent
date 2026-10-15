#!/usr/bin/env bash
set -u
command -v git >/dev/null || { echo "Install Git first"; exit 1; }
ROOT="$HOME/ai-system-lab"; VENDOR="$ROOT/vendor"; mkdir -p "$VENDOR"; cd "$VENDOR"
repos=('ollama/ollama' 'open-webui/open-webui' 'OpenHands/OpenHands' 'anomalyco/opencode' 'openclaw/openclaw' 'BerriAI/litellm' 'langgenius/dify' 'n8n-io/n8n' 'langflow-ai/langflow' 'LibreChat-AI/LibreChat' 'Mintplex-Labs/anything-llm' 'browser-use/browser-use' 'microsoft/playwright' 'qdrant/qdrant' 'getzep/graphiti' 'langfuse/langfuse' 'firecrawl/firecrawl' 'modelcontextprotocol/servers')
for repo in "${repos[@]}"; do
  name="${repo##*/}"
  if [ -d "$name/.git" ]; then echo "SKIP exists: $repo"; continue; fi
  if [ -e "$name" ]; then echo "SKIP non-git directory: $name"; continue; fi
  git clone --depth 1 "https://github.com/$repo.git" "$name" || echo "CLONE FAILED: $repo"
done
echo "Repositories are available under $VENDOR"
