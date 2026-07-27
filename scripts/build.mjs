import { access, cp, mkdir, rm } from 'node:fs/promises';

await access('index.html');
await access('src/main.mjs');
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('src', 'dist/src', { recursive: true });
await cp('apps/browser-extension/manifest.json', 'dist/browser-extension-manifest.json');
console.log('Built PRANU.AGENT deployable web assets into dist/.');
