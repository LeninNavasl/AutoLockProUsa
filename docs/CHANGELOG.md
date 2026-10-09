# Changelog — AutoLock Pro USA

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-10-08

### Changed

- Updated official brand email address to `autolockprousa@autolockprousa.com` (`specs/003-brand-email-update`):
  - Updated single source of truth in `src/config/site.ts`.
  - Updated client-side copy fallback in `src/scripts/copy-email.ts`.
  - Updated unit test assertions in `tests/contact.test.ts`.
  - Updated documentation in `docs/ARCHITECTURE.md`.
  - Propagated to Contact page, copy-to-clipboard button, mailto link, and Schema.org JSON-LD.

## [1.1.0] - 2026-10-07

### Added

- Official Facebook social profile integration (`specs/002-facebook-social-links`):
  - Added `social.facebook` property to `SITE_CONFIG` in `src/config/site.ts`.
  - Added self-hosted inline vector SVG for the `facebook` icon in `src/components/ui/Icon.astro`.
  - Added accessible Facebook link pill in `src/components/layout/Footer.astro` with `target="_blank"` and `rel="noopener noreferrer"`.
  - Added dedicated official Facebook channel card to `src/pages/contact.astro`.
  - Added `sameAs` array referencing the Facebook profile in Schema.org LocalBusiness structured data in `src/components/seo/SEO.astro`.
  - Added URL validation helpers (`isValidHttpsUrl`, `formatSocialHref`) in `src/lib/contact.ts` with unit test suite in `tests/contact.test.ts`.

## [1.0.0] - 2026-10-03

### Added

- Complete static marketing site implementation in Astro 7 with TypeScript strict mode.
- Mobile-first responsive layout with sticky emergency dispatch bar (`MobileDispatchBar.astro`).
- All 5 core routes:
  - `/` (Home: Hero, Trust Radar, Featured Services, Reassurance, Testimonials).
  - `/services/` (Services: 6 automotive locksmith service cards + 3-step dispatch flow).
  - `/contact/` (Contact: 24/7 direct dispatch matrix + progressive copy-to-clipboard email card).
  - `/blog/` (Blog index: 3 technical guides with client-side category filtering).
  - `/blog/[id]/` (Article pages with validated Zod frontmatter, SEO breadcrumbs, and JSON-LD).
- Strict security configuration with zero third-party origins, multi-host deployment configurations (Cloudflare, Vercel, Netlify, Nginx, Apache), and automated CSP audits.
- Full Spec-Driven Development (SDD) spec `specs/001-core-website/` with complete tasks checklist.
- Engineering harness with ADRs, quality gates, and automated test & audit verification pipeline (`npm run verify`).

### Changed

- Removed 'GPS Fleet Active' radar widget from `TrustRibbon.astro` to focus on core arrival metrics.
- Replaced `van-showcase.jpg` with high-resolution asset featuring clean, accurate 'AutoLock Pro USA' brand livery.
- Replaced `ignition-repair.jpg` with a professional technician working in a clean, unbranded uniform.
