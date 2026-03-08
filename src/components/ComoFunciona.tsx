import { FileText, Search, FileCheck, Rocket } from 'lucide-react';

const passos = [
  {
    icon: FileText,
    numero: '1',
    title: 'Preencha o cadastro',
    description: 'Complete o formulário online com seus dados pessoais e informações do caminhão'
  },
  {
    icon: Search,
    numero: '2',
    title: 'Análise da documentação',
    description: 'Nossa equipe analisa toda documentação enviada em até 24 horas úteis'
  },
  {
    icon: FileCheck,
    numero: '3',
    title: 'Cadastro e alinhamento',
    description: 'Após aprovação finalizamos seu cadastro e alinhamos todos os procedimentos'
  },
  {
    icon: Rocket,
    numero: '4',
    title: 'Inicie as parceria',
    description: 'Comece hoje mesmo a trabalhar com a gente e ganhe seu dinheiro'
  }
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido para começar a agregar seu caminhão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-teal-400 to-emerald-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <passo.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#1e3a8a] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {passo.numero}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {passo.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {passo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
