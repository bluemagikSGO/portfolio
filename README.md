# gabsteven.com

Personal portfolio for Gabriel Steven O. — full-stack developer based in Lagos.

Built with React 19, Vite 6, Tailwind CSS v4, and React Router 7.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Adding a project

Every project — the card on the home page **and** its full case study page — is
driven by a single entry in [`src/data/projects.js`](src/data/projects.js).
Add an object to the `projects` array and the route `/<slug>` renders itself.

An entry needs:

| Field | Purpose |
| --- | --- |
| `slug` | URL path, e.g. `iteminder` → `/iteminder` |
| `title`, `category`, `tagline` | Headline copy |
| `cardTitle` | Optional shorter title for the home page card |
| `status` | Optional pill, e.g. `"In Development"`. Replaces the "Case Study" badge and adds a marker to the card. Omit for shipped work |
| `image` | Hero image. `null` falls back to `logo`, then to a gradient placeholder |
| `logo` | Square transparent mark, shown as an app-icon tile when there is no `image` |
| `cardImage` | Optional override for the home page card only |
| `cardTech` | Tags shown on the home page card |
| `accent` | Full Tailwind class strings for the page's accent colour |
| `links` | Buttons in the hero (`primary` / `outline` / `dark`) |
| `overview` | Intro paragraph |
| `sections` | Ordered content blocks — see below |

Supported `sections` types: `twoCol`, `tech`, `gallery`, `narrative`, `compare`.
Rendering lives in
[`src/components/CaseStudyLayout.jsx`](src/components/CaseStudyLayout.jsx).

## Images

Assets are committed as WebP and resized to their display size. Before adding a
new one:

```bash
cwebp -q 82 -resize 1200 0 screenshot.png -o src/assets/screenshot.webp
```

## Deployment

The app uses `BrowserRouter`, so the host must rewrite all paths to
`index.html`. Config is included for both Netlify (`public/_redirects`) and
Vercel (`vercel.json`). On a host without rewrite support (e.g. GitHub Pages),
switch back to `HashRouter` in [`src/App.jsx`](src/App.jsx).

Social link previews are read from the static tags in `index.html` — scrapers
don't run JS, so per-project preview cards would need prerendering.
