// Import array and check for existing items
let cartArray = [];

if (JSON.parse(localStorage.getItem("cartList"))) {
  cartArray = JSON.parse(localStorage.getItem("cartList"));
}

const cartContainer = document.querySelector(".checkout__cart");
const cartItems = document.querySelector(".checkout__info");
const cartTotal = document.querySelector(".checkout__price");

let total = 0;

// cartArray.forEach(buildHtml(cartArray));

// for (let j = 0; j < cartArray.length; j++) {
//   buildHtml(cartArray[j]);
// }

const cartCounter = document.querySelector(".menu__counter");

function buildHtml(game) {
  cartItems.innerHTML = "";
  total = 0;

  for (let j = 0; j < cartArray.length; j++) {
    cartItems.innerHTML += `
    <div>
      <a href="product.html?id=${game[j].id}">${game[j].name}</a>
      <span class="price">$${game[j].price} USD  </span> 
      <button data-product="${game[j].id}" aria-label="remove from cart" class="checkout__remove"><i class="fas fa-times"></i></button>
    </div>`;
    total += parseInt(game[j].price);
    cartTotal.innerHTML = `Total <span class="price"></span><b> $${total} USD</b>`;
  }
  if (total === 0) {
    cartTotal.innerHTML = "";
  } else {
    cartContainer.style.display = "block";
  }

  // remove items from cart
  let removeItem = document.querySelectorAll(".checkout__remove");
  Array.from(removeItem).forEach((button) => button.addEventListener("click", removeFromCart));

  function removeFromCart() {
    console.log("attempting to remove item...");
    for (let i = 0; i < cartArray.length; i++) {
      console.log(event.target.parentElement);
      if (cartArray[i].id === parseInt(event.target.parentElement.dataset.product)) {
        cartArray.splice(i, 1);
        localStorage.setItem("cartList", JSON.stringify(cartArray));

        console.log("item removed!");
        if (cartArray.length > 0) {
          cartCounter.innerHTML = cartArray.length;
          cartCounter.style.display = "block";
        } else {
          cartCounter.style.display = "none";
          cartContainer.style.display = "none";
        }

        buildHtml(cartArray);
        removeItem = document.querySelectorAll(".checkout__remove");
        return;
      } else {
        return alert("error");
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
