import { spawn } from 'node:child_process';
import { access } from 'node:fs/promises';

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', shell: false, ...options });
    child.on('error', reject);
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} ${args.join(' ')} exited with ${code}`)));
  });
}

try {
  await access('vercel.json');
  await run(process.execPath, ['scripts/build.mjs']);

  const token = process.env.VERCEL_TOKEN;
  const args = ['vercel', '--prod', '--yes'];
  if (token) args.push('--token', token);

  await run('npx', args);
} catch (error) {
  console.error('\nPRANU.AGENT Vercel deployment did not complete.');
  console.error('Required environment: npm registry access to install the Vercel CLI and, for production deploys, VERCEL_TOKEN or an authenticated Vercel session.');
  console.error(error.message);
  process.exitCode = 1;
}
