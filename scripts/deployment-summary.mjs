import { readFile } from 'node:fs/promises';

const vercel = JSON.parse(await readFile('vercel.json', 'utf8'));
const summary = {
  app: 'PRANU.AGENT',
  buildCommand: vercel.buildCommand,
  outputDirectory: vercel.outputDirectory,
  localUrl: 'http://127.0.0.1:5173',
  expectedProductionUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'Set after successful Vercel deploy',
  githubMainPush: 'Requires a configured git remote with push credentials'
};
console.log(JSON.stringify(summary, null, 2));
