export const platforms = ['web','ios','android','desktop','browser-extension','figma','cad','presentation'];
export function parseIntent(raw) {
  const prompt = String(raw?.prompt ?? '').trim();
  if (prompt.length < 2) throw new Error('A design prompt is required.');
  const platform = platforms.includes(raw?.platform) ? raw.platform : 'web';
  return { prompt, domain: raw?.domain ?? 'digital product', audience: raw?.audience ?? 'general users', platform, accessibilityLevel: raw?.accessibilityLevel ?? 'WCAG AA', fidelity: raw?.fidelity ?? 'prototype', constraints: Array.isArray(raw?.constraints) ? raw.constraints : [] };
}
