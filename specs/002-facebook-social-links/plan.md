---
spec: 'specs/002-facebook-social-links/spec.md'
---

# Technical Implementation Plan: Official Facebook Social Profile Integration

## 1. Files & Components Impacted

| File Path                            | Action | Description                                                                    |
| ------------------------------------ | ------ | ------------------------------------------------------------------------------ |
| `src/config/site.ts`                 | Modify | Add `SocialLinks` interface and `social.facebook` property to `SITE_CONFIG`.   |
| `src/lib/contact.ts`                 | Modify | Add `isValidHttpsUrl()` helper to validate external links.                     |
| `tests/contact.test.ts`              | Modify | Add unit tests for URL validation helper.                                      |
| `src/components/ui/Icon.astro`       | Modify | Add self-hosted SVG definition for `facebook` icon.                            |
| `src/components/layout/Footer.astro` | Modify | Add Facebook social link block with accessible link and brand styling.         |
| `src/pages/contact.astro`            | Modify | Add Facebook channel card within the contact options section.                  |
| `src/components/seo/SEO.astro`       | Modify | Add `sameAs` array referencing `SITE_CONFIG.social.facebook` to LocalBusiness. |
| `specs/README.md`                    | Modify | Register Spec 002 in index table.                                              |
| `harness/memory/project-state.md`    | Modify | Record completion of Spec 002.                                                 |
| `docs/CHANGELOG.md`                  | Modify | Log feature additions in version 1.1.0 or unreleased.                          |

## 2. Data Shapes & TypeScript Interfaces

```typescript
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

export interface SiteConfig {
  // ... existing fields ...
  social: SocialLinks;
}
```

## 3. Security & CSP Checklist

- [x] No inline scripts, event handlers, or style attributes introduced.
- [x] No external fonts, remote SVGs, or third-party SDKs loaded.
- [x] All external links have explicit `target="_blank"` and `rel="noopener noreferrer"`.
- [x] Icon rendered via build-time static SVG within `Icon.astro`.
- [x] URL sanitized and typed in `SITE_CONFIG`.

## 4. Test Strategy

- **Unit Tests:** `tests/contact.test.ts` to test URL validation and integrity.
- **Harness Verification:** Run `npm run verify` ensuring 6/6 quality gates pass including `security-audit.mjs`.
