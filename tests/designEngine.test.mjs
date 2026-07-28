import assert from 'node:assert/strict';
import { buildProject } from '../src/core/designEngine.mjs';
const project = buildProject({ prompt: 'Design a hospital management system for elderly users', platform: 'web' });
assert.equal(project.agents.some((agent) => agent.role === 'accessibility'), true);
assert.equal(project.artifacts.length > 5, true);
assert.equal(project.system.accessibilityRules.length > 3, true);
console.log('designEngine.test.mjs passed');
