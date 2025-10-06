# l8in

Minimalist portfolio for Leighton Tidwell built with Next.js 15 (App Router) and Tailwind CSS. The site blends typography-first design with a bold scripture banner to introduce Leighton's AI-enabled engineering work and provide a direct contact path.

## Features
- **Hero spotlight** with editable mission copy, faith statement, and full-width scripture banner.
- **Contact section** linking to LinkedIn and GitHub with lean typography.
- Tailored color tokens for an off-white/ink two-tone aesthetic.
- React Server Components, `next/font` powered typography, and Tailwind 4 utilities.

## Getting started
Install dependencies, run the dev server, and lint for type-safety:

```bash
pnpm install
pnpm dev
pnpm lint
```

The app renders at `http://localhost:3000` and updates automatically when editing files under `src/app`.

## Project structure
- `src/app` – App Router entry, layout, and page components.
- `src/components` – Hero and contact sections.
- `src/content` – Structured copy for easy edits to mission statement and scripture references.
- `public` – Static assets and icons.

## Deployment
Deploy directly to Vercel:

```bash
pnpm build
pnpm start
```

By default, the production build uses Turbopack. Configure environment variables and analytics in `next.config.ts` as needed.
