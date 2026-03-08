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
      alt: 'Motorista parceiro'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossa Frota e Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça a estrutura que faz da AJ Oferagregados uma das principais empresas do segmento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Faça Parte da Nossa Equipe
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se aos motoristas parceiros que já fazem parte da nossa equipe e começam a ganhar mais
          </p>
          <a
            href="#cadastro"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-5 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Cadastre-se Agora
          </a>
        </div>
      </div>
    </section>
  );
}
