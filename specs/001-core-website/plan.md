---
spec: 'specs/001-core-website/spec.md'
---

# Technical Implementation Plan: Core Marketing Website & Security Foundations

## 1. Files & Architecture Map

### Configuration & Styles

- `astro.config.mjs`: Static output, sitemap integration, inlineStylesheets: 'never' for CSP, strict asset handling.
- `tsconfig.json`: TypeScript strict mode with path aliases (`@components/*`, `@config/*`, `@data/*`, `@layouts/*`, `@styles/*`, `@lib/*`, `@assets/*`).
- `eslint.config.mjs`: ESLint 10 flat config with `eslint-plugin-astro` and `typescript-eslint`.
- `src/styles/tokens.css`: Complete CSS Custom Properties mapped from `stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md`.
- `src/styles/global.css`: Reset, focus rings, base typography, and accessibility defaults.
- `src/config/site.ts`: Central source of truth (brand name, phone, email, licenses, nav items, dispatch areas).

### Data & Content Models

- `src/data/services.ts`: 4 core services (Emergency Vehicle Entry, Smart Key Programming, Laser Cut Keys, Ignition Switch Repair).
- `src/data/testimonials.ts`: Verified customer reviews with flag for FTC compliance.
- `src/data/faqs.ts`: Direct assistance FAQs.
- `src/content.config.ts`: Zod validation schema for the `blog` collection.
- `src/content/blog/lost-transponder-key.md`: Technical guide 1.
- `src/content/blog/key-fob-programming-guide.md`: Technical guide 2.
- `src/content/blog/ignition-cylinder-failure-signs.md`: Technical guide 3.

### UI & Section Components

- `src/components/layout/Header.astro`: Desktop nav + phone CTA, mobile brand + phone pill.
- `src/components/layout/Footer.astro`: Brand summary, navigation links, licensing notice, phone link.
- `src/components/layout/MobileDispatchBar.astro`: Fixed bottom bar on screens < 640px with live pulsing dispatch pill and 4 nav tabs.
- `src/components/ui/Icon.astro`: Inlined SVG renderer from `@iconify-json/material-symbols`.
- `src/components/ui/LiveDot.astro`: Pulsing green availability beacon.
- `src/components/ui/PhoneLink.astro`: Sanitized phone call anchor with micro-interactions.
- `src/components/seo/SEO.astro`: Canonical, Open Graph, Twitter cards, meta tags.
- `src/components/seo/JsonLd.astro`: Schema.org structured data.
- `src/components/sections/Hero.astro`: High-impact emergency headline, badges, and dual CTA.
- `src/components/sections/TrustRibbon.astro`: ETA, Zero Dealership Wait, Upfront Estimates metrics.
- `src/components/sections/ServiceCard.astro`: Reusable field service card with icon well and badge.
- `src/components/sections/CtaBanner.astro`: Reassuring emergency dispatch callout.
- `src/components/sections/TestimonialCard.astro`: Customer review card with star ratings and vehicle model.
- `src/components/sections/FaqAccordion.astro`: Accessible native `<details>`/`<summary>` accordion.

### Layouts & Pages

- `src/layouts/BaseLayout.astro`: Shell with font imports, skip-to-content, header, footer, bottom bar, and SEO.
- `src/layouts/BlogPostLayout.astro`: Article layout with reading time, badges, and CTA banner.
- `src/pages/index.astro`: Home page.
- `src/pages/services.astro`: Services showcase with 3-step process.
- `src/pages/contact.astro`: 24/7 direct phone and copy-email contact center.
- `src/pages/blog/index.astro`: Knowledge base with category filters.
- `src/pages/blog/[slug].astro`: Dynamic markdown article renderer.

### Progressive Scripts & Pure Libs

- `src/lib/contact.ts`: Sanitization and formatting for `tel:` and `mailto:`.
- `src/scripts/copy-email.ts`: Copy to clipboard with toast notification.
- `src/scripts/blog-filter.ts`: Category filter for blog cards.

## 2. Security & CSP Implementation

- Build configuration sets `build.inlineStylesheets = 'never'` to prevent inline `<style>` tags in HTML.
- Client scripts are bundled by Astro into external hashed `.js` files.
- All SVG icons are inlined directly at build time without remote sprite lookups.
- Verified by `harness/scripts/security-audit.mjs`.
