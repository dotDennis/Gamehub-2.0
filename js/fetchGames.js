import { buildError, buildCard } from "./components/build.js";

// select containers
const featuredContainer = document.querySelector(".featured");
const preOrderContainer = document.querySelector(".preOrder");
const newReleaseContainer = document.querySelector(".newReleases");
const allProductsContainer = document.querySelector(".allProducts");
const errorContainer = document.querySelector("#status");
const loader = document.querySelector(".loader");
const cartCounter = document.querySelector(".menu__counter");

// select the API & add keys
const url = "https://gamehub-api.dennisl.no/wp-json/wc/v3/products?per_page=20";
const key = "ck_41dc2be223a446796ff7d043052badfbbdd3dc4e";
const secret = "cs_02e2e485a33916ce70229285abcc7501887ff2c9";

const wooAPI = `${url}&consumer_key=${key}&consumer_secret=${secret}`;

// declare the cart, and check for value in localStorage
let cartArray = [];

if (JSON.parse(localStorage.getItem("cartList"))) {
  cartArray = JSON.parse(localStorage.getItem("cartList"));
}

// get json and create product cards (turn into functions**)
async function getProducts() {
  try {
    // await response then await json
    var json = await (await fetch(wooAPI)).json();

    for (let i = 0; i < json.length; i++) {
      // declarations

      if (json[i].featured) {
        // if product is featured run this function:
        featuredContainer.innerHTML += buildCard(json[i]);
      }
      // if there's more than 1 category, check name of it.
      if (json[i].tags.length) {
        const tag = json[i].tags[0].name;

        // put all this in a single function (if json[i].tags.length)
        // const tag = json[i].tags[0].name;

        // if product is in category: 'PreOrder' run this function:
        if (tag === "preOrder") {
          preOrderContainer.innerHTML += buildCard(json[i]);
        }
        // if product is in category: 'NewReleases' run this function:
        if (tag === "newReleases") {
          newReleaseContainer.innerHTML += buildCard(json[i]);
        }
      }
      // then run this function (if product name is not 'false'), add it to the 'all games' list:
      if (json[i].name) {
        allProductsContainer.innerHTML += buildCard(json[i]);
      }
    }
  } catch (error) {
    // if there's an error - display error to user
    errorContainer.innerHTML = buildError(error);
    errorContainer.classList.add("error");
    console.log(error);
  } finally {
    // remove loader
    loader.classList.remove("loader");

    // implement the add to cart feature
    const buttons = document.querySelectorAll(".cards__add-to-cart");
    buttons.forEach(function (button) {
      button.onclick = function (event) {
        const itemToAdd = json.find((item) => item.id === parseInt(event.target.dataset.product));
        cartArray.push(itemToAdd);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
        cartCounter.innerHTML = cartArray.length;
        cartCounter.style.display = "block";
      };
    });
  }
}

getProducts();

if (cartArray.length > 0) {
  cartCounter.innerHTML = cartArray.length;
} else {
  cartCounter.style.display = "none";
}
