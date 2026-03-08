import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Truck, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Cadastro() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const dados = {
      nome_completo: formData.get('nome_completo'),
      telefone: formData.get('telefone'),
      email: formData.get('email'),
      cidade: formData.get('cidade'),
      tipo_veiculo: formData.get('tipo_veiculo'),
      placa: formData.get('placa'),
      categoria_cnh: formData.get('categoria_cnh'),
      observacoes: formData.get('observacoes')
    };

    try {
      const { error: dbError } = await supabase
        .from('cadastros_motoristas')
        .insert([dados]);

      if (dbError) throw dbError;

      setSuccess(true);
      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Erro ao enviar cadastro. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cadastro" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Faça seu cadastro
          </h2>
          <p className="text-xl text-gray-600">
            Preencha o formulário e entraremos em contato em até 24 horas
          </p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-emerald-800 font-semibold">Cadastro enviado com sucesso!</p>
              <p className="text-emerald-700 text-sm">Entraremos em contato em breve.</p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label htmlFor="nome_completo" className="block text-sm font-semibold text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome_completo"
              name="nome_completo"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cidade" className="block text-sm font-semibold text-gray-700 mb-2">
              Cidade *
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Sua cidade"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tipo_veiculo" className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo de Veículo *
              </label>
              <select
                id="tipo_veiculo"
                name="tipo_veiculo"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Selecione...</option>
                <option value="Caminhão Toco">Caminhão Toco</option>
                <option value="Caminhão Truck">Caminhão Truck</option>
                <option value="Carreta">Carreta</option>
                <option value="Bitrem">Bitrem</option>
                <option value="VUC">VUC</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="placa" className="block text-sm font-semibold text-gray-700 mb-2">
                Placa do Veículo *
              </label>
              <input
                type="text"
                id="placa"
                name="placa"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="ABC-1234"
              />
            </div>
          </div>

          <div>
            <label htmlFor="categoria_cnh" className="block text-sm font-semibold text-gray-700 mb-2">
              Categoria da CNH *
            </label>
            <select
              id="categoria_cnh"
              name="categoria_cnh"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              <option value="">Selecione...</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>

          <div>
            <label htmlFor="observacoes" className="block text-sm font-semibold text-gray-700 mb-2">
              Observações
            </label>
            <textarea
              id="observacoes"
              name="observacoes"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              placeholder="Conte-nos mais sobre você e sua experiência..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Enviar cadastro
              </>
            )}
          </button>

          <p className="text-sm text-gray-500 text-center">
            * Campos obrigatórios
          </p>
        </form>
      </div>
    </section>
  );
}
