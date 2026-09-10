const news = [
  ['AI AGENTS', 'AI agents are moving from chat to action: what businesses should prepare for', '/news/ai-agents-moving-to-action'],
  ['AUTOMATION', 'The new generation of workflow automation is becoming agentic', '/news/agentic-workflow-automation'],
  ['MARKETING SOFTWARE', 'AI is reshaping the modern marketing technology stack', '/news/ai-marketing-stack'],
];

const categories = [
  ['01', 'AI', 'Models, products, research and practical AI insights.', '/ai'],
  ['02', 'AI Agents', 'Agentic systems, autonomous workflows and AI employees.', '/ai-agents'],
  ['03', 'Automation', 'No-code, low-code and AI-powered business automation.', '/automation'],
  ['04', 'Marketing Software', 'SEO, CRM, ads, analytics, content and growth platforms.', '/marketing-software'],
];

const nav = [
  ['AI', '/ai'], ['AI Agents', '/ai-agents'], ['Automation', '/automation'],
  ['Marketing Software', '/marketing-software'], ['News', '/news'], ['Tools', '/tools'], ['Reviews', '/reviews'],
];

export default function Home() {
  return (
    <main>
      <div className="topbar"><span>● LIVE</span> <a href="/news">News Flash — AI, Agents & Automation intelligence</a></div>
      <header className="header">
        <a className="logo" href="/">Agent<span>Pulse</span></a>
        <nav>{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="search" href="/search" aria-label="Search AgentPulse">⌕</a>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">THE INTELLIGENCE PLATFORM</div>
          <h1>The Pulse of <em>AI, Automation</em> & Marketing Software.</h1>
          <p>Discover the latest AI agents, automation platforms and marketing software — with news, reviews, comparisons and practical insights.</p>
          <div className="actions"><a href="/news">Explore Latest News →</a><a className="ghost" href="/tools">Browse Tools</a></div>
        </div>
        <a className="hero-card" href="/ai-agents" aria-label="Explore AI agents"><div className="orb">✦</div><div><b>AI AGENT<br/>OF THE MOMENT</b><p>From prompts to autonomous action. Explore the agent ecosystem →</p></div></a>
      </section>

      <section className="flash"><div className="wrap flash-inner"><b>⚡ NEWS FLASH</b>{news.map(([tag,title,href]) => <a className="flash-item" href={href} key={title}><small>{tag}</small>{title}</a>)}</div></section>

      <section className="wrap section"><div className="section-head"><div><span className="eyebrow">EXPLORE THE ECOSYSTEM</span><h2>Built around what’s next.</h2></div><a href="/ai">View all →</a></div><div className="grid">{categories.map(([n,t,d,href]) => <a className="category" href={href} key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><span className="explore">Explore →</span></a>)}</div></section>

      <section className="wrap section"><div className="section-head"><div><span className="eyebrow">LATEST INTELLIGENCE</span><h2>What’s happening now.</h2></div><a href="/news">All news →</a></div><div className="stories">{news.map(([tag,title,href],i) => <article className="story" key={title}><a href={href}><div className={'story-art art-'+i}><span>AGENT<br/>PULSE</span></div><div><small>{tag} · 6 MIN READ</small><h3>{title}</h3><p>Actionable context for founders, marketers and technology teams navigating the AI era.</p><span className="read">Read story →</span></div></a></article>)}</div></section>

      <section className="newsletter wrap"><div><span className="eyebrow">THE PULSELETTER</span><h2>Stay ahead of the AI curve.</h2><p>One sharp briefing on AI agents, automation and marketing software.</p></div><a className="subscribe" href="/newsletter">Subscribe to Pulseletter →</a></section>

      <footer className="footer wrap"><a className="logo" href="/">Agent<span>Pulse</span></a><p><a href="/ai">AI</a> · <a href="/ai-agents">Agents</a> · <a href="/automation">Automation</a> · <a href="/marketing-software">Marketing Software</a></p><small>© 2026 AgentPulse. Built for the future of work.</small></footer>
    </main>
  );
}
