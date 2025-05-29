
import React, { useState } from "react";
import CheckoutSummary from "@/components/CheckoutSummary";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutFAQ from "@/components/CheckoutFAQ";
import DynamicTitle from "@/components/DynamicTitle";
import { ShieldCheck } from "lucide-react";
import { useEffect } from "react";
const CheckoutPage: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("black");
  const [customerName, setCustomerName] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="min-h-screen flex flex-col bg-black relative font-montserrat"
      style={{
        background: "linear-gradient(110deg, #0d0a08 0%, #1a1a1a 72%, #ff5c0011 100%)",
      }}
    >
      {/* Animated orange-glassmorphism overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 80% 10%, #ff5c0266 0%, transparent 72%)" }}/>
        
      <header
  className="flex justify-center items-center py-4 px-4 z-40 border-b border-vf-orange/30 sticky top-0 animate-fade-slide-up"
  style={{
    background: "rgba(24, 23, 20, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 4px 24px 0 #ff5c0030",
  }}
>
  <img
    src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" // nova imagem enviada
    alt="Logo Vinicius Di Fiore"
    className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
  />
</header>

      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        {/* Dynamic Title */}
        <DynamicTitle selectedPlanId={selectedPlanId} />

        {/* Estrutura do layout - bloco esquerda (plano), direita (form), FAQ abaixo */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center mt-4 px-3 md:px-0 gap-8">
          <CheckoutSummary
            selectedPlanId={selectedPlanId}
            onChangePlan={setSelectedPlanId}
          />
          <CheckoutForm
            selectedPlanId={selectedPlanId}
            customerName={customerName}
            setCustomerName={setCustomerName}
            hideBoleto={true}
          />
        </div>
        
        <div className="w-full px-4 sm:px-6 md:px-0 max-w-4xl mt-10">
  <CheckoutFAQ />
</div>

        
        {/* Footer só com segurança */}
        <footer className="w-full mt-10 pb-8 px-4 sm:px-6 flex flex-col items-center text-gray-400 text-xs animate-fade-slide-up">
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-3 px-4 py-3 rounded-xl bg-black/70 border border-vf-orange/40 neon-outline shadow-lg text-center">
    <ShieldCheck size={20} className="text-vf-orange" />
    <span className="text-vf-orange font-semibold text-sm tracking-wide">Pagamento 100% seguro</span>
    <span className="text-white/70 text-base hidden sm:inline">•</span>
    <span className="text-vf-orange font-semibold text-sm tracking-wide">SSL Certificado</span>
    <span className="text-white/70 text-base hidden sm:inline">•</span>
    <span className="text-vf-orange font-semibold text-sm tracking-wide">Garantia 7 dias</span>
  </div>

  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center">
    <span>Suporte:</span>
    <a href="https://wa.me/5500000000000" className="text-vf-orange underline font-medium">
      Fale com nosso time
    </a>
  </div>

  <div className="mt-4 text-gray-500 text-[0.7rem] text-center">
    &copy; {new Date().getFullYear()} Vinicius Di Fiore. Todos os direitos reservados.
  </div>
</footer>

      </main>
    </div>
  );
};

export default CheckoutPage;
