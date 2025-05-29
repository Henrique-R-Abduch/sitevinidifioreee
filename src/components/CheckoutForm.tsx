import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  PiggyBank, 
  Check, 
  X, 
  ShieldCheck
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const KIRVANO_API_URL = "https://api.kirvano.com/v1/payment";

interface CheckoutFormProps {
  selectedPlanId: string;
  customerName: string;
  setCustomerName: (value: string) => void;
  hideBoleto?: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  selectedPlanId,
  customerName,
  setCustomerName,
  hideBoleto = false
}) => {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle"|"success"|"error"|"processing">("idle");
  const [paymentMethod, setPaymentMethod] = useState<"credit"|"boleto"|"pix">("credit");

  const formatCPF = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '');
    if (numbersOnly.length <= 11) {
      return numbersOnly
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    } else {
      return numbersOnly
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
  };

  const formatPhone = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '');
    return numbersOnly
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !cpf || !phone) {
      toast({ title: "Preencha todos os campos obrigatórios", description: "" });
      return;
    }
    setLoading(true);
    setStatus("processing");
    toast({ title: "Processando pagamento..." });
    try {
      const response = await fetch(KIRVANO_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlanId,
          customer: customerName,
          email,
          cpf,
          phone,
          paymentMethod,
        }),
      });
      if (!response.ok) throw new Error("Erro ao processar pagamento");
      setStatus("success");
      toast({title: "Pagamento aprovado!", description: `Bem vindo(a), ${customerName}!`});
    } catch (err: any) {
      setStatus("error");
      toast({title: "Falha no pagamento", description: err.message});
    }
    setLoading(false);
  };

  return (
    <form
      className="glass border-2 border-vf-orange/30 p-7 shadow-xl w-full max-w-xl mx-auto rounded-2xl backdrop-blur-sm"
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{
        background: "linear-gradient(140deg, #0d0a08 70%, #ff5c0015 100%)",
      }}
    >
      <h2 className="text-xl font-bold text-vf-orange mb-5 flex items-center">
        <CreditCard className="mr-2" size={20} />
        Informações de Pagamento
      </h2>

      <div className="mb-4 p-4 rounded-lg bg-gradient-to-r from-vf-orange/15 to-transparent border border-vf-orange/30">
        <p className="text-sm text-gray-300 text-center">
          Ao prosseguir, você será redirecionado a página de vendas onde poderá concluir sua compra com os dados de cobrança.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-lg font-semibold text-vf-white drop-shadow">
            Nome completo <span className="text-vf-orange">*</span>
          </label>
          <Input
            id="name"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            className="bg-black/30 border-vf-orange/40 text-vf-white transition-all text-base font-medium focus:bg-black/60 focus:border-vf-orange/80 h-12"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-lg font-semibold text-vf-white drop-shadow">
            E-mail <span className="text-vf-orange">*</span>
          </label>
          <Input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-black/30 border-vf-orange/40 text-vf-white transition-all text-base font-medium focus:bg-black/60 focus:border-vf-orange/80 h-12"
            type="email"
            placeholder="Digite seu melhor e-mail"
            required
          />
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="flex-1">
            <label htmlFor="cpf" className="block mb-2 text-lg font-semibold text-vf-white drop-shadow">
              CPF ou CNPJ <span className="text-vf-orange">*</span>
            </label>
            <Input
              id="cpf"
              value={cpf}
              onChange={e => setCpf(formatCPF(e.target.value))}
              className="bg-black/30 border-vf-orange/40 text-vf-white transition-all text-base font-medium focus:bg-black/60 focus:border-vf-orange/80 h-12"
              placeholder="000.000.000-00"
              required
              maxLength={18}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block mb-2 text-lg font-semibold text-vf-white drop-shadow">
              WhatsApp <span className="text-vf-orange">*</span>
            </label>
            <Input
              id="phone"
              value={phone}
              onChange={e => setPhone(formatPhone(e.target.value))}
              className="bg-black/30 border-vf-orange/40 text-vf-white transition-all text-base font-medium focus:bg-black/60 focus:border-vf-orange/80 h-12"
              placeholder="(00) 00000-0000"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-bold text-vf-white mb-3">Método de Pagamento:</h3>
        <div className="space-y-3">
          <TooltipProvider>
            <button
              type="button"
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                paymentMethod === 'credit' 
                  ? 'bg-gradient-to-r from-vf-orange/20 to-black border-2 border-vf-orange' 
                  : 'bg-black/20 border border-vf-orange/30 hover:bg-black/40'
              }`}
              onClick={() => setPaymentMethod('credit')}
            >
              <div className="flex items-center">
                <CreditCard className="text-vf-orange mr-3" size={22} />
                <span className="font-semibold text-vf-white">Cartão de crédito</span>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="bg-vf-orange/10 px-2 py-1 rounded text-vf-orange text-xs font-bold">
                    mais rápido
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Aprovação imediata!</p>
                </TooltipContent>
              </Tooltip>
            </button>
            
            <button
              type="button"
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                paymentMethod === 'pix' 
                  ? 'bg-gradient-to-r from-vf-orange/20 to-black border-2 border-vf-orange' 
                  : 'bg-black/20 border border-vf-orange/30 hover:bg-black/40'
              }`}
              onClick={() => setPaymentMethod('pix')}
            >
              <div className="flex items-center">
                <PiggyBank className="text-vf-orange mr-3" size={22} />
                <span className="font-semibold text-vf-white">Pix</span>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="bg-vf-orange/10 px-2 py-1 rounded text-vf-orange text-xs font-bold">
                    prático
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Aprovação em até 30 min</p>
                </TooltipContent>
              </Tooltip>
            </button>
          </TooltipProvider>
        </div>
      </div>
      
      <Button
        type="submit"
        disabled={loading}
        className="w-full mx-auto z-30 mt-3 text-vf-white font-bold text-xl py-7 px-8 rounded-lg uppercase tracking-wide shadow-xl bg-gradient-to-r from-vf-orange to-orange-600 hover:from-vf-orange hover:to-orange-700 transform hover:scale-[1.06] transition-all duration-200 flex items-center justify-center gap-2 neon-outline"
        style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 800, letterSpacing: 1 }}
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            <span>Processando...</span>
          </>
        ) : (
          <>
            <CreditCard size={22} /> Finalizar Compra
          </>
        )}
      </Button>
      
      {status !== "idle" && (
        <div className="mt-5 flex flex-col items-center bg-black/30 rounded-lg p-3 border border-vf-orange/20">
          {status === "processing" && (
            <div className="text-vf-orange text-lg font-bold animate-fade-in flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-vf-orange mr-2"></div>
              Processando pagamento...
            </div>
          )}
          {status === "success" && (
            <div className="flex flex-col items-center animate-fade-in">
              <div className="bg-green-500/20 p-2 rounded-full mb-2">
                <Check size={30} className="text-green-500" />
              </div>
              <span className="text-base font-bold text-green-400">Pagamento aprovado!</span>
              <span className="text-sm text-gray-400 mt-1">Você receberá os detalhes de acesso em seu e-mail e WhatsApp.</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex flex-col items-center animate-fade-in">
              <div className="bg-red-500/20 p-2 rounded-full mb-2">
                <X size={26} className="text-red-500" />
              </div>
              <span className="text-base font-bold text-red-400">Não foi possível processar o pagamento</span>
              <span className="text-sm text-gray-400 mt-1">Por favor, tente novamente ou entre em contato com o suporte.</span>
            </div>
          )}
        </div>
      )}
      
      <div className="pt-5 flex items-center gap-2 text-xs text-gray-400 justify-center border-t border-gray-700/50 mt-5">
        <ShieldCheck size={14} className="text-vf-orange" />
        Compra protegida com certificado SSL e criptografia.
      </div>
    </form>
  );
};

export default CheckoutForm;
