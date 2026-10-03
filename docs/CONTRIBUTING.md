# Contributing to AutoLock Pro USA

Thank you for contributing to **AutoLock Pro USA**. This project strictly adheres to **Spec-Driven Development (SDD)** and non-negotiable security standards.

---

## 1. Golden Rules for Contributors

1. **Spec Before Code:** Do not write code or change behavior without an approved spec in `specs/NNN-name/`. Follow the [SDD Workflow](file:///.agents/rules/01-sdd-workflow.md).
2. **Never Add Third-Party Scripts or Remote Assets:**
   - Fonts must be self-hosted via `@fontsource-variable/plus-jakarta-sans`.
   - Icons must be inlined SVGs from `@iconify-json/material-symbols`.
   - Images must be bundled locally and processed by `astro:assets`.
   - No Google Tag Manager, analytics, external chat widgets, or CDN links.
3. **Strict Content Security Policy (CSP):**
   - Zero inline styles (`style="..."` is forbidden).
   - Zero inline event handlers (`onclick="..."` is forbidden).
   - Zero inline scripts with code (except static `<script type="application/ld+json">`).
4. **Single Source of Truth for Business Data:**
   - Never hardcode phone numbers, email addresses, licenses, or business hours in pages or components. Import from `src/config/site.ts`.
5. **Progressive Enhancement:**
   - The entire website must remain fully functional with JavaScript disabled in the browser.
6. **Pass All Quality Gates:**
   - Before submitting changes, `npm run verify` must pass with 0 errors.

---

## 2. SDD Workflow Steps

1. Create a spec directory: `specs/NNN-feature-name/` using `specs/000-template/`.
2. Define WHAT and WHY in `spec.md` with verifiable acceptance criteria.
3. Define HOW in `plan.md` (components, security checks, test coverage).
4. Create an actionable checklist in `tasks.md`.
5. Implement the code following the tasks sequentially.
6. Run `npm run verify`.
7. Update `harness/memory/project-state.md` and `docs/CHANGELOG.md`.

---

## 3. Useful Commands

```bash
npm run dev              # Start local dev server (http://localhost:4321)
npm run build            # Compile production static build in dist/
npm run preview          # Preview dist/ locally
npm run check            # Typecheck Astro templates and TypeScript
npm run lint             # Run ESLint
npm run format:check     # Verify Prettier formatting
npm run test             # Run Vitest test suite
npm run audit:security   # Run dist/ security scanner
npm run verify           # FULL HARNESS CHECK (All gates)
```

---

## 4. Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat(spec-NNN): description`
- `fix(spec-NNN): description`
- `docs: description`
- `security: description`
- `test: description`
- `chore: description`
