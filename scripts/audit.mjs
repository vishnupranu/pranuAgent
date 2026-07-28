import { access, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const requiredFiles = [
  'index.html',
  'vercel.json',
  'package.json',
  'src/main.mjs',
  'src/ui/App.mjs',
  'src/ui/app.css',
  'src/styles/global.css',
  'scripts/build.mjs',
  'scripts/dev.mjs',
  'scripts/smoke.mjs'
];

for (const file of requiredFiles) await access(file);

const html = await readFile('index.html', 'utf8');
assert.match(html, /<script type="module" src="\/src\/main\.mjs"><\/script>/, 'index.html must load the app entry');
assert.match(html, /\/src\/styles\/global\.css/, 'index.html must load global CSS');
assert.match(html, /\/src\/ui\/app\.css/, 'index.html must load UI CSS');

const app = await readFile('src/ui/App.mjs', 'utf8');
assert.match(app, /escapeHtml/, 'App must escape rendered prompt and generated content');
assert.doesNotMatch(app, /import ['"].*\.css['"]/, 'Native browser modules must not import CSS files');

const vercel = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.equal(vercel.buildCommand, 'npm run build');
assert.equal(vercel.outputDirectory, 'dist');
assert.ok(Array.isArray(vercel.rewrites), 'Vercel SPA rewrites must be configured');

const pkg = JSON.parse(await readFile('package.json', 'utf8'));
for (const script of ['test', 'build', 'smoke', 'audit', 'deploy:summary', 'deploy:vercel']) {
  assert.ok(pkg.scripts[script], `Missing npm script: ${script}`);
}

console.log('Deployment audit passed.');
