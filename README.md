# Actu-Basics Programme B

**A rigorous, open and interactive learning environment for mathematics, statistics and quantitative sciences.**

## Application preview

The first frontend milestone is implemented on `feat/platform-v1`:
- responsive learner dashboard and programme catalogue;
- learning-path overview and assessment centre;
- interactive eight-question diagnostic demonstration;
- countdown timer, question navigation, browser-local answer saving, interrupted attempt resumption and explained results;
- French-first responsive interface.

This is a **demonstration**, not an official examination system. Responses are stored only in the current browser. There are no accounts, server persistence, protected answer keys or certified scoring yet. The official Bloc 1 final examination is not yet integrated.

## Run locally

Requirements: Node.js 22+.

```bash
npm install
npm run dev
```

Production build: `npm run build`.

## Repository boundaries

| Repository | Responsibility |
| --- | --- |
| [Actu-Basics-Lab](https://github.com/JohnGAB7/Actu-Basics-Lab) | Existing ACTU-BASICS public laboratory |
| [Programme B source curriculum](https://github.com/JohnGAB7/Actu-Basics-Lab/tree/programme-b/bloc-2-algebre-lineaire) | Courses, exercises, corrections and workshops |
| **This repository** | Programme B interactive learning platform |

## Next milestones

1. Integrate reviewed Bloc 1 courses and the actual final examination.
2. Build practice, diagnostic and remediation experiences.
3. Add secure identity, persistence, server-side exam delivery and grading.
4. Expand into Bloc 2 and the statistics curriculum.

A browser-only application cannot protect answer keys or provide trustworthy private exam records. Real examinations require authenticated server-side sessions, authorization, a database, server-authoritative timing, server-side grading, auditability and privacy controls.

See `docs/` for architecture, assessment engine, content model, editorial standards and roadmap.


## Optional GitHub Pages deployment

The build is validated on pushes and pull requests. Public deployment is intentionally opt-in. To enable it after configuring GitHub Pages with **Settings → Pages → Build and deployment → Source: GitHub Actions**, add the repository Actions variable `ENABLE_GITHUB_PAGES=true`. Until both settings are configured, the build still runs and the deployment job is skipped.
