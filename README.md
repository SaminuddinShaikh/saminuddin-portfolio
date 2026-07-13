# Saminuddin Shaikh — Portfolio

Minimal, editorial dark portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Before you deploy

- `lib/data.ts` — update `links.email` and `links.phone` with your real contact details (currently placeholders).
- `lib/data.ts` — swap in real project URLs/descriptions if any change.
- Deploys cleanly to Vercel: `vercel --prod` or connect the repo in the Vercel dashboard.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Fonts self-hosted via @fontsource (Space Grotesk, Inter, JetBrains Mono) — no external font requests
