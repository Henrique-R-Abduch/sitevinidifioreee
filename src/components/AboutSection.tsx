import React from 'react';
import { Award, Globe, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const photoAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 transform translate-x-0 transition-all duration-1000');
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>('opacity-100 transform translate-x-0 transition-all duration-1000');
  
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white/10 to-black relative">
      {/* Light gradient overlay */}
      <div className="w-full px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative z-10 overflow-visible">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
    
{/* Imagem */}
<div 
  ref={photoAnimation.ref} 
  className={`w-full lg:w-1/2 xl:w-2/5 opacity-0 transform lg:-translate-x-8 mt-6 lg:mt-16 ${photoAnimation.className}`}
>
  <div className="relative w-full max-w-xl mx-auto lg:mx-0 scale-105">
    <img 
      src="/lovable-uploads/ae4d02a8-2331-4e52-b495-c3dbb118f8ad.png" 
      alt="Vinicius Di Fiore" 
      className="w-full h-auto rounded-2xl shadow-2xl border-4 border-vf-orange/30 object-cover"
    />
  </div>
</div>


    {/* Texto */}
    <div 
      ref={titleAnimation.ref} 
      className={`w-full lg:w-3/5 opacity-0 transform lg:translate-x-8 ${titleAnimation.className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase text-center lg:text-left">
        Quem é <span className="text-vf-orange">Vinicius Di Fiore</span>?
      </h2>

      <div className="space-y-6 mb-10 text-center lg:text-left w-full max-w-3xl mx-auto lg:mx-0">
        <p className="text-xl leading-relaxed">
          Sou treinador com especializado em transformações reais, com mais de 8 anos de experiência ajudando atletas profissionais, amadores e principalmente pessoas comuns a alcançarem sua melhor versão.
        </p>
        <p className="text-xl leading-relaxed">
          Me formei originalmente em T.I., mas mudei de área após enfrentar bullying na escola. Quis transformar a dor em propósito e encontrei na Educação Física minha verdadeira vocação.
        </p>
        <p className="text-xl leading-relaxed">
          Com pós-graduação finalizada em <strong className="text-vf-orange">Bodybuilding Coach</strong> e outra em andamento em <strong className="text-vf-orange">Nutrição, Treinamento e Hormonização Feminina</strong>, além de vários cursos especializados, sigo me aprimorando para oferecer sempre o melhor.
        </p>
        <p className="text-xl leading-relaxed">
          Minha missão é mostrar que você pode superar sua versão anterior com ciência, prática e motivação.
        </p>
        <p className="text-xl font-bold text-vf-orange">
          “Acredita, vamo!”
        </p>
      </div>

      {/* Cards (mantidos como antes: 3 por linha no SM) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {certifications.map((item, index) => {
          const delay = 700 + index * 150;
          const cardAnimation = useScrollAnimation<HTMLDivElement>(
            'opacity-100 scale-100 transition-all duration-500',
            0.1,
            { delay }
          );

          return (
            <div 
              key={index} 
              ref={cardAnimation.ref}
              className={`flex flex-col items-center gap-4 p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-vf-orange/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.05] hover:shadow-lg opacity-0 scale-90 ${cardAnimation.className}`}
              style={cardAnimation.style}
            >
{typeof item.icon === 'string' ? (
  <img src={item.icon} alt={item.title} className="h-8 w-8 object-contain opacity-90" />
) : (
  <item.icon className="text-vf-orange" size={32} />
)}
              <div className="text-center">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

const certifications = [
  {
    title: "Formação",
    description: "Bacharelado em Educação Física (UNIP)",
    icon: "/lovable-uploads/graduation2.png"
  },
  {
    title: "Pós-Graduação",
    description: "Bodybuilding Coach (concluído) • Hormonização, Nutrição e Treinamento Feminino (em andamento)",
    icon: "/lovable-uploads/award.png"
  },
  {
    title: "Atendimento",
    description: (
      <div className="flex flex-col items-center">
        <span className="mb-2">Brasil, Argentina, Canadá, EUA, Itália, Austrália</span>
        <div className="flex gap-1 justify-center mt-1">
          <img src="/flags/br.png" alt="BR" className="w-5 h-5" />
          <img src="/flags/argentina.png" alt="AR" className="w-5 h-5" />
          <img src="/flags/canada.png" alt="CA" className="w-5 h-5" />
          <img src="/flags/eua.png" alt="US" className="w-5 h-5" />
          <img src="/flags/italia.png" alt="IT" className="w-5 h-5" />
          <img src="/flags/au.png" alt="AU" className="w-5 h-5" />
        </div>
        <span className="text-xs text-vf-orange mt-1 italic animate-pulse"></span>
      </div>
    ),
    icon: "/lovable-uploads/globe.png"
  }
];


export default AboutSection;