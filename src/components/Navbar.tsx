
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
            alt="Vinicius Di Fiore" 
            className="h-12" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-vf-white hover:text-vf-orange uppercase font-medium animated-underline"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-vf-white hover:text-vf-orange uppercase font-medium animated-underline"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-vf-white hover:text-vf-orange uppercase font-medium animated-underline"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="btn-primary"
          >
            Ver Planos
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-vf-white p-2"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black/95 z-50 flex flex-col items-center pt-10 space-y-8 animate-fade-in">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-vf-white hover:text-vf-orange text-xl uppercase font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-vf-white hover:text-vf-orange text-xl uppercase font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-vf-white hover:text-vf-orange text-xl uppercase font-medium"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="btn-primary"
          >
            Ver Planos
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
