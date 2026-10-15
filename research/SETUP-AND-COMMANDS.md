# Setup and Commands

## Option A — Clone selected repositories on Windows

Open PowerShell in a dedicated workspace. The following script is idempotent and skips already cloned repositories. It clones only the selected set and checks that Git is available.

```powershell
$ErrorActionPreference = 'Stop'
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Install Git for Windows first: https://git-scm.com/download/win' }
$root = Join-Path $HOME 'ai-system-lab'
$vendor = Join-Path $root 'vendor'
New-Item -ItemType Directory -Force -Path $vendor | Out-Null
$repos = @(
  'ollama/ollama',
  'open-webui/open-webui',
  'OpenHands/OpenHands',
  'anomalyco/opencode',
  'openclaw/openclaw',
  'BerriAI/litellm',
  'langgenius/dify',
  'n8n-io/n8n',
  'langflow-ai/langflow',
  'LibreChat-AI/LibreChat',
  'Mintplex-Labs/anything-llm',
  'browser-use/browser-use',
  'microsoft/playwright',
  'qdrant/qdrant',
  'getzep/graphiti',
  'langfuse/langfuse',
  'firecrawl/firecrawl',
  'modelcontextprotocol/servers'
)
foreach ($repo in $repos) {
  $name = ($repo -split '/')[-1]
  $dest = Join-Path $vendor $name
  if (Test-Path (Join-Path $dest '.git')) { Write-Host "SKIP exists: $repo"; continue }
  if (Test-Path $dest) { Write-Warning "SKIP non-git directory: $dest"; continue }
  git clone --depth 1 "https://github.com/$repo.git" $dest
  if ($LASTEXITCODE -ne 0) { Write-Warning "CLONE FAILED: $repo" }
}
Write-Host "Done. Review licenses and per-project install docs before building."
```

## Option B — Clone selected repositories on macOS/Linux

```bash
set -u
command -v git >/dev/null || { echo "Install Git first"; exit 1; }
ROOT="$HOME/ai-system-lab"
mkdir -p "$ROOT/vendor"
cd "$ROOT/vendor"
repos=(
'ollama/ollama'
'open-webui/open-webui'
'OpenHands/OpenHands'
'anomalyco/opencode'
'openclaw/openclaw'
'BerriAI/litellm'
'langgenius/dify'
'n8n-io/n8n'
'langflow-ai/langflow'
'LibreChat-AI/LibreChat'
'Mintplex-Labs/anything-llm'
'browser-use/browser-use'
'microsoft/playwright'
'qdrant/qdrant'
'getzep/graphiti'
'langfuse/langfuse'
'firecrawl/firecrawl'
'modelcontextprotocol/servers'
)
for repo in "${repos[@]}"; do
  name="${repo##*/}"
  if [ -d "$name/.git" ]; then echo "SKIP exists: $repo"; continue; fi
  if [ -e "$name" ]; then echo "SKIP non-git directory: $name"; continue; fi
  git clone --depth 1 "https://github.com/$repo.git" "$name" || echo "CLONE FAILED: $repo"
done
```

## Ollama starter commands

Windows install:
```powershell
irm https://ollama.com/install.ps1 | iex
ollama pull qwen2.5-coder:7b
ollama list
ollama run qwen2.5-coder:7b
Invoke-RestMethod http://localhost:11434/api/tags
```

macOS/Linux install according to Ollama docs:
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5-coder:7b
ollama list
ollama run qwen2.5-coder:7b
curl -s http://localhost:11434/api/tags
```

## Before deploying any upstream service
1. Read its official installation guide and license.
2. Review Docker Compose ports, mounts, env files, and volumes.
3. Use a unique hostname, internal network and persistent volume per service.
4. Create secrets using local environment/secret storage, never commit them.
5. Verify service health checks, backups, auth and TLS before public access.
6. Deploy one integration at a time to avoid 80/443 or database port conflicts.
