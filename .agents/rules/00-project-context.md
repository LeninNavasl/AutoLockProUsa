---
trigger: always_on
description: Business context and hard product constraints for AutoLock Pro USA.
---

# 00 — Project Context

## Business

- **Brand:** AutoLock Pro USA ("AutoLock Pro" short form). Tagline: _USA Dispatch_.
- **Service:** Mobile automotive locksmith — car lockouts, key/fob replacement & programming,
  laser-cut keys, ignition & door-lock cylinder repair. Nationwide (all 50 states), 24/7.
- **Audience:** Stressed drivers who are locked out or lost their keys, usually on a phone,
  often outdoors in bright light. They need to **call fast**.
- **Locale:** United States. Site language: **English (en-US)**. i18n-ready for Spanish later.

## Hard constraints (do NOT violate without a new ADR)

| Constraint                  | Detail                                                                |
| --------------------------- | --------------------------------------------------------------------- |
| Frontend only               | Static HTML output. No server runtime, no API routes, no database.    |
| Conversion = call or email  | `tel:` links and email (copy-to-clipboard + `mailto:`). **No forms.** |
| No personal data collection | No cookies, no analytics, no trackers, no localStorage of user data.  |
| No third-party origins      | Fonts, icons, images are bundled. The CSP forbids external hosts.     |
| No login / search / avatars | Explicitly excluded by the design system.                             |
| Mobile-first                | Primary viewport is a phone. Sticky bottom call bar on `< 640px`.     |

## Source of design truth

- Design system: [`stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md`](../../stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md)
- Screen mockups (mobile): `stitch_autolock_pro_usa_website/*/screen.png`
- The Stitch HTML files are **references only** — they use Tailwind CDN and remote images,
  which are not allowed in production. Re-implement, never copy-paste.

## Legal / compliance reminders

- **Testimonials:** The FTC rule on fake reviews (16 CFR Part 465) prohibits fabricated reviews.
  Testimonials flagged `placeholder: true` in `src/data/testimonials.ts` **must** be replaced with
  real, verifiable customer reviews before launch. Never emit `AggregateRating` schema with invented data.
- **Locksmith licensing:** Several states (e.g., TX, CA, IL, NJ, NC, OK, VA, TN, AL, LA, NV) require
  locksmith license numbers in advertising. Populate `licenses` in `src/config/site.ts`.
- **Accessibility:** Target WCAG 2.2 AA (ADA Title III litigation risk is real for US businesses).
