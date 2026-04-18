# Project Guidelines

## Code Style
- Use TypeScript + React function components.
- Prefer existing shared components from [src/app/components/ui](src/app/components/ui) before adding new primitives.
- Keep imports alias-first when possible:
  - `@/*` maps to `src/*`
  - `figma:asset/*` maps to `src/assets/*`
- Follow existing Tailwind utility patterns and `cn()` usage in [src/app/components/ui/utils.ts](src/app/components/ui/utils.ts).
- Preserve existing visual language (blue NGO theme tokens and typography) in [src/styles/theme.css](src/styles/theme.css).

## Architecture
- App entry is [src/main.tsx](src/main.tsx), which renders [src/app/App.tsx](src/app/App.tsx).
- Routing is centralized in [src/app/routes.tsx](src/app/routes.tsx) using a nested layout:
  - `Layout` wraps all pages and owns navbar/footer/shell behavior.
  - Pages live in [src/app/pages](src/app/pages).
- Shared, reusable UI primitives are in [src/app/components/ui](src/app/components/ui).
- Page-level and feature components are in [src/app/components](src/app/components).

## Build And Run
- Install: `npm i`
- Dev server: `npm run dev`
- Production build: `npm run build`
- There are currently no repo scripts for test/lint/typecheck. Do not assume they exist.

## Conventions
- Prefer extending existing page sections/components over introducing new architectural layers.
- Keep route additions consistent with [src/app/routes.tsx](src/app/routes.tsx) and include navigation updates in [src/app/components/layout.tsx](src/app/components/layout.tsx) when needed.
- When adding images/icons, prefer existing asset/import conventions (`figma:asset/*`) and avoid ad-hoc path patterns.
- Keep accessibility basics in place (alt text, button labels, link purpose), matching current patterns.

## Project Docs (Link, Don’t Embed)
- Setup/run basics: [README.md](README.md)
- Attributions: [ATTRIBUTIONS.md](ATTRIBUTIONS.md)
- Design/feature intent prompts: [src/imports](src/imports)
- Team guidelines placeholder: [guidelines/Guidelines.md](guidelines/Guidelines.md)
