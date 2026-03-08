import Hero from './components/Hero';
import Vantagens from './components/Vantagens';
import Frota from './components/Frota';
import FacaParte from './components/FacaParte';
import ComoFunciona from './components/ComoFunciona';
import Requisitos from './components/Requisitos';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer';

function App() {
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
