
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'Custom LLM Training', tag: 'Infrastructure', price: 'Enterprise' },
    { title: 'Workflow Automation', tag: 'SaaS Integration', price: 'Modular' },
    { title: 'AI Strategy Audit', tag: 'Consulting', price: 'One-time' },
    { title: 'Edge Computing Deploy', tag: 'Hardware', price: 'Custom' },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Engineered for reliability, <br />built for scale.
            </p>
          </div>
          <p className="text-slate-400 max-w-sm text-right hidden md:block">
            From initial strategy to deep-tech deployment, we provide the full stack of AI capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer border border-white/5">
              <span className="inline-block px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                {s.tag}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-slate-500 font-mono mb-8 uppercase tracking-tighter">Availability: {s.price}</p>
              <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold group">
                Learn more
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
