# Spec-Driven Development (SDD) Index — AutoLock Pro USA

All functional features, page additions, and architectural shifts must be specified in this directory before implementation.

## Specification Index

| ID                              | Title                                         | Status   | Description                                                                                |
| ------------------------------- | --------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| [001](001-core-website/spec.md) | Core Marketing Website & Security Foundations | Approved | Comprehensive implementation of Home, Services, Contact, Blog, Design Tokens, and Harness. |

## Workflow Summary

1. Copy `specs/000-template/` to `specs/NNN-feature-name/`.
2. Write `spec.md` (WHAT and WHY), `plan.md` (HOW), and `tasks.md` (checklist).
3. Once approved, implement tasks sequentially.
4. Pass `npm run verify`.
5. Mark spec as `status: implemented`.
