
import React from 'react';
import { 
  Smartphone, MessageCircle, User, Pill, 
  Settings, TrendingUp, FlaskRound, Trophy, 
  Brain, Activity, ScrollText, Medal
} from 'lucide-react';

const MethodSection: React.FC = () => {
  return (
    <section id="metodo" className="py-20 relative overflow-hidden">
      {/* Dark Textured Background with Carbon Fiber-like Pattern */}
      <div className="absolute inset-0 bg-black opacity-80" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232323' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '12px 12px',
        }}
      ></div>
      
      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vf-orange/20 to-transparent"></div>
      
      {/* Background Orange Glow */}
      <div className="absolute -bottom-1/2 right-0 w-[500px] h-[500px] bg-vf-orange opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationFillMode: 'forwards' }}>
          <h2 className="section-title mx-auto">
            Protocolo de Treinamento <span className="text-vf-orange">Exclusivo</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Não é sobre treinar mais. É sobre treinar <span className="text-vf-orange font-bold">certo</span>.
          </p>
        </div>
        
        {/* Method Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:shadow-lg border border-vf-orange/20 shadow-lg shadow-vf-orange/5 opacity-0 transform translate-y-8 animate-fade-in"
              style={{ animationDelay: `${200 + index * 150}ms`, animationDuration: '600ms', animationFillMode: 'forwards' }}
            >
              <div className="text-vf-orange mb-6 text-4xl flex justify-center items-center h-16">
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="h-12 w-12 object-contain opacity-90"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">{pillar.title}</h3>
              <p className="text-gray-300 text-center">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <h3 className="text-3xl font-bold mb-8">
            Tudo o que você recebe com minha consultoria
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group opacity-0 translate-y-8 transition-all duration-700 ease-out backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-vf-orange/20 border border-vf-orange/20"
              style={{
                animation: 'fade-in 0.5s forwards',
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-start gap-6">
                <div className="text-vf-orange transition-colors group-hover:text-vf-orange/80">
                  {typeof benefit.icon === 'string' ? (
  <img 
    src={benefit.icon} 
    alt={benefit.title} 
    className="h-10 w-10 object-contain opacity-90 flex-shrink-0" 
  />
) : (
  <benefit.icon size={40} className="text-vf-orange opacity-90 flex-shrink-0" />
)}

                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-20 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>

          <blockquote className="text-2xl font-light italic text-gray-300">
            "Na dúvida, faça mais força!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const pillars = [
  {
    title: "Personalização",
    description: "Identificação de pontos fracos e construção de um físico harmônico, adaptado às suas necessidades específicas.",
    icon: "/lovable-uploads/user.png",
  },
  {
    title: "Mentalidade",
    description: "Desenvolvimento de disciplina e consistência, transformando o treinamento em um hábito prazeroso e produtivo.",
    icon: "/lovable-uploads/Settings.png",
  },
  {
    title: "Evolução Constante",
    description: "Protocolos periodizados com progressão científica para garantir resultados contínuos e sustentáveis.",
    icon: "/lovable-uploads/TrendingUp.png",
  },
];


const benefits = [
  {
    title: "Acesso exclusivo ao meu app de treinos",
    description: "Vídeos gravados por mim ou meus alunos com execução perfeita dos exercícios. Nada terceirizado. Nada copiado.",
    icon: "/lovable-uploads/Smartphone.png"
  },
  {
    title: "Suporte direto comigo",
    description: "Atendimento pessoal pelo app de treinos e também via WhatsApp, sem intermediários.",
    icon: "/lovable-uploads/MessageCircle.png"
  },
  {
    title: "Análise física completa",
    description: "Avaliação do seu físico para identificar pontos fracos e montar um plano de evolução harmônica.",
    icon: "/lovable-uploads/user2.png"
  },
  {
    title: "Correção postural e reequilíbrio corporal",
    description: "Análise postural focada em corrigir desvios e aliviar dores causadas por má postura.",
    icon: "/lovable-uploads/activity.png"
  },
  {
    title: "Treino 100% personalizado",
    description: "Protocolos adaptados à sua rotina semanal e ao seu objetivo específico, criados do zero.",
    icon: "/lovable-uploads/brain.png"
  },
  {
    title: "Acompanhamento de evolução",
    description: "Feedbacks e comparações constantes para ajustar o plano e manter sua evolução constante.",
    icon: "/lovable-uploads/TrendingUp3.png"
  },
  {
    title: "Estratégias baseadas em ciência e prática",
    description: "Técnicas modernas do fisiculturismo, aplicadas com lógica, estudo e adaptação individual.",
    icon: "/lovable-uploads/flask.png"
  },
  {
    title: "Protocolos adaptados de campeões",
    description: "Modelos e práticas usados por atletas adaptados para pessoas comuns que querem resultados reais.",
    icon: "/lovable-uploads/medal.png"
  }
];

export default MethodSection;
