import LiveNewsFlash from './components/LiveNewsFlash';

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
    <main className="site-3d">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header glass-header">
        <a className="logo logo-3d" href="/">Agent<span>Pulse</span></a>
        <nav>{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="search" href="/search" aria-label="Search AgentPulse">⌕</a>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">THE INTELLIGENCE PLATFORM · LIVE</div>
          <h1>The Pulse of <em>AI, Automation</em> & Marketing Software.</h1>
          <p>Discover live AI news, AI agents, automation platforms and marketing software — with date-wise updates, reviews, comparisons and practical insights.</p>
          <div className="actions"><a className="btn-3d" href="/news">Explore Live News →</a><a className="ghost" href="/tools">Browse Tools</a></div>
        </div>
        <a className="hero-card hero-3d" href="/ai-agents" aria-label="Explore AI agents">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orb"><span>✦</span></div>
          <div className="hero-card-content"><b>AI AGENT<br/>OF THE MOMENT</b><p>From prompts to autonomous action. Explore the agent ecosystem →</p></div>
          <div className="depth-label">LIVE / 3D / 2026</div>
        </a>
      </section>

      <LiveNewsFlash />

      <section className="wrap section"><div className="section-head"><div><span className="eyebrow">EXPLORE THE ECOSYSTEM</span><h2>Built around what’s next.</h2></div><a href="/ai">View all →</a></div><div className="grid">{categories.map(([n,t,d,href]) => <a className="category category-3d" href={href} key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><span className="explore">Explore →</span><i /></a>)}</div></section>

      <section className="newsletter wrap newsletter-3d"><div><span className="eyebrow">THE PULSELETTER</span><h2>Stay ahead of the AI curve.</h2><p>One sharp briefing on AI agents, automation and marketing software.</p></div><a className="subscribe btn-3d" href="/newsletter">Subscribe to Pulseletter →</a></section>
      <footer className="footer wrap"><a className="logo" href="/">Agent<span>Pulse</span></a><p><a href="/ai">AI</a> · <a href="/ai-agents">Agents</a> · <a href="/automation">Automation</a> · <a href="/marketing-software">Marketing Software</a></p><small>© 2026 AgentPulse. Live intelligence platform.</small></footer>
    </main>
  );
}
