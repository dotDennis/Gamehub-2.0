const hamburger = document.querySelector(".menu__hamburger");
const menu = document.querySelector(".menu__list");

function toggleMenu() {
  menu.classList.toggle("open");

  if (hamburger.classList.contains("closed")) {
    hamburger.innerHTML = `<i class="fas fa-times"></i> `;
    hamburger.classList.remove("closed");
  } else {
    hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
    hamburger.classList.add("closed");
  }
}

hamburger.addEventListener("click", toggleMenu);
