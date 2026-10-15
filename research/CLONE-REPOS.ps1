$ErrorActionPreference = 'Stop'
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Install Git for Windows first.' }
$root = Join-Path $HOME 'ai-system-lab'
$vendor = Join-Path $root 'vendor'
New-Item -ItemType Directory -Force -Path $vendor | Out-Null
$repos = @(
  'ollama/ollama','open-webui/open-webui','OpenHands/OpenHands','anomalyco/opencode',
  'openclaw/openclaw','BerriAI/litellm','langgenius/dify','n8n-io/n8n','langflow-ai/langflow',
  'LibreChat-AI/LibreChat','Mintplex-Labs/anything-llm','browser-use/browser-use',
  'microsoft/playwright','qdrant/qdrant','getzep/graphiti','langfuse/langfuse',
  'firecrawl/firecrawl','modelcontextprotocol/servers'
)
foreach ($repo in $repos) {
  $name = ($repo -split '/')[-1]
  $dest = Join-Path $vendor $name
  if (Test-Path (Join-Path $dest '.git')) { Write-Host "SKIP exists: $repo"; continue }
  if (Test-Path $dest) { Write-Warning "SKIP non-git directory: $dest"; continue }
  git clone --depth 1 "https://github.com/$repo.git" $dest
  if ($LASTEXITCODE -ne 0) { Write-Warning "CLONE FAILED: $repo" }
}
Write-Host "Repositories are available under $vendor"
