# ADR 0002: Strict CSP and Zero Third-Party Origins

## Status

Accepted

## Context

Automotive locksmith sites are frequently targeted by malicious scraping, fake review syndication, and ad injection. Furthermore, loading assets from CDNs creates availability risks, latency variability, and privacy/tracking liabilities under US and state privacy laws.

## Decision

1. Implement a **Strict Content Security Policy (CSP)**:
   - `default-src 'none'`
   - `script-src 'self'` (Zero inline script code; only bundled hashed scripts and static JSON-LD)
   - `style-src 'self'` (Zero inline style attributes or tags)
   - `img-src 'self' data:`
   - `font-src 'self'`
   - `connect-src 'self'`
   - `base-uri 'self'`
   - `form-action 'none'`
   - `frame-ancestors 'none'`
2. **Self-host 100% of all assets**:
   - Fonts bundled via `@fontsource-variable/plus-jakarta-sans`.
   - Icons bundled SVG vectors via `@iconify-json/material-symbols`.
   - Images processed and optimized locally via `astro:assets`.
   - Zero external CDNs (no Tailwind CDN, no Google Fonts CDN, no unpkg/cdnjs).

## Consequences

- **Positive:** Immune to CDN outages, XSS vectors drastically reduced, high privacy posture (zero trackers), A+ rating on security headers.
- **Negative:** External embed widgets (e.g. Google Maps iframe, live chat SaaS) cannot be loaded unless an explicit ADR modifies the policy.
