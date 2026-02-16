
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'justech' | 'medfusion') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E] border-b border-white/5 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-[#080D1A] border border-blue-500/20 rounded flex items-center justify-center overflow-hidden transition-all group-hover:border-blue-500/50">
            <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Byanai System</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-sm transition-colors ${currentView === 'home' ? 'text-blue-500 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('medfusion')}
            className={`text-sm transition-colors ${currentView === 'medfusion' ? 'text-blue-500 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            MedFusion
          </button>
          <button 
            onClick={() => onNavigate('justech')}
            className={`text-sm transition-colors ${currentView === 'justech' ? 'text-blue-500 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Justech
          </button>
          <button className="px-6 py-2.5 bg-[#121927] hover:bg-[#1a2335] text-white rounded-lg text-sm font-semibold transition-all border border-white/5 shadow-lg active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
