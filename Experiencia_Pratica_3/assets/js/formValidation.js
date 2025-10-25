// assets/js/formulario.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const dados = {
      nome: form.nome.value.trim(),
      cpf: form.cpf.value.trim(),
      nascimento: form.nascimento.value,
      email: form.email.value.trim(),
      telefone: form.telefone.value.trim(),
      cep: form.cep.value.trim(),
      cidade: form.cidade.value.trim(),
      estado: form.estado.value,
      interesse: form.interesse.value,
      mensagem: form.mensagem.value.trim()
    };

    // Validações
    if (!validarCPF(dados.cpf)) {
      alert("CPF inválido!");
      return;
    }

    if (!validarIdade(dados.nascimento)) {
      alert("É necessário ter pelo menos 18 anos.");
      return;
    }

    if (!dados.email.includes("@")) {
      alert("E-mail inválido!");
      return;
    }

    // Salvar no localStorage
    const registros = JSON.parse(localStorage.getItem("cadastros")) || [];
    registros.push(dados);
    localStorage.setItem("cadastros", JSON.stringify(registros));

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });

  // Máscaras simples
  form.cpf.addEventListener("input", e => {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });

  form.telefone.addEventListener("input", e => {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  });

  form.cep.addEventListener("input", e => {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{3})$/, "$1-$2");
  });
});

// Função de validação de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

// Função para validar idade mínima (18 anos)
function validarIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  const idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  return mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())
    ? idade - 1 >= 18
    : idade >= 18;
}