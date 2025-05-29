import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Importar o Link

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MayraSection from '../components/MayraSection';
import MethodSection from '../components/MethodSection';
import ResultsSection from '../components/ResultsSection';
import PlansSection from '../components/PlansSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-black/90 overflow-x-hidden">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/feafe30c-8486-41d5-a0bc-ce63abb5c6d8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header com logo fixo */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'py-2 bg-black/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
          }`}
        >
          <div className="container mx-auto px-6">
            {/* ✅ Envolvendo o logo com Link */}
            <Link to="/">
              <img 
                src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
                alt="Vinicius Di Fiore" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
              />
            </Link>
          </div>
        </header>

        {/* Seções do site */}
        <HeroSection />
        <AboutSection />
        {/*<MayraSection />*/}
        <MethodSection />
        <ResultsSection />
        <PlansSection />
        <Footer />
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default Index;
