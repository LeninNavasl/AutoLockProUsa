# Style Guide — AutoLock Pro USA

This document defines code conventions, design system implementation guidelines, and quality standards for all development in AutoLock Pro USA.

---

## 1. Visual & Design System Guidelines

Based on [`stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md`](../stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md) and implemented in `src/styles/tokens.css`.

### 1.1 Color Tokens & Semantic Roles

**Never hardcode hex values or RGB strings inside components.** Always use CSS custom properties.

| Token                                   | Semantic Role      | Intended Usage                                                                   |
| --------------------------------------- | ------------------ | -------------------------------------------------------------------------------- |
| `--color-primary` (`#004ac6`)           | Brand Anchor       | Navigation highlights, active tabs, primary headers, info links                  |
| `--color-primary-container` (`#2563eb`) | Electric Blue      | Primary buttons, service badge highlights                                        |
| `--color-emergency` (`#f97316`)         | Emergency Orange   | **STRICT:** Only for high-conversion phone calls and emergency roadside dispatch |
| `--color-emergency-hover` (`#ea580c`)   | Emergency Hover    | Hover/active states on phone call buttons                                        |
| `--color-success` (`#10b981`)           | Soft Emerald       | Active 24/7 fleet indicators, verified badges, live status dots                  |
| `--color-accent` (`#06b6d4`)            | Luminous Cyan      | Subtle gradient overlays and ambient light cues                                  |
| `--color-ink` (`#0f172a`)               | Deep Slate         | Primary headings, scannable data points                                          |
| `--color-ink-muted` (`#64748b`)         | Muted Slate        | Body copy, subtitles, secondary metadata                                         |
| `--color-canvas` (`#faf8ff`)            | Canvas             | Main page background (soft anti-glare)                                           |
| `--color-surface` (`#ffffff`)           | Pure White Surface | Content cards, interactive containers, modal shells                              |
| `--color-surface-dim` (`#f1f5f9`)       | Surface Dim        | Subtle card backgrounds and stepper tracks                                       |
| `--color-border` (`#e2e8f0`)            | Border Slate       | Crisp 1px borders framing white cards                                            |

> **Important Rule on Emergency Orange:**
> Coral Orange (`--color-emergency`) is strictly reserved for the emergency phone number, call action buttons, and direct phone link highlights. It must **never** be used as a general decorative border or unrelated badge color.

### 1.2 Typography

The sole font family for the application is **Plus Jakarta Sans** (Variable).

- **Fluid Type Tokens:**
  - `--text-display`: Hero headlines (`clamp(2.25rem, 5vw, 3.5rem)`).
  - `--text-headline-lg`: Major section titles (`clamp(1.75rem, 4vw, 2.5rem)`).
  - `--text-headline-md`: Secondary headers (`clamp(1.35rem, 3vw, 1.75rem)`).
  - `--text-headline-sm`: Card titles (`clamp(1.15rem, 2vw, 1.35rem)`).
  - `--text-body-lg`: Lead intro copy (`1.125rem` / 18px).
  - `--text-body-md`: Standard readable copy (`1rem` / 16px).
  - `--text-body-sm`: Secondary descriptions (`0.875rem` / 14px).
  - `--text-label-md` / `--text-label-sm`: Button labels, tags, and status pills.
- **Copy Density Rule:** Continuous paragraphs must not exceed 3 lines. Chunk information into cards, key-value rows, and bulleted takeaways.
- **Capitalization Rule:** ALL CAPS is permitted only for `label-sm` pills with `letter-spacing: 0.04em`.

### 1.3 Elevations & Depth

Ambient, multi-layered shadows on clean white surfaces:

- `--shadow-1`: Standard card resting state `0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)`.
- `--shadow-2`: Interactive card hover state `0 12px 30px -4px rgba(37, 99, 235, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.03)` with `transform: translateY(-2px)`.
- `--shadow-3`: Sticky header and mobile floating bar `0 20px 40px -8px rgba(15, 23, 42, 0.12)` with `backdrop-filter: blur(12px)`.

---

## 2. Code Conventions

### 2.1 Astro Components

- File naming: `PascalCase.astro` (e.g. `ServiceCard.astro`, `EmergencyBanner.astro`).
- Define an explicit TypeScript `interface Props` at the top of the component script.
- Scoped `<style>` blocks only. No global styles inside individual component files.
- **No inline styles (`style="..."`):** This is prohibited by our Content Security Policy.
- **No inline scripts (`<script>` with inline code):** Reusable client scripts belong in `src/scripts/*.ts`.
- **Accessibility:** Touch targets must be at least `44px x 44px`. Focus rings (`:focus-visible`) must be clear and high-contrast.

```astro
---
interface Props {
  title: string;
  badge?: string;
  class?: string;
}

const { title, badge, class: className } = Astro.props;
---

<article class:list={['service-card', className]}>
  {badge && <span class="service-card__badge">{badge}</span>}
  <h3 class="service-card__title">{title}</h3>
  <div class="service-card__body">
    <slot />
  </div>
</article>

<style>
  .service-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    padding: var(--space-md);
    box-shadow: var(--shadow-1);
    transition:
      transform 200ms cubic-bezier(0.2, 0, 0, 1),
      box-shadow 200ms cubic-bezier(0.2, 0, 0, 1);
  }

  .service-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-2);
  }

  @media (prefers-reduced-motion: reduce) {
    .service-card {
      transition: none;
      transform: none;
    }
  }
</style>
```

### 2.2 TypeScript & Pure Functions

- Enable strict typing. Disallow `any`; use `unknown` with type narrowing.
- Pure business or formatting logic goes into `src/lib/` (e.g. `src/lib/contact.ts`, `src/lib/format.ts`).
- Pure functions must have unit tests in `tests/`.

### 2.3 CSS & Mobile-First Media Queries

- Breakpoints:
  - Mobile: `< 40rem` (under 640px)
  - Tablet: `40rem` – `64rem` (640px to 1024px)
  - Desktop: `> 64rem` (above 1024px)
- Media queries should always be written mobile-first (`@media (min-width: ...)`).
- Honor `prefers-reduced-motion: reduce` for every transition or animation.
