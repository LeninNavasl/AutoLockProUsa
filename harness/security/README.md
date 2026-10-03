# Security Architecture & Threat Model — AutoLock Pro USA

This document outlines the security posture, threat model, and defense-in-depth mechanisms for AutoLock Pro USA.

---

## 1. Threat Model

| Asset / Threat                           | Risk Level | Mitigation Strategy                                                                                                           |
| ---------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Cross-Site Scripting (XSS)**           | High       | Strict CSP (`script-src 'self'`), zero inline script execution, zero DOM `innerHTML` assignments, static HTML compilation.    |
| **Clickjacking / UI Redressing**         | High       | `frame-ancestors 'none'` in CSP and `X-Frame-Options: DENY`.                                                                  |
| **Supply Chain / Dependency Compromise** | Medium     | Pinned versions in `package-lock.json`, npm `allowScripts` restriction, automated vulnerability audits.                       |
| **Third-Party Surveillance / Tracking**  | Medium     | Zero external CDNs, self-hosted fonts and icons, zero analytics scripts, no cookies.                                          |
| **MIME Type Confusion**                  | Medium     | `X-Content-Type-Options: nosniff`.                                                                                            |
| **Information Leakage**                  | Low        | Strict Referrer Policy (`strict-origin-when-cross-origin`), no sensitive data or secrets in repository.                       |
| **Fake Reviews / FTC Compliance**        | Legal      | Clear distinction of placeholder data; prohibited use of fabricated AggregateRating schema without verified customer reviews. |

---

## 2. Content Security Policy (CSP) Directives

```http
Content-Security-Policy:
  default-src 'none';
  script-src 'self';
  style-src 'self';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self';
  base-uri 'self';
  form-action 'none';
  frame-ancestors 'none';
```

### Directives Rationale:

- `default-src 'none'`: Default deny for all resource types.
- `script-src 'self'`: Disallows external scripts and forbids `unsafe-inline` or `eval()`.
- `style-src 'self'`: Only loaded styles from same origin. No inline `style=""` attributes.
- `img-src 'self' data:`: Local images and inline SVGs or data URIs for placeholders.
- `font-src 'self'`: Self-hosted Plus Jakarta Sans font files.
- `connect-src 'self'`: Disallows unauthorized background data beacons or fetch calls.
- `form-action 'none'`: Prohibits form submissions across the site.
- `frame-ancestors 'none'`: Prevents embedding the site in any `<iframe>`.

---

## 3. Multi-Host Security Header Parity

To ensure consistent protection across any static host, security headers are declared and synchronized for:

- **Cloudflare Pages / Generic:** `public/_headers`
- **Vercel:** `vercel.json`
- **Netlify:** `netlify.toml`
- **Nginx:** `deploy/nginx/autolockprousa.conf`
- **Apache:** `deploy/apache/.htaccess`

The automated test runner in `harness/scripts/security-audit.mjs` verifies header parity.
