// Import list and initiate it
const cartArray = JSON.parse(localStorage.getItem("cartList"));

const cartContainer = document.querySelector(".cart-info");
const cartTotal = document.querySelector(".total-price");

let total = 0;

// cartArray.forEach(buildHtml(cartArray));

// for (let j = 0; j < cartArray.length; j++) {
//   buildHtml(cartArray[j]);
// }

var removeItem = "";

function buildHtml(game) {
  cartContainer.innerHTML = "";
  total = 0;

  for (let j = 0; j < cartArray.length; j++) {
    cartContainer.innerHTML += `<p><a href="product.html">${game[j].name}</a><span class="price">$${game[j].price} USD</span> <button data-product="${game[j].id}" class="remove-cart-item">x</button></p>`;
    total += parseInt(game[j].price);
    cartTotal.innerHTML = `Total <span class="price"></span><b> $${total} USD</b>`;
  }
  removeItem = document.querySelectorAll(".remove-cart-item");
}

buildHtml(cartArray);

removeItem.forEach(function (button) {
  button.onclick = function (event) {
    console.log(event.target.dataset.product);
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].id === parseInt(event.target.dataset.product)) {
        cartArray.splice(i, 1);
        localStorage.setItem("cartList", JSON.stringify(cartArray));

        buildHtml(cartArray);
        removeItem = document.querySelectorAll(".remove-cart-item");
        return;
      }
    }
  };
});
