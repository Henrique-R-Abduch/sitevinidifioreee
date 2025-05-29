import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Award, Dumbbell, Heart, Book } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Footer from '@/components/Footer';
import { Check, Flame } from 'lucide-react';

const ProtocoloStarter: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });
  
  const benefitsAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1);
  const featureAnimation1 = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 100 });
  const featureAnimation2 = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const featureAnimation3 = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 300 });
  
  const ctaAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1);

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

  const scrollToPlans = () => {
    const plansSection = document.getElementById('cta-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a] text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-vf-orange/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-vf-orange/3"></div>
        <div className="absolute bottom-0 right-0 w-1/3 pointer-events-none opacity-[0.15] z-0">
          <img 
            src="/lovable-uploads/5985b592-6447-4b8e-9bed-60a897b12f65.png" 
            alt="" 
            className="w-full"
          />
        </div>
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
                src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
                alt="Vinicius Di Fiore" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
              />
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 pt-28">
      <section className="h-screen flex flex-col justify-center items-center text-center relative">

  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <div {...heroTitleAnimation}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-tighter">
          PROTOCOLO <span className="text-vf-orange">START</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Combo emagrecimento do <span className="text-vf-orange">0 a 100%</span>
        </h2>
      </div>

      <p
        {...heroSubtitleAnimation}
        className="text-xl md:text-2xl text-vf-orange font-bold max-w-3xl mx-auto mb-12"
      >
        "Conquiste uma mudança brutal com um protocolo de treinamento de 35 minutos por dia e realizando uma reeducação alimentar"
      </p>

      <div {...heroButtonAnimation} className="flex justify-center mb-20">
        <Button
          onClick={scrollToPlans}
          className="btn-primary orange-glow text-xl px-8 py-7 h-auto font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          QUERO COMEÇAR MINHA TRANSFORMAÇÃO
          <ArrowRight className="ml-2" />
        </Button>
      </div>

      {/* 🔻 Novo conteúdo inserido abaixo do botão */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Oferecemos a você um <span className="text-vf-orange">START</span> na sua vida!
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Um protocolo de treinamento e dietético para você sair do 0 e começar a sua jornada fitness de uma vez!!
        </p>
        <div className="border-l-4 border-vf-orange pl-6 py-2 max-w-3xl mx-auto">
          <p className="text-lg italic text-gray-300">
            "Você vai começar a entender o que significa treinamento e uma melhor alimentação. Neste combo te oferecemos sua autoestima de volta, melhora dos seus hábitos, evolução física e um START na sua nova vida."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Protocolo <span className="text-vf-orange">Start</span> é a sua porta de entrada
              </h2>
              <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  icon: <Dumbbell size={32} className="text-vf-orange" />, 
                  title: "Treinos simples e eficazes", 
                  description: "Apenas 35 minutos por dia para transformar seu corpo." 
                },
                { 
                  icon: <Heart size={32} className="text-vf-orange" />, 
                  title: "Reeducação alimentar", 
                  description: "Aprenda a se alimentar melhor sem dietas restritivas ou complicadas." 
                },
                { 
                  icon: <Book size={32} className="text-vf-orange" />, 
                  title: "eBook exclusivo", 
                  description: "Material completo de introdução ao treinamento." 
                },
                { 
                  icon: <MessageCircle size={32} className="text-vf-orange" />, 
                  title: "Suporte direto no WhatsApp", 
                  description: "Tire dúvidas diretamente com nossa equipe via WhatsApp, com atenção e agilidade." 
                },
                { 
                  icon: <Award size={32} className="text-vf-orange" />, 
                  title: "Desenvolva sua autonomia", 
                  description: "Aprenda a treinar e se alimentar com independência, sem precisar de academia ou consultorias caras." 
                }
              ].map((item, index) => {
                const featureAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 150 * index });
                
                return (
                  <div 
                    key={index}
                    ref={featureAnimation.ref}
                    className={`group p-8 bg-black/40 backdrop-blur-sm border border-vf-orange/10 rounded-2xl transition-all duration-300 hover:bg-black/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-vf-orange/20 opacity-0 translate-y-6 ${featureAnimation.className}`}
                    style={featureAnimation.style}
                  >
                    <div className="mb-6 p-4 rounded-xl bg-black/30 inline-block group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-vf-orange transition-colors">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados <span className="text-vf-orange">reais</span> de quem seguiu o plano.
            </h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[...Array(3)].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="bg-black/40 border border-vf-orange/20 rounded-xl overflow-hidden shadow-lg shadow-vf-orange/10">
                    <div className="h-[500px] w-full flex flex-row flex-wrap md:flex-nowrap">

                        <div className="flex-1 bg-gray-800 flex items-center justify-center p-4">
                          <div className="text-center">
                            <h3 className="text-xl mb-2">Antes</h3>
                            <div className="border-2 border-vf-orange/30 w-full h-[300px] flex items-center justify-center text-gray-500">
                              Foto "Antes"
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 bg-black flex items-center justify-center p-4">
                          <div className="text-center">
                            <h3 className="text-xl mb-2">Depois</h3>
                            <div className="border-2 border-vf-orange/30 w-full h-[300px] flex items-center justify-center text-gray-500">
                              Foto "Depois"
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12 bg-black border-vf-orange/40 hover:bg-vf-orange/20" />
            <CarouselNext className="right-0 lg:-right-12 bg-black border-vf-orange/40 hover:bg-vf-orange/20" />
          </Carousel>
          
          <p className="text-center text-gray-400 mt-6 italic max-w-3xl mx-auto">
            Essas transformações são de pessoas como você, que começaram com o protocolo Starter.
          </p>
        </section>

        <section id="cta-section" className="py-20 bg-gradient-to-b from-black/90 via-black to-vf-orange/10">
          <div className="container mx-auto px-6">
            <div 
              {...ctaAnimation}
              className="max-w-2xl mx-auto text-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] backdrop-blur-sm border border-vf-orange/40 rounded-[32px] p-8 md:p-12 shadow-2xl hover:shadow-vf-orange/5 transition-all duration-300"
            >
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full border-2 border-vf-orange flex items-center justify-center">
                  <Check className="w-8 h-8 text-vf-orange" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
                COMECE SUA<br />
                TRANSFORMAÇÃO<br />
                COM O <span className="text-vf-orange">START!</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 font-light mb-8">
                Treinamento + eBook exclusivo<br />
                por apenas
              </p>
              
              <div className="space-y-2 mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-vf-orange">R$ 97,00</span>
                  <span className="text-xl text-white">à vista</span>
                </div>
                <p className="text-gray-400 text-lg">ou 12x de R$ 9,90</p>
              </div>
              
              <Link 
  to="/checkout"
  className="inline-flex items-center justify-center w-full bg-vf-orange text-white px-8 py-4 rounded-full font-bold text-xl gap-2 shadow-lg shadow-vf-orange/20 hover:bg-vf-orange/90 hover:shadow-vf-orange/30 transition-all duration-300 group"
>
  <Flame className="w-6 h-6" />
  VAMOS COMEÇAR AGORA
  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
</Link>

              
              <p className="mt-6 text-sm text-gray-400 font-light">
                Você será redirecionado ao WhatsApp para concluir sua inscrição.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { 
                    question: "Quanto tempo levo para ver resultados?", 
                    answer: "Com dedicação ao protocolo, você já começa a notar mudanças nas primeiras semanas. Resultados mais expressivos são visíveis a partir de 4-6 semanas seguindo o programa corretamente." 
                  },
                  { 
                    question: "Preciso ter experiência prévia?", 
                    answer: "Não! O Protocolo Starter foi desenvolvido especialmente para iniciantes. Todos os exercícios são explicados em detalhes e você terá suporte completo." 
                  },
                  { 
                    question: "Como funciona a reeducação alimentar?", 
                    answer: "Trabalhamos com um protocolo simples e flexível, sem dietas restritivas. Você aprenderá a fazer melhores escolhas alimentares mantendo o prazer de comer." 
                  },
                  { 
                    question: "Preciso ir à academia?", 
                    answer: "O protocolo pode ser adaptado para treinos em casa com equipamentos básicos, mas recomendamos academia para melhores resultados." 
                  },
                  { 
                    question: "O protocolo é só para quem quer emagrecer?", 
                    answer: "Não! Ele também serve como base para quem deseja ganhar condicionamento, melhorar saúde e iniciar uma nova rotina." 
                  },
                  { 
                    question: "Como faço para começar?", 
                    answer: "Após a compra, você receberá acesso imediato a todo o material digital, incluindo o eBook e orientações iniciais. Nosso suporte entrará em contato para as próximas etapas." 
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
          </div>
        </section>

        <Footer />
        
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default ProtocoloStarter;
