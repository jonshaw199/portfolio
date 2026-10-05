# Portfolio

A minimal, dark, editorial portfolio for project case studies, writing, and software work.

## Overview

This project is built with Next.js App Router and Tailwind CSS. It is designed to present a small set of polished project entries with a reusable content-driven detail page and gallery-based media previews.

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the app.

## Project structure

- `app/` — app routes and page components
- `app/_lib/projects.ts` — reusable project content model
- `app/projects/[slug]/page.tsx` — project detail routes
- `app/projects/_components/ProjectDetailPage.tsx` — shared case-study renderer
- `public/projects/` — project screenshots and GIF assets

## Notes

The portfolio is structured so each project can be added as reusable content rather than hardcoded page-by-page, making it easier to extend over time.
