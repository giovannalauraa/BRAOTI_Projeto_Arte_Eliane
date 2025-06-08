/* js/menu.js */

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav li");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (nav) {
    nav.classList.remove('open');
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link (opcional)
    nav.querySelectorAll('li').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('open');
      }
    });
  }
});