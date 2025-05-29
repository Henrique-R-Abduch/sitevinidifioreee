import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Linktree from "./pages/Linktree";
import PlanoBlack from "./pages/PlanoBlack";
import ProtocoloStarter from "./pages/ProtocoloStarter";
import ProtocoloTreinamento from "./pages/ProtocoloTreinamento"; // ✅ Importado aqui
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Linktree />} />
          <Route path="/site" element={<Index />} />
          <Route path="/plano-black" element={<PlanoBlack />} />
          <Route path="/plano-starter" element={<ProtocoloStarter />} />
          <Route path="/protocolo-treinamento" element={<ProtocoloTreinamento />} /> {/* ✅ Nova rota */}
          <Route path="/checkout" element={<CheckoutPage />} /> // ⬅️ certifique-se de que isso está aqui
          <Route path="/obrigado" element={<ThankYouPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
