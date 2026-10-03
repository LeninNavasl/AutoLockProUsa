# ADR 0004: Design System and Token Architecture

## Status

Accepted

## Context

The project design is detailed in `stitch_autolock_pro_usa_website/autolock_pro_usa/DESIGN.md`. The design balances high-trust authority (Electric Blue, Deep Slate) with urgent emergency triggers (Emergency Coral Orange, Soft Emerald).
We need a robust, maintainable way to represent this design system without runtime dependencies or heavy CSS frameworks.

## Decision

- Implement all design system primitives as CSS Custom Properties in `src/styles/tokens.css`.
- Define semantic color roles, fluid typography clamps (`clamp()`), elevation shadows, and border radii.
- Re-implement all Stitch reference layouts with semantic HTML5 elements and component-scoped CSS.
- Forbid raw hex color literals in component styles.

## Consequences

- **Positive:** Lightweight CSS output, rapid theme adjustments in one central token file, no framework lock-in, zero CSS runtime overhead.
- **Negative:** Requires disciplined component authoring using token variables.
