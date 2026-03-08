export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Transportadora AJofer" className="h-12" />
            </div>
            <p className="text-blue-200 leading-relaxed text-sm">
              Conectamos motoristas parceiros com as melhores oportunidades de transporte de materiais de construção.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <a href="#vantagens" className="block hover:text-yellow-400 transition-colors text-sm">
                Vantagens
              </a>
              <a href="#como-funciona" className="block hover:text-yellow-400 transition-colors text-sm">
                Como funciona
              </a>
              <a href="#requisitos" className="block hover:text-yellow-400 transition-colors text-sm">
                Requisitos
              </a>
              <a href="#cadastro" className="block hover:text-yellow-400 transition-colors text-sm">
                Cadastre-se
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Localização</h3>
            <div className="text-blue-200 text-sm space-y-1">
              <p>Avenida Raimundo Pereira de Magalhães, 6500</p>
              <p>Jardim Iris, São Paulo - SP</p>
              <p>CEP: 05145-200</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Contato</h3>
            <div className="space-y-3 text-blue-200 text-sm">
              <div>
                <p>(11) 96670-2781</p>
              </div>
              <div>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 text-xs">
            © {currentYear} Transportadora AJofer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
