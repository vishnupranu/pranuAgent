import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
const types = { '.html':'text/html', '.mjs':'text/javascript', '.css':'text/css', '.json':'application/json' };
http.createServer(async (req,res)=>{ const path = req.url === '/' ? 'index.html' : req.url.slice(1); try { const data = await readFile(join(process.cwd(), path)); res.writeHead(200, {'content-type': types[extname(path)] ?? 'text/plain'}); res.end(data); } catch { res.writeHead(404); res.end('Not found'); } }).listen(5173, '0.0.0.0', ()=>console.log('PRANU.AGENT running on http://0.0.0.0:5173'));
