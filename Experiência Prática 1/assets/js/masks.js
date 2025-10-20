// masks.js - máscaras simples para CPF, telefone e CEP
document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function setCursorToEnd(el) {
    if (el.setSelectionRange) {
      const len = el.value.length * 2;
      el.setSelectionRange(len, len);
    } else {
      el.value = el.value;
    }
  }

  if (cpf) {
    cpf.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      v = v.slice(0, 11);
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = v;
    });
  }

  if (tel) {
    tel.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      v = v.slice(0, 11);
      if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else {
        v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
      e.target.value = v.trim().replace(/-$/, '');
    });
  }

  if (cep) {
    cep.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      v = v.slice(0, 8);
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
      e.target.value = v;
    });
  }
});
