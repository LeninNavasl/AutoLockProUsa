---
trigger: always_on
description: How to apply the AutoLock Pro USA design system in code.
---

# 04 — Design System

Source: `stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md`. Implemented in `src/styles/tokens.css`.

## Color roles (use the token, not the hex)

| Role            | Token                                          | Use for                                       |
| --------------- | ---------------------------------------------- | --------------------------------------------- |
| Electric Blue   | `--color-primary`, `--color-primary-container` | Brand, navigation, links, info CTAs           |
| Emergency Coral | `--color-emergency`                            | **Only** phone/emergency CTAs                 |
| Soft Emerald    | `--color-success`                              | Live/availability indicators, verified states |
| Luminous Cyan   | `--color-accent`                               | Decorative gradients only                     |
| Deep Slate      | `--color-ink`                                  | Headings, primary text                        |
| Muted Slate     | `--color-ink-muted`                            | Body copy                                     |
| Canvas          | `--color-canvas`                               | Page background                               |
| Surface         | `--color-surface`                              | Cards                                         |

**Rule:** Coral orange is reserved for call-to-call actions. Do not use it for decoration.

## Typography

- Single family: **Plus Jakarta Sans Variable** (self-hosted).
- Use the type-scale tokens (`--text-display`, `--text-headline-lg`, `--text-headline-md`, `--text-headline-sm`,
  `--text-body-lg`, `--text-body-md`, `--text-body-sm`, `--text-label-lg|md|sm`). They are fluid (`clamp()`).
- ALL CAPS only for `label-sm` badges with `letter-spacing: 0.04em`.
- Max 3 lines of continuous body copy per block. Chunk content into cards and lists.

## Elevation

`--shadow-1` (cards), `--shadow-2` (hover, with `translateY(-2px)`), `--shadow-3` (sticky bars / header + `backdrop-filter`).

## Shapes

- Cards: `--radius-2xl` (16px) / `--radius-3xl` (24px).
- Inputs/structured buttons: `--radius-xl` (12px). Phone CTAs: `--radius-full` (pill).
- Icon wells: 48×48, `--radius-2xl`, 10% tinted background.

## Layout

- Container max-width `80rem` (1280px). Gutters: `--gutter` (fluid 1rem → 1.5rem).
- Breakpoints: mobile `< 40rem`, tablet `40–64rem`, desktop `> 64rem`.
- Section vertical rhythm: `--section-space` (fluid 3rem → 5rem).

## Header

- Logo left. Desktop: nav `[Home | Services | Blog | Contact]` + coral pill phone CTA on the right.
- Mobile: logo + compact phone pill. Navigation via **bottom tab bar** with full-width call strip.
- **Excluded:** login, search, avatars, mega-menus.

## Motion

- Micro-interactions 150–250ms, `cubic-bezier(0.2, 0, 0, 1)`.
- Pulsing "live" dots and phone icon. All motion disabled under `prefers-reduced-motion: reduce`.
