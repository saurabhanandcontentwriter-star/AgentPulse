const news = [
  ['AI AGENTS', 'AI agents are moving from chat to action: what businesses should prepare for'],
  ['AUTOMATION', 'The new generation of workflow automation is becoming agentic'],
  ['MARKETING SOFTWARE', 'AI is reshaping the modern marketing technology stack'],
];

const categories = [
  ['01', 'AI', 'Models, products, research and practical AI insights.'],
  ['02', 'AI Agents', 'Agentic systems, autonomous workflows and AI employees.'],
  ['03', 'Automation', 'No-code, low-code and AI-powered business automation.'],
  ['04', 'Marketing Software', 'SEO, CRM, ads, analytics, content and growth platforms.'],
];

export default function Home() {
  return (
    <main>
      <div className="topbar"><span>● LIVE</span> News Flash — AI, Agents & Automation intelligence</div>
      <header className="header">
        <a className="logo" href="#">Agent<span>Pulse</span></a>
        <nav>{['AI','AI Agents','Automation','Marketing Software','News','Tools','Reviews'].map(x => <a key={x} href="#">{x}</a>)}</nav>
        <button className="search">⌕</button>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">THE INTELLIGENCE PLATFORM</div>
          <h1>The Pulse of <em>AI, Automation</em> & Marketing Software.</h1>
          <p>Discover the latest AI agents, automation platforms and marketing software — with news, reviews, comparisons and practical insights.</p>
          <div className="actions"><button>Explore Latest News →</button><button className="ghost">Browse Tools</button></div>
        </div>
        <div className="hero-card"><div className="orb">✦</div><div><b>AI AGENT<br/>OF THE MOMENT</b><p>From prompts to autonomous action.</p></div></div>
      </section>

      <section className="flash"><div className="wrap flash-inner"><b>⚡ NEWS FLASH</b>{news.map(([tag,title]) => <div className="flash-item" key={title}><small>{tag}</small>{title}</div>)}</div></section>

      <section className="wrap section"><div className="section-head"><div><span className="eyebrow">EXPLORE THE ECOSYSTEM</span><h2>Built around what’s next.</h2></div><a href="#">View all →</a></div><div className="grid">{categories.map(([n,t,d]) => <article className="category" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#">Explore →</a></article>)}</div></section>

      <section className="wrap section"><div className="section-head"><div><span className="eyebrow">LATEST INTELLIGENCE</span><h2>What’s happening now.</h2></div></div><div className="stories">{news.map(([tag,title],i) => <article className="story" key={title}><div className={'story-art art-'+i}><span>AGENT<br/>PULSE</span></div><div><small>{tag} · 6 MIN READ</small><h3>{title}</h3><p>Actionable context for founders, marketers and technology teams navigating the AI era.</p><a href="#">Read story →</a></div></article>)}</div></section>

      <section className="newsletter wrap"><div><span className="eyebrow">THE PULSELETTER</span><h2>Stay ahead of the AI curve.</h2><p>One sharp briefing on AI agents, automation and marketing software.</p></div><form><input placeholder="Your email address" type="email"/><button>Subscribe →</button></form></section>

      <footer className="footer wrap"><div className="logo">Agent<span>Pulse</span></div><p>AI · Agents · Automation · Marketing Software</p><small>© 2026 AgentPulse. Built for the future of work.</small></footer>
    </main>
  );
}
