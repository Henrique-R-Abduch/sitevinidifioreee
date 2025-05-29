import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-black/95 to-vf-orange/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-vf-orange mb-6 text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8">✅ Você vai ter:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                <CheckCircle className="text-vf-orange mt-1 flex-shrink-0" />
                <p className="text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-light italic text-gray-300">
            "Na dúvida, faça mais força!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Análise completa do físico",
    description: "Identificação de pontos fracos e construção de um físico harmônico e evoluído.",
    icon: <span className="text-3xl">🔍</span>,
  },
  {
    title: "Análise postural",
    description: "Correção de desvios, desenvolvimento equilibrado e eliminação de dores.",
    icon: <span className="text-3xl">⚖️</span>,
  },
  {
    title: "Treinos personalizados",
    description: "Protocolos baseados na sua rotina semanal, criados para seu objetivo físico.",
    icon: <span className="text-3xl">📈</span>,
  },
  {
    title: "Estratégias avançadas",
    description: "Técnicas e métodos avançados embasados na ciência do fitness.",
    icon: <span className="text-3xl">🔬</span>,
  },
  {
    title: "Suporte direto",
    description: "Acompanhamento pelo app de treinamento e também via WhatsApp.",
    icon: <span className="text-3xl">💬</span>,
  },
  {
    title: "Acompanhamento periódico",
    description: "Evolução com comparações, feedbacks e reajustes de rota quando necessário.",
    icon: <span className="text-3xl">🔄</span>,
  },
];

const benefits = [
  "Um app exclusivo com vídeos gravados por mim ou por meus alunos mostrando execuções de exercícios com qualidade máxima. Nada terceirizado. Nada copiado.",
  "Suporte direto comigo pelo app de treinamento e também via WhatsApp.",
  "Análise completa do seu físico, focada em identificar seus pontos fracos e construir um físico mais harmônico e evoluído.",
  "Análise postural para correção de desvios, desenvolvimento equilibrado e eliminação de dores causadas por má postura.",
  "Protocolos de treino personalizados, baseados na sua rotina semanal, criados especialmente para o seu objetivo físico.",
  "Acompanhamento periódico da sua evolução, com comparações, feedbacks e reajustes de rota.",
  "Estratégias de treino com técnicas e métodos avançados, embasados na ciência do fitness e no que há de mais moderno no mundo do fisiculturismo.",
  "Protocolos adaptados dos campeões e campeãs do fisiculturismo, pensados para o público geral alcançar resultados reais.",
];

export default ServicesSection;
