# Muhammad Talha Khan — Portfolio

Single-page portfolio for **Muhammad Talha Khan**, Senior Full Stack Developer
specializing in Drupal, WordPress, Shopify, PHP and AI integration.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 18 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — theme defined in `app/globals.css`
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (type-checks and lints)
```

## Editing content

All content — profile, stats, skills, services, projects, experience and
testimonials — lives in a single file: [`lib/content.ts`](lib/content.ts).
Section components read from it, so nothing needs editing in two places.

To add a project, append one entry to the `projects` array with a `category` of
`Drupal`, `Shopify`, `WordPress` or `Full Stack`. The filter buttons pick it up
automatically.

## Theming

The entire palette derives from the `--primary` CSS variable in
`app/globals.css`. Change that one value and every button, glow, border and
gradient follows. Never hardcode a hex.

## Sections

Hero · About · Skills · Services · Projects · Experience · Testimonials · Contact

Scroll reveals, animated counters, a typewriter headline, an infinite tech
marquee and category-filtered projects. All motion is disabled under
`prefers-reduced-motion`.

## Before going live

- [ ] Replace the placeholder email in `lib/content.ts` (`profile.email`)
- [ ] Wire the contact form to a real backend — it currently composes a `mailto:` link
- [ ] Add project screenshots to `public/` and swap the card icons for images

## License

All rights reserved.
