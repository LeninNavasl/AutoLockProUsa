---
status: implemented
title: 'Brand Email Configuration Update'
author: 'Antigravity'
created: 2026-10-08
---

# Feature Specification: Brand Email Configuration Update

## 1. Context & Motivation

AutoLock Pro USA has designated `autolockprousa@autolockprousa.com` as its official brand email address for customer service inquiries, roadside assistance communication, and business correspondence.

Previously, a placeholder dispatch address (`dispatch@autolockprousa.com`) was configured. This specification updates the single source of truth (`SITE_CONFIG`), client copy scripts, structured data (JSON-LD), and contact utilities to use the official brand email address across the entire website.

## 2. User Stories

- **As a** customer visiting the website,
- **I want to** view, copy, and open `autolockprousa@autolockprousa.com` when reaching out for automotive locksmith services,
- **So that** my emails reach the official brand inbox directly.

- **As a** search engine crawler,
- **I want to** see `autolockprousa@autolockprousa.com` in the Schema.org `Locksmith` structured data,
- **So that** search listings and knowledge panels display the correct company email.

## 3. Acceptance Criteria (Given / When / Then)

### Scenario 1: Central configuration reflects official brand email

- **Given** `src/config/site.ts`
- **When** `SITE_CONFIG.email` is accessed
- **Then** it returns `'autolockprousa@autolockprousa.com'`.

### Scenario 2: Contact page displays and copies the brand email

- **Given** the `/contact/` page
- **When** a user views the Direct Dispatch Email card
- **Then** the visible address is `autolockprousa@autolockprousa.com`
- **And** clicking "Copy Email Address" copies `autolockprousa@autolockprousa.com` to clipboard
- **And** clicking "Open in Email App" triggers `mailto:autolockprousa@autolockprousa.com?subject=...`.

### Scenario 3: Structured Data (JSON-LD) includes brand email

- **Given** any page with `SEO.astro` metadata
- **When** JSON-LD schema is parsed
- **Then** the `email` field matches `autolockprousa@autolockprousa.com`.

### Scenario 4: Copy script fallback

- **Given** `src/scripts/copy-email.ts`
- **When** executed in absence of `data-email` attribute
- **Then** it defaults to `autolockprousa@autolockprousa.com`.

## 4. Non-Functional Requirements

- **Security:** CSP compliance must be strictly preserved (`script-src 'self'`, no inline scripts).
- **Accessibility:** Copy button maintains `aria-label`, focus rings, and live feedback (`aria-live="polite"`).
- **Reliability:** All unit tests and verify checks must pass.
