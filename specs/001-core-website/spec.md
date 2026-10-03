---
status: implemented
title: 'Core Marketing Website & Security Foundations'
author: 'Antigravity'
created: 2026-10-03
---

# Feature Specification: Core Marketing Website & Security Foundations

## 1. Context & Motivation

AutoLock Pro USA needs a complete, production-grade static marketing website based on the design mockups in `stitch_autolock_pro_usa_website`.
The site serves stressed motorists in the United States who require urgent automotive locksmith assistance (car lockouts, transponder key cutting, key fob programming, ignition repair).
The only conversion actions are:

1. Immediate emergency phone call (`tel:18005550199`).
2. Email communication via copy-to-clipboard or direct `mailto:` link.

The site must be built with strict security (zero third-party origins, strict CSP), mobile-first responsiveness, WCAG 2.2 AA accessibility, and full static export via Astro 7.

## 2. User Stories

- **US1 (Emergency Driver):** As a driver locked out of my car at night, I want an immediate, unmistakable call button with live dispatch status so that I can get roadside help in 1 tap without navigating complex menus.
- **US2 (Service Researcher):** As a vehicle owner needing a spare smart fob, I want to review service capabilities, transparent turnaround times, and equipment certifications so that I trust AutoLock Pro over a dealership.
- **US3 (Guide Reader):** As a driver experiencing ignition tumbler problems, I want to read technical guides on early warning signs and transponder pairing so that I understand my options.
- **US4 (Inquirer):** As an individual seeking fleet or scheduled service, I want to easily copy the company's dispatch email or dial directly from the contact page without submitting private data to a web form.

## 3. Acceptance Criteria (Given / When / Then)

### Scenario 1: Phone Conversion Links

- **Given** any page on desktop or mobile
- **When** a user clicks/taps any emergency phone CTA or the sticky mobile call bar
- **Then** the browser triggers a native call prompt to `tel:18005550199` using the phone number defined in `src/config/site.ts`.

### Scenario 2: Mobile Bottom Navigation & Sticky Call Bar

- **Given** a mobile viewport width < 640px
- **When** the page renders or scrolls
- **Then** a fixed bottom bar is visible containing:
  - A prominent emergency call pill (`⚡ 24/7 Mobile Dispatch Available — Call (800) 555-0199`)
  - A 4-tab navigation bar (`Home`, `Services`, `Blog`, `Contact`) with touch targets ≥ 44px
  - The active page is highlighted with `aria-current="page"`.

### Scenario 3: Contact Email Copying (Progressive Enhancement)

- **Given** the `/contact` page
- **When** a user clicks "Copy Email"
- **Then** the email address `dispatch@autolockprousa.com` is copied to the clipboard, visual confirmation "Copied to clipboard!" appears in an `aria-live="polite"` region, and if JavaScript is disabled, the fallback `mailto:` link remains fully clickable.

### Scenario 4: Blog Category Filtering (Progressive Enhancement)

- **Given** the `/blog` page
- **When** a user clicks a category filter pill (`All Guides`, `Key Replacement`, `Smart Fobs`, `Emergency Tips`)
- **Then** the article cards filter smoothly in the client without page reload, and if JavaScript is disabled, all articles remain visible and readable.

### Scenario 5: Individual Blog Post Routing

- **Given** any article card on `/blog` or the home page
- **When** the user clicks "Read Guide"
- **Then** they are navigated to `/blog/<slug>/` rendered from Markdown with structured headings, reading time, author/date metadata, and an emergency dispatch CTA footer.

### Scenario 6: Strict CSP & Zero Remote Assets

- **Given** the production build in `dist/`
- **When** `npm run audit:security` runs
- **Then** zero inline scripts with executable code exist, zero inline style attributes exist, zero third-party origins are referenced, and all headers match across hosting configs.

## 4. Non-Functional Requirements

- **Security:** Strict CSP with `default-src 'none'`. All assets bundled locally.
- **Accessibility:** WCAG 2.2 AA compliant. Contrast ≥ 4.5:1. Touch targets ≥ 44px. Skip-to-content landmark.
- **Performance:** 100% static HTML. Page weight < 250 KB. Core Web Vitals LCP < 1.5s, CLS = 0.
- **SEO:** Unique `<title>` and `<meta name="description">` per page, Open Graph, Twitter Cards, canonical tags, and Schema.org JSON-LD (`Locksmith`, `Service`, `FAQPage`, `BlogPosting`).

## 5. Out of Scope

- Interactive backend forms or user accounts.
- Third-party tracking scripts, cookies, or analytics.
- External CDNs or remote image hosting.
