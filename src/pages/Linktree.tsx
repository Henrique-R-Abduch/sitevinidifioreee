import React from 'react';
import { Card } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface LinkCardProps {
  title: string;
  link: string;
  bgImage?: string;
  bgColor?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, link, bgImage, bgColor = 'bg-black' }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full mb-6 transition-all duration-300 hover:scale-[1.02]"
    >
      <Card 
        className={`${bgColor} border border-vf-orange/20 hover:border-vf-orange/50 hover:shadow-[0_0_15px_rgba(255,92,0,0.3)] overflow-hidden rounded-lg relative h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] flex items-center justify-center`}
>

        {bgImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImage} 
              alt={title} 
              className="w-full h-full object-cover sm:object-cover object-center brightness-110"

            />
          </div>
        )}
      </Card>
    </a>
  );
};

const Linktree: React.FC = () => {
  const logoAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 scale-100', 0.1, { noInitialHidden: true });

  return (
    <div className="min-h-screen flex flex-col bg-vf-black bg-gradient-to-b from-black to-gray-900 items-center relative">
      
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0...')] opacity-5 pointer-events-none"></div>

      {/* LOGO NO TOPO SEMPRE */}
      <div 
        ref={logoAnimation.ref}
        className={`flex flex-col items-center mt-12 mb-6 opacity-0 scale-95 transition-all duration-700 ${logoAnimation.className}`}
      >
        <img 
          src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
          alt="Vinicius Di Fiore" 
          className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[720px] h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10 flex-1 w-full flex flex-col items-center justify-center md:justify-start">


        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl space-y-8">


          <LinkCard 
            title="Site Oficial" 
            link="/site"
            bgImage="/lovable-uploads/vinibanner.jpg"
          />

          <LinkCard 
            title="Plano Black" 
            link="/plano-black"
            bgImage="/lovable-uploads/planoblack.jpg"
          />

          {/* <LinkCard 
            title="Plano Starter" 
            link="/plano-starter"
            bgImage="/lovable-uploads/planostart.png"
          /> */}

          <LinkCard 
            title="Protocolo Premium" 
            link="/protocolo-treinamento"
            bgImage="/lovable-uploads/protocolopremium.jpg"
          />
        </div>

        {/* WHATSAPP FLOATING BUTTON */}
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-vf-orange/30 transition-all hover:scale-105 hover:border-vf-orange z-20"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={24} className="text-white hover:text-vf-orange transition-colors" />
        </a>

      </div>

      {/* FOOTER SEMPRE AO FINAL */}
      <footer className="w-full mt-12 text-center text-gray-500 text-sm px-4 pb-6">
        <p>Todos os direitos reservados - Vinicius Di Fiore</p>
      </footer>
    </div>
  );
};

export default Linktree;
