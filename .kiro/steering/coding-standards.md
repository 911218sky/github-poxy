# Coding Standards - GitHub Proxy

## Project Overview

A GitHub Proxy service deployed on Cloudflare Workers, built with TypeScript.

## Tech Stack

- **Runtime**: Cloudflare Workers
- **Language**: TypeScript 5.x
- **Build Tool**: Wrangler

## Code Style

### TypeScript Guidelines

- Use `strict` mode
- Prefer `const`, use `let` only when necessary, never use `var`
- Use explicit type annotations, avoid `any`
- Use `interface` for object shapes, `type` for unions or aliases

### Naming Conventions

- **Files**: kebab-case, e.g., `proxy.ts`
- **Functions**: camelCase, e.g., `parseTargetUrl`
- **Constants**: UPPER_SNAKE_CASE, e.g., `PROXY_TARGETS`
- **Types/Interfaces**: PascalCase, e.g., `Env`

### Comments

- Use JSDoc at file top to describe purpose
- Add inline comments for complex logic
- Keep language consistent throughout

## Project Structure

```
src/
├── index.ts    # Worker entry point
├── config.ts   # Configuration constants
├── proxy.ts    # Proxy logic
└── html.ts     # HTML page generation
```

## Development Commands

```bash
npm run dev      # Local development
npm run deploy   # Deploy to Cloudflare
npm run build    # Dry-run deploy (validation)
```

## Cloudflare Workers Considerations

- Cannot use Node.js native modules
- Use Web Standard APIs (Fetch, Request, Response)
- Mind CPU time limits (10ms for free tier)
- Leverage Edge Cache for performance
