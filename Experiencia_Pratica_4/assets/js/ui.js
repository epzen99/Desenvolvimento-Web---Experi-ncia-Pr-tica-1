// ui.js - interações: menu mobile, dropdown keyboard, modal, toast, form simple validation
document.addEventListener('DOMContentLoaded', function() {

  // HAMBURGER MENU
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.style.display === 'block';
      mobileMenu.style.display = open ? 'none' : 'block';
      hamburger.setAttribute('aria-expanded', (!open).toString());
      mobileMenu.setAttribute('aria-modal', (!open).toString());
    });
    // fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.style.display = 'none';
        hamburger.setAttribute('aria-expanded','false');
      }
    });
  }

  // alternância de menu suspenso acessível para usuários de teclado
  const navItems = document.querySelectorAll('.nav-item[tabindex]');
  navItems.forEach(item => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const dd = item.querySelector('.dropdown');
        if (dd) dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // modal
  window.uiModal = {
    open(modalId) {
      const back = document.getElementById('modalBackdrop');
      if (back) back.classList.add('show');
    },
    close(modalId) {
      const back = document.getElementById('modalBackdrop');
      if (back) back.classList.remove('show');
    }
  };

  // Toast helper
  window.showToast = function(msg, timeout=3500) {
    let t = document.getElementById('appToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'appToast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = 'block';
    setTimeout(()=>{ t.style.display='none'; }, timeout);
  };

  // Visuais simples de validação de formulários (aprimoramento progressivo)
  const form = document.getElementById('cadastroForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        // marca campos inválidos
        const elems = form.querySelectorAll('input, select, textarea');
        elems.forEach(el=>{
          if (!el.checkValidity()) el.classList.add('input-invalid'); else el.classList.remove('input-invalid');
        });
        showToast('Verifique os campos em destaque');
        return false;
      } else {
        // para demonstração: mostrar toast e impedir envio real
        e.preventDefault();
        showToast('Cadastro recebido — (simulação)');
        form.reset();
      }
    });

    // feedback de validação ao vivo
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(inp=>{
      inp.addEventListener('input', function(){
        if (inp.checkValidity()) { inp.classList.remove('input-invalid'); inp.classList.add('input-valid'); }
        else { inp.classList.remove('input-valid'); }
      });
    });
  }

});
