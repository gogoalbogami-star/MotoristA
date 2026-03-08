import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';

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
      cpf: formData.get('cpf'),
      cidade: formData.get('cidade'),
      telefone: formData.get('telefone'),
      placa_caminhao: formData.get('placa'),
      email: formData.get('email'),
      modelo_ano_caminhao: formData.get('modelo_ano_caminhao') || ''
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
    <section id="cadastro" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cadastre-se agora
          </h2>
          <p className="text-base text-gray-600">
            Preencha o formulário e nossa equipe entrará em contato em breve
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

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="nome_completo" className="block text-sm font-medium text-gray-700 mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              id="nome_completo"
              name="nome_completo"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition text-sm"
              placeholder=""
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
                CPF *
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition text-sm"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-2">
                Cidade *
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition text-sm"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition text-sm"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="placa" className="block text-sm font-medium text-gray-700 mb-2">
                Placa do seu caminhão *
              </label>
              <input
                type="text"
                id="placa"
                name="placa"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition text-sm"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition text-sm"
              placeholder=""
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-4 px-6 rounded text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando cadastro...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar cadastro
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            * Campos obrigatórios
          </p>
        </form>
      </div>
    </section>
  );
}
