// select containers
const productContainer = document.querySelector(".loader");

// querystirng
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
const id = params.get("id");

const url = "https://dennisl.no/wp-json/wc/v3/products";
const key = "ck_dd349ee9bd6f31714f886f1bb0ff8f51e6e86a48";
const secret = "cs_58e5bd13e3e4cd911f0624f7bc94e7ee7089490e";

const wooAPI = `${url}/${id}?consumer_key=${key}&consumer_secret=${secret}`;

// redirect if id = null;
if (!id) {
  location.href = "/";
}

// run a function to fetch the data from the api
async function fetchGameDetails() {
  try {
    const json = await (await fetch(wooAPI)).json();

    productContainer.innerHTML = buildHtml(json);

    const buttonPlus = document.querySelector(".btn-plus");
    buttonPlus.addEventListener("click", addToCart);
    const buttonMinus = document.querySelector(".btn-minus");
    buttonMinus.addEventListener("click", removeFromCart);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = error;
  } finally {
    productContainer.classList.remove("loader");
    productContainer.classList.add("product-container");
  }
}

fetchGameDetails();

//once data has been fetched, build the HTML

function buildHtml(game) {
  return `
  <div class="left">
    <h2>${game.name}</h2>
    <div style="background-image: url(${game.images[0].src})" class="product-image"></div>
  </div>
  <div class="right">
    <h3>${game.attributes[0].options[0]}</h3>
    <h3 class="price">$${game.price} USD</h3>
    <div class="to-cart">
        <button class="btn-plus" data-product="${game.id}">add to cart</button>
        <button class="btn-minus" data-product="${game.id}">remove</button>
    </div>
    <p>${game.description}</p>
    <a class="btn" href="checkout.html">Go to checkout</a>`;
}

// adding and removing items from cart below

var cartArray = [];

if (JSON.parse(localStorage.getItem("cartList"))) {
  cartArray = JSON.parse(localStorage.getItem("cartList"));
}

let listOfItems = [];

async function fetchGames() {
  try {
    const response = await fetch(
      "https://dennisl.no/wp-json/wc/v3/products?per_page=20&consumer_key=ck_dd349ee9bd6f31714f886f1bb0ff8f51e6e86a48&consumer_secret=cs_58e5bd13e3e4cd911f0624f7bc94e7ee7089490e"
    );
    const json = await response.json();
    listOfItems = json;
    return;
  } catch (error) {
    console.log(error);
  }
}

fetchGames();

function addToCart(event) {
  const itemToAdd = listOfItems.find((item) => item.id === parseInt(id));
  cartArray.push(itemToAdd);
  localStorage.setItem("cartList", JSON.stringify(cartArray));
  console.log(cartArray);
}

function removeFromCart(game) {
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id === parseInt(id)) {
      cartArray.splice(i, 1);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
      return;
    }
  }
}
