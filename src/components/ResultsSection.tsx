import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ResultsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : 4;
  const slideWidthPercent = 100 / slidesToShow;

  const extendedList = [...transformations, ...transformations, ...transformations];

  // Loop infinito real com scroll automático
  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const scrollSpeed = 0.5;
  let animationFrame: number;

  const animate = () => {
    container.scrollLeft += scrollSpeed;

    // Se chegou perto do fim, reinicia
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }

    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrame);
}, []);


  // Swipe logic
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      const container = containerRef.current;
      if (!container) return;
      container.scrollBy({ left: diff < 0 ? 300 : -300, behavior: 'smooth' });
    }

    touchStartX.current = null;
  };

  const titleAnimation = useScrollAnimation<HTMLHeadingElement>('animate-fade-in', 0.1, { delay: 200, noInitialHidden: true });
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>('animate-fade-in', 0.1, { delay: 300, noInitialHidden: true });
  const carouselAnimation = useScrollAnimation<HTMLDivElement>('animate-fade-in', 0.1, { delay: 400, noInitialHidden: true });
  const ctaButtonAnimation = useScrollAnimation<HTMLDivElement>('animate-fade-in', 0.1, { noInitialHidden: true });

  return (
    <section id="resultados" className="py-20 relative overflow-visible">
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="max-w-none w-full relative z-10 px-0">
        <div className="text-center mb-12">
          <h2 ref={titleAnimation.ref} className={`section-title mx-auto ${titleAnimation.className}`} style={titleAnimation.style}>
            Resultados <span className="text-vf-orange">Reais</span>
          </h2>
          <p ref={subtitleAnimation.ref} className={`text-xl max-w-3xl mx-auto text-gray-300 ${subtitleAnimation.className}`} style={subtitleAnimation.style}>
            Transformações que falam por si
          </p>
        </div>

        <div ref={carouselAnimation.ref} className={`mb-10 relative z-10 ${carouselAnimation.className}`} style={carouselAnimation.style}>
          <Carousel className="w-full overflow-hidden" ref={carouselRef}>
            <CarouselContent
  ref={containerRef}
  className={`flex ${isMobile ? 'gap-0 px-0' : 'gap-4 px-2'} overflow-x-scroll scroll-smooth no-scrollbar whitespace-nowrap hide-scrollbar`}
  data-carousel-content
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
  {extendedList.map((item, index) => (
    <CarouselItem
      key={index}
      className={`inline-block transition-transform duration-300 ${isMobile ? '!pl-0' : ''}`}

      style={{
  flex: isMobile ? '0 0 auto' : `0 0 ${slideWidthPercent}%`,
  width: isMobile ? '260px' : 'auto'
}}

    >
      <div className="w-full flex justify-center items-center bg-black">
        <img
          src={item.image}
          alt={`Antes e depois ${index}`}
          className={`w-full ${isMobile ? 'h-[300px] rounded-none' : 'h-[500px] rounded-lg'} object-contain transition-transform duration-300`}

        />
      </div>
    </CarouselItem>
  ))}
</CarouselContent>

            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <div ref={ctaButtonAnimation.ref} className={ctaButtonAnimation.className} style={ctaButtonAnimation.style}>
            <Button
              onClick={() => scrollToSection('planos')}
              className="bg-vf-orange text-white font-extrabold text-2xl md:text-3xl uppercase px-12 py-8 rounded-2xl shadow-[0_0_40px_rgba(255,92,0,0.6)] hover:bg-vf-orange/80 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
              >
              Quero começar minha transformação
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const transformations = [
  { id: 1, image: "/lovable-uploads/1.png" },
  { id: 2, image: "/lovable-uploads/2.png" },
  { id: 3, image: "/lovable-uploads/3.png" },
  { id: 4, image: "/lovable-uploads/4.png" },
];

export default ResultsSection;