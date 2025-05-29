
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            RESULTADOS <span className="text-vf-orange">REAIS</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            O que dizem as pessoas que já transformaram seus corpos com o meu protocolo de treinamento:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black p-6 rounded-lg border border-vf-orange shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-vf-orange fill-vf-orange" size={18} />
                ))}
              </div>
              <p className="mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-vf-orange rounded-full flex items-center justify-center text-vf-black font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <blockquote className="quote text-2xl">
            "É você contra você"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Rafael Silva",
    location: "São Paulo, SP",
    text: "Após meses de estagnação, o protocolo do Vinicius me fez quebrar barreiras que eu nem imaginava. Em 3 meses meu corpo mudou completamente!"
  },
  {
    name: "Carla Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Acredita, vamo! Foi isso que ouvi quando achei que não conseguiria mais. Hoje estou 12kg mais leve e com uma disposição incrível."
  },
  {
    name: "Marcelo Oliveira",
    location: "Curitiba, PR",
    text: "O diferencial é a análise postural. Minhas dores nas costas acabaram e meus treinos renderam muito mais. Vale cada centavo investido."
  },
  {
    name: "Aline Costa",
    location: "Belo Horizonte, MG",
    text: "Você não quer ficar uma monstra? Foi essa frase que me motivou! Hoje uso meu biquíni favorito com muito mais confiança e autoestima."
  },
  {
    name: "Bruno Fernandes",
    location: "Brasília, DF",
    text: "A hora do pesadelo é agora e o sorriso depois. Essa mentalidade mudou minha forma de treinar e os resultados apareceram rapidamente."
  },
  {
    name: "Juliana Santos",
    location: "Salvador, BA",
    text: "Os protocolos são realmente exclusivos. Cada treino é pensado nas minhas necessidades e limitações. Me sinto cuidada e os resultados são visíveis."
  }
];

export default TestimonialsSection;
