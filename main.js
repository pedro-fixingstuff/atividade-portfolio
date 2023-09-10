// Mostrar o menu (ou seja, trazer para dentro da tela) quando
// o ícone de barras é clicado, e ocultar (trazer para fora) quando clicado novamente
const menu = document.getElementsByClassName("navigation-menu__menu")[0];
const bars = document.getElementsByClassName("navigation-menu__bars")[0];

let isMenuShown = false;
menu.classList.add("menu--hidden");
bars.classList.add("navigation-menu__bars--rotated");

bars.addEventListener("click", () => {
  if (!isMenuShown) {
    isMenuShown = true;
    menu.classList.remove("menu--hidden");
    bars.classList.remove("navigation-menu__bars--rotated");
  } else {
    isMenuShown = false;
    menu.classList.add("menu--hidden");
    bars.classList.add("navigation-menu__bars--rotated");
  }
});

// Exibição do cabeçalho como uma barra sobre os outros elementos,
// quando a página está rolada para fora do topo
const header = document.getElementsByClassName("header")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.remove("header--hidden");
  } else {
    header.classList.add("header--hidden");
  }
});

// Deslocar o container de galeria do portfólio lateralmente para
// mostrar diferentes seções, dependendo de qual botão do menu é clicado
const portfolioGallery = document.getElementById("portfolio-gallery");

const portfolioMenuButtons = document.getElementsByClassName(
  "section__portfolio-menu-button"
);

portfolioMenuButtons[0].addEventListener("click", () => {
  portfolioGallery.style.transform = "translate(0)";
});

portfolioMenuButtons[1].addEventListener("click", () => {
  portfolioGallery.style.transform = "translate(calc(-100% / 3))";
});

portfolioMenuButtons[2].addEventListener("click", () => {
  portfolioGallery.style.transform = "translate(calc(2 * -100% / 3))";
});
