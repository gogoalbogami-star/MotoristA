import { TrendingUp, Clock, Shield, Users, FileCheck, Award } from 'lucide-react';

const vantagens = [
  {
    icon: TrendingUp,
    title: 'Fretes Constantes',
    description: 'Trabalho garantido todos os dias com cargas programadas para você não ficar parado'
  },
  {
    icon: Clock,
    title: 'Pagamento Transparente',
    description: 'Valores justos e pagamento sempre em dia sem atrasos ou complicações'
  },
  {
    icon: Shield,
    title: 'Suporte Dedicado',
    description: 'Equipe completa pronta para te ajudar em qualquer situação durante suas viagens'
  },
  {
    icon: Users,
    title: 'Melhores Rotas',
    description: 'Rotas estrategicamente planejadas para você ter mais eficiência no trabalho'
  },
  {
    icon: FileCheck,
    title: 'Parceria de Confiança',
    description: 'Procedimentos transparentes e honestos em todas as operações realizadas'
  },
  {
    icon: Award,
    title: 'Suporte e Respeito',
    description: 'Trabalhe com uma empresa que valoriza e respeita seus motoristas parceiros'
  }
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que agregar com a AJofer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seja parceiro da maior e mais confiável agregadora de caminhões e comece a ganhar mais com estabilidade no transporte de cargas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vantagens.map((vantagem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-xl transition-all border border-gray-200 group"
            >
              <div className="bg-gradient-to-br from-emerald-400 to-teal-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <vantagem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {vantagem.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {vantagem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
