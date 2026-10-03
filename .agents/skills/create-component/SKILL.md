---
name: create-component
description: Build a new reusable Astro component following the AutoLock Pro USA design tokens, accessibility rules and CSP constraints. Use when adding UI atoms or page sections.
---

# Skill: Create a Component

## Decide the folder

| Folder                 | Purpose                          | Examples                                |
| ---------------------- | -------------------------------- | --------------------------------------- |
| `components/ui/`       | Small atoms, no business content | `Button`, `Badge`, `Icon`, `LiveDot`    |
| `components/sections/` | Page blocks composed of atoms    | `Hero`, `ServiceGrid`, `CtaBanner`      |
| `components/layout/`   | Site chrome                      | `Header`, `Footer`, `MobileDispatchBar` |
| `components/seo/`      | `<head>` metadata                | `SEO`, `JsonLd`                         |

## Template

```astro
---
/**
 * ComponentName — one-line purpose.
 * Spec: specs/NNN-name/spec.md
 */
interface Props {
  title: string;
  variant?: 'primary' | 'emergency';
  class?: string;
}
const { title, variant = 'primary', class: className } = Astro.props;
---

<div class:list={['component-name', `component-name--${variant}`, className]}>
  <slot />
</div>

<style>
  .component-name {
    padding: var(--space-md);
    border-radius: var(--radius-2xl);
    background: var(--color-surface);
    box-shadow: var(--shadow-1);
  }
  @media (prefers-reduced-motion: reduce) {
    .component-name {
      transition: none;
    }
  }
</style>
```

## Rules

- **Tokens only** — no hex, no magic px values for spacing/radius/shadow.
- **No `style=""`, no `define:vars`, no `set:html` with dynamic input** (CSP).
- Icons via `<Icon name="…" />` (`astro-icon`, inlined SVG at build time). Decorative → `aria-hidden`.
- Phone/email links via `<PhoneLink>` / helpers from `src/lib/contact.ts`.
- If the component needs JS, put logic in `src/scripts/<name>.ts`, import it in a `<script>` tag,
  and make sure the component works without it.
- Mobile-first CSS. Test at 360px, 768px, 1280px.
