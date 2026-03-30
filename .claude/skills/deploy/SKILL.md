---
name: deploy
description: Use when deploying or preparing to deploy. Runs pre-deploy checks for this static Next.js site on Render.com.
---

## Pre-Deploy Checklist
1. Run `npm run lint` — fix any ESLint errors
2. Run `npm run build` — verify static export succeeds with no errors
3. Check that all images referenced in code exist in `public/`
4. Verify sitemap.xml lists all pages with correct URLs
5. Confirm robots.txt points to correct sitemap URL
6. Check structured data is valid JSON-LD (no syntax errors)

## Deployment
- Render.com auto-deploys from `master` branch on push
- Static site serves the `out/` directory from `npm run build`
- Backend API (jax-pavers-api.onrender.com) is a separate service

## Post-Deploy
- Verify all pages load correctly (homepage + 5 service pages)
- Check quote form submits successfully to backend API
- Confirm no console errors on mobile and desktop
- Test internal navigation between pages
