import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type NewsItem = { title: string; link: string; pubDate: string; source: string };

const feeds = [
  ['AI', 'https://news.google.com/rss/search?q=AI+artificial+intelligence&hl=en-IN&gl=IN&ceid=IN:en'],
  ['AI AGENTS', 'https://news.google.com/rss/search?q=AI+agents+agentic+AI&hl=en-IN&gl=IN&ceid=IN:en'],
  ['AUTOMATION', 'https://news.google.com/rss/search?q=AI+automation+workflow&hl=en-IN&gl=IN&ceid=IN:en'],
  ['MARKETING SOFTWARE', 'https://news.google.com/rss/search?q=AI+marketing+software+SEO+ads&hl=en-IN&gl=IN&ceid=IN:en'],
] as const;

function decode(value: string) {
  return value.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}

function parseFeed(xml: string, category: string): NewsItem[] {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 8).map((m) => {
    const item = m[1];
    const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
    const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? '';
    const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? '';
    const source = item.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] ?? category;
    return { title: decode(title), link: decode(link), pubDate: decode(pubDate), source: decode(source) };
  }).filter((x) => x.title && x.link && x.pubDate);
}

export async function GET() {
  try {
    const responses = await Promise.allSettled(feeds.map(async ([category, url]) => {
      const response = await fetch(url, { cache: 'no-store', headers: { 'User-Agent': 'AgentPulse/1.0' } });
      if (!response.ok) throw new Error(`Feed failed: ${response.status}`);
      return parseFeed(await response.text(), category);
    }));

    const items = responses.flatMap((r) => r.status === 'fulfilled' ? r.value : []);
    const unique = Array.from(new Map(items.map((item) => [item.title, item])).values())
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      .slice(0, 30);

    return NextResponse.json({ updatedAt: new Date().toISOString(), items: unique });
  } catch {
    return NextResponse.json({ updatedAt: new Date().toISOString(), items: [] }, { status: 200 });
  }
}
