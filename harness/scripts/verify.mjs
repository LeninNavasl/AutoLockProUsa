#!/usr/bin/env node

/**
 * Full Harness Verification Runner — AutoLock Pro USA
 * Sequentially executes all quality and security gates:
 * 1. Typecheck (astro check)
 * 2. Lint (eslint)
 * 3. Format Check (prettier)
 * 4. Unit Tests (vitest)
 * 5. Production Build (astro build)
 * 6. Security Audit (security-audit.mjs)
 */

import { spawnSync } from 'node:child_process';
import process from 'node:process';

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const steps = [
  { name: '1. Astro & TypeScript Diagnostics', command: npmCmd, args: ['run', 'check'] },
  { name: '2. ESLint Verification', command: npmCmd, args: ['run', 'lint'] },
  { name: '3. Prettier Formatting Check', command: npmCmd, args: ['run', 'format:check'] },
  { name: '4. Vitest Unit Test Suite', command: npmCmd, args: ['run', 'test'] },
  { name: '5. Production Static Build', command: npmCmd, args: ['run', 'build'] },
  { name: '6. CSP & Static Security Audit', command: npmCmd, args: ['run', 'audit:security'] }
];

console.log('\n======================================================');
console.log('  AutoLock Pro USA — Engineering Harness Verification');
console.log('======================================================\n');

let failedStep = null;

for (const step of steps) {
  console.log(`\x1b[34m▶ Running: ${step.name}...\x1b[0m`);
  const start = Date.now();
  const result = spawnSync(step.command, step.args, { stdio: 'inherit', shell: true });
  const duration = ((Date.now() - start) / 1000).toFixed(2);

  if (result.status !== 0) {
    console.error(
      `\n\x1b[31m✖ ${step.name} FAILED (exit code: ${result.status}) after ${duration}s\x1b[0m\n`
    );
    failedStep = step.name;
    break;
  }
  console.log(`\x1b[32m✔ ${step.name} passed in ${duration}s\x1b[0m\n`);
}

if (failedStep) {
  console.error('\n======================================================');
  console.error(`  HARNESS VERIFICATION FAILED AT: ${failedStep}`);
  console.error('======================================================\n');
  process.exit(1);
} else {
  console.log('\n======================================================');
  console.log('  ✔ ALL HARNESS GATES PASSED SUCCESSFULLY!');
  console.log('======================================================\n');
  process.exit(0);
}
