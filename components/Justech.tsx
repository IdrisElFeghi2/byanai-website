
import React from 'react';

const Justech: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="relative pt-44 pb-32 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-8">
                Legal Intelligence Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Justech
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
                Automating legal documentation and research to accelerate caseload processing with 99% accuracy. Built for the modern legal firm.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-500/20">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold border border-white/10 hover:bg-slate-800 transition-all">
                  Documentation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#050914] rounded-3xl border border-white/10 p-12 aspect-square flex flex-col justify-center relative overflow-hidden group shadow-[0_0_100px_rgba(59,130,246,0.1)]">
                <div className="absolute top-0 right-0 p-8 text-6xl opacity-10">⚖️</div>
                <div className="space-y-6 relative z-10">
                   <div className="h-2 w-32 bg-blue-500 rounded-full mb-8"></div>
                   <div className="space-y-4">
                      <div className="h-4 w-full bg-slate-800 rounded animate-pulse"></div>
                      <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse delay-75"></div>
                      <div className="h-4 w-4/6 bg-slate-800 rounded animate-pulse delay-150"></div>
                   </div>
                   <div className="pt-12">
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-slate-900 rounded-xl border border-white/5">
                            <div className="text-2xl font-bold text-white mb-1">99.4%</div>
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Accuracy Rate</div>
                         </div>
                         <div className="p-4 bg-slate-900 rounded-xl border border-white/5">
                            <div className="text-2xl font-bold text-white mb-1">~12s</div>
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Doc Analysis</div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080D1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Neural Research', desc: 'Scan millions of case files in seconds with context-aware semantic search.' },
              { title: 'Contract Synthesis', desc: 'Automatically generate complex legal documents based on firm-specific templates.' },
              { title: 'Predictive Outcomes', desc: 'AI-driven analysis of historical judgments to forecast case success.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0A0F1E] border border-white/5 hover:border-blue-500/30 transition-all group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Justech;
