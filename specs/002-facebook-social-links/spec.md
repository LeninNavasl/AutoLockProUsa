---
status: implemented
title: 'Official Facebook Social Profile Integration'
author: 'Antigravity'
created: 2026-10-07
---

# Feature Specification: Official Facebook Social Profile Integration

## 1. Context & Motivation

AutoLock Pro USA maintains an active official Facebook presence (`https://www.facebook.com/profile.php?id=61595108823254`) to build customer trust, share community roadside safety updates, and verify locksmith authenticity.

Currently, the website only features direct phone and email contact channels. Prospective customers seeking social proof, company activity, or alternate contact validation need clear access to the official Facebook page.

This feature integrates the Facebook profile link into the single source of truth configuration (`SITE_CONFIG`), surfaces it in the **Footer** and the **Contact** page, enriches the Schema.org LocalBusiness structured data (`sameAs`), and introduces a self-hosted vector icon for Facebook without violating strict CSP or zero-external-origin security rules.

## 2. User Stories

- **As a** visitor or prospective customer,
- **I want to** easily find and click the official AutoLock Pro USA Facebook page in the site footer and contact page,
- **So that** I can verify company legitimacy, review community activity, and connect on social media.

- **As a** search engine crawler,
- **I want to** see the official Facebook URL in the JSON-LD `sameAs` entity metadata,
- **So that** search engines can associate the business entity with its official social profile.

## 3. Acceptance Criteria (Given / When / Then)

### Scenario 1: Site configuration holds social links

- **Given** the central configuration in `src/config/site.ts`
- **When** the configuration is read by any component or page
- **Then** `SITE_CONFIG.social.facebook` contains `'https://www.facebook.com/profile.php?id=61595108823254'`.

### Scenario 2: Footer displays the Facebook link

- **Given** a visitor viewing any page on mobile, tablet, or desktop
- **When** they scroll to the footer
- **Then** a prominent, accessible Facebook link is visible with the official icon and text
- **And** the link points to `https://www.facebook.com/profile.php?id=61595108823254` with `target="_blank"` and `rel="noopener noreferrer"`.

### Scenario 3: Contact page features a social connection card

- **Given** a visitor browsing `/contact/`
- **When** they inspect the direct contact options
- **Then** they see a dedicated card connecting to the official Facebook page
- **And** the link opens safely in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

### Scenario 4: Self-hosted icon support without external origins

- **Given** the `<Icon name="facebook" />` component
- **When** it renders in the HTML output
- **Then** it produces inline SVG with proper accessibility attributes
- **And** no third-party CDNs, fonts, or scripts are loaded.

### Scenario 5: Schema.org structured data contains `sameAs`

- **Given** the structured data output on pages using `defaultSchema`
- **When** search engine crawlers parse the JSON-LD
- **Then** `sameAs` includes the configured Facebook URL.

## 4. Non-Functional Requirements

- **Security:** Strict CSP compliant (`script-src 'self'`, `style-src 'self'`). Zero third-party origins or trackers. Any `target="_blank"` links strictly include `rel="noopener noreferrer"`.
- **Accessibility:** Touch target ≥ 44×44px on mobile. Meaningful accessible labels (`aria-label`) indicating that the link opens in a new tab. High contrast conforming to WCAG 2.2 AA.
- **Performance:** 0 KB JavaScript added (static HTML links and inline SVG). No impact on Core Web Vitals (LCP, CLS, FID).
- **Progressive Enhancement:** 100% usable without JavaScript.

## 5. Out of Scope

- Facebook tracking pixels, SDKs, or social widgets (expressly forbidden by privacy policy and CSP).
- Additional social platforms not yet created or operated by the business.
- Social share buttons or floating widgets.
