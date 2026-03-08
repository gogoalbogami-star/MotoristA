import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LogOut, Users, Mail, Phone, Truck, MapPin, Calendar, Filter, Loader2, User } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Cadastro {
  id: string;
  nome_completo: string;
  cpf: string;
  cidade: string;
  telefone: string;
  placa_caminhao: string;
  modelo_ano_caminhao: string;
  email: string;
  status: string;
  created_at: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [cadastros, setCadastros] = useState<Cadastro[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string>('todos');

  useEffect(() => {
    loadCadastros();
  }, []);

  const loadCadastros = async () => {
    try {
      const { data, error } = await supabase
        .from('cadastros_motoristas')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCadastros(data || []);
    } catch (err) {
      console.error('Erro ao carregar cadastros:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const updateStatus = async (id: string, novoStatus: string) => {
    try {
      const { error } = await supabase
        .from('cadastros_motoristas')
        .update({ status: novoStatus })
        .eq('id', id);

      if (error) throw error;

      setCadastros(cadastros.map(c =>
        c.id === id ? { ...c, status: novoStatus } : c
      ));
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
    }
  };

  const cadastrosFiltrados = filtroStatus === 'todos'
    ? cadastros
    : cadastros.filter(c => c.status === filtroStatus);

  const stats = {
    total: cadastros.length,
    pendentes: cadastros.filter(c => c.status === 'pendente').length,
    aprovados: cadastros.filter(c => c.status === 'aprovado').length,
    rejeitados: cadastros.filter(c => c.status === 'rejeitado').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1e3a8a] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Painel Administrativo</h1>
              <p className="text-blue-100 mt-1">Gerenciamento de Cadastros de Motoristas</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pendentes</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.pendentes}</p>
              </div>
              <Filter className="w-12 h-12 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Aprovados</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{stats.aprovados}</p>
              </div>
              <Truck className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Rejeitados</p>
                <p className="text-3xl font-bold text-red-600 mt-1">{stats.rejeitados}</p>
              </div>
              <Filter className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              >
                <option value="todos">Todos os cadastros</option>
                <option value="pendente">Pendentes</option>
                <option value="aprovado">Aprovados</option>
                <option value="rejeitado">Rejeitados</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-[#1e3a8a]" />
            </div>
          ) : cadastrosFiltrados.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Nenhum cadastro encontrado</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Motorista
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Caminhão
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cadastrosFiltrados.map((cadastro) => (
                    <tr key={cadastro.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <User className="w-10 h-10 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {cadastro.nome_completo}
                            </div>
                            <div className="text-sm text-gray-500">
                              CPF: {cadastro.cpf}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {cadastro.cidade}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {cadastro.telefone}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {cadastro.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 flex items-center gap-2">
                          <Truck className="w-4 h-4 text-gray-400" />
                          {cadastro.placa_caminhao}
                        </div>
                        {cadastro.modelo_ano_caminhao && (
                          <div className="text-sm text-gray-500 mt-1">
                            {cadastro.modelo_ano_caminhao}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(cadastro.created_at).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {new Date(cadastro.created_at).toLocaleTimeString('pt-BR')}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          cadastro.status === 'aprovado'
                            ? 'bg-green-100 text-green-800'
                            : cadastro.status === 'rejeitado'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {cadastro.status.charAt(0).toUpperCase() + cadastro.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={cadastro.status}
                          onChange={(e) => updateStatus(cadastro.id, e.target.value)}
                          className="text-sm px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                        >
                          <option value="pendente">Pendente</option>
                          <option value="aprovado">Aprovar</option>
                          <option value="rejeitado">Rejeitar</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
