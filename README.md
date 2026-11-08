# Still: Minimal Next.js Developer Portfolio Template

A free, open-source **developer portfolio template** built with **Next.js 15,
React 19 and TypeScript**. Editorial typography, dark mode, smooth
micro-interactions and zero UI dependencies. Edit one config file and deploy.

[![MIT License](https://img.shields.io/badge/license-MIT-black.svg)](LICENSE)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

**[Live demo](https://ajay-portfolio-alpha-ten.vercel.app/)** ·
[Use this template](https://github.com/ajaypandey21/nextjs-portfolio-template/generate) ·
[Deploy to Vercel](#deploy)

![Portfolio homepage preview](public/images/portfolio-preview.webp)

## Features

- Five focused sections with asymmetric projects and editorial testimonials
- Light and dark themes with system detection and saved preference
- Accessible floating navigation with active-section tracking
- Progressive reveal, magnetic button and desktop cursor interactions
- Reduced-motion, touch and keyboard-friendly fallbacks
- Server-rendered content with small, isolated client components
- Local responsive images, metadata, sitemap and robots configuration
- No UI, icon, animation or state-management dependencies

## Tech stack

Next.js, React, TypeScript and hand-authored CSS. Browser-native APIs handle
section observation, theme preference and motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fajaypandey21%2Fnextjs-portfolio-template&project-name=my-portfolio&repository-name=my-portfolio)

On Vercel the site URL used for metadata, the sitemap and robots is detected
automatically. On other hosts, set `NEXT_PUBLIC_SITE_URL` to your domain.

## Customize

Edit [`src/config/site.ts`](src/config/site.ts). It contains the name, role,
bio, email, social links, stats, projects, testimonials, image alt text and metadata.
You should not need to edit a component for normal portfolio updates.

### Add a project

Add another object to `siteConfig.projects`, following the existing typed
entries. Use a two-digit number and place its local image in `public/images`.
The alternating layout is automatic.

### Replace images

Replace these files while keeping their names, or update their paths in the
configuration:

- `public/images/portrait-placeholder.webp`: vertical 3:4 portrait
- `public/images/project-01.webp` through `project-03.webp`: 4:3 artwork

Export WebP images near 1600px on the longest edge. `next/image` handles
responsive delivery; local files keep the project independent of image hosts.

### Theme

Color tokens are at the top of [`src/app/globals.css`](src/app/globals.css).
Update both the default and `[data-theme="dark"]` groups. Keep text/background
contrast at WCAG AA or better.

## Quality

```bash
npm run lint
npm run typecheck
npm run build
```

The template uses semantic landmarks, visible focus states, a skip link,
descriptive labels and a complete reduced-motion mode. Animations only affect
`transform`, `opacity` and reveal clipping; core content is visible without
JavaScript.

## Project structure

```text
src/
  app/          page, layout, metadata routes and global styles
  components/   section components and small interactive enhancements
  config/       all portfolio content and links
public/
  images/       replaceable local portfolio artwork
```

## License

[MIT](LICENSE). Use it, adapt it and make it yours.

If this template helped you, a ⭐ on the repo helps other developers find it.
Built a portfolio with it? Open an issue and share the link.
