// assets/js/spa.js
import { templates } from "./templates.js";

const content = document.getElementById("content");

function loadPage(page) {
  if (templates[page]) {
    content.innerHTML = templates[page];
    localStorage.setItem("lastPage", page);
  } else {
    content.innerHTML = `<h2>Página não encontrada :(</h2>`;
  }
}

// Clique nos links do menu
document.querySelectorAll(".menu a").forEach((link) => {
  const page = link.getAttribute("data-page");
  if (page) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      loadPage(page);
      history.pushState({}, "", `#${page}`);
    });
  }
});

// Recarregar ao voltar no histórico
window.addEventListener("popstate", () => {
  const page = location.hash.replace("#", "") || "inicio";
  loadPage(page);
});

// Carrega a última página acessada ou a inicial
const savedPage = localStorage.getItem("lastPage") || "inicio";
loadPage(savedPage);
