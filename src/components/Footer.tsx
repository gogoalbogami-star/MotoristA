import { MapPin, Phone, Mail, Truck, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-10 h-10 text-yellow-400" />
              <span className="text-white text-2xl font-black">AJ Oferagregados</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Conectamos motoristas parceiros com as melhores oportunidades de transporte de materiais de construção.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Úteis</h3>
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
            <h3 className="text-white font-bold text-lg mb-4">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                <div className="text-sm">
                  <p>Avenida Raimundo Pereira</p>
                  <p>de Magalhães, 6500</p>
                  <p>Jardim Iris, São Paulo - SP</p>
                  <p className="mt-1">CEP: 05145-200</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+551139359993"
                className="flex items-center gap-3 hover:text-yellow-400 transition-colors text-sm"
              >
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>(11) 3935-9993</span>
              </a>

              <a
                href="mailto:contato@ajofer.com.br"
                className="flex items-center gap-3 hover:text-yellow-400 transition-colors text-sm"
              >
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>contato@ajofer.com.br</span>
              </a>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                <div className="text-sm">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Transportadora AJofer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
