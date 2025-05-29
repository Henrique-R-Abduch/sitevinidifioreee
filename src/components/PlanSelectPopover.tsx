
import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  price: string;
  highlight?: boolean;
  mockupImg?: string;
};

interface PlanSelectPopoverProps {
  plans: Plan[];
  selectedPlanId: string;
  onChange: (planId: string) => void;
}

const PlanSelectPopover: React.FC<PlanSelectPopoverProps> = ({
  plans,
  selectedPlanId,
  onChange,
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="relative overflow-hidden group flex flex-col items-center justify-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-vf-orange to-orange-700 text-white font-bold text-base shadow-xl hover:shadow-2xl transform hover:scale-105 neon-outline transition-all duration-300 mb-0 text-center whitespace-normal"
          tabIndex={0}
          style={{
            minHeight: 58,
            maxHeight: "none", // Remove height restriction
          }}
        >
          <span className="tracking-wide">Trocar plano</span>
          <ChevronDown size={20} className="mt-1 group-hover:translate-y-0.5 transition-transform" />
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={12}
          className="z-50 rounded-2xl p-4 min-w-[260px] bg-black/95 border border-vf-orange/40 shadow-2xl animate-fade-in backdrop-blur-md"
        >
          <div className="mb-3 font-bold text-vf-orange text-lg text-center">Escolha um plano:</div>
          <ul className="space-y-2">
            {plans.map((plan) => (
              <li key={plan.id}>
                <button
                  className={`flex items-center w-full gap-3 p-3 rounded-xl border transition-all
                    ${
                      plan.id === selectedPlanId
                        ? "border-vf-orange bg-gradient-to-r from-[#270d02] via-[#ff5c0033] to-[#1a1a1a] shadow-[0_0_18px_1px_#ff5c0070] scale-[1.04]"
                        : "border-transparent bg-white/5 hover:border-vf-orange/60 hover:bg-vf-orange/10"
                    }
                  `}
                  onClick={() => onChange(plan.id)}
                  tabIndex={0}
                >
                  {/* Avatar pequeno por tipo */}
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black border-2 border-vf-orange">
                    {/* Ícones dos planos */}
                    {plan.id === "black" && (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-vf-orange"><path fill="currentColor" d="M4.491 2.093c.425-.665 1.288-.752 1.774-.173l13.983 16.121c.497.573.247 1.464-.47 1.627l-6.716 1.58a1.13 1.13 0 0 1-.956-.187L2.19 12.96a1.18 1.18 0 0 1 .015-1.913l7.912-5.571-4.66-3.437A1.125 1.125 0 0 1 4.492 2.093z"/></svg>
                    )}
                    {plan.id === "premium" && (
                      <img src="/lovable-uploads/anilhavini.png" alt=""
                        className="object-contain w-7 h-7 rounded-full border-2 border-vf-orange" />
                    )}
                    {plan.id === "starter" && (
                      <img src="/lovable-uploads/2c81f3c7-3074-499c-992f-75f61f1af038.png" alt=""
                        className="object-contain w-7 h-7 rounded-full border-2 border-vf-orange" />
                    )}
                  </span>
                  <div className="flex flex-col items-start text-left">
                    <span
                      className={`text-base font-bold ${
                        plan.id === selectedPlanId
                          ? "text-vf-orange"
                          : "text-vf-white"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">
                      {plan.price}
                    </span>
                  </div>
                  {plan.id === selectedPlanId && (
                    <span className="ml-auto text-xs text-green-400 bg-green-900/40 rounded px-2 py-0.5 animate-fade-in font-semibold">Selecionado</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <Popover.Close
            className="block mt-4 mx-auto text-sm px-5 py-2 rounded bg-vf-orange text-black font-bold shadow hover:bg-vf-orange/90 transition"
            aria-label="Fechar"
          >
            Fechar
          </Popover.Close>
          <Popover.Arrow className="fill-vf-orange" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PlanSelectPopover;
