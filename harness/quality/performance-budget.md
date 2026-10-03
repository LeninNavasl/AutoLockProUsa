# Performance Budget — AutoLock Pro USA

Stranded motorists needing an emergency locksmith are frequently on mobile networks with low signal strength or battery constraints. Every byte and millisecond counts.

---

## 1. Core Web Vitals (Mobile Profile)

| Metric                              | Budget Target | Rationale                                                                       |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------- |
| **Largest Contentful Paint (LCP)**  | < 1.5 seconds | The hero message and primary emergency call button must appear immediately.     |
| **Cumulative Layout Shift (CLS)**   | 0.00          | No jarring content jumping while a stressed user attempts to tap a call button. |
| **First Contentful Paint (FCP)**    | < 0.8 seconds | Instant reassurance that the website is loading.                                |
| **Total Blocking Time (TBT)**       | < 50 ms       | The UI must not stutter or freeze on user input.                                |
| **Interaction to Next Paint (INP)** | < 100 ms      | Immediate visual feedback on touch or click.                                    |

---

## 2. Resource Budgets

| Resource Type         | Maximum Size (Gzipped)  | Optimization Strategy                                                   |
| --------------------- | ----------------------- | ----------------------------------------------------------------------- |
| **HTML**              | < 25 KB per page        | Clean semantic markup, zero inline CSS bloat.                           |
| **CSS**               | < 20 KB total           | Token-driven architecture, shared stylesheet, purged unused selectors.  |
| **JavaScript**        | < 5 KB total            | Minimal progressive enhancement (copy email button, blog filter).       |
| **Fonts**             | < 60 KB (WOFF2)         | Self-hosted variable font (`Plus Jakarta Sans`) with modern subsetting. |
| **Images**            | < 120 KB per hero image | Converted to WebP / AVIF via `astro:assets` with explicit dimensions.   |
| **Total Page Weight** | < 300 KB (Initial load) | Fast loading even on 3G mobile networks.                                |

---

## 3. Enforcement

- Performance is tracked during static compilation.
- Inlined scripts or unoptimized assets that exceed budgets are flagged during pre-release review.
