---
name: write-spec
description: Create a new SDD specification (spec.md, plan.md, tasks.md) for a feature or change in AutoLock Pro USA. Use before implementing ANY new page, section, component or behavior change.
---

# Skill: Write a Spec (SDD)

## When to use

- A new page, section, component, content type or behavior is requested.
- An existing behavior must change.
- Skip only for typo fixes, dependency bumps or pure refactors with no behavior change.

## Steps

1. **Find the next number:** list `specs/` and take the highest `NNN` + 1.
2. **Copy the template:** `specs/000-template/` → `specs/NNN-kebab-name/`.
3. **Fill `spec.md`** (WHAT / WHY only):
   - Context & problem.
   - User stories: _As a … I want … so that …_.
   - Acceptance criteria in **Given / When / Then**. Each must be verifiable.
   - Non-functional: security, a11y, performance, SEO impact.
   - Out of scope.
   - Set front-matter `status: draft`.
4. **Fill `plan.md`** (HOW):
   - Files to create/modify (exact paths).
   - Data model changes (`src/data/*`, `src/config/site.ts`, content collections).
   - Security impact checklist (CSP, new origins, new deps, new JS).
   - Alternatives considered.
5. **Fill `tasks.md`**: ordered, atomic tasks `- [ ] T1 …`, last task is always `npm run verify`.
6. **Ask for approval** (or self-approve if explicitly delegated). Change `status: approved`.
7. **Link** the spec in `specs/README.md` index table.

## Quality bar

- No implementation detail leaks into `spec.md`.
- Every acceptance criterion maps to at least one task.
- Security section is never empty — write "No impact" explicitly if so, with justification.
