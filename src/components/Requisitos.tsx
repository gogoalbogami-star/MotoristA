import { CheckCircle2 } from 'lucide-react';

const requisitos = [
  'CNH categoria válida (C, D ou E)',
  'Veículo próprio em bom estado',
  'Documentação do veículo regularizada',
  'Disponibilidade para trabalhar',
  'Responsabilidade e pontualidade',
  'Maior de 21 anos'
];

export default function Requisitos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Requisitos para se cadastrar
          </h2>
          <p className="text-xl text-gray-600">
            Verifique se você atende aos requisitos básicos
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 sm:p-12 shadow-lg border border-blue-100">
          <div className="grid sm:grid-cols-2 gap-6">
            {requisitos.map((requisito, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{requisito}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-blue-200 text-center">
            <p className="text-gray-700 text-lg mb-6">
              Não tem todos os requisitos? Fale conosco mesmo assim!
            </p>
            <a
              href="#cadastro"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-md"
            >
              Fazer meu cadastro agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
