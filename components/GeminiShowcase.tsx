
import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { Message } from '../types';

const GeminiShowcase: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Neural connection established. I am the Byan AI Strategic Architect. How can I optimize your enterprise systems today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await generateAIResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-showcase" className="py-32 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Cognitive Command Console</h2>
          <p className="text-slate-400 text-lg font-light">Interact with our primary reasoning engine for architectural guidance.</p>
        </div>

        <div className="bg-[#0b0f1a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
          {/* Console Header */}
          <div className="bg-slate-900/80 backdrop-blur-md px-8 py-5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.2em] uppercase">Terminal://Byan-System-01</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded uppercase tracking-widest">
                System Online
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="h-[500px] overflow-y-auto p-8 space-y-6 bg-[linear-gradient(rgba(11,15,26,0.9),rgba(11,15,26,0.9)),url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scroll-smooth custom-scrollbar"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[85%] rounded-3xl px-6 py-4 shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-900 text-slate-200 border border-white/10 rounded-tl-none font-light'
                }`}>
                   <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5 opacity-40">
                    {m.role === 'user' ? 'Client Request' : 'Byan Intelligence'}
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 rounded-3xl rounded-tl-none px-6 py-4 border border-white/10">
                  <div className="flex gap-1.5 py-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:800ms]"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:800ms] [animation-delay:200ms]"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:800ms] [animation-delay:400ms]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-6 bg-slate-900/30 border-t border-white/5 backdrop-blur-xl">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Submit architectural query or strategic directive..."
                className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-blue-500/50 transition-all pr-32 text-slate-100 placeholder:text-slate-600 shadow-inner"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-50 shadow-xl active:scale-95"
              >
                {isLoading ? 'Processing' : 'Transmit'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Pro-Level Reasoning</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Real-time Processing</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> ISO Compliance</div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
};

export default GeminiShowcase;
