import { access, mkdir, cp } from 'node:fs/promises';
await access('index.html');
await access('src/main.mjs');
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('src', 'dist/src', { recursive: true });
console.log('Built PRANU.AGENT web assets into dist/.');
