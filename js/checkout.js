// Import array and check for existing items
let cartArray = [];

if (JSON.parse(localStorage.getItem("cartList"))) {
  cartArray = JSON.parse(localStorage.getItem("cartList"));
}

const cartContainer = document.querySelector(".cart-info");
const cartTotal = document.querySelector(".total-price");

let total = 0;

// cartArray.forEach(buildHtml(cartArray));

// for (let j = 0; j < cartArray.length; j++) {
//   buildHtml(cartArray[j]);
// }

const cartCounter = document.querySelector(".cart-count");

function buildHtml(game) {
  cartContainer.innerHTML = "";
  total = 0;

  for (let j = 0; j < cartArray.length; j++) {
    cartContainer.innerHTML += `<p><a href="product.html">${game[j].name}</a><span class="price">$${game[j].price} USD</span> <button data-product="${game[j].id}" class="remove-cart-item">x</button></p>`;
    total += parseInt(game[j].price);
    cartTotal.innerHTML = `Total <span class="price"></span><b> $${total} USD</b>`;
  }
  if (total === 0) {
    cartTotal.innerHTML = "";
  }

  // remove items from cart
  let removeItem = document.querySelectorAll(".remove-cart-item");
  Array.from(removeItem).forEach((button) => button.addEventListener("click", removeFromCart));

  function removeFromCart() {
    console.log("attempting to remove item...");
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].id === parseInt(event.target.dataset.product)) {
        cartArray.splice(i, 1);
        localStorage.setItem("cartList", JSON.stringify(cartArray));

        console.log("item removed!");
        if (cartArray.length > 0) {
          cartCounter.innerHTML = cartArray.length;
          cartCounter.style.display = "block";
        } else {
          cartCounter.style.display = "none";
        }

        buildHtml(cartArray);
        removeItem = document.querySelectorAll(".remove-cart-item");
        return;
      }
    }
  }
}

buildHtml(cartArray);

if (cartArray.length > 0) {
  cartCounter.innerHTML = cartArray.length;
} else {
  cartCounter.style.display = "none";
}
