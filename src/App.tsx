import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Import from "./pages/Import";
import Catalogs from "./pages/Catalogs";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermosUso from "./pages/TermosUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import FormasPagamento from "./pages/FormasPagamento";
import FormasEntrega from "./pages/FormasEntrega";
import TrocasDevolucoes from "./pages/TrocasDevolucoes";
import HowToBuy from "./pages/HowToBuy";
import PrazosEntrega from "./pages/PrazosEntrega";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/importacao" element={<Import />} />
          <Route path="/catalogos" element={<Catalogs />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/como-comprar" element={<HowToBuy />} />
          <Route path="/formas-entrega" element={<FormasEntrega />} />
          <Route path="/prazos-entrega" element={<PrazosEntrega />} />
          <Route path="/trocas-devolucoes" element={<TrocasDevolucoes />} />
          <Route path="/formas-pagamento" element={<FormasPagamento />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
