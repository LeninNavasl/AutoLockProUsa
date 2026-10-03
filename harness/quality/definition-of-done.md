# Definition of Done (DoD) — AutoLock Pro USA

A feature, bugfix, or refactor is considered **Done** only when all the following criteria are satisfied:

---

## 1. Specification Compliance

- [ ] An approved spec exists in `specs/NNN-feature/spec.md`.
- [ ] All Given/When/Then acceptance criteria in `spec.md` are demonstrably met.
- [ ] Tasks in `tasks.md` are completed and marked `[x]`.
- [ ] The spec status is marked `status: implemented`.

## 2. Code Quality & Standards

- [ ] Written in TypeScript strict mode with no `any` types.
- [ ] Zero inline styles (`style="..."`) or inline event handlers (`onclick=`).
- [ ] All colors, radii, shadows, and spacings use CSS variables from `src/styles/tokens.css`.
- [ ] Responsive design functions cleanly across Mobile (< 640px), Tablet (640-1024px), and Desktop (> 1024px).
- [ ] Passes `npm run check` (Astro & TypeScript diagnostics).
- [ ] Passes `npm run lint` (ESLint 10 with Astro & a11y rules).
- [ ] Passes `npm run format:check` (Prettier).

## 3. Accessibility & Usability (WCAG 2.2 AA)

- [ ] All interactive elements are keyboard focusable with a high-contrast focus indicator (`:focus-visible`).
- [ ] Touch targets are at least 44px x 44px.
- [ ] Text contrast meets minimum 4.5:1 for body and 3:1 for large UI text.
- [ ] Images have descriptive `alt` text. Decorative icons use `aria-hidden="true"`.
- [ ] The site functions fully with JavaScript disabled.

## 4. Security & Performance

- [ ] All assets are 100% self-hosted (zero third-party CDNs).
- [ ] Passes `npm run audit:security` (CSP compliance, no inline code in `dist/`).
- [ ] Core Web Vitals targets are within the defined performance budget (LCP < 1.5s, CLS = 0).

## 5. Verification & Memory

- [ ] Full harness command `npm run verify` passes with exit code 0.
- [ ] `harness/memory/project-state.md` is updated.
- [ ] `docs/CHANGELOG.md` is updated with user-facing changes.
