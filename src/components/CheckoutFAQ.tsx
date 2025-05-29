
import React from "react";
import { ShieldCheck, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Como recebo meu plano?",
    a: "Após confirmação do pagamento, você receberá o acesso imediatamente via e-mail e WhatsApp.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim! Aceitamos parcelamento no cartão de crédito em até 12x.",
  },
  {
    q: "E se eu não gostar do conteúdo?",
    a: "Você pode solicitar cancelamento sem burocracia em até 7 dias após a compra.",
  },
  {
    q: "Em quanto tempo recebo acesso?",
    a: "Geralmente em alguns minutos após a aprovação do pagamento. Fique atento ao seu WhatsApp e e-mail!",
  },
];

const CheckoutFAQ: React.FC = () => (
  <section className="w-full border-vf-orange/30 border-2 rounded-xl p-5 sm:p-6 shadow-lg backdrop-blur-sm">
    <h2 className="text-vf-orange font-bold text-2xl mb-5 flex items-center gap-2">
      <HelpCircle size={22} className="text-vf-orange" />
      Perguntas Frequentes
    </h2>
    <ul className="space-y-6">
      {faqs.map(({q, a}, idx) => (
        <li key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
          <div className="font-bold text-lg text-vf-white mb-1 flex items-center">
            <span className="text-vf-orange mr-2">{idx+1}.</span> {q}
          </div>
          <div className="text-gray-300 text-[0.97rem] pl-5 border-l-2 border-vf-orange/30">{a}</div>
        </li>
      ))}
    </ul>
    
    <div className="mt-8 p-4 bg-gradient-to-r from-vf-orange/10 to-transparent rounded-lg border border-vf-orange/20">
      <div className="flex items-center gap-2">
        <ShieldCheck size={18} className="text-vf-orange" />
        <h3 className="font-bold text-vf-white">Garantia de 7 dias</h3>
      </div>
      <p className="mt-1 text-gray-300 text-sm">
        Se não estiver satisfeito com o programa pelos motivos que forem, devolveremos 100% do seu investimento. Sem perguntas.
      </p>
    </div>
  </section>
);

export default CheckoutFAQ;
