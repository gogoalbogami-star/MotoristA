import { DollarSign, Calendar, Shield, Users } from 'lucide-react';

const vantagens = [
  {
    icon: DollarSign,
    title: 'Ganhe Mais',
    description: 'Fretes com valores competitivos e pagamentos garantidos. Aumente sua renda mensal!'
  },
  {
    icon: Calendar,
    title: 'Fretes Constantes',
    description: 'Trabalho garantido todos os dias. Não fique parado esperando carga!'
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Cargas seguras e rotas planejadas. Trabalhe com tranquilidade!'
  },
  {
    icon: Users,
    title: 'Suporte Total',
    description: 'Equipe sempre disponível para ajudar. Você não está sozinho!'
  }
];

export default function Vantagens() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que se tornar nosso parceiro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as vantagens de trabalhar conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vantagens.map((vantagem, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <vantagem.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {vantagem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {vantagem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
