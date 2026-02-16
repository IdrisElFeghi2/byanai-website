
import React from 'react';

const MedFusion: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="relative pt-44 pb-32 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-8">
                Healthcare Precision Engine
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                MedFusion
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
                Integrating AI into patient diagnostics and data management for high-precision healthcare delivery. Redefining medical outcomes through data.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-emerald-500/20">
                  View Systems
                </button>
                <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold border border-white/10 hover:bg-slate-800 transition-all">
                  Compliance Docs
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#050914] rounded-3xl border border-white/10 p-12 aspect-square flex flex-col justify-center relative overflow-hidden group shadow-[0_0_100px_rgba(16,185,129,0.1)]">
                <div className="absolute top-0 right-0 p-8 text-6xl opacity-10">🏥</div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-full h-48 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 flex items-center justify-center">
                        <svg className="w-32 h-32 text-emerald-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                        <div className="h-1 bg-emerald-500/30 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-2/3 animate-[shimmer_2s_infinite]"></div>
                        </div>
                        <div className="h-1 bg-emerald-500/30 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-1/2 animate-[shimmer_2s_infinite_0.5s]"></div>
                        </div>
                        <div className="h-1 bg-emerald-500/30 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-3/4 animate-[shimmer_2s_infinite_1s]"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedFusion;
