
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Messages from "./pages/Messages";
import Mail from "./pages/Mail";
import NotFound from "./pages/NotFound";
import AdminLogin from "./components/AdminLogin";

const queryClient = new QueryClient();

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if admin is logged in
    const adminStatus = localStorage.getItem('admin_logged_in');
    setIsAdminLoggedIn(adminStatus === 'true');
  }, []);

  const handleAdminLogin = (status: boolean) => {
    setIsAdminLoggedIn(status);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/auth" element={<Auth />} />
              <Route 
                path="/admin-login" 
                element={<AdminLogin onLogin={handleAdminLogin} />} 
              />
              <Route 
                path="/admin" 
                element={isAdminLoggedIn ? <Admin /> : <AdminLogin onLogin={handleAdminLogin} />} 
              />
              <Route 
                path="/messages" 
                element={isAdminLoggedIn ? <Messages /> : <AdminLogin onLogin={handleAdminLogin} />} 
              />
              <Route 
                path="/mail" 
                element={isAdminLoggedIn ? <Mail /> : <AdminLogin onLogin={handleAdminLogin} />} 
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
