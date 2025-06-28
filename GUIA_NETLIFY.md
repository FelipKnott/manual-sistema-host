# 🚀 Guia Completo - Hospedando na Netlify

## 📋 Pré-requisitos
- Conta no Netlify (gratuita)
- Todos os arquivos do manual prontos

## 🎯 Passo a Passo Detalhado

### **Passo 1: Criar conta no Netlify**
1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Sign up"**
3. Escolha uma opção:
   - **GitHub** (recomendado)
   - **GitLab**
   - **Email**

### **Passo 2: Fazer o Deploy**
1. Faça login no Netlify
2. Na tela inicial, você verá uma área para **"Drag and drop your site output folder here"**
3. **Arraste toda a pasta** `manual_interativo_corrigido/` para essa área
4. Aguarde o upload e processamento

### **Passo 3: Configurar o Site**
1. Após o upload, o Netlify fornecerá um domínio automático
2. Clique em **"Site settings"**
3. Em **"Site information"**, clique em **"Change site name"**
4. Digite: `manual-sistema-host`
5. Clique **"Save"**

### **Passo 4: Verificar o Deploy**
1. O site estará disponível em: `https://manual-sistema-host.netlify.app`
2. Teste todos os links e funcionalidades
3. Verifique se as imagens carregam corretamente

## 🔧 Configurações Avançadas

### **Configurar Domínio Personalizado (Opcional)**
1. Vá em **"Site settings"** > **"Domain management"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: `manual.alphatech.com.br`)
4. Configure os DNS conforme instruções

### **Configurar HTTPS**
- ✅ **Automático** - O Netlify já fornece HTTPS
- ✅ **Certificado SSL** - Renovação automática

## 📱 Testando o Site

### **Testes Recomendados:**
- ✅ Abrir em diferentes navegadores
- ✅ Testar em dispositivos móveis
- ✅ Verificar todos os modais dos cards
- ✅ Testar navegação entre seções
- ✅ Verificar links do WhatsApp

### **URLs para Testar:**
- **Página inicial:** `https://manual-sistema-host.netlify.app/`
- **Manual direto:** `https://manual-sistema-host.netlify.app/Manual_Completo_Sistema_Host.html`

## 🔄 Atualizações Futuras

### **Método 1: Upload Manual**
1. Faça as alterações localmente
2. Faça upload novamente arrastando a pasta
3. O site será atualizado automaticamente

### **Método 2: GitHub (Recomendado)**
1. Faça upload dos arquivos para um repositório GitHub
2. No Netlify, vá em **"Site settings"** > **"Build & deploy"**
3. Conecte com o repositório GitHub
4. Configure deploy automático

## 🎨 Personalizações

### **Alterar Nome do Site:**
- Vá em **"Site settings"** > **"Site information"**
- Altere o **"Site name"**

### **Adicionar Favicon:**
- Adicione um arquivo `favicon.ico` na pasta raiz
- O Netlify detectará automaticamente

### **Configurar Analytics:**
- Vá em **"Site settings"** > **"Analytics"**
- Ative o Google Analytics se desejar

## 🆘 Solução de Problemas

### **Problema: Imagens não carregam**
**Solução:** Verifique se a pasta `images/` foi incluída no upload

### **Problema: Links quebrados**
**Solução:** Verifique se todos os arquivos estão na pasta correta

### **Problema: Modal não funciona**
**Solução:** Verifique se o JavaScript está carregando corretamente

### **Problema: Site não atualiza**
**Solução:** Aguarde alguns minutos ou force um novo deploy

## 📞 Suporte

### **Contato Alphatech:**
- **Telefone:** (81) 99594-5522
- **WhatsApp:** (81) 99594-5522
- **Horário:** Seg-Sex: 8h-18h | Sáb-Dom: 8h-14h

### **Suporte Netlify:**
- **Documentação:** [docs.netlify.com](https://docs.netlify.com)
- **Comunidade:** [community.netlify.com](https://community.netlify.com)

## ✅ Checklist Final

- [ ] Conta Netlify criada
- [ ] Arquivos enviados
- [ ] Site funcionando
- [ ] Links testados
- [ ] Mobile testado
- [ ] WhatsApp funcionando
- [ ] Domínio configurado
- [ ] HTTPS ativo

---

**🎉 Parabéns! Seu manual está online!**

**URL Final:** `https://manual-sistema-host.netlify.app`

**Desenvolvido por:** Alphatech Sistemas  
**Contato:** (81) 99594-5522 