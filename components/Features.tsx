
import React from 'react';

const Features: React.FC = () => {
  const industries = [
    {
      title: 'Healthcare (MedFusion)',
      desc: 'Integrating AI into patient diagnostics and data management for high-precision healthcare delivery.',
      icon: '🏥'
    },
    {
      title: 'Legal Systems (Justech)',
      desc: 'Automating legal documentation and research to accelerate caseload processing with 99% accuracy.',
      icon: '⚖️'
    },
    {
      title: 'Enterprise Architecture',
      desc: 'Bespoke neural networks designed for large-scale institutional operational efficiency.',
      icon: '🏢'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#080D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-blue-500 font-bold text-sm tracking-[0.2em] uppercase mb-12 text-center">Core Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {industries.map((f, i) => (
            <div key={i} className="group p-8 rounded-xl bg-[#0A0F1E] border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
