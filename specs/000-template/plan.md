---
spec: 'specs/NNN-feature-name/spec.md'
---

# Technical Implementation Plan: [Feature Name]

## 1. Files & Components Impacted

| File Path            | Action          | Description |
| -------------------- | --------------- | ----------- |
| `src/components/...` | Create / Modify | ...         |
| `src/pages/...`      | Create / Modify | ...         |
| `src/data/...`       | Create / Modify | ...         |

## 2. Data Shapes & TypeScript Interfaces

```typescript
export interface FeatureData {
  id: string;
  title: string;
}
```

## 3. Security & CSP Checklist

- [ ] No inline scripts or style attributes introduced.
- [ ] No remote origins referenced.
- [ ] Safe protocol validation for dynamic links (`tel:`, `mailto:`).

## 4. Test Strategy

- **Unit Tests:** `tests/...` for pure logic.
- **Harness Verification:** `npm run verify`.
