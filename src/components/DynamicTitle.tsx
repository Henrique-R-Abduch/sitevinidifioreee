
import React, { useEffect, useState } from 'react';

interface DynamicTitleProps {
  selectedPlanId: string;
}

// Removido drop-shadow das palavras laranja (só cor laranja)
function getHighlightElements(selectedPlanId: string) {
  switch (selectedPlanId) {
    case 'black':
      return (
        <>Transforme seu corpo com o <span className="text-vf-orange">Protocolo Black</span></>
      );
    case 'starter':
      return (
        <>Saia do zero com o <span className="text-vf-orange">plano Starter</span></>
      );
    case 'premium':
      return (
        <>Eleve seu corpo ao próximo nível com o <span className="text-vf-orange">Protocolo Premium</span></>
      );
    default:
      return (
        <>Transforme seu corpo com o <span className="text-vf-orange">Protocolo Black</span></>
      );
  }
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ selectedPlanId }) => {
  const [animateOut, setAnimateOut] = useState<boolean>(false);
  const [titleElement, setTitleElement] = useState<React.ReactNode>(getHighlightElements(selectedPlanId));

  useEffect(() => {
    setAnimateOut(true);
    const timeout = setTimeout(() => {
      setTitleElement(getHighlightElements(selectedPlanId));
      setAnimateOut(false);
    }, 280);
    return () => clearTimeout(timeout);
  }, [selectedPlanId]);

  return (
    <h1
      className={
        `text-center mb-8 mt-10 font-montserrat font-extrabold
         text-3xl md:text-5xl lg:text-6xl tracking-tight
         transition-all duration-500 ease-in-out
         ${animateOut ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`
      }
      style={{
        fontFamily: "'Montserrat', 'Poppins', sans-serif",
        color: "#fff",
        letterSpacing: "-1px"
      }}
    >
      {titleElement}
    </h1>
  );
};

export default DynamicTitle;
