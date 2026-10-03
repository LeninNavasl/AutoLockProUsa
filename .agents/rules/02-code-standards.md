---
trigger: always_on
description: Code standards for Astro, TypeScript and CSS in this repository.
---

# 02 — Code Standards

## TypeScript

- `strict` mode (extends `astro/tsconfigs/strictest`). No `any`; use `unknown` + narrowing.
- Use path aliases: `@components/*`, `@config/*`, `@data/*`, `@layouts/*`, `@styles/*`, `@i18n/*`, `@scripts/*`, `@assets/*`.
- Export **types** for every data module (`Service`, `Faq`, `Testimonial`, ...).
- Pure functions in `src/lib/` must have unit tests in `tests/`.

## Astro components

- One component per file, `PascalCase.astro`.
- Declare `interface Props` at the top of the frontmatter. Provide defaults.
- Components are **presentational**; content comes from `src/data/`, `src/config/` or `src/content/`.
- Folders: `components/layout` (chrome), `components/ui` (atoms), `components/sections` (page blocks),
  `components/seo` (head metadata).
- Scoped `<style>` per component. Global styles only in `src/styles/`.
- **Never** use `set:html` with non-constant input. **Never** use `define:vars` (emits inline style/script).
- **Never** write inline `style="..."` attributes or inline event handlers (`onclick=`).

## Client-side JavaScript

- Only when strictly needed (copy-to-clipboard, blog filter). Place it in `src/scripts/*.ts`
  and import it from a processed `<script>` tag — Astro bundles it into a hashed external file.
- Must be **progressive enhancement**: the page works without it.
- No frameworks (React/Vue/etc.) unless an ADR approves it.

## CSS

- **Design tokens only** (`var(--color-…)`, `var(--space-…)`, `var(--radius-…)`). No raw hex in components.
- Mobile-first media queries: `@media (min-width: 40rem)` (640px), `(min-width: 64rem)` (1024px).
- Respect `prefers-reduced-motion` for every animation.
- Use logical properties where reasonable (`margin-inline`, `padding-block`).
- Class naming: component-scoped simple names (Astro scopes them). Global utilities prefixed `u-`.

## Files & naming

| Kind         | Convention      | Example                   |
| ------------ | --------------- | ------------------------- |
| Component    | PascalCase      | `ServiceCard.astro`       |
| Page         | kebab-case      | `services.astro`          |
| Script / lib | kebab-case      | `copy-email.ts`           |
| Blog post    | kebab-case slug | `lost-transponder-key.md` |
| Spec folder  | `NNN-kebab`     | `003-services/`           |

## Commits

Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`, `security:`.
Reference the spec: `feat(services): add ignition card (spec 003)`.
