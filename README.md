# gabsteven.com

Personal site for Steven Gabriel (Gabriel Steven Oluwapelumi), software engineer
and founder in Lagos. Founder of MyBabe AI and CEO of Iteminder LTD.

Built with React 19, Vite 6, Tailwind CSS v4 and React Router 7. Deployed on
Netlify.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Where things live

| Path | What |
| --- | --- |
| `src/config/site.js` | Name, email, CV path, social links, studio details, nav |
| `src/data/projects.js` | Every project: home page index **and** case study pages |
| `src/data/studio.js` | Iteminder studio copy, shared by the home page and `/iteminder` |
| `src/index.css` | Design tokens (palette, fonts), base styles, reveal motion |
| `src/components/` | Home page sections, header, footer, case study layout |
| `src/pages/` | Routes: home, `/:slug` case studies, `/iteminder`, 404 |

## Design system

- Type: Newsreader (headings), Schibsted Grotesk (text), JetBrains Mono
  (labels), self-hosted through Fontsource.
- Colour: warm paper `#f4f1ea`, ink `#16140f`, one accent (vermilion
  `#b5401a`, `#f07a4e` on dark). Text pairings all clear WCAG AA.
- Layout: a 12-column grid; section headings sit on a 3 / 9 split.
- Motion: a short fade-up on load and on scroll, disabled under
  `prefers-reduced-motion`.

## Adding a project

Add an object to the `projects` array in `src/data/projects.js`; the card on the
home page and the route `/<slug>` render themselves. Array order is site order,
and the first project is shown as the featured one.

| Field | Purpose |
| --- | --- |
| `slug` | URL path, e.g. `mybabe` → `/mybabe` |
| `title`, `category` | Headline copy |
| `summary` | One or two sentences for the home page and meta description |
| `tagline` | Lede under the case study title |
| `role`, `platforms`, `status`, `period` | Case study metadata (`status` and `period` optional) |
| `stack` | Short list shown on the home page card |
| `cover` | `{ src, alt, width, height, srcSet? }`, used on the card and case study hero |
| `links` | External links: `{ label, href }` |
| `overview` | Intro paragraph |
| `sections` | Ordered content blocks, see below |

Section types, rendered in
[`src/components/CaseStudyLayout.jsx`](src/components/CaseStudyLayout.jsx):

- `list`: `{ title, items }`, where an item is a string or `{ label, text }`
- `gallery`: `{ title, images, variant? }`, with `variant` `"phone"` for
  portrait screenshots or `"code"` for code captures
- `stack`: `{ items }`

## Images

Assets are committed as WebP at their display size, with explicit dimensions in
the data so nothing shifts as they load:

```bash
cwebp -q 82 -resize 1200 0 screenshot.png -o src/assets/screenshot.webp
```

`public/og-image.jpg` (1200×630) and the favicons were rendered from HTML with
headless Chrome using the site's own fonts.

## Deployment

The app uses `BrowserRouter`, so the host must rewrite all paths to
`index.html`. Config is included for both Netlify (`public/_redirects`) and
Vercel (`vercel.json`).

Social link previews are read from the static tags in `index.html`; scrapers
don't run JS, so per-project preview cards would need prerendering.
