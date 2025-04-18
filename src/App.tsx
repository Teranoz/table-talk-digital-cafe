import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScanPage from "./pages/ScanPage";
import MenuPage from "./pages/MenuPage";
import HelpPage from "./pages/HelpPage";
import ReservationsPage from "./pages/ReservationsPage";
import SupabaseTest from "./pages/SupabaseTest"; // تأكد أن الملف موجود في هذا المسار

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/test" element={<SupabaseTest />} /> {/* صفحة الاختبار */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
