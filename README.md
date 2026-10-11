# GSC Studio

Responsive, installable web workspace with an optional Electron desktop shell for Windows, macOS, and Linux. It is an independently deployable folder; it does not replace the repository's existing root application.

## Run the browser preview

Serve this folder with any static web server and open its `index.html`. For example, from this folder:

```bash
python -m http.server 5174
```

Then open `http://localhost:5174`. The app is also available at `/gsc-studio/` when the repository root is served.

## Deploy to Vercel

Import the repository into Vercel and set **Root Directory** to `gsc-studio`. This folder is static and needs no build command; publish the folder contents as the output. GitHub and Vercel accounts must be authorized by the owner.

## Desktop packages

From this folder, install the declared development dependencies with `npm install`, then run `npm run desktop`. Build platform installers with `npm run desktop:dist` on a machine with the relevant signing and packaging tools. Electron uses context isolation, sandboxing, and no renderer Node access.

## Included functionality

- Workspace dashboard and responsive page navigation.
- Browser-local projects, task board, workflow plans, preferences, import, and export.
- Direct OpenRouter chat and zero-price model catalog lookup; the API key is held only in page memory.
- Public RDAP domain registration lookup.
- Local text-file drafts and downloads, theme preview, PWA manifest/service worker, and desktop wrapper.
- Connection and publishing pages that accurately show services still needing owner credentials.

## Current product boundary

This preview has no account system, hosted database, multi-device sync, secure server-side secrets, isolated code execution, autonomous agent workers, GitHub OAuth/push, n8n control-plane connection, Vercel deployment API, or domain purchasing. Those require backend services, account authorization, and production security work; the UI does not claim they are connected. Local data remains in the browser profile, so export a backup before clearing site data.
