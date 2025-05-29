
import React from "react";
import { Calendar, Clock } from "lucide-react";

interface SubscriptionPeriodCardsProps {
  selectedPeriod: "bimestral" | "semestral" | "anual";
  onSelectPeriod: (period: "bimestral" | "semestral" | "anual") => void;
  selectedPlanId?: string; // Add this prop for determining which plan's periods to show
}

const getPeriodsByPlan = (planId: string) => {
  const blackPeriods = [
    {
      id: "bimestral",
      name: "Bimestral",
      price: "R$ 639,80",
      subtitle: "R$ 305,90/mês",
      tag: "MELHOR CUSTO-BENEFÍCIO",
      duration: "60 dias"
    },
    {
      id: "semestral",
      name: "Semestral",
      price: "R$ 1.596,00",
      subtitle: "R$ 266,00/mês",
      tag: "MAIS ESCOLHIDO",
      duration: "180 dias",
      highlight: true
    },
    {
      id: "anual",
      name: "Anual",
      price: "R$ 2.876,00",
      subtitle: "R$ 239,67/mês",
      tag: "ACESSO MAIS COMPLETO",
      duration: "365 dias"
    }
  ];

  const premiumPeriods = [
    {
      id: "bimestral",
      name: "Bimestral",
      price: "R$ 939,80",
      subtitle: "R$ 469,90/mês",
      tag: "MELHOR CUSTO-BENEFÍCIO",
      duration: "60 dias"
    },
    {
      id: "semestral",
      name: "Semestral",
      price: "R$ 2.396,00",
      subtitle: "R$ 399,33/mês",
      tag: "MAIS ESCOLHIDO",
      duration: "180 dias",
      highlight: true
    },
    {
      id: "anual",
      name: "Anual",
      price: "R$ 4.276,00",
      subtitle: "R$ 356,33/mês",
      tag: "ACESSO MAIS COMPLETO",
      duration: "365 dias"
    }
  ];

  return planId === "premium" ? premiumPeriods : blackPeriods;
};

const SubscriptionPeriodCards: React.FC<SubscriptionPeriodCardsProps> = ({
  selectedPeriod,
  onSelectPeriod,
  selectedPlanId = "black", // Default to "black" if not provided
}) => {
  const periods = getPeriodsByPlan(selectedPlanId);

  return (
    <div className="w-full space-y-4 mt-6 mb-2">
      <h3 className="text-vf-orange font-bold text-lg text-center mb-6">Escolha o período:</h3>
      <div className="grid gap-4">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => onSelectPeriod(period.id as "bimestral" | "semestral" | "anual")}
            className={`relative w-full p-5 rounded-xl border-2 transition-all duration-300
              ${
                selectedPeriod === period.id
                  ? "border-vf-orange bg-gradient-to-r from-[#270d02] via-[#ff5c0033] to-[#1a1a1a] shadow-[0_0_18px_1px_#ff5c0070] scale-[1.02]"
                  : "border-vf-orange/30 hover:border-vf-orange/60 bg-black/40 hover:bg-black/60"
              }
            `}
          >
            {period.tag && (
              <div className={`absolute -top-3 right-4 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide
                ${period.highlight ? 'bg-vf-orange text-black' : 'bg-black text-vf-orange border border-vf-orange'}`}>
                {period.tag}
              </div>
            )}
            
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={20} className="text-vf-orange" />
                  <span className="font-bold text-xl text-white">{period.name}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock size={16} />
                  <span>Acompanhamento por {period.duration}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-vf-orange font-bold text-2xl mb-1">{period.price}</div>
                <div className="text-gray-400 text-sm">{period.subtitle}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPeriodCards;
