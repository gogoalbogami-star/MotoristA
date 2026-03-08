import { Truck, MessageCircle, ClipboardCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2">
              <Truck className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-100 font-semibold text-sm">OPORTUNIDADE PARA MOTORISTAS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              FAÇA SEU CAMINHÃO
              <span className="block text-yellow-400 mt-2">TRABALHAR MAIS</span>
              <span className="block mt-2">E GANHAR MAIS</span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
              Transporte materiais de construção com fretes garantidos, pagamento em dia e suporte completo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cadastro"
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-5 rounded-lg text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <ClipboardCheck className="w-6 h-6" />
                QUERO ME CADASTRAR
              </a>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-5 rounded-lg text-lg transition-all border-2 border-white/40"
              >
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-yellow-400/20">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-blue-100">Ganhe até R$ 15.000/mês trabalhando conosco</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-blue-100">Fretes garantidos todos os dias da semana</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-blue-100">Pagamento pontual sem atrasos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-blue-100">Suporte completo e equipe sempre disponível</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-3">PREENCHER CADASTRO - INÍCIO EM 24H</p>
                  <a
                    href="#cadastro"
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition-all w-full"
                  >
                    Começar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L1440 120L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 120Z" fill="#FDE047"/>
        </svg>
      </div>
    </section>
  );
}
