---
spec: 'specs/002-facebook-social-links/spec.md'
---

# Tasks Checklist: Official Facebook Social Profile Integration

- [x] **T1:** Update `src/config/site.ts` with `SocialLinks` type and configure `social.facebook`.
- [x] **T2:** Add `isValidHttpsUrl()` helper to `src/lib/contact.ts` and add unit tests in `tests/contact.test.ts`.
- [x] **T3:** Update `src/components/ui/Icon.astro` with self-hosted SVG for the `facebook` icon.
- [x] **T4:** Integrate Facebook social link into `src/components/layout/Footer.astro`.
- [x] **T5:** Add Facebook official channel card to `src/pages/contact.astro`.
- [x] **T6:** Add `sameAs` structured data in `src/components/seo/SEO.astro`.
- [x] **T7:** Run `npm run verify` to confirm all 6 quality and security gates pass.
- [x] **T8:** Update `specs/README.md`, `harness/memory/project-state.md`, and `docs/CHANGELOG.md`.
