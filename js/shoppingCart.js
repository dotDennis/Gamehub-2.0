const cart = document.querySelector(".cart-icon");
const cartCount = document.querySelector(".cart-count");

const storedCart = localStorage.getItem("cartValue");

let count = 0;

if (storedCart) {
  count = storedCart;
  cart.innerHTML = `<span class="cart-count">${count}</span></i>`;
}

const saveToLocalStorage = () => {
  localStorage.setItem("cartValue", count);
};

function countPlus() {
  count++;
  saveToLocalStorage();
  cart.innerHTML = `<span class="cart-count">${count}</span></i>`;
}

function countMinus() {
  if (count >= 1) {
    count--;
    saveToLocalStorage();
    cart.innerHTML = `<span class="cart-count">${count}</span></i>`;
  } else if (count < 1) {
    cart.innerHTML = ``;
  }
}
