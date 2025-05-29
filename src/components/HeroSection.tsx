import React from 'react';
import { ArrowDown, ArrowRight, Calendar, Users, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useCountAnimation } from '../hooks/useCountAnimation';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set up animated counters
  const experienceCounter = useCountAnimation({ end: 8 });
  const transformationsCounter = useCountAnimation({ end: 200 });
  const countriesCounter = useCountAnimation({ end: 5 });

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient with Smoke Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-vf-orange/30 z-0"></div>
      
      {/* Animated Smoke Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-vf-orange/20 to-transparent animate-pulse-subtle"></div>
        <div className="smoke-1 absolute bottom-0 left-1/4 w-1/2 h-24 bg-vf-orange/10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
        <div className="smoke-2 absolute bottom-0 right-1/3 w-1/3 h-32 bg-vf-orange/15 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.2s' }}></div>
        <div className="smoke-3 absolute bottom-0 left-1/3 w-1/4 h-28 bg-vf-orange/10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <h1
  className="mb-6 font-bold tracking-tight uppercase leading-[0.9] opacity-0 transform translate-y-4 animate-fade-in"
  style={{ animationDelay: '300ms', animationDuration: '600ms', animationFillMode: 'forwards' }}
>
  <span className="block text-white text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]">
    Bem
  </span>
  <span className="block text-vf-orange ml-[5rem] sm:ml-[6rem] md:ml-[7.5rem] lg:ml-[9rem] text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]">
    Vindo
  </span>
</h1>



            <h2
  className="text-3xl md:text-5xl mb-12 font-light tracking-wide opacity-0 transform translate-y-4 animate-fade-in"
  style={{ animationDelay: '500ms', animationDuration: '600ms', animationFillMode: 'forwards' }}
>
  Acredite em você, o corpo<br />
  <span className="text-vf-orange block ml-[4rem] sm:ml-[5rem] md:ml-[6rem] lg:ml-[7rem]">
    responde à mente forte!
  </span>
</h2>



          </div>
          
          <div className="w-full lg:w-[48%] xl:w-[55%] relative opacity-0 animate-fade-in" style={{ animationDelay: '700ms', animationDuration: '800ms', animationFillMode: 'forwards' }}>
            {/* Video Space with Enhanced Styling */}
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 shadow-lg shadow-vf-orange/10 border border-vf-orange/20 relative overflow-hidden transition-all duration-300 hover:shadow-vf-orange/20 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-vf-orange/5 z-0"></div>
              <div className="relative z-10 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                <div className="w-16 h-16 rounded-full bg-vf-orange/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="absolute bottom-4 text-center text-gray-400 font-light">
                  Espaço reservado para vídeo do YouTube
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
  {/* CARD 1 */}
  <div
    ref={experienceCounter.elementRef}
    className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl 
               bg-black/40 backdrop-blur-sm border border-vf-orange/20 transition-all duration-300 
               hover:shadow-lg hover:shadow-vf-orange/20 hover:scale-[1.03] group 
               opacity-0 animate-fade-in"
    style={{ minHeight: '200px', animationDelay: '800ms', animationFillMode: 'forwards' }}
  >
    <div className="mb-4 sm:mb-5">
      <img
        src="/lovable-uploads/calendar.png"
        alt="Experiência"
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="text-5xl sm:text-6xl font-bold text-vf-orange mb-2 sm:mb-4 transition-colors">
      <span className="inline-block">+</span>
      <span className="inline-block">{experienceCounter.count}</span>
    </h3>
    <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center uppercase tracking-wider font-light">
      Anos de Experiência
    </p>
  </div>

  {/* CARD 2 */}
  <div
    ref={transformationsCounter.elementRef}
    className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl 
               bg-black/40 backdrop-blur-sm border border-vf-orange/20 transition-all duration-300 
               hover:shadow-lg hover:shadow-vf-orange/20 hover:scale-[1.03] group 
               opacity-0 animate-fade-in"
    style={{ minHeight: '200px', animationDelay: '1000ms', animationFillMode: 'forwards' }}
  >
    <div className="mb-4 sm:mb-5">
      <img
        src="/lovable-uploads/users.png"
        alt="Transformações"
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="text-5xl sm:text-6xl font-bold text-vf-orange mb-2 sm:mb-4 transition-colors">
      <span className="inline-block">+</span>
      <span className="inline-block">{transformationsCounter.count}</span>
    </h3>
    <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center uppercase tracking-wider font-light">
      pessoas impactadas com grandes transformações e mudanças incríveis
    </p>
  </div>

  {/* CARD 3 */}
  <div
    ref={countriesCounter.elementRef}
    className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl 
               bg-black/40 backdrop-blur-sm border border-vf-orange/20 transition-all duration-300 
               hover:shadow-lg hover:shadow-vf-orange/20 hover:scale-[1.03] group 
               opacity-0 animate-fade-in"
    style={{ minHeight: '200px', animationDelay: '1200ms', animationFillMode: 'forwards' }}
  >
    <div className="mb-4 sm:mb-5">
      <img
        src="/lovable-uploads/globe2.png"
        alt="Países"
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="text-5xl sm:text-6xl font-bold text-vf-orange mb-2 sm:mb-4 transition-colors">
      <span className="inline-block">+</span>
      <span className="inline-block">{countriesCounter.count}</span>
    </h3>
    <div className="text-center">
      <p className="text-sm sm:text-base md:text-lg text-gray-300 uppercase tracking-wider font-light">
        Países com Atendimento
      </p>
      <p className="text-gray-400 text-sm sm:text-base mt-0 italic tracking-wide">
        e contando...
      </p>
    </div>
  </div>
</div>


        {/* CTA Button - Centered */}
<div className="flex justify-center px-4"> {/* ✅ padding lateral no mobile */}
  <Button
    onClick={() => scrollToSection('planos')}
    className="bg-vf-orange text-white font-extrabold text-2xl md:text-3xl uppercase px-12 py-8 rounded-2xl shadow-[0_0_40px_rgba(255,92,0,0.6)] hover:bg-vf-orange/80 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
    style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
  >
    QUERO TRANSFORMAR MEU CORPO AGORA
  </Button>
</div>



      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-vf-orange" />
      </div>
    </section>
  );
};

export default HeroSection;