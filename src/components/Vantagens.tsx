import { DollarSign, Calendar, Shield, Users, TrendingUp, Award } from 'lucide-react';

const vantagens = [
  {
    icon: DollarSign,
    title: 'Fretes Constantes',
    description: 'Trabalho garantido todos os dias com cargas programadas para você não ficar parado'
  },
  {
    icon: Calendar,
    title: 'Pagamento Transparente',
    description: 'Valores justos e pagamento sempre em dia sem atrasos ou complicações'
  },
  {
    icon: Shield,
    title: 'Suporte Dedicado',
    description: 'Equipe completa pronta para te ajudar em qualquer situação durante suas viagens'
  },
  {
    icon: TrendingUp,
    title: 'Melhore Renda',
    description: 'Receba benefícios extras e aumente seus ganhos trabalhando com rotas otimizadas'
  },
  {
    icon: Users,
    title: 'Parceria de Confiança',
    description: 'Faça parte de uma comunidade de motoristas parceiros com benefícios exclusivos'
  },
  {
    icon: Award,
    title: 'Suporte e Respeito',
    description: 'Trabalhe com uma empresa que valoriza e respeita seus motoristas parceiros'
  }
];

export default function Vantagens() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que agregar com a AJofer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seja parceiro da maior e mais confiável agregadora de caminhões e comece a ganhar mais com estabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vantagens.map((vantagem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-2xl transition-all border border-gray-200 hover:border-blue-300 group"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                <vantagem.icon className="w-8 h-8 text-yellow-400" />
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
