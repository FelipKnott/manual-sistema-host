// Modal functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Dados do modal para cada seção
const modalData = {
  'emissor-nfe': {
    title: 'Emissor NFe',
    subtitle: 'Emissão de Notas Fiscais Eletrônicas',
    content: `
      <div class="modal-header">
        <h2>Emissor NFe</h2>
        <p>Emissão de notas fiscais eletrônicas com validação automática</p>
      </div>
      <img src="./images/emissor-nfe.jpg" alt="Emissor NFe">
      <div class="modal-steps">
        <h3>Como usar o Emissor NFe:</h3>
        <ol>
          <li>Acesse o menu "Fiscal" no sistema</li>
          <li>Selecione "Emissor NFe"</li>
          <li>Preencha os dados do cliente</li>
          <li>Adicione os produtos da venda</li>
          <li>Configure as informações fiscais</li>
          <li>Valide e emita a nota fiscal</li>
        </ol>
      </div>
      <p><strong>Recursos:</strong> Validação automática de dados, integração com SEFAZ, geração de XML, impressão de DANFE.</p>
    `
  },
  'dav': {
    title: 'DAV',
    subtitle: 'Documento Auxiliar de Venda',
    content: `
      <div class="modal-header">
        <h2>DAV</h2>
        <p>Documento auxiliar de venda para controle de vendas</p>
      </div>
      <img src="./images/dav-prevenda.jpg" alt="DAV">
      <div class="modal-steps">
        <h3>Como usar o DAV:</h3>
        <ol>
          <li>Acesse o menu "Vendas"</li>
          <li>Selecione "DAV - Documento Auxiliar de Venda"</li>
          <li>Escaneie ou digite o código do produto</li>
          <li>Informe a quantidade</li>
          <li>Aplique descontos se necessário</li>
          <li>Finalize a venda</li>
        </ol>
      </div>
      <p><strong>Recursos:</strong> Controle de estoque automático, impressão de comprovante, integração com balanças.</p>
    `
  },
  'clientes': {
    title: 'Cadastro de Clientes',
    subtitle: 'Gestão completa de clientes',
    content: `
      <div class="modal-header">
        <h2>Cadastro de Clientes</h2>
        <p>Cadastro completo de clientes com dados fiscais e comerciais</p>
      </div>
      <img src="./images/cadastro-clientes.jpg" alt="Cadastro de Clientes">
      <div class="modal-steps">
        <h3>Como cadastrar um cliente:</h3>
        <ol>
          <li>Acesse "Cadastros" > "Clientes"</li>
          <li>Clique em "Novo Cliente"</li>
          <li>Preencha os dados pessoais</li>
          <li>Informe o CPF/CNPJ</li>
          <li>Adicione endereço completo</li>
          <li>Configure dados fiscais</li>
          <li>Salve o cadastro</li>
        </ol>
      </div>
      <p><strong>Recursos:</strong> Validação de CPF/CNPJ, busca por CEP, histórico de compras, limite de crédito.</p>
    `
  },
  'produtos': {
    title: 'Cadastro de Produtos',
    subtitle: 'Gestão de produtos e estoque',
    content: `
      <div class="modal-header">
        <h2>Cadastro de Produtos</h2>
        <p>Gestão de produtos com códigos de barras e preços</p>
      </div>
      <img src="./images/cadastro-produtos.jpg" alt="Cadastro de Produtos">
      <div class="modal-steps">
        <h3>Como cadastrar um produto:</h3>
        <ol>
          <li>Acesse "Cadastros" > "Produtos"</li>
          <li>Clique em "Novo Produto"</li>
          <li>Informe o código de barras</li>
          <li>Digite a descrição do produto</li>
          <li>Configure preços de venda</li>
          <li>Defina estoque mínimo</li>
          <li>Configure impostos</li>
          <li>Salve o produto</li>
        </ol>
      </div>
      <p><strong>Recursos:</strong> Código de barras, controle de estoque, múltiplos preços, categorização.</p>
    `
  },
  'vendedores': {
    title: 'Vendedores',
    subtitle: 'Cadastro e gestão de vendedores e comissões',
    content: `
      <div class="modal-header">
        <h2>Vendedores</h2>
        <p>Cadastro e gestão de vendedores e comissões</p>
      </div>
      <img src="./images/novo-vendedor.jpg" alt="Vendedores">
      <div class="modal-steps">
        <h3>Como cadastrar um vendedor:</h3>
        <ol>
          <li>Acesse "Cadastros" > "Vendedores"</li>
          <li>Clique em "Novo Vendedor"</li>
          <li>Preencha os dados pessoais</li>
          <li>Configure a comissão</li>
          <li>Defina a meta de vendas</li>
          <li>Salve o cadastro</li>
        </ol>
      </div>
      <p><strong>Recursos:</strong> Controle de comissões, metas de vendas, relatórios de performance, histórico de vendas.</p>
    `
  },
  'tecnicos': {
    title: 'Técnicos',
    subtitle: 'Controle de técnicos para serviços e manutenções',
    content: `
      <div class="modal-header">
        <h2>Técnicos</h2>
        <p>Controle de técnicos para serviços e manutenções</p>
      </div>
      <img src="./images/cadastrar-tecnico.jpg" alt="Técnicos">
      <div class="modal-steps">
        <h3>Como cadastrar um técnico:</h3>
        <ol>
          <li>Acesse "Cadastros" > "Técnicos"</li>
          <li>Clique em "Novo Técnico"</li>
          <li>Preencha os dados pessoais</li>
          <li>Informe as especialidades</li>
          <li>Configure a disponibilidade</li>
          <li>Salve o cadastro</li>
        </ol>
      </div>
      <p><strong>Recursos:</strong> Controle de especialidades, agenda de serviços, relatórios de atendimento, histórico de manutenções.</p>
    `
  },
  'contato-suporte': {
    title: 'Contato Suporte',
    subtitle: 'Alphatech Sistemas',
    content: `
      <div class="modal-header">
        <h2>Contato Suporte</h2>
        <p>Alphatech Sistemas - Suporte Técnico Especializado</p>
      </div>
      <div class="contact-info">
        <img src="./images/alphatech_sistema.jpeg" alt="Alphatech Sistemas" style="width: 120px; height: 120px; border-radius: 16px; margin-bottom: 20px;">
        <h3>Alphatech Sistemas</h3>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <span><strong>Telefone:</strong> (81) 99594-5522</span>
        </div>
        <div class="contact-item">
          <i class="fab fa-whatsapp"></i>
          <span><strong>WhatsApp:</strong> (81) 99594-5522</span>
        </div>
        <div class="contact-item">
          <i class="fas fa-clock"></i>
          <span><strong>Horário de Atendimento:</strong></span>
        </div>
        <div style="margin: 10px 0; padding: 15px; background: white; border-radius: 8px;">
          <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
          <p><strong>Sábados e Domingos:</strong> 8h às 14h</p>
        </div>
        <a href="https://wa.me/5581995945522" class="whatsapp-link" target="_blank">
          <i class="fab fa-whatsapp"></i> Falar no WhatsApp
        </a>
      </div>
      <div class="modal-steps">
        <h3>Como solicitar suporte:</h3>
        <ol>
          <li>Entre em contato pelo WhatsApp ou telefone</li>
          <li>Informe o problema ou dúvida</li>
          <li>Forneça dados do sistema (versão, CNPJ)</li>
          <li>Nossa equipe técnica irá atendê-lo</li>
          <li>Suporte remoto disponível quando necessário</li>
        </ol>
      </div>
    `
  },
  'backup-sistema': {
    title: 'Backup do Sistema',
    subtitle: 'Segurança dos dados',
    content: `
      <div class="modal-header">
        <h2>Backup do Sistema</h2>
        <p>Realizar backup completo do sistema</p>
      </div>
      <img src="./images/backup.jpg" alt="Backup do Sistema">
      <div class="modal-steps">
        <h3>Como realizar backup:</h3>
        <ol>
          <li>Acesse "Utilitários" > "Backup"</li>
          <li>Selecione "Backup Completo"</li>
          <li>Escolha o local de destino</li>
          <li>Confirme a operação</li>
          <li>Aguarde a conclusão</li>
          <li>Verifique se o arquivo foi criado</li>
        </ol>
      </div>
      <p><strong>Importante:</strong> Realize backup diariamente para garantir a segurança dos dados.</p>
    `
  },
  'op-fiscal': {
    title: 'Operações Fiscais',
    subtitle: 'Gestão completa de operações fiscais e tributárias',
    content: `
      <div class="modal-header">
        <h2>Operações Fiscais</h2>
        <p>Gestão completa de operações fiscais e tributárias.</p>
      </div>
      <img src="./images/op-fiscal.jpg" alt="Operações Fiscais">
      <div class="modal-steps">
        <h3>Como acessar:</h3>
        <ol>
          <li>Acesse o menu Fiscal</li>
          <li>Selecione a opção desejada</li>
          <li>Preencha os dados fiscais</li>
        </ol>
      </div>
    `
  },
  'backup': {
    title: 'Backup',
    subtitle: 'Sistema de backup automático',
    content: `
      <div class="modal-header">
        <h2>Backup</h2>
        <p>Sistema de backup automático para segurança dos dados.</p>
      </div>
      <img src="./images/backup.jpg" alt="Backup">
      <div class="modal-steps">
        <h3>Como realizar backup:</h3>
        <ol>
          <li>Acesse Utilitários > Backup</li>
          <li>Escolha o tipo de backup</li>
          <li>Confirme e aguarde a conclusão</li>
        </ol>
      </div>
    `
  },
  'estrangeiros': {
    title: 'Clientes Estrangeiros',
    subtitle: 'Cadastro específico para clientes estrangeiros',
    content: `
      <div class="modal-header">
        <h2>Clientes Estrangeiros</h2>
        <p>Cadastro específico para clientes estrangeiros.</p>
      </div>
      <img src="./images/cadastro-extrangeiro.jpg" alt="Clientes Estrangeiros">
      <div class="modal-steps">
        <h3>Como cadastrar:</h3>
        <ol>
          <li>Acesse Cadastros > Clientes Estrangeiros</li>
          <li>Preencha os dados obrigatórios</li>
          <li>Salve o cadastro</li>
        </ol>
      </div>
    `
  },
  'contador': {
    title: 'Dados Contador',
    subtitle: 'Configuração de dados do contador responsável',
    content: `
      <div class="modal-header">
        <h2>Dados Contador</h2>
        <p>Configuração de dados do contador responsável.</p>
      </div>
      <img src="./images/dados-contador.jpg" alt="Dados Contador">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Dados do Contador</li>
          <li>Preencha os dados do contador</li>
          <li>Salve as informações</li>
        </ol>
      </div>
    `
  },
  'vendas-periodo': {
    title: 'Vendas por Período',
    subtitle: 'Consulta de vendas realizadas em períodos específicos',
    content: `
      <div class="modal-header">
        <h2>Vendas por Período</h2>
        <p>Consulta de vendas realizadas em períodos específicos.</p>
      </div>
      <img src="./images/vendas-periodo-normal.jpg" alt="Vendas por Período">
      <div class="modal-steps">
        <h3>Como consultar:</h3>
        <ol>
          <li>Acesse Relatórios > Vendas por Período</li>
          <li>Selecione o intervalo de datas</li>
          <li>Visualize ou exporte o relatório</li>
        </ol>
      </div>
    `
  },
  'desconto-venda': {
    title: 'Desconto na Venda',
    subtitle: 'Aplicação de descontos em vendas e orçamentos',
    content: `
      <div class="modal-header">
        <h2>Desconto na Venda</h2>
        <p>Aplicação de descontos em vendas e orçamentos.</p>
      </div>
      <img src="./images/desconto-venda.jpg" alt="Desconto na Venda">
      <div class="modal-steps">
        <h3>Como aplicar desconto:</h3>
        <ol>
          <li>Durante a venda, clique em "Desconto"</li>
          <li>Informe o valor ou percentual</li>
          <li>Confirme para aplicar</li>
        </ol>
      </div>
    `
  },
  'desconto-item': {
    title: 'Desconto por Item',
    subtitle: 'Desconto específico em itens individuais da venda',
    content: `
      <div class="modal-header">
        <h2>Desconto por Item</h2>
        <p>Desconto específico em itens individuais da venda.</p>
      </div>
      <img src="./images/desconto-item.jpg" alt="Desconto por Item">
      <div class="modal-steps">
        <h3>Como aplicar desconto por item:</h3>
        <ol>
          <li>Selecione o item desejado</li>
          <li>Clique em "Desconto por Item"</li>
          <li>Informe o valor ou percentual</li>
          <li>Confirme para aplicar</li>
        </ol>
      </div>
    `
  },
  'orcamentos': {
    title: 'Orçamentos',
    subtitle: 'Criação e gestão de orçamentos para clientes',
    content: `
      <div class="modal-header">
        <h2>Orçamentos</h2>
        <p>Criação e gestão de orçamentos para clientes.</p>
      </div>
      <img src="./images/orc.jpg" alt="Orçamentos">
      <div class="modal-steps">
        <h3>Como criar um orçamento:</h3>
        <ol>
          <li>Acesse Vendas > Orçamentos</li>
          <li>Clique em "Novo Orçamento"</li>
          <li>Adicione produtos e condições</li>
          <li>Salve e imprima se necessário</li>
        </ol>
      </div>
    `
  },
  'cancelar-venda': {
    title: 'Cancelar Venda',
    subtitle: 'Cancelamento de vendas e documentos fiscais',
    content: `
      <div class="modal-header">
        <h2>Cancelar Venda</h2>
        <p>Cancelamento de vendas e documentos fiscais.</p>
      </div>
      <img src="./images/cancelar-venda-nfce.jpg" alt="Cancelar Venda">
      <div class="modal-steps">
        <h3>Como cancelar:</h3>
        <ol>
          <li>Acesse Vendas > Cancelar Venda</li>
          <li>Selecione a venda a ser cancelada</li>
          <li>Confirme o cancelamento</li>
        </ol>
      </div>
    `
  },
  'importar-venda': {
    title: 'Importar Venda',
    subtitle: 'Importação de vendas do DAV para NFCe',
    content: `
      <div class="modal-header">
        <h2>Importar Venda</h2>
        <p>Importação de vendas do DAV para NFCe.</p>
      </div>
      <img src="./images/import-venda-dav-nfce.jpg" alt="Importar Venda">
      <div class="modal-steps">
        <h3>Como importar:</h3>
        <ol>
          <li>Acesse Vendas > Importar Venda</li>
          <li>Selecione o arquivo DAV</li>
          <li>Confirme a importação</li>
        </ol>
      </div>
    `
  },
  'contas-receber': {
    title: 'Contas a Receber',
    subtitle: 'Gestão de contas a receber e recebimentos',
    content: `
      <div class="modal-header">
        <h2>Contas a Receber</h2>
        <p>Gestão de contas a receber e recebimentos.</p>
      </div>
      <img src="./images/contas-receber.jpg" alt="Contas a Receber">
      <div class="modal-steps">
        <h3>Como acessar:</h3>
        <ol>
          <li>Acesse Financeiro > Contas a Receber</li>
          <li>Visualize e gerencie os recebimentos</li>
        </ol>
      </div>
    `
  },
  'form-boleto': {
    title: 'Formulário de Boleto',
    subtitle: 'Configuração e emissão de boletos bancários',
    content: `
      <div class="modal-header">
        <h2>Formulário de Boleto</h2>
        <p>Configuração e emissão de boletos bancários.</p>
      </div>
      <img src="./images/form-boleto.jpg" alt="Formulário de Boleto">
      <div class="modal-steps">
        <h3>Como emitir boleto:</h3>
        <ol>
          <li>Acesse Financeiro > Boletos</li>
          <li>Preencha os dados do boleto</li>
          <li>Imprima ou envie ao cliente</li>
        </ol>
      </div>
    `
  },
  'conf-boleto': {
    title: 'Configurar Boleto',
    subtitle: 'Configurações para emissão de boletos',
    content: `
      <div class="modal-header">
        <h2>Configurar Boleto</h2>
        <p>Configurações para emissão de boletos.</p>
      </div>
      <img src="./images/conf-boleto.jpg" alt="Configurar Boleto">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Financeiro > Configurar Boleto</li>
          <li>Preencha os dados bancários</li>
          <li>Salve as configurações</li>
        </ol>
      </div>
    `
  },
  'new-boleto': {
    title: 'Novo Boleto',
    subtitle: 'Criação de novos boletos bancários',
    content: `
      <div class="modal-header">
        <h2>Novo Boleto</h2>
        <p>Criação de novos boletos bancários.</p>
      </div>
      <img src="./images/new-boleto.jpg" alt="Novo Boleto">
      <div class="modal-steps">
        <h3>Como criar:</h3>
        <ol>
          <li>Acesse Financeiro > Novo Boleto</li>
          <li>Preencha os dados</li>
          <li>Imprima ou envie ao cliente</li>
        </ol>
      </div>
    `
  },
  'forma-pagamento': {
    title: 'Forma de Pagamento',
    subtitle: 'Configuração de formas de pagamento',
    content: `
      <div class="modal-header">
        <h2>Forma de Pagamento</h2>
        <p>Configuração de formas de pagamento.</p>
      </div>
      <img src="./images/form-pag-boleto.jpg" alt="Forma de Pagamento">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Financeiro > Formas de Pagamento</li>
          <li>Adicione ou edite as formas disponíveis</li>
        </ol>
      </div>
    `
  },
  'juros-multas': {
    title: 'Juros e Multas',
    subtitle: 'Configuração de juros e multas em contas',
    content: `
      <div class="modal-header">
        <h2>Juros e Multas</h2>
        <p>Configuração de juros e multas em contas.</p>
      </div>
      <img src="./images/juros-cr.jpg" alt="Juros e Multas">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Financeiro > Juros e Multas</li>
          <li>Defina os percentuais</li>
          <li>Salve as configurações</li>
        </ol>
      </div>
    `
  },
  'relatorio-vendas': {
    title: 'Relatório de Vendas',
    subtitle: 'Relatórios detalhados de vendas por período',
    content: `
      <div class="modal-header">
        <h2>Relatório de Vendas</h2>
        <p>Relatórios detalhados de vendas por período.</p>
      </div>
      <img src="./images/vendas-periodo-relatorio.jpg" alt="Relatório de Vendas">
      <div class="modal-steps">
        <h3>Como gerar relatório:</h3>
        <ol>
          <li>Acesse Relatórios > Vendas</li>
          <li>Selecione o período desejado</li>
          <li>Visualize ou exporte o relatório</li>
        </ol>
      </div>
    `
  },
  'produtos-vendidos': {
    title: 'Produtos Vendidos',
    subtitle: 'Relatório de produtos mais vendidos',
    content: `
      <div class="modal-header">
        <h2>Produtos Vendidos</h2>
        <p>Relatório de produtos mais vendidos.</p>
      </div>
      <img src="./images/produtos-vendidos-relatorio.jpg" alt="Produtos Vendidos">
      <div class="modal-steps">
        <h3>Como acessar:</h3>
        <ol>
          <li>Acesse Relatórios > Produtos Vendidos</li>
          <li>Visualize os dados</li>
        </ol>
      </div>
    `
  },
  'movimento-produtos': {
    title: 'Movimento de Produtos',
    subtitle: 'Controle de movimento de produtos no estoque',
    content: `
      <div class="modal-header">
        <h2>Movimento de Produtos</h2>
        <p>Controle de movimento de produtos no estoque.</p>
      </div>
      <img src="./images/produtos-vendidos-movimento.jpg" alt="Movimento de Produtos">
      <div class="modal-steps">
        <h3>Como consultar:</h3>
        <ol>
          <li>Acesse Relatórios > Movimento de Produtos</li>
          <li>Selecione o período</li>
        </ol>
      </div>
    `
  },
  'curva-abc': {
    title: 'Curva ABC',
    subtitle: 'Análise de produtos por importância comercial',
    content: `
      <div class="modal-header">
        <h2>Curva ABC</h2>
        <p>Análise de produtos por importância comercial.</p>
      </div>
      <img src="./images/curva-abc.jpg" alt="Curva ABC">
      <div class="modal-steps">
        <h3>Como acessar:</h3>
        <ol>
          <li>Acesse Relatórios > Curva ABC</li>
          <li>Visualize a análise</li>
        </ol>
      </div>
    `
  },
  'relatorio-raio': {
    title: 'Relatório Raio',
    subtitle: 'Relatório de vendas por região geográfica',
    content: `
      <div class="modal-header">
        <h2>Relatório Raio</h2>
        <p>Relatório de vendas por região geográfica.</p>
      </div>
      <img src="./images/raio.jpg" alt="Relatório Raio">
      <div class="modal-steps">
        <h3>Como acessar:</h3>
        <ol>
          <li>Acesse Relatórios > Relatório Raio</li>
          <li>Selecione a região</li>
        </ol>
      </div>
    `
  },
  'inventario': {
    title: 'Inventário',
    subtitle: 'Controle de inventário e estoque',
    content: `
      <div class="modal-header">
        <h2>Inventário</h2>
        <p>Controle de inventário e estoque.</p>
      </div>
      <img src="./images/invent.jpg" alt="Inventário">
      <div class="modal-steps">
        <h3>Como acessar:</h3>
        <ol>
          <li>Acesse Relatórios > Inventário</li>
          <li>Visualize o estoque atual</li>
        </ol>
      </div>
    `
  },
  'conf-certificado': {
    title: 'Configurar Certificado',
    subtitle: 'Configuração de certificados digitais',
    content: `
      <div class="modal-header">
        <h2>Configurar Certificado</h2>
        <p>Configuração de certificados digitais.</p>
      </div>
      <img src="./images/conf-cert.jpg" alt="Configurar Certificado">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Certificados</li>
          <li>Adicione ou atualize o certificado</li>
        </ol>
      </div>
    `
  },
  'select-banco': {
    title: 'Selecionar Banco',
    subtitle: 'Configuração de banco de dados',
    content: `
      <div class="modal-header">
        <h2>Selecionar Banco</h2>
        <p>Configuração de banco de dados.</p>
      </div>
      <img src="./images/select-banco.jpg" alt="Selecionar Banco">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Banco de Dados</li>
          <li>Selecione o banco desejado</li>
        </ol>
      </div>
    `
  },
  'config-etiqueta': {
    title: 'Configurar Etiqueta',
    subtitle: 'Configuração de impressão de etiquetas',
    content: `
      <div class="modal-header">
        <h2>Configurar Etiqueta</h2>
        <p>Configuração de impressão de etiquetas.</p>
      </div>
      <img src="./images/config-etiqueta.jpg" alt="Configurar Etiqueta">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Etiquetas</li>
          <li>Defina o layout e impressora</li>
        </ol>
      </div>
    `
  },
  'config-checkout': {
    title: 'Configurar Checkout',
    subtitle: 'Configurações de checkout e pagamento',
    content: `
      <div class="modal-header">
        <h2>Configurar Checkout</h2>
        <p>Configurações de checkout e pagamento.</p>
      </div>
      <img src="./images/config_checkout.png" alt="Configurar Checkout">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Checkout</li>
          <li>Defina as opções de pagamento</li>
        </ol>
      </div>
    `
  },
  'gera-balanca': {
    title: 'Gerar Balança',
    subtitle: 'Configuração de balanças e pesagem',
    content: `
      <div class="modal-header">
        <h2>Gerar Balança</h2>
        <p>Configuração de balanças e pesagem.</p>
      </div>
      <img src="./images/gera-balanca.jpg" alt="Gerar Balança">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Balança</li>
          <li>Selecione o modelo e configure</li>
        </ol>
      </div>
    `
  },
  'medidas-etiqueta': {
    title: 'Medidas de Etiqueta',
    subtitle: 'Configuração de medidas para etiquetas',
    content: `
      <div class="modal-header">
        <h2>Medidas de Etiqueta</h2>
        <p>Configuração de medidas para etiquetas.</p>
      </div>
      <img src="./images/medidas-etiqueta.jpg" alt="Medidas de Etiqueta">
      <div class="modal-steps">
        <h3>Como configurar:</h3>
        <ol>
          <li>Acesse Configurações > Etiquetas</li>
          <li>Defina as medidas conforme a impressora</li>
        </ol>
      </div>
    `
  }
};

// Modal functionality
function openModal(modalId) {
  const data = modalData[modalId];
  if (data) {
    modalBody.innerHTML = data.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModalFunc() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event listeners para cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    if (modalId) {
      openModal(modalId);
    }
  });
});

// Fechar modal
closeModal.addEventListener('click', closeModalFunc);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModalFunc();
  }
});

// Scroll suave para seções
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Smooth scroll para links de navegação
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    scrollToSection(targetId);
  });
});

// Animações de entrada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card').forEach(card => {
  observer.observe(card);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Animar cards na entrada
  setTimeout(() => {
    document.querySelectorAll('.feature-card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 300);
}); 




