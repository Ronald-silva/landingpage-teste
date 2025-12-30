# Guia de Deploy - Landing Page Dra. Lara Kheir

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado) ⭐

**Vantagens**: Deploy automático, CDN global, SSL grátis, domínio customizado

**Passo a passo:**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel

# 4. Deploy para produção
vercel --prod
```

Ou através do GitHub:
1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Conecte seu repositório
5. Deploy automático a cada push!

### 2. Netlify

**Vantagens**: Interface simples, formulários gratuitos, redirects fáceis

**Passo a passo:**

```bash
# 1. Build do projeto
npm run build

# 2. Instalar Netlify CLI
npm i -g netlify-cli

# 3. Deploy
netlify deploy

# 4. Deploy para produção
netlify deploy --prod
```

Ou através do dashboard:
1. Acesse [netlify.com](https://netlify.com)
2. Drag & drop a pasta `dist` após o build

### 3. GitHub Pages

**Vantagens**: Gratuito, integração com GitHub

**Configuração:**

1. Adicione ao `package.json`:
```json
{
  "homepage": "https://seu-usuario.github.io/nome-repo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Instale gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

### 4. Hostinger / cPanel

**Para hospedagem tradicional:**

1. Build do projeto:
```bash
npm run build
```

2. Faça upload da pasta `dist` para o servidor via FTP

3. Configure o domínio para apontar para a pasta

4. Certifique-se de ter um arquivo `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔧 Configurações Importantes Antes do Deploy

### 1. Otimizar Imagens

- Substitua os placeholders por fotos reais
- Use formato WebP quando possível
- Comprima as imagens (TinyPNG, Squoosh)

### 2. Configurar Analytics

No arquivo `index.html`, adicione antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Meta Pixel (Facebook) -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 3. Configurar Domínio

Após deploy, configure seu domínio:

**DNS Records:**
- Tipo A: aponte para o IP do servidor
- Tipo CNAME: `www` aponta para domínio principal

**Vercel/Netlify:**
- Adicione o domínio customizado no dashboard
- Atualize os DNS conforme instruções

### 4. SSL Certificate

- **Vercel/Netlify**: SSL automático
- **cPanel**: Certifique-se de ativar Let's Encrypt

## 📊 Checklist Pré-Deploy

- [ ] Todas as fotos substituídas (sem placeholders)
- [ ] WhatsApp testado em todos os botões
- [ ] Links das redes sociais corretos
- [ ] Endereço e telefone atualizados
- [ ] Google Analytics configurado
- [ ] Meta Pixel configurado (se usar)
- [ ] Testes em mobile, tablet e desktop
- [ ] Verificar performance (Lighthouse)
- [ ] Testar formulários e calculadora
- [ ] SEO: title, description, OG tags
- [ ] Favicon customizado

## 🧪 Testes Pós-Deploy

1. **Funcionalidade**
   - [ ] Todos os links funcionando
   - [ ] WhatsApp abrindo corretamente
   - [ ] Calculadora calculando
   - [ ] Scroll suave funcionando
   - [ ] Accordions expandindo/colapsando

2. **Performance**
   - Execute Lighthouse audit
   - Meta: > 90 em Performance, Accessibility, SEO

3. **Responsividade**
   - Teste em iPhone (Safari)
   - Teste em Android (Chrome)
   - Teste em tablet
   - Teste em desktop

4. **SEO**
   - Verifique meta tags no código fonte
   - Teste compartilhamento no WhatsApp
   - Teste compartilhamento no Facebook
   - Google Search Console

## 🔄 Atualizações Futuras

**Workflow recomendado:**

1. Desenvolvimento local:
```bash
npm run dev
```

2. Teste as mudanças

3. Build de produção:
```bash
npm run build
```

4. Preview do build:
```bash
npm run preview
```

5. Se tudo OK, faça deploy:
```bash
vercel --prod
# ou
netlify deploy --prod
# ou
git push origin main (se configurado CI/CD)
```

## 🆘 Troubleshooting

### "Página em branco após deploy"

- Verifique se o build foi bem-sucedido
- Confira o caminho base no `vite.config.ts`
- Verifique o console do navegador para erros

### "Links não funcionam"

- Configure rewrites/redirects para SPA
- Vercel/Netlify fazem isso automaticamente

### "Imagens não carregam"

- Certifique-se de que as imagens estão na pasta `public`
- Ou importe diretamente nos componentes

### "WhatsApp não abre"

- Verifique o formato: `https://wa.me/5534999667834`
- Teste em diferentes navegadores

## 📞 Suporte

Para problemas técnicos ou dúvidas sobre deploy, consulte:
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentação Netlify: [docs.netlify.com](https://docs.netlify.com)
- Documentação Vite: [vitejs.dev](https://vitejs.dev)

---

**Boa sorte com o deploy! 🚀**
