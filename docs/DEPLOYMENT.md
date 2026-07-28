# PRANU.AGENT Deployment

## Local verification

```bash
npm test
npm run build
npm run smoke
npm run deploy:summary
```

## Push to GitHub main

A GitHub remote must be configured before pushing:

```bash
git remote add origin git@github.com:<owner>/<repo>.git
git push origin HEAD:main
```

## Deploy to Vercel

The repository is configured for Vercel static deployment through `vercel.json`.

```bash
VERCEL_TOKEN=<token> npm run deploy:vercel
```

The deploy script builds the project first, then runs `npx vercel --prod --yes`. If `VERCEL_TOKEN` is present it is passed to the CLI. GitHub Actions can also deploy on pushes to `main` when `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` repository secrets are configured.

## Expected URLs

- Local smoke URL: `http://127.0.0.1:5173`
- Production URL: emitted by Vercel after a successful authenticated deployment.
