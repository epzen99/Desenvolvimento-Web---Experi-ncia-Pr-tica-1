// assets/js/menu.js
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

// Fecha o menu mobile ao clicar em um item
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").classList.remove("show");
  });
});
