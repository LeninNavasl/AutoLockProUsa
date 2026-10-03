---
name: create-page
description: Add a new page to the AutoLock Pro USA Astro site with layout, SEO metadata, JSON-LD, navigation and sitemap integration. Use when a new route is needed.
---

# Skill: Create a Page

## Prerequisites

- An **approved spec** exists in `specs/` (see `write-spec` skill).

## Steps

1. **Create the route** in `src/pages/<kebab-name>.astro`.
2. **Use `BaseLayout`** and pass SEO props:

   ```astro
   ---
   import BaseLayout from '@layouts/BaseLayout.astro';
   ---

   <BaseLayout
     title="Page Title | AutoLock Pro USA"
     description="≤160 chars, includes primary keyword and a call-to-action."
     currentPath="/page-name"
   >
     <!-- exactly one <h1> inside -->
   </BaseLayout>
   ```

3. **Content** goes into `src/data/<name>.ts` (typed) — not hardcoded in markup — so it can be localized.
4. **Compose sections** from `src/components/sections/*`. Create new section components if needed
   (see `create-component` skill).
5. **Navigation:** if the page belongs in the main nav, add it to `NAV_ITEMS` in `src/config/site.ts`
   (header, footer and bottom tab bar read from there). Provide an icon name.
6. **Structured data:** pass extra JSON-LD via the `jsonLd` prop of `BaseLayout` if relevant.
7. **Conversion:** every page ends with a call CTA section (`CtaBanner`).
8. **Verify:** `npm run verify`. The sitemap picks up the page automatically.
9. **Memory:** update `harness/memory/project-state.md` and `docs/CHANGELOG.md`.

## Checklist

- [ ] Title ≤ 60 chars, description ≤ 160 chars
- [ ] Single `<h1>`, logical heading order
- [ ] All sections have `aria-labelledby`
- [ ] Works with JS disabled
- [ ] No inline scripts/styles, no external URLs
