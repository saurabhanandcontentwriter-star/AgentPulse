import Link from 'next/link';

const data: Record<string, {title:string; eyebrow:string; description:string; items:string[]}> = {
  ai: {eyebrow:'AI', title:'Artificial Intelligence', description:'Models, products, research and practical AI insights for the modern technology landscape.', items:['AI model launches','Research & breakthroughs','AI product guides','Business use cases']},
  'ai-agents': {eyebrow:'AI AGENTS', title:'AI Agents', description:'Explore agentic systems, autonomous workflows and the next generation of AI employees.', items:['Agent directories','Agent frameworks','Autonomous workflows','AI employee use cases']},
  automation: {eyebrow:'AUTOMATION', title:'Automation', description:'No-code, low-code and AI-powered automation platforms that turn repetitive work into scalable systems.', items:['Workflow automation','No-code platforms','RPA & integrations','AI automation guides']},
  'marketing-software': {eyebrow:'MARKETING SOFTWARE', title:'Marketing Software', description:'SEO, CRM, advertising, analytics, content and growth platforms compared for marketers.', items:['SEO tools','CRM platforms','Ad technology','Analytics & content']},
  news: {eyebrow:'NEWS', title:'AgentPulse News', description:'Fast, useful intelligence across AI, agents, automation and marketing software.', items:['AI industry news','Agent launches','Automation updates','Martech news']},
  tools: {eyebrow:'TOOLS', title:'Tools Directory', description:'Discover software worth testing, organized around the workflows modern teams actually use.', items:['AI tools','Agent tools','Automation tools','Marketing tools']},
  reviews: {eyebrow:'REVIEWS', title:'Software Reviews', description:'Practical reviews focused on capabilities, workflows, pricing considerations and real-world fit.', items:['AI reviews','Agent reviews','Automation reviews','Marketing reviews']},
  newsletter: {eyebrow:'THE PULSELETTER', title:'Stay in the loop.', description:'Get a sharp briefing on AI agents, automation and marketing software.', items:['Weekly intelligence','Product launches','Useful tools','Practical insights']},
};

export default async function SlugPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const page=data[slug] ?? data.news;
  return <main className="inner-page"><header className="header"><Link className="logo" href="/">Agent<span>Pulse</span></Link><nav><Link href="/ai">AI</Link><Link href="/ai-agents">AI Agents</Link><Link href="/automation">Automation</Link><Link href="/marketing-software">Marketing Software</Link><Link href="/news">News</Link><Link href="/tools">Tools</Link><Link href="/reviews">Reviews</Link></nav><Link className="search" href="/search">⌕</Link></header><section className="inner-wrap"><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p className="lead">{page.description}</p><div className="inner-grid">{page.items.map((item,i)=><Link className="inner-card" href={slug==='news'?`/news/${['ai-agents-moving-to-action','agentic-workflow-automation','ai-marketing-stack'][i] ?? 'ai-agents-moving-to-action'}`:`/search?q=${encodeURIComponent(item)}`} key={item}><span>0{i+1}</span><h2>{item}</h2><p>Explore AgentPulse coverage, tools and practical intelligence.</p><b>Explore →</b></Link>)}</div><Link className="back" href="/">← Back to AgentPulse</Link></section></main>;
}
