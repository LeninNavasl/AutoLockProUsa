---
spec: 'specs/001-core-website/spec.md'
---

# Tasks Checklist: Core Marketing Website & Security Foundations

- [x] **Phase 1: Foundations & Toolchain**
  - [x] **1.1:** Setup `astro.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc`.
  - [x] **1.2:** Implement design tokens `src/styles/tokens.css` and `src/styles/global.css`.
  - [x] **1.3:** Setup `src/config/site.ts` with brand, phone, email, navigation, and state licenses.
  - [x] **1.4:** Setup pure contact utility `src/lib/contact.ts` and write tests in `tests/contact.test.ts`.

- [x] **Phase 2: Assets & Core UI Components**
  - [x] **2.1:** Process and copy local brand SVG logo and images from stitch mockups.
  - [x] **2.2:** Build SVG Icon component `src/components/ui/Icon.astro`.
  - [x] **2.3:** Build `LiveDot.astro`, `PhoneLink.astro`, and `Badge.astro`.
  - [x] **2.4:** Build `SEO.astro` and `JsonLd.astro` metadata components.
  - [x] **2.5:** Build Layout components: `Header.astro`, `Footer.astro`, and `MobileDispatchBar.astro`.
  - [x] **2.6:** Assemble `BaseLayout.astro`.

- [x] **Phase 3: Structured Data & Sections**
  - [x] **3.1:** Create `src/data/services.ts`, `src/data/testimonials.ts`, `src/data/faqs.ts`.
  - [x] **3.2:** Build sections: `Hero.astro`, `TrustRibbon.astro`, `ServiceCard.astro`, `CtaBanner.astro`, `TestimonialCard.astro`, `FaqAccordion.astro`.

- [x] **Phase 4: Content Collections & Blog**
  - [x] **4.1:** Setup `src/content.config.ts` with Zod schema.
  - [x] **4.2:** Create Markdown articles in `src/content/blog/`.
  - [x] **4.3:** Build `BlogPostLayout.astro`.
  - [x] **4.4:** Build `/blog` listing page and `/blog/[slug]` route.
  - [x] **4.5:** Build progressive filter script `src/scripts/blog-filter.ts`.

- [x] **Phase 5: Core Pages Integration**
  - [x] **5.1:** Implement `/` (Home page).
  - [x] **5.2:** Implement `/services` (Services page with 3-step process).
  - [x] **5.3:** Implement `/contact` (Contact page with phone dispatch & copy-email component `src/scripts/copy-email.ts`).

- [x] **Phase 6: Quality Gates & Harness Verification**
  - [x] **6.1:** Run `npm run check` and ensure 0 TypeScript/Astro errors.
  - [x] **6.2:** Run `npm run lint` and `npm run format:check`.
  - [x] **6.3:** Run `npm run test` (Vitest).
  - [x] **6.4:** Run `npm run build` and `npm run audit:security`.
  - [x] **6.5:** Run full harness `npm run verify`.
  - [x] **6.6:** Update `harness/memory/project-state.md` and `docs/CHANGELOG.md`.
