import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BenefitCard {
  icon: string; // agora é uma string (URL do ícone)
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: "/lovable-uploads/Smartphone.png",
    title: "App exclusivo",
    description: "Vídeos feitos pelo próprio treinador ou seus alunos (nada copiado, nada genérico)"
  },
  {
    icon: "/lovable-uploads/user.png",
    title: "Análise física completa",
    description: "Avaliação completa do seu físico para identificar pontos fracos e criar um plano personalizado"
  },
  {
    icon: "/lovable-uploads/activity.png",
    title: "Avaliação postural",
    description: "Análise minuciosa para corrigir pontos fracos e criar um físico mais harmônico"
  },
  {
    icon: "/lovable-uploads/calendar.png",
    title: "Acompanhamento periódico",
    description: "Evolução com feedbacks e ajustes estratégicos necessários"
  },
  {
    icon: "/lovable-uploads/file.png",
    title: "Protocolos personalizados",
    description: "Criados com base em ciência do fitness e nas suas necessidades"
  },
  {
    icon: "/lovable-uploads/award.png",
    title: "Técnicas profissionais",
    description: "Métodos utilizados por campeões do fisiculturismo adaptados para você"
  },
  {
    icon: "/lovable-uploads/MessageCircle.png",
    title: "Suporte direto",
    description: "Acesso via app e WhatsApp com o treinador"
  },
  {
    icon: "/lovable-uploads/brain.png",
    title: "Mentalidade vencedora",
    description: "Desenvolvimento de disciplina e foco para resultados consistentes"
  },
  {
    icon: "/lovable-uploads/medal.png",
    title: "Resultados comprovados",
    description: "Sistema com base científica, testado e aprovado por centenas de alunos"
  }
];

const BenefitsGrid = () => {
  return (
    <section className="py-20 relative">
      {/* Fundo com padrão sutil */}
      <div
        className="absolute inset-0 bg-black opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232323' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '12px 12px',
        }}
      />

      {/* Glow laranja no canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-vf-orange opacity-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6 text-center w-full">
            <img
              src="/lovable-uploads/terror2.png"
              alt="Fundo decorativo"
              className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] lg:w-[600px] opacity-30 pointer-events-none"
              style={{ zIndex: -1 }}
            />
            <h2 className="relative text-4xl md:text-5xl font-bold z-10">
              O que você vai <span className="text-vf-orange">receber</span>
            </h2>
          </div>
          <div className="h-1 w-20 bg-vf-orange mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo o que você precisa para transformar seu físico
          </p>
        </div>

        {/* Grid dos benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const cardAnimation = useScrollAnimation<HTMLDivElement>(
              'opacity-100 translate-y-0',
              0.1,
              { delay: index * 100 }
            );

            return (
              <div
                key={index}
                ref={cardAnimation.ref}
                className={`group backdrop-blur-sm bg-black/30 border border-vf-orange/20 rounded-xl p-8 transition-all duration-300 hover:bg-black/40 hover:scale-[1.02] hover:shadow-lg hover:shadow-vf-orange/20 opacity-0 translate-y-6 ${cardAnimation.className}`}
                style={cardAnimation.style}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-12 h-12 mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
