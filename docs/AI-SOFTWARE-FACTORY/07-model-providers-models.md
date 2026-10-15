# 07 — Models and Provider Adapters

## Provider interface
Define a provider interface for listModels (when supported), validateConnection, generate, stream, cancel (when supported), embeddings (when supported), and capability reporting. Use adapters to normalize provider errors, usage, tool calls and structured outputs.

## Ollama first
Default local endpoint is configurable, commonly `http://127.0.0.1:11434`. Detect connection, list installed models and allow explicit model selection. Do not silently pull large models. Display estimated disk/network requirement and ask before downloads. Support a test prompt and report the exact model returned by Ollama.

Gemma is a user-selected model family, not a guaranteed specific tag. Discover installed model names and query runtime capabilities where possible. Do not assume tool calling, JSON schema, vision or a fixed context size works for every model.

## Other adapters
Optional adapters: OpenAI API, Anthropic API, Google Gemini API, OpenRouter, LM Studio, vLLM and generic OpenAI-compatible endpoints. Each adapter must be independently configured, tested and enabled. For unsupported features, either use a documented fallback or block the action with a clear explanation.

## Model routing
Routing policies can assign planning, coding, reviewing, summarization, vision and embeddings to different providers. Provide per-project override and a global default. A fallback is used only when the user has enabled it. Remote fallback must never happen silently in local-only mode.

## Settings
Provider name, endpoint, model ID, capabilities, timeout, retry policy, generation options where supported, privacy mode, enabled state and fallback route. Secrets use OS credential storage or an encrypted secret mechanism, not browser localStorage or committed environment files.

## Cost and tokens
Display provider-reported usage when available. Distinguish estimates from measured usage. Do not charge fictional API costs for local models. Explain that consumer chatbot subscriptions do not automatically include API access; cloud APIs may require separate credentials and billing.

## Caching/offline
Cache model inventory and capability results with timestamps. Clearly distinguish offline-capable paths from features needing network access. Offline mode requires the selected model, app dependencies, package artifacts and other resources to already be present locally.

## Tests
Mock provider conformance tests; real local smoke test when Ollama is installed; timeout, cancellation, malformed response, unreachable provider, capability mismatch and secret-redaction tests.