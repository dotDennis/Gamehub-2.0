let cartArray = [];

if (JSON.parse(localStorage.getItem("cartList"))) {
  cartArray = JSON.parse(localStorage.getItem("cartList"));
}

const cartCounter = document.querySelector(".cart-count");

if (cartArray.length > 0) {
  cartCounter.innerHTML = cartArray.length;
  cartCounter.style.display = "block";
} else {
  cartCounter.style.display = "none";
}
