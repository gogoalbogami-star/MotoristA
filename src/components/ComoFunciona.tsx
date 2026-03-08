import { FileText, CheckCircle, Truck, TrendingUp } from 'lucide-react';

const passos = [
  {
    icon: FileText,
    numero: '1',
    title: 'Faça seu cadastro',
    description: 'Preencha o formulário com seus dados e informações do veículo'
  },
  {
    icon: CheckCircle,
    numero: '2',
    title: 'Análise e aprovação',
    description: 'Nossa equipe analisa sua documentação em até 24 horas'
  },
  {
    icon: Truck,
    numero: '3',
    title: 'Comece a trabalhar',
    description: 'Receba suas primeiras cargas e comece a ganhar'
  },
  {
    icon: TrendingUp,
    numero: '4',
    title: 'Cresça conosco',
    description: 'Quanto mais você trabalha, mais você ganha e cresce'
  }
];

export default function ComoFunciona() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido para você começar a trabalhar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <passo.icon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {passo.numero}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {passo.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {passo.description}
                </p>
              </div>

              {index < passos.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-900 to-emerald-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
