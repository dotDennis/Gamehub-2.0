const hamburger = document.querySelector(".hamburger");
const navLeft = document.querySelector(".ul-left");
const navRight = document.querySelector(".ul-right");

function show() {
  navLeft.classList.toggle("show");
  navRight.classList.toggle("show");
}

hamburger.addEventListener("click", show);
