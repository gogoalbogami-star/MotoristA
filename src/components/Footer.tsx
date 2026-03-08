import { MapPin, Phone, Mail, Truck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-emerald-400" />
              <span className="text-white text-xl font-bold">AJ Oferagregados</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Conectando motoristas parceiros com oportunidades de transporte de materiais de construção.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+5511000000000"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 0000-0000</span>
              </a>

              <a
                href="mailto:contato@ajofer.com.br"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@ajofer.com.br</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-gray-400">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            {currentYear} AJ Oferagregados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
