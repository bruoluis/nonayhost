document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");

  // Efeito do header ao rolar a página
  window.addEventListener("scroll", () => {

      if (window.scrollY > 80) {

          header.style.background = "rgba(2,11,45,0.92)";
          header.style.backdropFilter = "blur(25px)";
          header.style.boxShadow = "0 10px 40px rgba(0,0,0,.25)";

      } else {

          header.style.background = "rgba(2,11,45,0.55)";
          header.style.backdropFilter = "blur(20px)";
          header.style.boxShadow = "none";

      }

  });

  // Criação automática do botão mobile
  const mobileButton = document.createElement("button");

  mobileButton.classList.add("mobile-menu-button");
  mobileButton.innerHTML = "☰";

  header.querySelector(".container").appendChild(mobileButton);

  // Abrir / Fechar menu mobile
  mobileButton.addEventListener("click", () => {

      menu.classList.toggle("active");

      if (menu.classList.contains("active")) {
          mobileButton.innerHTML = "✕";
      } else {
          mobileButton.innerHTML = "☰";
      }

  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".menu a").forEach(link => {

      link.addEventListener("click", () => {

          menu.classList.remove("active");
          mobileButton.innerHTML = "☰";

      });

  });

});