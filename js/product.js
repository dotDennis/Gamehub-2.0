import { buildProductCard } from "./components/build.js";

// select containers
const productContainer = document.querySelector(".loader");
const pathContainer = document.querySelector(".path");

// querystirng
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
const id = params.get("id");

const url = "https://gamehub-api.dennisl.no/wp-json/wc/v3/products";
const key = "ck_41dc2be223a446796ff7d043052badfbbdd3dc4e";
const secret = "cs_02e2e485a33916ce70229285abcc7501887ff2c9";

const wooAPI = `${url}/${id}?consumer_key=${key}&consumer_secret=${secret}`;

// redirect if id = null;
if (!id) {
  location.href = "/";
}

// run a function to fetch the data from the api
async function fetchGameDetails() {
  try {
    const json = await (await fetch(wooAPI)).json();

    productContainer.innerHTML = buildProductCard(json);
    pathContainer.innerHTML = `
    <a class="path__previous" href="marketplace.html">Marketplace</a> / <a class="path__current" href="${document.location.search}">${json.name}</a>
    `;

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





// adding and removing items from cart
var cartArray = [];

if (JSON.parse(localStorage.getItem("cartList"))) {
  cartArray = JSON.parse(localStorage.getItem("cartList"));
}

let listOfItems = [];

async function fetchGames() {
  try {
    const response = await fetch(`${url}?per_page=20&consumer_key=${key}&consumer_secret=${secret}`);
    const json = await response.json();
    listOfItems = json;
    return;
  } catch (error) {
    alert(error); /* add error container */
  }
}

fetchGames();

const cartCounter = document.querySelector(".menu__counter");

function addToCart(event) {
  const itemToAdd = listOfItems.find((item) => item.id === parseInt(id));
  cartArray.push(itemToAdd);
  localStorage.setItem("cartList", JSON.stringify(cartArray));
  console.log(cartArray);
  if (cartArray.length > 0) {
    cartCounter.innerHTML = cartArray.length;
    cartCounter.style.display = "block";
  } else {
    cartCounter.style.display = "none";
  }
}

function removeFromCart(game) {
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id === parseInt(id)) {
      cartArray.splice(i, 1);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
      console.log(cartArray);
      if (cartArray.length > 0) {
        cartCounter.innerHTML = cartArray.length;
        cartCounter.style.display = "block";
      } else {
        cartCounter.style.display = "none";
      }
      return;
    }
  }
}

if (cartArray.length > 0) {
  cartCounter.innerHTML = cartArray.length;
} else {
  cartCounter.style.display = "none";
}
