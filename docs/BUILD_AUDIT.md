# Build Audit

The PRANU.AGENT deployment path is verified by `npm run audit`.

The audit checks:

- Required static app, script, and style files exist.
- `index.html` loads `src/main.mjs`, `src/styles/global.css`, and `src/ui/app.css`.
- Browser-native modules do not import CSS files directly.
- The app escapes prompt and generated content before rendering into `innerHTML`.
- `vercel.json` uses `npm run build`, emits `dist`, and includes SPA rewrites.
- Required npm scripts for test, build, smoke, audit, summary, and deploy exist.

Run the complete verification sequence:

```bash
npm test
npm run audit
npm run build
npm run smoke
```
