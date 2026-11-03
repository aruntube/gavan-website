# Gavan Infotech — website

Single-page marketing site for Gavan Infotech, built with Next.js (static export), Tailwind CSS v4 and deployed to GitHub Pages at **https://gavaninfotech.com**.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static export into ./out
npx serve out    # preview the exported site
```

Node 22 is expected (see `.github/workflows/deploy.yml`).

## Where things live

| Path | What it is |
|---|---|
| `src/content/*.ts` | **All copy** on the site. Edit text here, not in components. |
| `src/content/site.ts` | Company details, nav, hero, overview, values, accelerators, rescue, contact, footer |
| `src/content/services.ts` | The six service practices (explorer + matrix) |
| `src/content/scenarios.ts`, `lifecycle.ts`, `faq.ts`, `engagement.ts` | Industry use cases, delivery lifecycle, FAQs, engagement models |
| `src/content/adlc.ts`, `fde.ts` | Agentic Development Lifecycle stages and guardrails; Forward Deployed Engineer offer |
| `src/components/sections/` | One component per page section |
| `src/components/forms/` | Proposal form, booking modal, Web3Forms hook |
| `src/app/globals.css` | Brand colour tokens (`brand-*` teal, `ink-*` slate), fonts, base styles |
| `public/` | Logo files, OG image, `CNAME`, `robots.txt`, `sitemap.xml` |

Brand colours: teal `#356A69` (`brand-600`) and slate `#313B44` (`ink-800`).

## Contact forms (Web3Forms)

Both forms post to [Web3Forms](https://web3forms.com), which emails submissions to `contact@gavaninfotech.com`.

1. Create a free Web3Forms access key for `contact@gavaninfotech.com`.
2. For local builds, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_KEY`.
3. For production, add a **repository variable** named `WEB3FORMS_KEY` under *Settings → Secrets and variables → Actions → Variables*. The deploy workflow passes it into the build.

If the key is missing, the forms fall back to opening the visitor's email client with the message prefilled, so no lead is silently dropped.

## Deployment (GitHub Pages)

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes `out/` to GitHub Pages.

One-time setup:

1. Create the GitHub repository and push this code to `main`.
2. In *Settings → Pages*, set **Source** to **GitHub Actions**.
3. In the same page, set **Custom domain** to `gavaninfotech.com` and enable **Enforce HTTPS** once DNS has propagated. `public/CNAME` already contains the domain.

DNS records at your domain registrar:

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<github-username>.github.io` |

## Tech notes

- `next.config.ts` uses `output: "export"`, `trailingSlash: true` and `images.unoptimized` so the site is plain HTML/CSS/JS.
- Fonts (Manrope, Inter) are self-hosted at build time via `next/font`.
- Icons come from `lucide-react`.
- Scroll-reveal animations respect `prefers-reduced-motion`.
