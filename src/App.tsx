import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Vantagens from './components/Vantagens';
import Frota from './components/Frota';
import FacaParte from './components/FacaParte';
import ComoFunciona from './components/ComoFunciona';
import Requisitos from './components/Requisitos';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'acesso-dashboard-2024') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) {
    return <AdminDashboard onLogout={() => setShowAdmin(false)} />;
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
