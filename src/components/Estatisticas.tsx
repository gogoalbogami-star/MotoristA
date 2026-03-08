export default function Estatisticas() {
  const stats = [
    {
      value: '+500',
      label: 'Motoristas Parceiros'
    },
    {
      value: '+15',
      label: 'Anos de experiência'
    },
    {
      value: '100%',
      label: 'Pagamento em dia'
    }
  ];

  return (
    <section className="py-12 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-gray-800">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
