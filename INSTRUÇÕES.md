# Instruções de Personalização

## 1. Configurar número do WhatsApp

Edite o arquivo `src/components/Hero.tsx` na linha do link do WhatsApp:

```tsx
<a
  href="https://wa.me/5511999999999"  // ← Altere aqui com DDD + número
  target="_blank"
  rel="noopener noreferrer"
  ...
```

Formato: `https://wa.me/55` + DDD (2 dígitos) + número (9 dígitos)
Exemplo: `https://wa.me/5511987654321`

## 2. Atualizar informações de contato no rodapé

Edite o arquivo `src/components/Footer.tsx`:

- **Localização**: Procure por "São Paulo - SP" e altere
- **Telefone**: Procure por `tel:+5511000000000` e altere
- **E-mail**: Procure por `mailto:contato@ajofer.com.br` e altere

## 3. Ajustar cores do tema (opcional)

O site usa as seguintes cores principais:
- Azul escuro: `blue-900` (pode mudar para `blue-800` se preferir mais claro)
- Verde: `emerald-500` (pode mudar para `green-500`, `teal-500`, etc.)

Para alterar, faça busca e substituição nos arquivos de componentes.

## 4. Modificar textos e benefícios

### Vantagens (cards):
Edite `src/components/Vantagens.tsx` no array `vantagens`

### Como funciona (passos):
Edite `src/components/ComoFunciona.tsx` no array `passos`

### Requisitos:
Edite `src/components/Requisitos.tsx` no array `requisitos`

## 5. Ver cadastros enviados

Os cadastros ficam salvos no Supabase. Para visualizá-los:

1. Acesse o painel do Supabase
2. Vá em "Table Editor"
3. Selecione a tabela `cadastros_motoristas`
4. Você verá todos os cadastros com suas informações

## 6. Integração com e-mail (opcional)

Para receber notificações por e-mail quando houver um novo cadastro, você pode:

1. Criar uma Edge Function no Supabase que dispara quando há um INSERT
2. Usar serviços como SendGrid, Mailgun ou Resend
3. Configurar webhook para enviar dados para seu sistema

## 7. Deploy

O site está pronto para deploy. Você pode usar:

- **Vercel**: Conecte o repositório e faça deploy automático
- **Netlify**: Arraste a pasta `dist/` após rodar `npm run build`
- **Supabase Hosting**: Use o CLI do Supabase

Lembre-se de configurar as variáveis de ambiente no serviço de hospedagem.
