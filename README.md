# Charan Mannava — The Series

A cinematic, streaming-inspired portfolio for **Charan Mannava**, a B.Tech Electronics and Computer Science student specializing in Artificial Intelligence and Machine Learning, and a full-stack developer.

The portfolio presents education and experience as episodes, projects as Originals, and achievements as award cards. It is a personal portfolio, is not affiliated with any streaming service, and does not use their logos.

## Features

- Animated opening sequence, profile selector, and cinematic hero
- Journey presented as seasons and episodes
- Project cards with detailed project views and GitHub links
- Skills, achievements, and certification cards with liquid-glass hover effects
- Resume preview, PDF viewer, and download
- Contact links, including Gmail compose links for email
- Responsive portrait images and social-sharing image
- Reduced-motion support, keyboard-accessible controls, and touch-friendly rails

## Tech stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · Framer Motion 11 · Lenis

## Run locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Create and preview a production build:

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Deploy to Vercel

1. Push the project to a GitHub repository and import that repository in Vercel.
2. Select **Vite** as the framework preset, or use these project settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. Deploy. No environment variables are required.

## Update content and assets

| Content | File |
| --- | --- |
| Name, intro, contact links, education, experience, projects, achievements, skills, seasons, and featured picks | [`src/data/portfolio.ts`](src/data/portfolio.ts) |
| Resume preview content | [`src/data/resume.ts`](src/data/resume.ts) |
| Resume PDF | `public/assets/charanmann_resume.pdf` |
| Portrait source images | `pic1.jpeg` and `pic.png` |
| Image generation and social-share graphic | [`scripts/build-images.mjs`](scripts/build-images.mjs) |

To regenerate the optimized portrait WebP files and Open Graph image after replacing the source photos:

```bash
npm run images
```

The script writes the generated images to `public/assets/`.

## Project structure

```text
src/
  data/
    portfolio.ts       Main portfolio content
    resume.ts          Resume-sheet content
  components/          Portfolio sections, cards, and overlays
  hooks/               Smooth scrolling and media-query hooks
scripts/
  build-images.mjs     Portrait and social-share image pipeline
public/
  assets/              Resume PDF, portrait variants, and Open Graph image
```

## Accessibility and performance

- Respects `prefers-reduced-motion`.
- Uses native swipe rails on touch devices and disables mouse-only cursor effects where appropriate.
- Supports keyboard shortcuts: Enter or Escape skips the opening, Space pauses the intro, arrow keys navigate intro slides, and Escape closes overlays.
- Lazy-loads overlay components and uses responsive WebP portrait variants.
