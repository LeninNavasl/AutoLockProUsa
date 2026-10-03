# Lessons Learned — AutoLock Pro USA

This file captures technical gotchas, discoveries, and lessons learned during the lifecycle of the project.

---

## 1. Toolchain & Runtime

### 1.1 PowerShell Execution Policy

- **Issue:** On standard Windows environments, executing `.ps1` wrapper scripts (like `npm.ps1`) is blocked by default execution policies (`Restricted` or `RemoteSigned`).
- **Solution:** Execute `npm.cmd` and `npx.cmd` directly in CLI tasks to ensure uninterrupted execution without modifying system-wide security policies.

### 1.2 ESLint 10 & Plugin Compatibility

- **Issue:** `eslint-plugin-jsx-a11y` has not updated its peer dependency range for ESLint 10 (`^3 || ... || ^9`), causing npm resolution errors.
- **Solution:** Use `eslint-plugin-jsx-a11y-x@^0.2.0`, which officially supports ESLint 9 and 10 and is actively maintained for Astro/TypeScript stacks.

### 1.3 Astro 7 Rust Compiler HTML Strictness

- **Issue:** In Astro 7, the new Rust compiler strictly enforces HTML element hierarchy and unclosed tags. Unlike the legacy Go compiler, it does not silently rewrite illegal nesting (such as `<div>` or `<article>` inside `<p>`).
- **Solution:** Maintain strictly valid semantic HTML at all times. Validate DOM hierarchy during component creation.

### 1.4 Strict CSP & Bundling

- **Issue:** Using inline `style="..."` attributes or inline `<script>` tags triggers Content Security Policy violations under `style-src 'self'` and `script-src 'self'`.
- **Solution:** Encapsulate styles in component `<style>` blocks (Astro extracts and compiles them into hashed external `.css` files) and write client logic in `src/scripts/*.ts` which are bundled into hashed external `.js` files.
