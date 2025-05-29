import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MayraSection: React.FC = () => {
  const photoAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 transform translate-x-0 transition-all duration-1000');
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>('opacity-100 transform translate-x-0 transition-all duration-1000');
  
  return (
    <section id="mayra" className="py-20 bg-gradient-to-b from-white/10 to-black relative">
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-80"></div>
      
      <div className="w-full max-w-screen-lg px-4 sm:px-6 mx-auto relative z-10 overflow-hidden">

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div 
  ref={photoAnimation.ref} 
  className={`w-full md:w-2/5 opacity-0 transform md:translate-x-8 translate-x-0 mx-auto ${photoAnimation.className}`}
>

  <div className="relative w-full max-w-[420px] mx-auto">
    <img 
      src="/lovable-uploads/4701071d-6e71-4a25-9cb0-dc4442536325.png" 
      alt="Mayra Gotsfridt" 
      className="rounded-lg shadow-2xl border border-vf-orange/30 w-full h-auto object-cover"
    />
  </div>
</div>

          
          <div 
            ref={titleAnimation.ref} 
            className={`md:w-3/5 opacity-0 transform -translate-x-8 ${titleAnimation.className}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight uppercase text-center md:text-left">

              Quem é <span className="text-vf-orange">Mayra Gotsfridt</span>?
            </h2>
            
            <div className="space-y-6 mb-8 text-center md:text-left">

              <p className="text-lg">
                Sou nutricionista formada pela Universidade Anhembi Morumbi e apaixonada por transformar vidas por meio da nutrição individualizada e com propósito.
              </p>
              
              <p className="text-lg">
                Me especializei em Nutrigenética e Imunonutrição pelo Hospital Oswaldo Cruz, buscando entender como a genética influencia diretamente nossas escolhas alimentares e nosso bem-estar. Também sou pós-graduada em Nutrição Esportiva pela Universidade Uniguaçu, o que me permite atuar com foco em performance, composição corporal e saúde metabólica.
              </p>
              
              <p className="text-lg">
                Além disso, me aprofundei em diversos cursos voltados à saúde da mulher, atuando com ênfase em equilíbrio hormonal, ciclo menstrual, emagrecimento consciente e qualidade de vida.
              </p>
              
              <p className="text-xl font-bold text-vf-orange">
                "A nutrição vai muito além de números na balança — ela é sobre autoconhecimento, constância e acolhimento." 💪
              </p>
              
              <p className="text-lg">
                Estou aqui pra te ajudar a construir uma relação saudável com a comida e com o seu corpo, respeitando a sua rotina, sua história e seus objetivos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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
                    <item.icon className="text-vf-orange" size={32} />
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
    description: "Nutrição (Anhembi Morumbi), Pós em Nutrigenética e Nutrição Esportiva",
    icon: GraduationCap
  },
  {
    title: "Especializações",
    description: "Saúde da Mulher, Equilíbrio Hormonal e Performance",
    icon: Award
  }
];

export default MayraSection;
