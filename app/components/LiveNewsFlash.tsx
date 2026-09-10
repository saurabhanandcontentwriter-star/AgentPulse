'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type NewsItem = { title: string; link: string; pubDate: string; source: string };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(date);
}

export default function LiveNewsFlash() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [updated, setUpdated] = useState<Date>(new Date());

  const loadNews = useCallback(async () => {
    try {
      const res = await fetch('/api/news', { cache: 'no-store' });
      const data = await res.json();
      setItems(data.items ?? []);
      setUpdated(new Date(data.updatedAt ?? Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    loadNews();
    const timer = window.setInterval(loadNews, 60_000);
    return () => window.clearInterval(timer);
  }, [loadNews]);

  const grouped = useMemo(() => {
    const map = new Map<string, NewsItem[]>();
    items.forEach((item) => {
      const key = formatDate(new Date(item.pubDate));
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(item);
    });
    return [...map.entries()];
  }, [items]);

  const ticker = items.slice(0, 12);

  return (
    <>
      <section className="live-news-head">
        <div className="wrap live-news-meta">
          <div><span className="live-dot" /> <strong>LIVE NEWS FLASH</strong><span className="live-status">Auto-refresh every 60 sec</span></div>
          <div className="live-clock">Updated {formatTime(updated)} IST · {formatDate(updated)}</div>
        </div>
      </section>

      <section className="live-ticker" aria-label="Live news ticker">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="ticker-item" key={`${item.title}-${i}`}>
              <span className="ticker-source">{item.source}</span>
              <span>{item.title}</span><b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap date-news-section">
        <div className="section-head"><div><span className="eyebrow">LIVE · DATE-WISE</span><h2>News by date.</h2></div></div>
        {grouped.length ? grouped.map(([date, dayItems]) => (
          <div className="date-group" key={date}>
            <div className="date-label"><span>{date}</span><i /></div>
            <div className="date-news-grid">
              {dayItems.slice(0, 6).map((item) => (
                <a className="date-news-card" href={item.link} target="_blank" rel="noopener noreferrer" key={item.title}>
                  <small>{item.source} · {formatTime(new Date(item.pubDate))} IST</small>
                  <h3>{item.title}</h3>
                  <span>Read live source ↗</span>
                </a>
              ))}
            </div>
          </div>
        )) : <div className="news-loading">Loading live AI news…</div>}
      </section>
    </>
  );
}
