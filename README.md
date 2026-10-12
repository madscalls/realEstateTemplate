# Jordan Hale: real estate agent website template

A website template for a real estate agent, by Whelk Works (React + Vite).

- **Home** (`/`):
  - A blueprint hero, where the rooms of the floor plan are the site's navigation.
  - Quick search, stats, listings with a status filter, and how it works (buying / selling).
  - About, neighborhoods, reviews and a contact form.
- **Listing** (`/listing`): photo gallery, facts, features, map spot and a "Book a showing" picker.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Make it a client's

- **Pages:** `src/pages/Home.jsx` and `src/pages/Listing.jsx`. They were generated from the design mockup, so the copy and layout are inline and can be edited directly.
- **Data:** listings, steps and neighborhoods are arrays in `renderVals()` near the top of `Home.jsx`. The showing days and times are near the top of `Listing.jsx`.
- **Dark color:** `src/theme.js` (`ink`).
- **Photos:** `public/images/`. Keep the file names or update the paths.
- **Copy:** anything in `[brackets]` is a placeholder.

## Before launch

- **Photos to license or replace:** the living room, terracotta aerial and backyard pool photos carry Unsplash+ watermarks.
- **Agent photo:** the headshot is a stock photo. Swap in the agent's own.
- **Reviews:** use real client reviews, word for word, with permission.
- **Forms:** the contact form and the showing request only show a thank-you message. Connect them to a form service such as Formspree before launch.
- **Deploy:** on Cloudflare Pages, use build command `npm run build` and output folder `dist`. `public/_redirects` handles `/listing`.
