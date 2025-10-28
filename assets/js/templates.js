// assets/js/templates.js

const templates = {
  inicio: `
    <section class="hero">
      <div class="hero-text">
        <h2>Preservar hoje para um amanhã mais verde</h2>
        <p>O <strong>Projeto Vida Verde</strong> promove ações de reflorestamento, educação ambiental e sustentabilidade urbana. Junte-se a nós e ajude a construir um futuro melhor para todos.</p>
        <a href="#" class="btn" data-page="cadastro">Seja um voluntário</a>
      </div>
    </section>

    <section class="sobre-preview">
      <h2>Quem Somos</h2>
      <p>Somos uma organização sem fins lucrativos dedicada à preservação ambiental e ao reflorestamento urbano. Atuamos em parceria com comunidades, escolas e empresas para promover uma cultura de respeito e cuidado com a natureza.</p>
      <a href="#" class="btn-secundario" data-page="sobre">Saiba mais</a>
    </section>

    <section class="projetos-preview">
      <h2>Nossos Projetos</h2>
      <div class="projetos-grid">
        <div class="card">
          <h3>Refloresta São Paulo</h3>
          <p>Campanha de reflorestamento em áreas urbanas da capital paulista. Mais de 3.000 mudas plantadas.</p>
          <span class="badge andamento">Em andamento</span>
        </div>

        <div class="card">
          <h3>Água Limpa</h3>
          <p>Projeto de educação ambiental sobre uso consciente da água e descarte de resíduos.</p>
          <span class="badge concluido">Concluído</span>
        </div>

        <div class="card">
          <h3>Ciclo Verde</h3>
          <p>Oficinas de reciclagem e compostagem para famílias de baixa renda em bairros periféricos.</p>
          <span class="badge andamento">Em andamento</span>
        </div>
      </div>
    </section>
  `,

  andamento: `
    <section class="projetos andamento">
      <h2>Projetos em Andamento</h2>
      <ul>
        <li><strong>Reflorestar é Viver:</strong> recuperação de áreas degradadas com espécies nativas.</li>
        <li><strong>Coleta Consciente:</strong> campanha de reciclagem nos bairros parceiros.</li>
        <li><strong>Educação Verde:</strong> palestras e oficinas em escolas públicas.</li>
      </ul>
    </section>
  `,

  concluidos: `
    <section class="projetos concluidos">
      <h2>Projetos Concluídos</h2>
      <ul>
        <li><strong>Verde no Bairro:</strong> revitalização de praças e hortas comunitárias.</li>
        <li><strong>Água Limpa:</strong> ação de limpeza e preservação de rios locais.</li>
        <li><strong>Reciclar é Transformar:</strong> capacitação de catadores e cooperativas locais.</li>
      </ul>
    </section>
  `,

  sobre: `
    <section class="sobre">
      <h2>Sobre o Projeto Vida Verde</h2>
      <p>O Projeto Vida Verde é uma iniciativa que busca inspirar, educar e transformar comunidades através de práticas sustentáveis.</p>
      <p>Com foco em reflorestamento urbano, educação ambiental e economia circular, o projeto conta com voluntários, empresas parceiras e escolas para criar impacto positivo em várias regiões do país.</p>
      <h3>Nossa Missão</h3>
      <p>Promover o equilíbrio entre o ser humano e a natureza, estimulando o cuidado ambiental e o engajamento social.</p>
    </section>
  `,

  cadastro: `
    <section class="cadastro">
      <h2>Cadastro de Participantes</h2>
      <form id="form-cadastro">
        <label for="nome">Nome Completo</label>
        <input type="text" id="nome" name="nome" required>

        <label for="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" maxlength="14" placeholder="000.000.000-00" required>

        <label for="nascimento">Data de Nascimento</label>
        <input type="date" id="nascimento" name="nascimento" required>

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required>

        <label for="telefone">Telefone</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>

        <label for="cep">CEP</label>
        <input type="text" id="cep" name="cep" maxlength="9" placeholder="00000-000" required>

        <label for="cidade">Cidade</label>
        <input type="text" id="cidade" name="cidade" required>

      <label for="estado">Estado:</label>
        <select id="estado" name="estado" required>
         <option value="">Selecione...</option>
         <option value="AC">Acre (AC)</option>
         <option value="AL">Alagoas (AL)</option>
         <option value="AP">Amapá (AP)</option>
         <option value="AM">Amazonas (AM)</option>
         <option value="BA">Bahia (BA)</option>
         <option value="CE">Ceará (CE)</option>
         <option value="DF">Distrito Federal (DF)</option>
         <option value="ES">Espírito Santo (ES)</option>
         <option value="GO">Goiás (GO)</option>
         <option value="MA">Maranhão (MA)</option>
         <option value="MT">Mato Grosso (MT)</option>
         <option value="MS">Mato Grosso do Sul (MS)</option>
         <option value="MG">Minas Gerais (MG)</option>
         <option value="PA">Pará (PA)</option>
         <option value="PB">Paraíba (PB)</option>
         <option value="PR">Paraná (PR)</option>
         <option value="PE">Pernambuco (PE)</option>
         <option value="PI">Piauí (PI)</option>
         <option value="RJ">Rio de Janeiro (RJ)</option>
         <option value="RN">Rio Grande do Norte (RN)</option>
         <option value="RS">Rio Grande do Sul (RS)</option>
         <option value="RO">Rondônia (RO)</option>
         <option value="RR">Roraima (RR)</option>
         <option value="SC">Santa Catarina (SC)</option>
         <option value="SP">São Paulo (SP)</option>
         <option value="SE">Sergipe (SE)</option>
         <option value="TO">Tocantins (TO)</option>
</select>

        </select>

        <label for="interesse">Área de Interesse</label>
        <select id="interesse" name="interesse" required>
          <option value="">Selecione...</option>
          <option value="educacao">Educação Ambiental</option>
          <option value="reflorestamento">Reflorestamento</option>
          <option value="reciclagem">Reciclagem</option>
          <option value="voluntariado">Voluntariado</option>
        </select>

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  `
};

// Função para carregar o conteúdo dentro do <main>
function carregarPagina(pagina) {
  const main = document.querySelector('main');
  main.innerHTML = templates[pagina] || `<p>Página não encontrada.</p>`;
  if (pagina === 'cadastro') carregarScriptFormulario();
}

// SPA – captura os cliques nos links com data-page
document.addEventListener('click', e => {
  const link = e.target.closest('a[data-page]');
  if (link) {
    e.preventDefault();
    const pagina = link.getAttribute('data-page');
    carregarPagina(pagina);
    history.pushState({ pagina }, "", `#${pagina}`);
  }
});

// Voltar/avançar no histórico
window.addEventListener('popstate', e => {
  const pagina = e.state?.pagina || 'inicio';
  carregarPagina(pagina);
});

// Carrega o script de validação do formulário
function carregarScriptFormulario() {
  const script = document.createElement('script');
  script.src = 'assets/js/formValidation.js';
  document.body.appendChild(script);
}

// Página inicial ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const pagina = location.hash.replace('#', '') || 'inicio';
  carregarPagina(pagina);
});
