import { CheckCircle2 } from 'lucide-react';

const requisitosEsquerda = [
  'Documentação veículo atualizada (ANTT/ RG, CNH)',
  'ANTT e MOPP atuais',
  'Dispor de rastreio e anti-furto',
  'Responsabilidade para respeito'
];

const requisitosDireita = [
  'CNH categoria válida (C, D ou E)',
  'Veículo próprio em bom estado',
  'Documentação do veículo regularizada',
  'Maior de 21 anos'
];

export default function Requisitos() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Requisitos básicos
          </h2>
          <p className="text-xl text-gray-600">
            Confira o que é necessário para começar sua parceria conosco
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10 sm:p-14 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {requisitosEsquerda.map((requisito, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">{requisito}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {requisitosDireita.map((requisito, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">{requisito}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-blue-700 text-center">
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Não se preocupe! Mesmo que não tenha todos os requisitos acima, entre em contato conosco e avaliaremos sua situação
            </p>
            <a
              href="#cadastro"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-5 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Fazer meu cadastro agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
