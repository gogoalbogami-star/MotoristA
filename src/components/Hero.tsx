export default function Hero() {
  return (
    <section className="relative bg-[#1e3a8a] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bg-[#1e3a8a] py-3 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Transportadora AJofer" className="h-10" />
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#vantagens" className="hover:text-yellow-400 transition-colors">VANTAGENS</a>
            <a href="#como-funciona" className="hover:text-yellow-400 transition-colors">COMO FUNCIONA</a>
            <a href="#requisitos" className="hover:text-yellow-400 transition-colors">REQUISITOS</a>
            <a href="#frota" className="hover:text-yellow-400 transition-colors">NOSSA FROTA</a>
          </nav>
          <a
            href="#cadastro"
            className="bg-yellow-400 hover:bg-yellow-300 text-[#1e3a8a] font-bold px-6 py-2 rounded text-sm transition-all"
          >
            CADASTRE-SE
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5">
              <span className="text-white text-xs font-semibold">⚡ OPORTUNIDADE PARA MOTORISTAS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              FAÇA SEU<br />
              CAMINHÃO<br />
              <span className="text-yellow-400">TRABALHAR MAIS</span><br />
              E GANHAR MAIS
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed">
              Seja parceiro da maior e mais confiável agregadora de caminhões e comece a ganhar mais com estabilidade e respeito
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-5xl font-black text-yellow-400">+500</div>
                <div className="text-sm text-blue-200">Motoristas agregados</div>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-400">+15</div>
                <div className="text-sm text-blue-200">Anos de experiência</div>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-400">100%</div>
                <div className="text-sm text-blue-200">Pagamento em dia</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cadastro"
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-[#1e3a8a] font-black px-10 py-4 rounded text-base transition-all transform hover:scale-105 shadow-xl"
              >
                QUERO ME CADASTRAR
              </a>

              <a
                href="#frota"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold px-10 py-4 rounded text-base transition-all border-2 border-white"
              >
                FROTA DE MÁQUINAS
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 shadow-2xl">
                <h3 className="text-yellow-400 font-bold text-sm mb-4">POR QUE AGREGAR COM A AJOFER?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-white text-sm">Fretes garantidos todos os dias da semana</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-white text-sm">Pagamento pontual sem atrasos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2"></div>
                    <p className="text-white text-sm">Suporte completo durante todas as viagens</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-xs text-gray-400 mb-3">PREENCHER CADASTRO - INÍCIO EM 24H</p>
                  <a
                    href="#cadastro"
                    className="flex items-center justify-center bg-white text-[#1e3a8a] font-bold px-6 py-3 rounded transition-all w-full text-sm hover:bg-gray-100"
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
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 30 720 30C360 30 0 0 0 0L0 60Z" fill="#FCD34D"/>
        </svg>
      </div>
    </section>
  );
}
