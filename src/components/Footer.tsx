
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-16 w-full border-t border-vf-orange relative">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <img 
            src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
            alt="Vinicius Di Fiore" 
            className="h-16 md:h-20 mb-3" 
          />
        </div>
        
        <p className="text-gray-400 text-center text-sm md:text-base opacity-0 animate-fade-in" 
           style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          Transformando corpos, construindo mentes.
        </p>
        
        <div className="absolute bottom-4 w-full text-center opacity-0 animate-fade-in" 
             style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {currentYear} Vinicius Di Fiore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
