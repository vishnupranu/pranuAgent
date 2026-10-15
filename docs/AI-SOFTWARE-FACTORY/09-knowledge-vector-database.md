# 09 — Knowledge Base and Vector Retrieval

## Sources
Project files, README/docs, approved public documentation, API schemas, user-uploaded text/PDF/Markdown, selected Git repositories and installed skill documentation. Source connectors must be opt-in and permission-scoped.

## Pipeline
Discover source → apply ignore and permission rules → parse → chunk with file/section metadata → compute checksum → generate embeddings locally or through explicit remote provider → index → retrieve with keyword and semantic ranking → add references to agent context. Incremental refresh should process only changed files.

## Backend choice
Choose one default after a small benchmark:
- SQLite FTS plus a local vector extension or supported embedded vector store for desktop.
- PostgreSQL + pgvector for team deployment.
- Qdrant as an optional remote/self-hosted vector adapter.
Avoid running multiple databases in MVP without a clear need.

## Metadata
projectId, sourceId, path, contentHash, language, heading, chunkIndex, sourceType, indexedAt, visibility and license/URI metadata where applicable. Enforce project/tenant filters before retrieval; vector similarity must not bypass authorization.

## Embeddings
Use a configurable local embedding model via Ollama when compatible, or a user-enabled remote embedding provider. Document vector dimension, normalization and reindex requirements when changing embedding models. Do not mix incompatible vectors.

## Retrieval
Hybrid keyword + vector retrieval; configurable top-k; reranking optional; citations with file and line/section ranges where available; score thresholds; context budget; duplicate suppression; filter by source/path. Agent must acknowledge when evidence was not found.

## Privacy and lifecycle
No remote embedding by default. Support exclude patterns, secrets scanning/redaction, source removal, index deletion, reindex and export. Deleted sources must no longer appear in results after deletion completes.

## Quality and tests
Evaluate retrieval with a curated question/source dataset, relevance metrics, citation validity, permission isolation, incremental update, delete, duplicate and offline tests.