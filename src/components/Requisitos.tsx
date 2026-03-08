import { CheckCircle2 } from 'lucide-react';

const requisitosEsquerda = [
  'Documentação veículo atualizada (ANTT / RG, CNH)',
  'ANTT e MOPP atuais',
  'Disponibilidade para rastreio'
];

const requisitosDireita = [
  'CNH categoria mínima de veículo',
  'ANTT e MOPP atuais',
  'Responsabilidade para respeito'
];

export default function Requisitos() {
  return (
    <section id="requisitos" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Requisitos básicos
          </h2>
          <p className="text-lg text-gray-600">
            Confira o que é necessário para agregar seu caminhão conosco
          </p>
        </div>

        <div className="bg-[#1e3a8a] rounded-lg p-10 sm:p-14">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {requisitosEsquerda.map((requisito, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{requisito}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {requisitosDireita.map((requisito, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{requisito}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-blue-700 text-center">
            <p className="text-white text-sm mb-6 max-w-2xl mx-auto">
              Não se preocupe! Mesmo assim nos envie seu cadastro e entraremos em contato para esclarecer qualquer dúvida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
