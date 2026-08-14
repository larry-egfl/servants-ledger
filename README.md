# The Servant's Ledger

A bilingual, launch-day SEO guide site for **Servant of the Lake**, built from the workflow in the AI hot-keyword game-site playbook.

## What is included

- Next.js App Router + TypeScript
- English and Simplified Chinese routes
- 12 source-linked MDX guides in each language
- Client-side guide search and category filtering
- Per-page metadata, canonical/hreflang links, Article JSON-LD
- Generated Open Graph image, `sitemap.xml`, and `robots.txt`
- Optional Google Analytics, Search Console verification, and AdSense hooks
- Original CSS illustration; no copied game artwork
- `content/keywords.json` keyword map with live/researching status

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to `/en`; Chinese is at `/zh`.

## Production configuration

For a custom domain, copy `.env.example` to `.env.local` and set:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

On a free `vercel.app` deployment this variable is optional: the site automatically uses Vercel's production URL for canonical links and the sitemap.

The remaining variables are optional:

- `NEXT_PUBLIC_GA_ID` enables Google Analytics.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` emits the Search Console verification tag.
- `NEXT_PUBLIC_ADSENSE_CLIENT` loads the AdSense client script. Add actual ad units only after approval.

## Deploy

1. Push the repository to GitHub.
2. Import it in Vercel and copy the environment variables.
3. Attach the domain in Vercel, then point Cloudflare DNS to the assigned Vercel target.
4. Submit `https://your-domain.example/sitemap.xml` in Google Search Console.
5. Confirm live traffic in Analytics before adding or changing content based on impressions.

External account actions—domain purchase, Vercel/GitHub connection, GSC verification, and AdSense approval—are intentionally not automated by this repository.

## Content update workflow

Each guide lives in `content/guides/{en,zh}`. Keep matching slugs across locales so the language switch and hreflang pairs remain correct. Facts should link to official sources; puzzle answers should link to a played walkthrough or two independent reports. Update the frontmatter date whenever a solution is re-checked.
