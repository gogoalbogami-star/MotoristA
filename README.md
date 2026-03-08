# Transportadora Ajofer - Landing Page

Landing page profissional para captação de motoristas/proprietários que desejam agregar caminhões à Transportadora Ajofer.

## Características

- Design responsivo e moderno
- Formulário de cadastro com validação
- Máscaras automáticas para CPF e placa
- Persistência de dados no Supabase
- Navegação suave por âncoras
- SEO otimizado

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Supabase (banco de dados)
- Vite
- Lucide React (ícones)

## Como rodar localmente

1. Instale as dependências:
```bash
npm install
```

2. As variáveis de ambiente já estão configuradas no arquivo `.env`

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse http://localhost:5173 no navegador

## Build para produção

```bash
npm run build
```

## Estrutura do projeto

```
src/
├── components/
│   ├── Header.tsx          # Menu de navegação fixo
│   ├── Hero.tsx            # Seção principal com CTAs
│   ├── Vantagens.tsx       # Cards de benefícios
│   ├── ComoFunciona.tsx    # Passo a passo
│   ├── Requisitos.tsx      # Lista de requisitos
│   ├── FormularioCadastro.tsx  # Formulário principal
│   └── Footer.tsx          # Rodapé com contatos
├── lib/
│   └── supabase.ts         # Cliente Supabase
├── App.tsx                 # Componente principal
└── main.tsx               # Ponto de entrada

```

## Banco de dados

Os cadastros são armazenados na tabela `cadastros_motoristas` do Supabase com os seguintes campos:

- nome_completo
- cpf
- cidade
- modelo_ano_caminhao
- placa_caminhao
- email
- status (pendente por padrão)
- created_at

## Personalização

Para personalizar informações de contato, edite o componente `Footer.tsx` e `Hero.tsx` (link do WhatsApp).

## Cores do tema

- Azul escuro: #1e3a8a
- Verde: #10b981
- Branco: #ffffff
