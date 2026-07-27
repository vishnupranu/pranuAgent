import { buildProject } from '../core/designEngine.mjs';

const icons = { sparkles: '✦', bot: '🤖', boxes: '▦', access: '♿', workflow: '↔', download: '⇩', surfaces: '◈' };
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);

function surfaceCards() {
  return [
    ['Browser Extension', 'Inspect live pages, extract colors and typography, summarize headings, and prepare redesign prompts.'],
    ['Desktop', 'Electron-ready offline shell for private design workflows and local model routing.'],
    ['Mobile', 'Flutter token bridge for iOS and Android implementation handoff.'],
    ['Design Plugins', 'Figma and Adobe manifests for design-tool integration paths.'],
    ['CAD Bridge', 'Concept bridge for architectural, floor-plan, and mechanical assembly design prompts.'],
    ['Vercel Web', 'Static production deployment with clean build output and no external runtime dependencies.']
  ];
}

export function mountApp(root) {
  if (!root) throw new Error('PRANU.AGENT root element was not found.');
  let prompt = 'Design an accessible EV dashboard for first-time electric vehicle owners.';

  const render = () => {
    const safePrompt = escapeHtml(prompt);
    const project = buildProject({ prompt, platform: /cad|floor|assembly/i.test(prompt) ? 'cad' : 'web', fidelity: 'prototype' });
    root.innerHTML = `
      <main class="shell">
        <section class="hero" aria-labelledby="title">
          <p class="eyebrow">${icons.sparkles} PRANU.AGENT Universal AI Design Craft Platform</p>
          <h1 id="title">Describe any design challenge. Orchestrate specialist AI agents. Deliver production-ready design artifacts.</h1>
          <p class="hero-copy">PRANU.AGENT converts plain-language goals into user research, information architecture, design systems, prototypes, accessibility guidance, implementation handoff, and cross-platform export paths.</p>
          <div class="composer">
            <textarea aria-label="Design request">${safePrompt}</textarea>
            <button type="button">Generate craft system</button>
          </div>
        </section>
        <section class="grid" aria-label="Generated design intelligence">
          <article class="panel wide"><h2>${icons.bot} Agent team</h2><div class="chips">${project.agents.map((agent) => `<span>${escapeHtml(agent.label)}</span>`).join('')}</div></article>
          <article class="panel"><h2>${icons.boxes} Design system</h2><ul class="token-list">${Object.entries(project.system.tokens).slice(0, 10).map(([key, value]) => `<li><code>${escapeHtml(key)}</code><strong>${escapeHtml(value)}</strong></li>`).join('')}</ul></article>
          <article class="panel"><h2>${icons.access} Accessibility</h2><ul>${project.system.accessibilityRules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join('')}</ul></article>
          <article class="panel wide"><h2>${icons.workflow} Artifact pipeline</h2><div class="artifacts">${project.artifacts.map((artifact) => `<section><h3>${escapeHtml(artifact.title)}</h3><p>${escapeHtml(artifact.content)}</p><small>${artifact.exports.map(escapeHtml).join(' · ')}</small></section>`).join('')}</div></article>
          <article class="panel wide"><h2>${icons.surfaces} Platform surfaces</h2><div class="surface-grid">${surfaceCards().map(([title, body]) => `<section class="surface-card"><h3>${title}</h3><p>${body}</p></section>`).join('')}</div></article>
          <article class="panel export wide"><h2>${icons.download} Exports</h2><p>Figma, browser extension audits, desktop app shells, mobile themes, CAD concepts, slides, PDF, CSS, Tailwind, React, Flutter, SwiftUI, Compose, and MCP workflows.</p></article>
        </section>
      </main>`;
    root.querySelector('textarea').addEventListener('input', (event) => {
      prompt = event.target.value;
      render();
    });
  };

  render();
}
