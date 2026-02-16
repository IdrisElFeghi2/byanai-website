
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import GeminiShowcase from './components/GeminiShowcase';
import Footer from './components/Footer';
import Justech from './components/Justech';
import MedFusion from './components/MedFusion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'justech' | 'medfusion'>('home');

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'justech':
        return <Justech />;
      case 'medfusion':
        return <MedFusion />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Services />
            <GeminiShowcase />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1E]">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
