# ADR 0001: Static Astro SSG Architecture

## Status

Accepted

## Context

AutoLock Pro USA requires a high-performance marketing website for a nationwide automotive locksmith service. Key requirements include:

- Blazing-fast page load times for drivers stranded on roadsides.
- High SEO visibility across all 50 states.
- Zero server runtime overhead and zero database vulnerabilities.
- Future scalability for additional pages, blog guides, or potential backend integration.

## Decision

We choose **Astro** in Static Site Generation (SSG) mode with **TypeScript** and native CSS.

- Generates 100% static HTML by default.
- Ships 0 KB of client JavaScript unless explicitly required for progressive enhancements.
- Built-in content collections with Zod schema validation for blog articles.
- High developer ergonomics with component isolation and TypeScript type safety.

## Consequences

- **Positive:** Maximum edge caching compatibility, minimal attack surface, perfect Lighthouse scores, zero cold-starts.
- **Negative:** Interactive features that require server compute (like dynamic quotes) must use progressive enhancement or external serverless endpoints if added in the future.
