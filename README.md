# PRANU.AGENT

PRANU.AGENT is an extensible AI-powered Design Craft Platform that turns natural language into research, wireframes, UI specs, design systems, prototypes, accessibility audits, code handoff, CAD concepts, documentation, and exportable workflows.

## Run locally

```bash
npm install
npm test
npm run build
npm run smoke
npm run dev
```

The local app runs at `http://127.0.0.1:5173` during development and smoke testing.

## Deploy

```bash
VERCEL_TOKEN=<token> npm run deploy:vercel
```

GitHub Actions deployment is available for pushes to `main` when Vercel secrets are configured. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Included surfaces

- Web application with conversational design generation.
- Browser extension for webpage design inspection.
- Electron desktop configuration.
- Flutter/mobile token support.
- Figma, Adobe, and CAD bridge packages.
- Provider-agnostic AI routing and specialist agent composition.
