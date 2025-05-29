import React from 'react';
import { ArrowRight, Brain, Utensils, Heart, BatteryFull, Check, UserCheck, Activity, Video, MessageCircle, FileText, Trophy, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import PuzzlePieces from '@/components/PuzzlePieces';
import PlanCard from '@/components/PlanCard';
import { useEffect, useState } from 'react';
import ResultsCarousel from '@/components/carrossel';
const PlanoBlack: React.FC = () => {
  
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });
  const section2CardAnimations = [
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 0 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 200 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 600 }),
  ];
  const beneficioAnimations = [
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 0 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 100 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 200 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 300 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 400 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 500 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 600 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 700 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 800 }),
  ];
  const diferenciaisAnimations = [
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 0 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 150 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 300 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 450 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 600 }),
  ];
  const faqAnimations = [
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 0 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 100 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 200 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 300 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 }),
    useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 500 }),
  ];
  
  

  const scrollToPlans = () => {
    const plansSection = document.getElementById('choose-plan-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a] text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-vf-orange/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-vf-orange/3"></div>
        <PuzzlePieces />
      </div>

      <header 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'py-2 bg-black/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
  }`}
>
  <div className="container mx-auto px-6">
    <div className="flex justify-between items-center">
      <Link to="/">
        <img 
          src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
          alt="Vinicius Di Fiore" 
          className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
        />
      </Link>
    </div>
  </div>
</header>

<div className="container mx-auto px-4 pt-28 relative z-10">


        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-20 mt-8">
          <div 
            ref={heroTitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-1000 ${heroTitleAnimation.className}`}
          >
            <h1
  className="mb-10 font-bold tracking-tight uppercase leading-[0.9] opacity-0 transform translate-y-4 animate-fade-in"
  style={{ animationDelay: '300ms', animationDuration: '600ms', animationFillMode: 'forwards' }}
>
  <span className="block text-white text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] -mr-0">
  PLANO
</span>

<span className="block mt-16 mb-16 tracking-widest scale-y-105 font-halloween-ttf text-vf-orange uppercase leading-[0.9] 
  text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem]">
  BLACK
</span>






</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 mt-20">
  Protocolo de treinamento & protocolo dietético juntos! <span className="text-vf-orange">Tudo em 1!</span>
</h2>


          </div>
          
          <p 
            ref={heroSubtitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-700 text-xl text-gray-300 max-w-3xl mb-10 ${heroSubtitleAnimation.className}`}
          >
            
          </p>
          
          <div 
            ref={heroButtonAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-500 ${heroButtonAnimation.className}`}
          >
            <Button 
  onClick={scrollToPlans}
  className="bg-vf-orange text-white font-extrabold text-2xl md:text-3xl uppercase px-12 py-8 rounded-2xl shadow-[0_0_40px_rgba(255,92,0,0.6)] hover:bg-vf-orange/80 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
>
  QUERO TRANSFORMAR MEU FÍSICO AGORA
</Button>






          </div>
        </section>

        <section id="plans-section" className="mb-24">
  <div className="text-center mt-20 mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
      Tudo o que você precisa em um <span className="text-vf-orange">único plano</span>.
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        icon: "/lovable-uploads/brain.png",
        title: "Protocolo de treinamento estratégico",
      },
      {
        icon: "/lovable-uploads/utensils.png", // substitua se esse nome não existir
        title: "Protocolo dietético exclusivo",
      },
      {
        icon: "/lovable-uploads/heart.png",
        title: "Rotina cardiovascular",
      },
      {
        icon: "/lovable-uploads/batteryfull.png", // substitua se esse nome for diferente
        title: "Descanso inteligente",
      }
    ].map((item, index) => {
      const animation = section2CardAnimations[index];
      return (
        <div
          key={index}
          ref={animation.ref}
          className={`bg-black/40 border border-vf-orange/20 hover:border-vf-orange/70 rounded-lg p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] opacity-0 translate-y-10 ${animation.className}`}
          style={animation.style}
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          </div>
        </div>
      );
    })}
  </div>
