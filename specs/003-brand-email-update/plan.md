# Plan: Brand Email Configuration Update

## Proposed Changes

### Configuration

- `src/config/site.ts`: Update `SITE_CONFIG.email` to `'autolockprousa@autolockprousa.com'`.

### Scripts

- `src/scripts/copy-email.ts`: Update fallback email to `'autolockprousa@autolockprousa.com'`.

### Tests

- `tests/contact.test.ts`: Update unit tests to validate `'autolockprousa@autolockprousa.com'`.

### Documentation

- `docs/ARCHITECTURE.md`: Update reference in business details section.
- `harness/memory/project-state.md`: Update state notes.
- `docs/CHANGELOG.md`: Record change under unreleased or current version.

## Verification

- Run `npm run verify` to test build, types, lint, format, and security gates.
