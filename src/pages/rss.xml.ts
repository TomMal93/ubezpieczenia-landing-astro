import type { APIRoute } from 'astro';
import { getPosts } from '@/lib/hygraph';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL('https://przyklad-ubezpieczenia.pl'))
    .toString()
    .replace(/\/$/, '');
  const posts = await getPosts(50, 0);

  const items = posts
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${origin}/blog/${p.slug}</link>
      <guid isPermaLink="true">${origin}/blog/${p.slug}</guid>
      ${p.excerpt ? `<description><![CDATA[${p.excerpt}]]></description>` : ''}
      ${p.publishedAt ? `<pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>` : ''}
    </item>
  `,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>TwojeUbezpieczenia – Blog</title>
      <link>${origin}/blog</link>
      <description>Porady i przewodniki ubezpieczeniowe</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
