# Pre-Release Security Checklist — AutoLock Pro USA

Perform this checklist before tagging any release or deploying to production.

---

## 1. Automated Build Scans

- [ ] Run `npm run verify` and ensure all gates pass with 0 errors.
- [ ] Verify `dist/` contains zero inline `<script>` tags with executable code.
- [ ] Verify `dist/` contains zero inline `style="..."` attributes.
- [ ] Verify `dist/` contains zero `onclick`, `onload`, or other inline event handlers.
- [ ] Verify `dist/` contains zero references to external origins (no `fonts.googleapis.com`, `cdn.tailwindcss.com`, `lh3.googleusercontent.com`, etc.).

---

## 2. Header & Hosting Verification

- [ ] Verify Content Security Policy (CSP) is active and uncompromised.
- [ ] Verify `public/_headers`, `vercel.json`, `netlify.toml`, `deploy/nginx/autolockprousa.conf`, and `deploy/apache/.htaccess` have matching security headers.
- [ ] Verify `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` is set.
- [ ] Verify `X-Content-Type-Options: nosniff` is present.
- [ ] Verify `X-Frame-Options: DENY` is present.
- [ ] Verify `Referrer-Policy: strict-origin-when-cross-origin` is present.
- [ ] Verify `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()` is present.

---

## 3. Privacy & Compliance

- [ ] Verify no cookies are being set on any page.
- [ ] Verify no analytics scripts or pixels are running.
- [ ] Verify phone numbers use sanitized `tel:` formatting (`src/lib/contact.ts`).
- [ ] Verify `/.well-known/security.txt` is accessible and the expiration date is valid.
- [ ] Verify state locksmith license disclosures match state regulations in target markets.
