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
import SupabaseTest from "./pages/SupabaseTest";

// ✅ استيراد صفحات تسجيل الدخول والتسجيل
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

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
          <Route path="/test" element={<SupabaseTest />} />

          {/* ✅ المسارات الجديدة */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
