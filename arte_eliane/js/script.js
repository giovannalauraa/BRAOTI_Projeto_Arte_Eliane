// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav li");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});
