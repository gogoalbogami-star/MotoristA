export default function FacaParte() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
              FAÇA PARTE DA NOSSA EQUIPE
            </h2>
            <p className="text-xl font-bold text-gray-900">
              E COMECE A GANHAR MAIS
            </p>
          </div>
          <a
            href="#cadastro"
            className="inline-flex items-center justify-center bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold px-10 py-4 rounded text-base transition-all shadow-lg whitespace-nowrap"
          >
            CADASTRE-SE AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
