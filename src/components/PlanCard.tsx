import { Link } from "react-router-dom";

import React from 'react';
import { ArrowRight, Check, DollarSign, Flame, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  installments?: string;
  benefits: string[];
  ctaText: string;
  badge?: {
    text: string;
    type: 'economic' | 'popular' | 'premium';
  };
  isPopular?: boolean;
  image?: string; // ✅ ADICIONADO AQUI
}


const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  price,
  installments,
  benefits,
  ctaText,
  badge,
  isPopular,
  image
}) => {
  return (
    <div className={cn(
  "rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full min-h-[640px]",
  "md:hover:transform md:hover:scale-[1.03] md:hover:shadow-lg",
  isPopular 
    ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/30 border-2 border-[#FF6600] shadow-lg md:hover:shadow-[#FF6600]/30'
    : 'bg-gradient-to-br from-black via-black/95 to-vf-orange/10 border-2 border-[#B0B0B0] shadow-lg md:hover:shadow-[#B0B0B0]/20'
)}>
      <div className="p-6 bg-black/50 backdrop-blur-sm relative">
        {badge && (
          <div className={cn(
            "absolute top-0 right-0 px-3 py-1 rounded-bl-lg flex items-center",
            badge.type === 'economic' ? 'bg-white/10 text-white' :
            badge.type === 'popular' ? 'bg-vf-orange text-white' :
            'bg-gradient-to-r from-white/80 to-white/30 text-black'
          )}>
            {badge.type === 'economic' && <DollarSign className="mr-1" size={16} />}
            {badge.type === 'popular' && <Flame className="mr-1" size={16} />}
            {badge.type === 'premium' && <Crown className="mr-1" size={16} />}
            <span className="text-xs font-bold">{badge.text}</span>
          </div>
        )}

        <div className="mb-4 h-[180px] md:h-[220px] overflow-hidden bg-black/10 md:border md:border-white/10 md:rounded-lg">
  <img
  src={image}
  alt={title}
  className="w-full h-[240px] object-fill rounded-t-xl"
/>



</div>




        <h3 className={cn("text-2xl font-bold mb-1", isPopular ? 'text-vf-orange' : 'text-white')}>
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{subtitle}</p>

        <div className="flex flex-col gap-1">
          {installments && <span className="text-lg text-gray-300">{installments}</span>}
          <span className="text-3xl font-bold text-white">{price}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
              <span className="text-gray-300 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        <Link 
          to={`/checkout?plan=${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
          className={cn(
            "w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-all duration-200",
            isPopular 
              ? 'bg-vf-orange text-white hover:bg-vf-orange/90'
              : 'bg-white/10 text-white hover:bg-white/20'
          )}
        >
          <span>{ctaText}</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};


export default PlanCard;
