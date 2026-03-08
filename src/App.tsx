import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Hero from './components/Hero';
import Vantagens from './components/Vantagens';
import Frota from './components/Frota';
import FacaParte from './components/FacaParte';
import ComoFunciona from './components/ComoFunciona';
import Requisitos from './components/Requisitos';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setShowAdmin(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (loading) {
    return null;
  }

  if (showAdmin) {
    if (isAuthenticated) {
      return <AdminDashboard onLogout={() => {
        setIsAuthenticated(false);
        setShowAdmin(false);
      }} />;
    }
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Vantagens />
      <Frota />
      <FacaParte />
      <ComoFunciona />
      <Requisitos />
      <Cadastro />
      <Footer />
    </div>
  );
}

export default App;
