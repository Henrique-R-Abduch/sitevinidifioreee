import React from 'react';
import { ArrowRight, Brain, Activity, CheckCircle, Zap, UserCheck, Video, MessageCircle, FileText, Award, Check, Puzzle, Medal, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import TrainingBackground from '@/components/TrainingBackground';
import { useEffect, useState } from 'react';
import ResultsCarousel from '@/components/carrossel2';
import PlanCard from '@/components/PlanCard';
import BenefitsGrid from '@/components/BenefitsGrid';

const ProtocoloTreinamento: React.FC = () => {
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });

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
        <TrainingBackground />

      </div>

      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10">

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


        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-20 mt-8">
          <div 
            ref={heroTitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-1000 ${heroTitleAnimation.className}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-tighter">
  PROTOCOLO <span className="text-vf-orange">PREMIUM</span>
</h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Transforme seu físico com o <span className="text-vf-orange">acompanhamento pessoal</span> do treinador
            </h2>
          </div>
          
          <p 
            ref={heroSubtitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-700 text-xl text-gray-300 max-w-3xl mb-6 ${heroSubtitleAnimation.className}`}
          >
            <span className="text-vf-orange italic font-medium">"A hora do pesadelo é agora e sorriso depois"</span>
          </p>
          
          <div 
  ref={heroButtonAnimation.ref}
  className={`opacity-0 translate-y-8 transition-all duration-500 ${heroButtonAnimation.className}`}
>
  <Button 
    onClick={scrollToPlans}
    className="bg-vf-orange text-white font-extrabold text-2xl md:text-3xl uppercase px-12 py-8 rounded-2xl shadow-[0_0_40px_rgba(255,92,0,0.6)] hover:bg-vf-orange/80 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110"
  >
    QUERO EVOLUIR AGORA
  </Button>




          </div>
        </section>

        {/* Seção 1 - Você precisa disso se... */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você <span className="text-vf-orange">precisa</span> disso se...
            </h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    {
      icon: "/lovable-uploads/activity.png",
      title: "Está estagnado nos treinos há meses",
    },
    {
      icon: "/lovable-uploads/brain.png",
      title: "Não consegue construir um físico proporcional",
    },
    {
      icon: "/lovable-uploads/checkcircle.png", // use o nome correto caso seja diferente
      title: "Sente dores ou sobrecarga ao treinar",
    },
    {
      icon: "/lovable-uploads/zap.png", // substituindo o Zap
      title: "Sabe que pode mais, mas falta direção",
    },
  ].map((item, index) => {
    const cardAnimation = useScrollAnimation<HTMLDivElement>(
      'opacity-100 translate-y-0',
      0.1,
      { delay: 200 * index }
    );

    return (
      <div
        key={index}
        ref={cardAnimation.ref}
        className={`bg-black/40 border border-vf-orange/20 hover:border-vf-orange/70 rounded-lg p-6 text-center transition-all duration-300 transform opacity-0 translate-y-10 ${cardAnimation.className}`}
        style={cardAnimation.style}
      >
        <div className="mb-4 flex justify-center">
          <img
            src={item.icon}
            alt={item.title}
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      </div>
    );
  })}
</div>

        </section>
        
        {/* Seção 2 - O que você vai receber */}
        <BenefitsGrid />
        
        </div>

<section className="w-screen px-0 mx-0 max-w-none overflow-hidden">
  <ResultsCarousel />
</section>

{/* Reabre o container se for necessário */}
<div className="container mx-auto px-4">

        
        {/* Seção 4 - Por que é diferente de tudo */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que é <span className="text-vf-orange relative inline-block">
                diferenciado
                
              </span> 
            </h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
         <div className="max-w-4xl mx-auto space-y-6 px-4">
  {[
    {
      icon: "/lovable-uploads/puzzle.png",
      title: "Nada genérico, tudo personalizado",
      description: "Cada detalhe é pensado exclusivamente para o seu biotipo e objetivos"
    },
    {
      icon: "/lovable-uploads/video.png",
      title: "Vídeos de execução perfeitos",
      description: "Orientações práticas e detalhadas que mostram exatamente como realizar cada exercício"
    },
    {
      icon: "/lovable-uploads/MessageCircle.png",
      title: "Suporte direto com o treinador",
      description: "Tire suas dúvidas e receba feedbacks diretamente com quem criou seu programa"
    },
    {
      icon: "/lovable-uploads/file.png",
      title: "Baseado em ciência e experiência",
      description: "Métodos testados e aprovados por atletas profissionais de alta performance"
    },
    {
      icon: "/lovable-uploads/medal.png",
      title: "Foco total no seu resultado",
      description: "Sistema completo para maximizar seus ganhos e superar seus limites"
    },
    {
      icon: "/lovable-uploads/target.png",
      title: "Método profissional adaptado",
      description: "Técnicas do fisiculturismo competitivo ajustadas para o seu nível atual"
    }
  ].map((item, index) => {
    const differentialAnimation = useScrollAnimation<HTMLDivElement>(
      'opacity-100 translate-y-0',
      0.1,
      { delay: 150 * index }
    );

    return (
      <div
        key={index}
        ref={differentialAnimation.ref}
        className={`group p-6 bg-black/40 backdrop-blur-sm border border-vf-orange/10 rounded-xl transition-all duration-300 hover:bg-black/60 hover:shadow-lg hover:shadow-vf-orange/10 opacity-0 translate-y-6 ${differentialAnimation.className}`}
        style={differentialAnimation.style}
      >
        <div className="flex items-start gap-6">
          <div className="p-3 rounded-xl bg-black/30 inline-block group-hover:scale-110 transition-transform duration-300">
            <img src={item.icon} alt={item.title} className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-vf-orange transition-colors">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    );
  })}
</div>

        </section>

        {/* Seção 5 - Adquira o acesso */}
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

        {/* Seção FAQ */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  question: "Isso serve para quem já treina?", 
                  answer: "Sim! O protocolo é adaptado para todos os níveis, desde iniciantes até atletas avançados. O treinamento é personalizado para seu nível atual e objetivos específicos." 
                },
                { 
                  question: "Preciso ter academia?", 
                  answer: "Idealmente sim. O protocolo é desenhado para ser executado em academia, mas podemos adaptar para treinos em casa caso você possua alguns equipamentos básicos." 
                },
                { 
                  question: "Vou ter acesso direto ao treinador?", 
                  answer: "Com certeza! Você terá acesso direto ao treinador via app e WhatsApp para dúvidas, ajustes e feedbacks sobre sua evolução." 
                },
                { 
                  question: "O app funciona em Android e iOS?", 
                  answer: "Sim, nosso aplicativo é compatível com ambos os sistemas operacionais, permitindo que você acompanhe seu plano de qualquer smartphone." 
                },
                { 
                  question: "O plano tem acompanhamento?", 
                  answer: "Sim, todos os planos incluem acompanhamento personalizado. O tempo de acompanhamento varia conforme o plano escolhido: 60 dias para o Bimestral, 180 dias para o Semestral e 365 dias para o Anual." 
                }
              ].map((item, index) => {
                const faqAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 100 * index });
                
                return (
                  <div 
                    key={index}
                    ref={faqAnimation.ref}
                    className={`opacity-0 translate-y-6 ${faqAnimation.className}`}
                    style={faqAnimation.style}
                  >
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="group border border-vf-orange/20 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/40"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:text-vf-orange transition-colors">
                        <span className="text-left">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-gray-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </section>
        
        
        
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
      <Footer />
    </div>
  );
};

export default ProtocoloTreinamento;
