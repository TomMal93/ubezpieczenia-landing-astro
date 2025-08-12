import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL('https://przyklad-ubezpieczenia.pl'))
    .toString()
    .replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
