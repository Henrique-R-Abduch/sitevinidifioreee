
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CTASection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-black/80 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,92,0,0.3),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,92,0,0.2),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-black to-black/80 p-10 rounded-3xl border border-vf-orange/30 shadow-[0_0_30px_rgba(255,92,0,0.15)]">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
              Vamos fazer <span className="text-vf-orange">1 x 0</span> pra você
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-xl">
                "Não consegue mais usar aquele biquíni que amava na praia?"
              </p>
              <p className="text-xl">
                "Está cansado(a), sem disposição, sem energia?"
              </p>
              <p className="text-2xl font-bold text-vf-orange">
                "Vamos sair do zero!"
              </p>
            </div>
            
            <p className="text-xl mb-12">
              Oferecemos a você um <span className="text-vf-orange font-bold">START</span> na sua vida! 
              Um protocolo de treinamento e dieta para transformar seu corpo e sua mente de verdade!
            </p>
            
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-xl px-12 py-4 orange-glow bg-vf-orange hover:bg-vf-orange/90"
            >
              <span>QUERO COMEÇAR MINHA TRANSFORMAÇÃO</span>
              <ArrowRight size={20} />
            </a>
            
            <p className="mt-6 text-sm text-gray-400">
              Vagas limitadas para garantir qualidade no atendimento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
