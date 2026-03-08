import Hero from './components/Hero';
import Estatisticas from './components/Estatisticas';
import Vantagens from './components/Vantagens';
import Frota from './components/Frota';
import ComoFunciona from './components/ComoFunciona';
import Requisitos from './components/Requisitos';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Estatisticas />
      <Vantagens />
      <Frota />
      <ComoFunciona />
      <Requisitos />
      <Cadastro />
      <Footer />
    </div>
  );
}

export default App;
