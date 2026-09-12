# Still: Editorial Developer Portfolio

A restrained, open-source portfolio starter for developers who care about
typography, performance and interaction detail.

**[Live demo](https://example.com)** · Next.js App Router · TypeScript · MIT

![Portfolio homepage](public/images/project-01.webp)

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
