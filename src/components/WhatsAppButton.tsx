
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  // Format the phone number for WhatsApp link (remove any non-digit characters)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    // Show the button after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={`https://wa.me/${formattedNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 bg-[#111111] text-white w-16 h-16 rounded-full flex items-center justify-center opacity-0 z-50 hover:opacity-100 transition-all duration-300 animate-pulse-subtle ${isVisible ? 'opacity-80 translate-y-0' : 'translate-y-20'}`}
            aria-label="Contato via WhatsApp"
            style={{
              animation: isVisible ? 'pulse 2s infinite' : 'none',
              transition: 'opacity 0.3s, transform 0.5s ease-out'
            }}
          >
            <MessageCircle size={30} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-black border border-vf-orange/20">
          <p className="text-white text-sm">Fale agora com Vinicius</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
