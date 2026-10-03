#!/usr/bin/env node

/**
 * Security Audit Script — AutoLock Pro USA
 * Audits the static production build in `dist/` against strict CSP rules,
 * asset self-hosting constraints, and security header synchronization.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIST_DIR = resolve('dist');
const ROOT_DIR = resolve('.');

let failureCount = 0;

function logPass(msg) {
  console.log(`\x1b[32m✔ PASS:\x1b[0m ${msg}`);
}

function logFail(msg) {
  console.error(`\x1b[31m✖ FAIL:\x1b[0m ${msg}`);
  failureCount++;
}

function logInfo(msg) {
  console.log(`\x1b[36mℹ INFO:\x1b[0m ${msg}`);
}

// 1. Verify dist exists
if (!existsSync(DIST_DIR)) {
  console.error(
    '\x1b[31mError: dist/ directory not found. Run `npm run build` before running security-audit.\x1b[0m'
  );
  process.exit(1);
}

// Collect all HTML files recursively
function getHtmlFiles(dir) {
  const files = [];
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getHtmlFiles(fullPath));
    } else if (entry.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
logInfo(`Auditing ${htmlFiles.length} generated HTML files in dist/ ...`);

// Prohibited patterns in HTML output
const FORBIDDEN_ORIGINS = [
  'cdn.tailwindcss.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'lh3.googleusercontent.com',
  'unpkg.com',
  'cdnjs.cloudflare.com',
  'cdn.jsdelivr.net'
];

for (const file of htmlFiles) {
  const relativePath = file.replace(DIST_DIR, 'dist');
  const content = readFileSync(file, 'utf8');

  // Check 1: Inline scripts with executable JavaScript (allowed: type="application/ld+json")
  const scriptRegex =
    /<script(?![^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi;
  let scriptMatch;
  while ((scriptMatch = scriptRegex.exec(content)) !== null) {
    const scriptBody = scriptMatch[1].trim();
    if (scriptBody.length > 0) {
      logFail(`Inline executable script found in ${relativePath}: "${scriptBody.slice(0, 60)}..."`);
    }
  }

  // Check 2: Inline style attributes
  const inlineStyleRegex = /\sstyle=["'][^"']+["']/gi;
  if (inlineStyleRegex.test(content)) {
    logFail(`Inline style attribute found in ${relativePath}`);
  }

  // Check 3: Inline event handlers (onclick, onmouseover, onload, etc.)
  const onHandlerRegex = /\son[a-z]+=["'][^"']*["']/gi;
  if (onHandlerRegex.test(content)) {
    logFail(`Inline event handler found in ${relativePath}`);
  }

  // Check 4: javascript: pseudo-protocol
  if (/href=["']javascript:/i.test(content)) {
    logFail(`javascript: URL found in ${relativePath}`);
  }

  // Check 5: Prohibited external origins
  for (const origin of FORBIDDEN_ORIGINS) {
    if (content.includes(origin)) {
      logFail(`Prohibited external origin "${origin}" found in ${relativePath}`);
    }
  }

  // Check 6: target="_blank" without rel="noopener"
  const targetBlankRegex = /<a[^>]*target=["']_blank["'][^>]*>/gi;
  let linkMatch;
  while ((linkMatch = targetBlankRegex.exec(content)) !== null) {
    const tag = linkMatch[0];
    if (!tag.includes('rel=') || !tag.includes('noopener')) {
      logFail(`target="_blank" link missing rel="noopener" in ${relativePath}: ${tag}`);
    }
  }
}

if (failureCount === 0) {
  logPass('All HTML documents conform to strict CSP and self-hosting constraints.');
}

// 2. Check Security Header files
logInfo('Auditing multi-host security headers configuration...');

const headerFiles = [
  'public/_headers',
  'vercel.json',
  'netlify.toml',
  'deploy/nginx/autolockprousa.conf',
  'deploy/apache/.htaccess'
];

for (const hf of headerFiles) {
  const fullPath = join(ROOT_DIR, hf);
  if (existsSync(fullPath)) {
    const hContent = readFileSync(fullPath, 'utf8');
    if (!hContent.includes('Content-Security-Policy')) {
      logFail(`Missing Content-Security-Policy in ${hf}`);
    } else if (!hContent.includes('X-Frame-Options')) {
      logFail(`Missing X-Frame-Options in ${hf}`);
    } else if (!hContent.includes('X-Content-Type-Options')) {
      logFail(`Missing X-Content-Type-Options in ${hf}`);
    } else {
      logPass(`Security headers verified in ${hf}`);
    }
  } else {
    logFail(`Header file not found: ${hf}`);
  }
}

// Summary
console.log('\n----------------------------------------');
if (failureCount === 0) {
  console.log('\x1b[32m✔ Security Audit PASSED with 0 vulnerabilities or violations.\x1b[0m\n');
  process.exit(0);
} else {
  console.error(`\x1b[31m✖ Security Audit FAILED with ${failureCount} violation(s).\x1b[0m\n`);
  process.exit(1);
}
