---
trigger: always_on
description: Non-negotiable security rules. Violations fail the harness.
---

# 03 — Security Rules (non-negotiable)

Full threat model and rationale: [`harness/security/`](../../harness/security/README.md).

## MUST

1. **Strict CSP compatibility.** The production CSP is:
   `default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; ...`
   - No inline `<script>` content, no inline `style=""`, no `on*=` handlers, no `javascript:` URLs.
   - No `eval`, `new Function`, `setTimeout("string")`.
2. **Self-host every asset.** No CDN, no Google Fonts, no remote images, no embeds (maps, video, chat widgets).
3. **Keep security headers in sync** across `public/_headers`, `vercel.json`, `deploy/nginx/*`, `deploy/apache/*`.
   The audit script compares them.
4. **External links** (if ever added) use `rel="noopener noreferrer"` and `target="_blank"` only when necessary.
5. **Dependencies:** pinned via `package-lock.json`, installed with `npm ci` in CI, `npm audit --audit-level=high` must pass.
   New dependencies require justification in the PR (see `harness/security/dependency-policy.md`).
6. **No secrets in the repo.** This site needs none. If one ever appears, it is a bug.
7. **Validate `tel:` and `mailto:` values** through `src/lib/contact.ts` helpers — never build them by hand.

## MUST NOT

- Add forms, inputs that send data, or any data collection without a new ADR + spec + privacy review.
- Add analytics/trackers/cookies without a new ADR, consent design and CSP update.
- Use `set:html` with anything other than trusted, build-time constants.
- Use `target="_blank"` without `rel="noopener noreferrer"`.
- Disable or weaken a header to "make something work". Fix the code instead.

## Before finishing any task

```bash
npm run verify   # includes: npm audit + dist/ security audit (inline code, external origins, header parity)
```
