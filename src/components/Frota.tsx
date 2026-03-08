export default function Frota() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1115492/pexels-photo-1115492.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Caminhão de transporte'
    },
    {
      url: 'https://images.pexels.com/photos/6670454/pexels-photo-6670454.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Frota de caminhões'
    },
    {
      url: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Parceiros de Sucesso',
      hasLabel: true
    }
  ];

  return (
    <section id="frota" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossa Frota e Equipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a estrutura que faz da AJofer uma das principais empresas do segmento de transporte de cargas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {image.hasLabel && (
                <div className="absolute bottom-4 right-4 bg-[#1e3a8a] text-white px-4 py-2 rounded font-bold text-sm">
                  Parceiros de Sucesso
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1e3a8a] rounded-lg p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Faça Parte da Nossa Equipe
          </h3>
          <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
            Junte-se aos motoristas parceiros que já fazem parte da nossa equipe e começam a ganhar mais através de um parceria sólida
          </p>
          <a
            href="#cadastro"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-[#1e3a8a] font-bold px-10 py-4 rounded text-base transition-all transform hover:scale-105 shadow-lg"
          >
            Cadastre-se Agora
          </a>
        </div>
      </div>
    </section>
  );
}
