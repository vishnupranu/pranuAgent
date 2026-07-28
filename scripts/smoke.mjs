import http from 'node:http';
import { once } from 'node:events';
import { spawn } from 'node:child_process';

const server = spawn(process.execPath, ['scripts/dev.mjs'], { stdio: ['ignore', 'pipe', 'pipe'] });
let output = '';
server.stdout.on('data', (chunk) => { output += chunk; });
server.stderr.on('data', (chunk) => { output += chunk; });
await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error(`Dev server did not start. Output: ${output}`)), 5000);
  server.stdout.on('data', (chunk) => {
    if (String(chunk).includes('http://0.0.0.0:5173')) {
      clearTimeout(timeout);
      resolve();
    }
  });
});
const response = await new Promise((resolve, reject) => {
  http.get('http://127.0.0.1:5173', resolve).on('error', reject);
});
if (response.statusCode !== 200) throw new Error(`Expected 200 from dev server, got ${response.statusCode}`);
server.kill('SIGTERM');
await once(server, 'exit');
console.log('Dev server smoke test passed.');