</section>

        
        <section className="mb-24 relative">
  {/* Imagem do peão ao fundo — centralizada e maior */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] lg:w-[900px] opacity-35 pointer-events-none select-none z-0">
    <img
      src="/lovable-uploads/peao-sombra2.png" // atualize se necessário
      alt="Peão com sombra"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Texto principal */}
  <div className="text-center mb-10 relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Você recebe um plano <span className="text-vf-orange">completo</span> e <span className="text-vf-orange">personalizado</span>.
    </h2>
    <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
  </div>

  {/* Cards com benefícios */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
    {[
      "Suporte exclusivo via app e WhatsApp",
      "Suporte para dúvidas sobre dieta",
      "Análise física e postural personalizada",
      "Protocolo dietético sem terrorismo nutricional",
      "Protocolo de treino estratégico baseado em ciência",
      "Vídeos reais no app com Vinicius e alunos",
      "Feedbacks e ajustes com acompanhamento periódico",
      "Dieta personalizada com acesso no app",
      "Canal direto com seu treinador e nutri"
    ].map((item, index) => {
      const animation = beneficioAnimations[index];

      return (
        <div
          key={index}
          ref={animation.ref}
          className={`group backdrop-blur-sm bg-black/40 rounded-2xl p-6 transition-all duration-300 hover:bg-black/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-vf-orange/20 border border-vf-orange/10 opacity-0 translate-y-6 ${animation.className} flex items-start gap-4`}
          style={animation.style}
        >
          <div className="text-vf-orange transition-colors group-hover:text-vf-orange">
            <Check size={24} className="flex-shrink-0" />
          </div>
          <p className="text-white text-lg font-medium leading-relaxed tracking-wide">{item}</p>
        </div>
      );
    })}
  </div>
</section>
        
        
      
</div>

<section className="w-screen px-0 mx-0 max-w-none overflow-hidden">
  <ResultsCarousel />
</section>

{/* Reabre o container se for necessário */}
<div className="container mx-auto px-4">






        
        <section className="mb-24">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Por que o Plano Black é <span className="text-vf-orange">diferente</span> de tudo que você já tentou?
    </h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
      Descubra como nossa abordagem única pode transformar seus resultados
    </p>
    <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
  {[
    {
      icon: "/lovable-uploads/trophy.png",
      title: "Tudo em 1: treino + dieta",
      description: "Unificamos treino e alimentação em um único protocolo coordenado.",
    },
    {
      icon: "/lovable-uploads/usercheck.png",
      title: "Personalização extrema",
      description: "Seu plano é 100% adaptado às suas características e objetivos.",
    },
    {
      icon: "/lovable-uploads/MessageCircle.png",
      title: "Suporte real com treinador e nutri",
      description: "Acompanhamento direto com profissionais especializados.",
    },
    {
      icon: "/lovable-uploads/sparkles.png",
      title: "Liberdade sem terrorismo nutricional",
      description: "Dieta flexível que se adapta ao seu estilo de vida.",
    },
    {
      icon: "/lovable-uploads/file.png",
      title: "Estratégia baseada em ciência e prática",
      description: "Metodologia comprovada por resultados e embasamento científico.",
    }
  ].map((item, index) => {
    const animation = diferenciaisAnimations[index];

    return (
      <div
  key={index}
  ref={animation.ref}
  className={`group p-8 bg-black/40 backdrop-blur-sm border border-vf-orange/10 rounded-2xl transition-all duration-300 hover:bg-black/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-vf-orange/20 opacity-0 translate-y-6 text-center flex flex-col items-center ${animation.className}`}
  style={animation.style}
>

        <div className="mb-6 p-4 rounded-xl bg-black/30 inline-block group-hover:scale-110 transition-transform duration-300">
          <img
            src={item.icon}
            alt={item.title}
            className="w-10 h-10 object-contain"
          />
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-vf-orange transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{item.description}</p>
      </div>
    );
  })}
</div>

</section>


        <section id="choose-plan-section" className="mt-16 md:mt-0 mb-16 pt-24 md:pt-8">
   <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para sua jornada</h2>
    <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Invista em você e transforme sua vida
    </p>
  </div>

<div className="flex md:flex-row flex-nowrap md:flex-wrap gap-6 overflow-x-auto md:overflow-visible px-4 md:px-0 mb-12 pb-10 hide-scrollbar">
    {[
      {
        title: "Protocolo Bimestral",
        subtitle: "Acompanhamento por 60 dias",
        price: "R$ 639,80 à vista",
        image: "/lovable-uploads/bimestral2.jpg",
        benefits: [
          "Protocolo de treinamento & dietético",
          "Acompanhamento por 60 dias",
          "App exclusivo com vídeos",
          "Suporte com contato para dúvidas"
        ],
        ctaText: "Quero esse plano",
        badge: {
          text: "MELHOR CUSTO-BENEFÍCIO",
          type: "economic"
        }
      },
      {
        title: "Protocolo Semestral",
        subtitle: "Acompanhamento por 180 dias",
        price: "R$ 1.596,00 à vista",
        installments: "6x R$ 305,90 no cartão",
        image: "/lovable-uploads/semestral2.jpg",
        benefits: [
          "3 protocolos de treinamento & dietético completos",
          "Acompanhamento total por 180 dias",
          "App exclusivo com vídeos",
          "Suporte com contato para dúvidas"
        ],
        ctaText: "Começar agora",
        badge: {
          text: "MAIS ESCOLHIDO",
          type: "popular"
        },
        isPopular: true
      },
      {
        title: "Protocolo Anual",
        subtitle: "Acompanhamento por 365 dias",
        price: "R$ 2.876,00 à vista",
        installments: "12x R$ 287,60 no cartão",
        image: "/lovable-uploads/anual2.jpg",
        benefits: [
          "6 protocolos de treinamento & dietético completos",
          "Acompanhamento total por 365 dias",
          "App exclusivo com vídeos",
          "Suporte com contato para dúvidas"
        ],
        ctaText: "Garantir minha vaga",
        badge: {
          text: "ACESSO MAIS COMPLETO",
          type: "premium"
        }
      }
    ].map((plan, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[320px] md:w-full md:max-w-[440px]"
      >
        <PlanCard {...plan} />
      </div>
    ))}
  </div>

</section>



        <section className="mb-24">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
    <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
  </div>

  <div className="max-w-3xl mx-auto">
    <Accordion type="single" collapsible className="w-full space-y-4">
      {[
        { 
          question: "Em quanto tempo vejo resultado?", 
          answer: "Os resultados iniciais já podem ser notados nas primeiras 2-3 semanas, com mudanças significativas em 60-90 dias para quem segue o plano corretamente. Cada organismo responde em seu tempo, mas garantimos transformações reais e duradouras." 
        },
        { 
          question: "A dieta é muito restritiva?", 
          answer: "Não. Trabalhamos com um protocolo dietético flexível e sustentável, sem terrorismo nutricional. Nosso objetivo é que você construa uma relação saudável com a comida, sem frustrações e com resultados que duram." 
        },
        { 
          question: "Posso parcelar o pagamento?", 
          answer: "Sim, oferecemos opções de parcelamento em até 12x no cartão de crédito. Também aceitamos PIX para pagamento à vista com desconto especial." 
        },
        { 
          question: "Como funciona o suporte com a nutricionista?", 
          answer: "Você terá acesso a consultas online com nossa nutricionista para tirar dúvidas, receber ajustes no plano alimentar e acompanhamento personalizado conforme sua evolução." 
        },
        { 
          question: "É necessário academia?", 
          answer: "O protocolo é desenhado para ser realizado em academia, mas podemos adaptar para treinos em casa com equipamentos básicos se necessário. O ideal é ter acesso a uma estrutura com pesos para melhores resultados." 
        },
        { 
          question: "O app funciona em Android e iOS?", 
          answer: "Sim, nosso aplicativo é compatível com ambos os sistemas operacionais, permitindo que você acompanhe seu plano, vídeos e evolução de qualquer smartphone." 
        }
      ].map((item, index) => {
        const animation = faqAnimations[index];

        return (
          <div
            key={index}
            ref={animation.ref}
            className={`opacity-0 translate-y-6 transition-all duration-500 ${animation.className}`}
            style={animation.style}
          >
            <AccordionItem 
              value={`item-${index}`} 
              className="group border border-vf-orange/20 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/40"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:text-vf-orange transition-colors">
                <span className="text-left font-medium text-lg">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300 leading-relaxed tracking-wide">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        );
      })}
    </Accordion>
  </div>
</section>

        
        
      </div>
      <Footer />
        
        <WhatsAppButton phoneNumber="5511999999999" />
    </div>
  );
};

export default PlanoBlack;
