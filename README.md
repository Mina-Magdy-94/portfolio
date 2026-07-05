# Mina Magdy Shoukry — Portfolio

Personal portfolio built with **Angular 17** (standalone components, new control flow, signals).

- Fully responsive (mobile, tablet, desktop)
- Light & dark theme with system-preference detection
- Scroll-reveal animations
- Sectioned home page (Hero, About, Experience, Projects, Skills, Education, Contact)
- Dedicated **project details** page per project (`/projects/:slug`)
- Case-study data driven by a single typed data file — easy to update

---

## Tech stack

- Angular 17 (standalone APIs, new `@if` / `@for` template syntax, signals)
- SCSS with custom design tokens and dark-mode support
- Bootstrap Icons (CDN)
- Google Fonts: Inter + Space Grotesk
- No global state library — kept intentionally lean

---

## Getting started

```bash
# Install
npm install

# Run dev server → http://localhost:4200
npm start

# Production build → dist/portfolio/browser
npm run build
```

---

## Editing content

All content lives in **one file**:

```
src/app/data/portfolio.data.ts
```

You'll find these exports:

| Export | Purpose |
| --- | --- |
| `PROFILE` | Name, title, contact info, taglines, summary |
| `EXPERIENCE` | Job history (company, role, period, highlights) |
| `PROJECTS` | Projects shown in the grid + details pages |
| `SKILLS` | Categorized skill groups |
| `EDUCATION` / `COURSES` | Formal education + certifications |

### Adding a project link

When you have live URLs to add, update the project entry:

```ts
{
  slug: 'ammant-aggregator',
  title: 'Ammant Aggregator',
  // ...
  liveUrl: 'https://your-live-app.example.com',   // ← app URL
  repoUrl: 'https://github.com/your/repo',        // ← optional
}
```

The links section on the details page picks these up automatically. If `liveUrl` is missing, a "Private / Internal" placeholder is shown — perfect for enterprise projects.

---

## Deployment

Three options are pre-configured. Pick the one that suits you.

### Option 1 — GitHub Pages (recommended, free)

A workflow lives at `.github/workflows/deploy.yml`. Once you push this repo to GitHub:

1. Create a repo (e.g. `portfolio`) on GitHub and push:
   ```bash
   git init
   git add .
   git commit -m "chore: initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Mina-Magdy-94/portfolio.git
   git push -u origin main
   ```
2. In the repo on GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow will build with the correct `--base-href` (auto-derived from the repo name) and publish. Your site will be live at:
   ```
   https://mina-magdy-94.github.io/portfolio/
   ```

Manual local deploy is also available via:
```bash
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

### Option 2 — Netlify (drag & drop or connect Git)

`netlify.toml` is included with SPA redirect rules.

- **Quick:** run `npm run build` locally, then drag the `dist/portfolio/browser` folder onto https://app.netlify.com/drop.
- **Continuous:** connect the GitHub repo in the Netlify UI. Netlify auto-detects the config.

### Option 3 — Vercel

- Import the repo at https://vercel.com/new.
- Framework preset: **Angular**.
- Build command: `npm run build`.
- Output directory: `dist/portfolio/browser`.

---

## Project structure

```
src/
├── index.html
├── main.ts
├── styles.scss                 ← design tokens, dark-mode, base utilities
└── app/
    ├── app.component.ts        ← root (navbar + <router-outlet /> + footer)
    ├── app.config.ts           ← providers (router, animations)
    ├── app.routes.ts           ← lazy routes: home + project details
    ├── data/portfolio.data.ts  ← ALL CV/portfolio content
    ├── models/portfolio.model.ts
    ├── services/theme.service.ts
    ├── shared/
    │   ├── navbar/
    │   ├── footer/
    │   └── reveal.directive.ts (scroll-in animations)
    └── pages/
        ├── home/               ← hero, about, experience, projects, skills, education, contact
        └── project-details/    ← per-project case study
```

---

## Notes

- Routing uses **hash location** (`#/projects/lease-platform`) so the site works out-of-the-box on any static host — including GitHub Pages — without server-side rewrite rules.
- The build output goes to `dist/portfolio/browser`. That is the folder you upload if you deploy manually.
- Dark mode preference is persisted in `localStorage` (`portfolio-theme`).

---

## Contact

- Email: minamagdysh2017@gmail.com
- LinkedIn: https://www.linkedin.com/in/mina-magdy-551089178/
- GitHub: https://github.com/Mina-Magdy-94
