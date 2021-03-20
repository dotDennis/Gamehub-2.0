const hamburger = document.querySelector(".ham-menu")
const menu = document.querySelector(".nav-ul");

function show() {
    menu.classList.toggle("show");

    if(hamburger.classList.contains("closed")) {
    hamburger.innerHTML = `<i class="fas fa-times"></i> `;
    hamburger.classList.remove("closed")
    } else {
        hamburger.innerHTML = `<i class="fas fa-bars"></i>`
        hamburger.classList.add("closed");
    }
  }
  
  hamburger.addEventListener("click", show);