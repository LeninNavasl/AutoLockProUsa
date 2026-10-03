---
name: security-audit
description: Run and interpret the AutoLock Pro USA security audit (dependencies, built output, headers parity, CSP). Use before releases, after adding dependencies, or when touching headers/scripts.
---

# Skill: Security Audit

## Automated

```bash
npm run build
npm run audit:security   # node harness/scripts/security-audit.mjs
npm audit --audit-level=high
```

`security-audit.mjs` fails the build if `dist/` contains:

| Check                                                                                  | Why                                |
| -------------------------------------------------------------------------------------- | ---------------------------------- |
| Inline `<script>` with content (non-JSON-LD)                                           | Blocked by `script-src 'self'`     |
| Inline `style="…"` attributes or `<style>` blocks                                      | Blocked by `style-src 'self'`      |
| `on*=` event handler attributes                                                        | XSS vector, blocked by CSP         |
| `javascript:` URLs                                                                     | XSS vector                         |
| References to external origins in `src`/`href` (except `tel:`/`mailto:`/canonical)     | Third-party dependency / data leak |
| `target="_blank"` without `rel="noopener"`                                             | Reverse tabnabbing                 |
| Header drift between `public/_headers`, `vercel.json`, `deploy/nginx`, `deploy/apache` | Inconsistent protection per host   |

> JSON-LD `<script type="application/ld+json">` is allowed: browsers do not execute it, so CSP does not apply.

## Manual (before each release)

1. Review [`harness/security/checklist.md`](../../../harness/security/checklist.md) and tick every item.
2. After deploy, scan headers:
   - https://securityheaders.com → target **A+**
   - https://observatory.mozilla.org → target **A+**
   - https://csp-evaluator.withgoogle.com
3. Verify HTTPS + HSTS (and submit to https://hstspreload.org once stable).
4. Confirm `/.well-known/security.txt` is reachable and `Expires` is in the future.
5. Record findings in `harness/memory/lessons-learned.md` if anything new was discovered.
