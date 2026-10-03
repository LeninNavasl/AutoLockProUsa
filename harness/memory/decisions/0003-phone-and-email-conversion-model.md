# ADR 0003: Phone and Email Conversion Model (Zero Forms)

## Status

Accepted

## Context

Initial mockups in `stitch_autolock_pro_usa_website/contact_autolock_pro_usa/` showed an interactive "Request a Callback" form asking for Name, Phone, Vehicle details, and ZIP.
However:

- The website is frontend-only with no backend database or mail server.
- The business core is emergency automotive assistance, where users require immediate real-time response by phone.
- Web forms create security attack surfaces (spam bots, data harvesting, PII storage liability, CSRF).

## Decision

- Replace the web form with a clear **Direct Contact Matrix**:
  1. **Primary Conversion:** High-visibility emergency call action (`tel:18005550199`).
  2. **Secondary Conversion:** One-click copy email button with visual confirmation (`aria-live="polite"`) and fallback `mailto:` link.
- Maintain `src/config/site.ts` as the single source of truth for the phone number and email address.

## Consequences

- **Positive:** Zero server-side PII liabilities, zero spam handling, 100% static hosting compatibility, immediate call connection for urgent lockout users.
- **Negative:** Users who prefer submitting a web form instead of calling or emailing cannot do so without opening their mail client or dialing.
