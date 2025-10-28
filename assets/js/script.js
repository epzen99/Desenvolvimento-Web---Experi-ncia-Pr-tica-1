// ================================
// Menu Hambúrguer (Mobile)
// ================================
const menuToggle = document.querySelector('.menu-toggle');
const menuLista = document.querySelector('.menu-lista');

menuToggle.addEventListener('click', () => {
  menuLista.classList.toggle('ativo');
});

// ================================
// Fechar menu ao clicar em um item (mobile)
// ================================
document.querySelectorAll('.menu-lista a').forEach(link => {
  link.addEventListener('click', () => {
    menuLista.classList.remove('ativo');
  });
});
