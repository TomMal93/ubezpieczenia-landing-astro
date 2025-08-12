# Landing + Blog (Astro + Svelte islands + Hygraph)

Polski landing dla firmy ubezpieczeniowej z HERO i blogiem. SSG, UnoCSS + Open Props, Pagefind, Cloudflare Web Analytics, deploy na Vercel.

## Wymagania
- Node 18+
- NPM / PNPM / Yarn (przykłady dla npm)
- Konto w Hygraph (opcjonalnie, jest fallback na mocki)

## Start
```bash
npm i
cp .env.example .env
# ustaw HYGRAPH_API_URL (publiczny endpoint Content API)
# opcjonalnie HYGRAPH_TOKEN (read-only) i CF_WEB_ANALYTICS_TOKEN
npm run dev
# ubezpieczenia-landing-astro
