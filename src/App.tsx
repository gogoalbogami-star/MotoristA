import Hero from './components/Hero';
import Vantagens from './components/Vantagens';
import ComoFunciona from './components/ComoFunciona';
import Requisitos from './components/Requisitos';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vantagens />
      <ComoFunciona />
      <Requisitos />
      <Cadastro />
      <Footer />
    </div>
  );
}

export default App;
