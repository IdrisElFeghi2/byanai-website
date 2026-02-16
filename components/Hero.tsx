
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-32 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Byanai System
            </h1>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Committed to delivering innovative solutions for legal and healthcare industries. 
              We build advanced AI platforms that empower professionals and drive operational efficiency.
            </p>
            <a href="#features" className="inline-flex items-center text-white font-semibold group">
              Explore Our Platforms
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Right Column: Stylized Visual Card */}
          <div className="relative">
            <div className="bg-[#050914] rounded-2xl border border-white/10 p-12 flex flex-col items-center justify-center aspect-[4/3] shadow-2xl relative overflow-hidden group">
              {/* Logo Graphic Background Glow */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-8 text-sm">BYANAI SYSTEMS</span>
                
                {/* SVG Logo Clone */}
                <div className="w-48 h-24 relative mb-8">
                  <svg className="w-full h-full text-blue-500" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 30H160C180 30 190 45 190 60C190 75 180 90 160 90H100" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M60 50H140C155 50 165 60 165 70C165 80 155 90 140 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M80 70H120" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="170" cy="65" r="15" stroke="currentColor" strokeWidth="4"/>
                  </svg>
                </div>

                <span className="text-blue-300 font-medium tracking-widest text-xs opacity-80 uppercase italic">
                  Future-ready intelligence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
