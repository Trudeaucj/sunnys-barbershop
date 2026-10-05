# Sunny's Barbershop

Website for Sunny's Barbershop in Bellingham, WA, live at [sunnysbarbershop.com](https://sunnysbarbershop.com).

It's a single-page React app built with Vite, prerendered at build time for search engines, and hosted on GitHub Pages.

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:5173 with hot reload.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build to `dist/`, then prerender the page with Puppeteer (`scripts/prerender.js`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run fetch-reviews` | Refresh Google reviews and photos (see below) |
| `npm run deploy` | Fetch reviews, build, and publish `dist/` to GitHub Pages |

## Google reviews

`scripts/fetch-reviews.js` pulls reviews and up to 10 photos from the Google Places API. It writes `src/data/reviews.json` and saves photos to `public/review-photos/`. It needs two variables in a `.env` file (ignored by git):

```sh
GOOGLE_MAPS_API_KEY=...
GOOGLE_PLACE_ID=...
```

Without them the script prints a warning and leaves the existing data alone.

## Project layout

- `src/components/` holds the page sections (Header, Hero, About, Reviews, Footer), each with its own CSS file.
- `src/data/reviews.json` is the review data shown on the site.
- `public/` is copied as-is into the build: images, the About video, `CNAME`, `robots.txt` and `sitemap.xml`.
- `index.html` carries the meta tags, Open Graph tags and structured data used for SEO.
