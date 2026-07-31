# John Roven D. Guatno — Portfolio

A personal developer portfolio, styled as an engineering changelog rather than
a marketing landing page: monospace metadata, a reverse-chronological project
timeline, and a restrained two-neutrals-plus-one-accent palette in both light
and dark mode.

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS. Fully static —
deploys to Vercel with zero config.

## Design system

- **Type:** Space Grotesk (headings) + IBM Plex Sans (body) + JetBrains Mono
  (dates, tags, labels) — self-hosted via `@fontsource`, no external font
  requests at runtime.
- **Color:** ink `#12151A`, paper `#EEF0EC`, signal (accent) `#2F8768` light /
  `#57C29A` dark. Dark mode is the default; toggle in the header.
- **Signature element:** the Projects section is a vertical changelog/commit
  timeline (`v0.1`–`v0.4`), since the content really is a dated sequence.

## Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Swapping in your own content

All real content lives in one file: **`lib/data.ts`**. Edit `profile`,
`experience`, `projects`, `skills`, and `education` there — the components
just render whatever is in that file, so nothing else needs to change for
text updates.

- **Resume:** replace `public/resume.pdf` with your own file (same filename,
  so the download link in the header/footer keeps working).
- **Photo:** replace `public/avatar.jpg` (used in the About section, shown in
  grayscale).
- **Links:** update `email`, `phone`, `linkedin`, and `github` in
  `lib/data.ts`.
- **Site URL for SEO/Open Graph:** once you know your deployed domain, add
  `metadataBase: new URL("https://your-domain.com")` to the `metadata` object
  in `app/layout.tsx` so social previews resolve absolute URLs correctly.

## Deploying to Vercel

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/rovennnn/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset auto-detects as **Next.js** — no config changes needed.
4. Click **Deploy**. Every future push to `main` redeploys automatically.

## Project structure

```
app/
  layout.tsx      — root layout, fonts, metadata/OG tags
  page.tsx         — assembles all sections
  globals.css      — design tokens + the timeline/tag/reveal styles
components/         — one component per section, plus theme-toggle and reveal
lib/data.ts         — all real content (edit here)
public/              — resume.pdf, avatar.jpg
```
