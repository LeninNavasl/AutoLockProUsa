# Dependency & Supply Chain Policy — AutoLock Pro USA

This document governs the introduction, maintenance, and auditing of dependencies.

---

## 1. Principles of Minimalism

1. **Frontend Zero-Weight:** No client runtime libraries (React, Vue, jQuery, Lodash) shall be added unless an ADR demonstrates an insurmountable need.
2. **Build-Time Isolation:** Build tools (Astro, TypeScript, Vite) execute only during compilation and do not ship code to the user's browser.
3. **No Unaudited Packages:** Every new package added must be evaluated for security posture, maintainer credibility, and dependency depth.

---

## 2. Supply Chain Protections

1. **`allowScripts` in `package.json`:**
   Restricts package lifecycle install hooks (`preinstall`, `postinstall`) to only essential native build binaries (`esbuild`, `sharp`). Malicious dependencies attempting arbitrary execution during `npm install` are blocked.
2. **Lockfile Enforcement:**
   `package-lock.json` is committed to git. CI pipelines must use `npm ci` rather than `npm install`.
3. **Vulnerability Threshold:**
   Production dependencies must pass `npm audit --omit=dev --audit-level=high` with zero vulnerabilities.
4. **Vulnerability Exemption Tracking:**
   If a dev/build dependency reports an upstream advisory that cannot be resolved due to ecosystem delays (e.g. `http-cache-semantics` in Astro build cache when no remote fetching is used), it must be documented with an assessment of actual exploitability in this static context.
