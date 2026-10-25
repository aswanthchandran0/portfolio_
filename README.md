# Aswanth Chandran — Portfolio

React + Vite + Tailwind CSS v4. Single page: Hero → Experience (Everloom) → Projects → Skills → About → Contact, plus a 404 route.

```bash
npm install
npm run dev
npm run build
```

## Fill these in before deploying (all in `src/data/site.js`)

| Setting | What it does |
|---|---|
| `resume` | Add your PDF to `public/` (e.g. `public/resume.pdf`) and set `resume: "/resume.pdf"`. The **Download Resume** button in the hero appears automatically. While it is `null`, no button is shown (so there is never a broken download). |
| `everloomScreenshot` | Add a real screenshot to `public/` and set the path. It appears in the Everloom experience card. While `null`, the card shows no image. |
| `email` | Currently a placeholder (`your.email@example.com`). Replace it. |
| `github`, `linkedin` | Full profile URLs. The icons only appear once set. |

Also update:
- `src/data/projects.js` — PDFExtract description and any `live` / `github` links (links are hidden while `null`).
- `index.html`, `public/sitemap.xml`, `public/robots.txt` — replace the placeholder domain `https://www.aswanthchandran.dev/` with your real one.
- `public/og-image.png` — add a 1200×630 image for link previews.
- `public/profile-placeholder.svg` — swap for your real photo (change the `src` in `src/components/About.jsx`).

## SEO

Title, description, Open Graph/Twitter tags and `Person` JSON-LD (job title, Everloom as employer) live in `index.html`; `src/components/SEO.jsx` sets per-page tags. Add `sameAs` (GitHub/LinkedIn URLs) to the JSON-LD once you have them.
