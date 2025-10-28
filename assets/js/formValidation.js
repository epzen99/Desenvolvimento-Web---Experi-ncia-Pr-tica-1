// assets/js/formValidation.js
(function () {
  "use strict";

  // Função que inicializa máscaras e validação para um formulário recebido
  function initForm(form) {
    if (!form) return;
    console.log("[formValidation] inicializando para form:", form.id || "(sem id)");

    // Helpers
    const aplicarMascara = (valor, tipo) => {
      if (!valor) return "";
      valor = String(valor).replace(/\D/g, "");
      if (tipo === "cpf") {
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      } else if (tipo === "telefone") {
        valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
      } else if (tipo === "cep") {
        valor = valor.replace(/^(\d{5})(\d{3})$/, "$1-$2");
      }
      return valor;
    };

    const safeQuery = (sel) => form.querySelector(sel);

    const cpfInput = safeQuery("#cpf");
    const telInput = safeQuery("#telefone");
    const cepInput = safeQuery("#cep");

    // Aplica máscara no evento input (remove não dígitos)
    const applyInputMask = (input, tipo) => {
      if (!input) return;
      input.addEventListener("input", () => {
        const pos = input.selectionStart || input.value.length;
        input.value = aplicarMascara(input.value, tipo);
        try { input.setSelectionRange(pos, pos); } catch (e) {}
      });

      // Evitar letras com keydown (camada extra)
      input.addEventListener("keydown", (ev) => {
        // Permitir teclas de controle: backspace, delete, arrows, tab
        const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
        if (controlKeys.includes(ev.key)) return;
        // Permitir apenas dígitos (0-9)
        if (!/\d/.test(ev.key)) {
          ev.preventDefault();
        }
      });

      // Impedir colar conteúdo não numérico (filtrar)
      input.addEventListener("paste", (ev) => {
        const pasted = (ev.clipboardData || window.clipboardData).getData("text");
        if (/\D/.test(pasted)) {
          ev.preventDefault();
          const onlyDigits = pasted.replace(/\D/g, "");
          const newVal = aplicarMascara((input.value + onlyDigits), tipo);
          input.value = newVal;
        }
      });
    };

    applyInputMask(cpfInput, "cpf");
    applyInputMask(telInput, "telefone");
    applyInputMask(cepInput, "cep");

    // Validação no submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const getVal = (sel) => (form.querySelector(sel)?.value || "").trim();
      const nome = getVal("#nome");
      const email = getVal("#email");
      const cpfRaw = getVal("#cpf").replace(/\D/g, "");
      const telefoneRaw = getVal("#telefone").replace(/\D/g, "");
      const cepRaw = getVal("#cep").replace(/\D/g, "");
      const cidade = getVal("#cidade");
      const estado = getVal("#estado");
      const interesse = getVal("#interesse");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const cpfRegex = /^\d{11}$/;
      const telefoneRegex = /^\d{10,11}$/;
      const cepRegex = /^\d{8}$/;

      if (!nome) { alert("Por favor, preencha o nome completo."); return; }
      if (!emailRegex.test(email)) { alert("E-mail inválido."); return; }
      if (!cpfRegex.test(cpfRaw)) { alert("CPF inválido. Digite 11 dígitos numéricos."); return; }
      if (!telefoneRegex.test(telefoneRaw)) { alert("Telefone inválido. Informe 10 ou 11 dígitos."); return; }
      if (!cepRegex.test(cepRaw)) { alert("CEP inválido. Digite 8 dígitos."); return; }
      if (!cidade) { alert("Por favor, informe a cidade."); return; }
      if (!estado) { alert("Por favor, selecione o estado."); return; }
      if (!interesse) { alert("Por favor, selecione uma área de interesse."); return; }

      // Salva no localStorage
      const registro = {
        nome,
        email,
        cpf: cpfRaw,
        telefone: telefoneRaw,
        cep: cepRaw,
        cidade,
        estado,
        interesse,
        criadoEm: new Date().toISOString()
      };

      const lista = JSON.parse(localStorage.getItem("cadastros") || "[]");
      lista.push(registro);
      localStorage.setItem("cadastros", JSON.stringify(lista));

      alert("Cadastro realizado com sucesso!");
      form.reset();
    });
  }

  // Observador: fica observando o <main> para quando o form for inserido dinamicamente
  const main = document.querySelector("main") || document.body;

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        // Se o próprio nó adicionado for um form
        if (node.matches && node.matches("form")) {
          initForm(node);
          return;
        }
        // Se dentro do nó houver um form (mais comum, por causa do template)
        const formFound = node.querySelector && node.querySelector("form");
        if (formFound) {
          initForm(formFound);
          return;
        }
      }
    }
  });

  // Começa a observar
  observer.observe(main, { childList: true, subtree: true });

  // Também tenta inicializar imediatamente caso o form já exista
  const existingForm = document.querySelector("main form") || document.querySelector("form");
  if (existingForm) {
    initForm(existingForm);
  }

  console.log("[formValidation] observer ativo, aguardando inserção do formulário...");
})();
