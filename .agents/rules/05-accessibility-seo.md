---
trigger: always_on
description: Accessibility (WCAG 2.2 AA) and SEO requirements for every page.
---

# 05 — Accessibility & SEO

## Accessibility (WCAG 2.2 AA)

- One `<h1>` per page; no skipped heading levels.
- Landmarks: `<header>`, `<nav aria-label>`, `<main id="main">`, `<footer>`. Skip link to `#main` first in DOM.
- Every interactive element is keyboard reachable with a **visible focus ring** (`:focus-visible`).
- Touch targets ≥ 44×44 px (WCAG 2.5.8 requires 24px; we use 44px for stressed mobile users).
- Text contrast ≥ 4.5:1 (body) and ≥ 3:1 (large text / UI). White on coral uses the darker `--color-emergency` token.
- Icons are decorative (`aria-hidden="true"`) unless they are the only content; then provide `aria-label`.
- Images: meaningful `alt`; decorative images `alt=""`.
- Current page link: `aria-current="page"`.
- Dynamic feedback (e.g., "Email copied") uses an `aria-live="polite"` region.
- Respect `prefers-reduced-motion`.
- Pages are fully usable with JavaScript disabled.

## SEO

- Each page passes `title` (≤ 60 chars) and `description` (≤ 160 chars) to `BaseLayout`.
- `SEO.astro` emits: canonical URL, Open Graph, Twitter card, `theme-color`.
- JSON-LD: `Locksmith` (LocalBusiness subtype) on every page, `Service` list on Services,
  `FAQPage` on Contact, `BlogPosting` + `BreadcrumbList` on articles.
- `@astrojs/sitemap` generates `sitemap-index.xml`; `robots.txt` references it.
- Images via `astro:assets` (`<Image>` / `<Picture>`) → AVIF/WebP, explicit width/height (no CLS).
- Phone numbers rendered as text **and** `tel:` link (Google parses both).
- Semantic HTML5: `<article>`, `<section aria-labelledby>`, `<blockquote>`, `<time datetime>`.

## Performance budget

See [`harness/quality/performance-budget.md`](../../harness/quality/performance-budget.md). Target Lighthouse ≥ 95 in all categories.
