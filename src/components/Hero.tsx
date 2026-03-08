import { Truck, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Truck className="w-20 h-20 text-emerald-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Seja um motorista parceiro da
            <span className="block text-emerald-400 mt-2">AJ Oferagregados</span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Ganhe mais transportando materiais de construção. Fretes garantidos e pagamento em dia!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>

            <a
              href="#cadastro"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all border-2 border-white/30"
            >
              Fazer Cadastro
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L1440 120L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 120Z" fill="rgb(249, 250, 251)"/>
        </svg>
      </div>
    </section>
  );
}
