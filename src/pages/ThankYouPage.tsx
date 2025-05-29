import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import WhatsappIcon from "@/components/WhatsappIcon";

const viniciusImage = "/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png";

const ThankYouPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.animate-fade-up');
    fadeElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const quotes = [
    "A hora do pesadelo é agora e o sorriso depois.",
    "É você contra você.",
    "Acredita, vamo!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-vf-orange/20 flex flex-col items-center overflow-x-hidden px-4">
      
      <main className="max-w-4xl w-full flex flex-col items-center py-16 md:py-24">
        
        {/* Hero Section */}
        <section className="w-full text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Sua Transformação
            <span className="block text-vf-orange mt-2">Começa Agora!</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Parabéns! Seu plano está ativo e sua jornada épica rumo ao corpo dos seus sonhos começa agora mesmo.
          </p>
        </section>

        {/* Photo & Quotes Section */}
        <section className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 animate-fade-up">
          
          {/* Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-vf-orange/10 rounded-3xl blur-2xl"></div>
              <img 
                src={viniciusImage} 
                alt="Vinicius Di Fiore" 
                className="relative rounded-3xl w-full max-w-xs md:max-w-sm h-auto object-cover shadow-2xl" 
              />
            </div>
          </div>

          {/* Quotes */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="group cursor-default animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed relative pl-4 md:pl-6 border-l-4 border-vf-orange group-hover:border-vf-orange/80 transition-all duration-300">
                  <span className="block group-hover:text-vf-orange/90 transition-colors duration-300">
                    "{quote}"
                  </span>
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card Section */}
        <section className="w-full animate-fade-up">
          <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 md:p-12 text-center">
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Pronto para começar?
            </h2>
            
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2">
              Me chame agora no WhatsApp para receber seu <strong className="text-vf-orange">Guia de Boas-Vindas</strong>, 
              acesso ao app e vídeos exclusivos. Vamos começar sua transformação!
            </p>
            
            <div className="px-2 mb-6 md:mb-8">
              <a 
                href="https://wa.me/5511999999999?text=Oi%20Vinicius%2C%20acabei%20de%20adquirir%20o%20Protocolo%20Black%20e%20quero%20começar!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button 
                  className={`btn-animated ${isMobile ? 'text-base py-4 px-6' : 'text-xl md:text-2xl py-8 px-16'} flex gap-3 md:gap-4 rounded-2xl group transform hover:scale-105 transition-all duration-300 shadow-2xl w-full`}
                >
      
                  <span className="text-center flex-1">🚀 Me chama no WhatsApp</span>
                </Button>
              </a>
            </div>

            {/* Benefits integrated */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 text-gray-400 text-sm md:text-lg px-2">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">📚</span>
                <span>Guia de Boas-Vindas</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">🎥</span>
                <span>Vídeos Exclusivos</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">📱</span>
                <span>Acesso ao App</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 mt-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-2">
            <span className="text-vf-orange">🛡️</span>
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-vf-orange">💬</span>
            <span>Suporte via WhatsApp</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          © 2025 Vinicius Di Fiore. Todos os direitos reservados.
        </p>
      </footer>

      {/* Fixed CTA for Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/95 to-transparent pt-6 pb-4 px-4 flex justify-center z-50">
          <a 
            href="https://wa.me/5511999999999?text=Oi%20Vinicius%2C%20acabei%20de%20adquirir%20o%20Protocolo%20Black%20e%20quero%20começar!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <Button 
              className="btn-animated w-full text-base py-5 flex gap-3 rounded-xl shadow-2xl"
            >

              <span>🚀 Me chama no WhatsApp</span>
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ThankYouPage;