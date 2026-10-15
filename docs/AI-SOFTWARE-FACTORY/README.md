# PRANU AI Software Factory — Specification Index

**Product:** PRANU AI Software Factory  
**Goal:** Build a local-first, cross-platform AI coding and app-building environment inspired by established AI builders without copying proprietary implementation or branding.  
**Status:** Specification baseline; implementation and verification are tracked separately.

## Principles

- Local-first by default, with Ollama as a selectable primary model provider.
- Windows 10/11 x64 and Intel macOS are first-class targets.
- Honest task status: never claim build/test/deployment success without evidence.
- Real workspace files, editor, terminal, and browser preview—not mock controls.
- User approval for destructive actions, secrets, network access, and deployment.
- Modular architecture; integrate open-source projects only after license, security, maintenance, and compatibility review.
- Local work must not depend on a Lovable server or paid AI API. Cloud providers are explicit opt-in integrations.

## Specifications

1. [Product requirements](01-product-requirements.md)
2. [System architecture](02-system-architecture.md)
3. [UX and visual design system](03-ux-design-system.md)
4. [Frontend and workspace](04-frontend-workspace.md)
5. [Backend and data services](05-backend-services.md)
6. [Agent runtime and multi-agent workflows](06-agent-runtime-workflows.md)
7. [Models and provider adapters](07-model-providers-models.md)
8. [Skills, plugins, MCP and connectors](08-skills-plugins-connectors.md)
9. [Knowledge base and vector retrieval](09-knowledge-vector-database.md)
10. [Terminal, sandbox and preview](10-terminal-sandbox-preview.md)
11. [Git and GitHub workflows](11-git-github-workflows.md)
12. [API, SDK, events and webhooks](12-api-sdk-webhooks.md)
13. [Security and privacy](13-security-privacy.md)
14. [Testing and acceptance criteria](14-testing-acceptance.md)
15. [CI/CD and deployment](15-cicd-deployment.md)
16. [GitHub open-source integration catalog](16-open-source-catalog.md)
17. [Agent prompts and shell scripts](17-agent-prompts-shells.md)
18. [Implementation phases](18-implementation-roadmap.md)
19. [Environment configuration](19-environment-configuration.md)
20. [README / developer onboarding requirements](20-readme-onboarding.md)
21. [Production readiness checklist](21-production-readiness.md)
22. [Vercel deployment plan](22-vercel-pranu-ux-ui-dev.md)

## Current repository baseline

The existing `main` branch contains a lightweight GSC Studio preview. Its own README states that account systems, hosted persistence, secure server-side secrets, isolated execution, autonomous agent workers, GitHub OAuth/push, Vercel deployment API, and other production integrations are not yet included. This specification must not imply those capabilities already exist.

## How to use

Treat the documents as an engineering contract. Implement in the order given by the roadmap. Track each feature as **Not started**, **In progress**, **Implemented**, and **Verified**. A feature is not verified until automated tests or a documented manual acceptance test passes.

## Branding and domain

Use **PRANU AI Software Factory** as the working product name. The intended web domain is `pranu.ux.ui.dev`; domain ownership, DNS, and Vercel access must be verified by the operator before production routing.