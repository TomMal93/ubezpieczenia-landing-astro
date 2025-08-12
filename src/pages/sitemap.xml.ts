import type { APIRoute } from 'astro';
import { getPosts, getPostsCount } from '@/lib/hygraph';

const POSTS_PER_PAGE = 9;

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL('https://przyklad-ubezpieczenia.pl'))
    .toString()
    .replace(/\/$/, '');

  const urls: string[] = [`${origin}/`, `${origin}/blog`];

  // Paginacja bloga
  const total = await getPostsCount();
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  for (let p = 2; p <= totalPages; p++) {
    urls.push(`${origin}/blog/page/${p}`);
  }

  // Posty (limit 1000 na sitemapę — w razie potrzeby można stronicować)
  const posts = await getPosts(1000, 0);
  for (const post of posts) {
    urls.push(`${origin}/blog/${post.slug}`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `<url>
      <loc>${u}</loc>
      <changefreq>weekly</changefreq>
      <priority>${u.endsWith('/blog') ? '0.7' : u.includes('/blog/') ? '0.6' : '0.8'}</priority>
    </url>`,
      )
      .join('\n')}
  </urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
