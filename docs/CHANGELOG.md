# Changelog — AutoLock Pro USA

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

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
