# Muhammad Talha Khan — Portfolio

Single-page portfolio for Muhammad Talha Khan — Senior Full Stack Developer
(Drupal, WordPress, Shopify, PHP, AI).

## Stack

- Next.js 15 (App Router) + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`) — theme lives in `app/globals.css`, there is **no** `tailwind.config.js`
- `lucide-react` for icons. No component library — sections are hand-built.
- Type checking and lint run during `next build` (they are **not** disabled) — a build failure is a real failure.

## Commands

```bash
npm run dev     # local dev server on :3000
npm run build   # production build — run before claiming a change works
```

## Layout

| Path | Purpose |
|---|---|
| `lib/content.ts` | **Single source of truth** for all content |
| `app/page.tsx` | Composes the 8 sections in order |
| `app/layout.tsx` | Fonts, metadata, renders `<Navigation />` + `<Footer />` |
| `components/sections/` | One file per section |
| `components/reveal.tsx` | Scroll-reveal wrapper (`direction`: up/left/right/scale) |
| `components/count-up.tsx` | Scroll-triggered number counter |
| `components/typewriter.tsx` | Cycling type/delete effect |
| `components/aurora.tsx` | Ambient background glow |
| `components/section-heading.tsx` | Shared eyebrow + title + description block |
| `components/icon.tsx` | Maps string icon keys in content.ts to lucide components |

## Content lives in `lib/content.ts`

`profile`, `sections`, `stats`, `credentials`, `highlights`, `skillGroups`,
`services`, `projects`, `experiences`, `testimonials`, `education`,
`languages`, and `marqueeItems` are all defined once there. Section components
import from it — **never re-declare these arrays inside a component.**

To add a project: add one entry to `projects` with a `category` that is one of
`Drupal`, `Shopify`, `WordPress`, `Full Stack`. The filter buttons and grid
pick it up automatically.

The `sections` array drives the navbar, the scroll-spy, and the footer links —
adding an entry there requires a matching `id` on a section element.

## Conventions

- Headings use `font-display` (Space Grotesk); body uses `font-sans` (Outfit)
- Colors come from CSS variables (`bg-background`, `text-muted-foreground`,
  `text-primary`) — **never hardcode a hex**; the whole theme is driven by
  `--primary` in `app/globals.css`
- Effect classes (`card-lift`, `gradient-border`, `shine`, `reveal`,
  `link-underline`, `gradient-text`, `marquee`, `glow-pulse`, `dot-grid`,
  `animate-float`, `type-caret`) are defined in `app/globals.css`
- Those effect rules are deliberately **outside** `@layer` — Tailwind v4
  tree-shakes layered rules whose classes it cannot statically see, and several
  are applied dynamically via `cn()`
- Wrap new content in `<Reveal>`; pass `delay` to stagger a grid
- All motion is disabled under `prefers-reduced-motion`
- External links always carry `target="_blank" rel="noopener noreferrer"`

## Known gaps

- Contact form has no backend — it composes a `mailto:` link. Wire up a real
  endpoint (Resend / Formspree) before launch.
- `profile.email` and `profile.upworkUrl` in `lib/content.ts` are placeholders.
- No project screenshots yet; project cards use an icon instead of an image.
