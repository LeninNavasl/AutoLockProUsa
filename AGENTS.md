# AGENTS.md — AutoLock Pro USA

> Entry point for any AI agent or human contributor working in this repository.
> Read this file first, then follow the links. Do not skip the rules.

## 1. What this project is

A **static, frontend-only marketing website** for **AutoLock Pro USA**, a nationwide
mobile automotive locksmith service in the United States.

- The site **informs** visitors about services.
- The **only conversion actions** are: **call** (`tel:` link) or **email** (copy address / `mailto:`).
- There is **no backend, no forms, no user accounts, no cookies, no third-party trackers**.

## 2. Mandatory reading order

| #   | File                                                                         | Why                                                  |
| --- | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1   | [`.agents/rules/00-project-context.md`](.agents/rules/00-project-context.md) | Business context and hard constraints                |
| 2   | [`.agents/rules/01-sdd-workflow.md`](.agents/rules/01-sdd-workflow.md)       | **Spec-Driven Development** — no code without a spec |
| 3   | [`.agents/rules/03-security.md`](.agents/rules/03-security.md)               | Non-negotiable security rules                        |
| 4   | [`harness/memory/project-state.md`](harness/memory/project-state.md)         | Current state, what is done, what is next            |
| 5   | [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)                               | How the code is organized                            |
| 6   | [`docs/STYLE-GUIDE.md`](docs/STYLE-GUIDE.md)                                 | Code + design conventions                            |

## 3. Repository map

```text
.agents/        Agent rules (always-on) and skills (on-demand playbooks)
harness/        Engineering harness: memory (state + ADRs), security, quality gates, scripts
specs/          SDD specifications — one folder per feature (spec → plan → tasks)
docs/           Human documentation (architecture, style guide, contributing, changelog)
deploy/         Hosting configs for servers that do not read public/_headers (Nginx, Apache)
public/         Static files copied verbatim (headers, robots, security.txt, favicon)
src/            Astro source code
tests/          Unit tests (Vitest)
.vscode/        Shared editor settings and recommended extensions
.github/        CI pipeline, Dependabot, PR template
```

## 4. Golden rules (summary)

1. **Spec first.** Every change maps to a spec in `specs/`. Update the spec before the code.
2. **Single source of truth.** Phone, email, business data → `src/config/site.ts`. Never hardcode.
3. **Zero inline scripts or styles.** The CSP is `script-src 'self'; style-src 'self'`. Inline code breaks the site.
4. **No third-party origins.** Fonts, icons and images are self-hosted. No CDNs.
5. **Design tokens only.** Colors, spacing, radii, shadows come from `src/styles/tokens.css`.
6. **Progressive enhancement.** Every page must be fully usable with JavaScript disabled.
7. **Run the harness before finishing:** `npm run verify` must pass.
8. **Update memory.** After a meaningful change, update `harness/memory/project-state.md` and `docs/CHANGELOG.md`.

## 5. Commands

```bash
npm install          # install dependencies (uses package-lock.json)
npm run dev          # local dev server → http://localhost:4321
npm run build        # static build → dist/
npm run preview      # serve dist/ locally
npm run verify       # FULL HARNESS: typecheck + lint + format + tests + build + security audit
```
