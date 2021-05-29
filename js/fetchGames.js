import { buildError } from "./components/build.js";

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
      const productName = json[i].name;
      const image = json[i].images[0].src;
      const price = json[i].price_html;
      const rating = json[i].attributes[0].options[0];

      if (json[i].featured) {
        // if product is featured run this function:
        featuredContainer.innerHTML += `<div class="product-card">
                <a class="product-link" href="product.html?id=${json[i].id}"></a>
                    <div class="product-card__image-container">
                        <img src="${image}" alt="Game cover for ${productName}">
                    </div>
                    <div class="product-card__content">
                        <p class="product-card__title text--medium"> ${productName} </p>
                        <div class="product-card__info">
                            <p class="text--medium"> ${rating}</p>
                            <p class="product-card__price text--medium">${price} USD</p>
                        </div>
                        
                    </div>
                <button class="add-to-cart" data-product="${json[i].id}">Add to cart</button>
            </div>`;
      }
      // if there's more than 1 category, check name of it.
      if (json[i].tags.length) {
        const tag = json[i].tags[0].name;

        // if product is in category: 'PreOrder' run this function:
        if (tag === "preOrder") {
          preOrderContainer.innerHTML += `<div class="product-card">
                <a class="product-link" href="product.html?id=${json[i].id}"></a>
                    <div class="product-card__image-container">
                        <img src="${image}" alt="Game: ${productName}">
                    </div>
                    <div class="product-card__content">
                        <p class="product-card__title text--medium"> ${productName} </p>
                        <div class="product-card__info">
                            <p class="text--medium"> ${rating}</p>
                            <p class="product-card__price text--medium">${price} USD</p>
                        </div>
                    </div>
                <button class="add-to-cart" data-product="${json[i].id}">Add to cart</button>     
            </div>`;
        }
        // if product is in category: 'NewReleases' run this function:
        if (tag === "newReleases") {
          newReleaseContainer.innerHTML += `<div class="product-card">
                <a class="product-link" href="product.html?id=${json[i].id}"></a>
                    <div class="product-card__image-container">
                        <img src="${image}" alt="Game: ${productName}">
                    </div>
                    <div class="product-card__content">
                        <p class="product-card__title text--medium"> ${productName} </p>
                        <div class="product-card__info">
                            <p class="text--medium"> ${rating}</p>
                            <p class="product-card__price text--medium">${price} USD</p>
                        </div>
                    </div>
                <button class="add-to-cart" data-product="${json[i].id}">Add to cart</button>
            </div>`;
        }
      }
      // then run this function (if product name is not 'false'), add it to the 'all games' list:
      if (productName) {
        allProductsContainer.innerHTML += `<div class="product-card">
                <a class="product-link" href="product.html?id=${json[i].id}"></a>
                    <div class="product-card__image-container">
                        <img src="${image}" alt="Game: ${productName}">
                    </div>
                    <div class="product-card__content">
                        <p class="product-card__title text--medium"> ${productName} </p>
                        <div class="product-card__info">
                            <p class="text--medium"> ${rating}</p>
                            <p class="product-card__price text--medium">${price} USD</p>
                        </div>
                    </div>
                <button class="add-to-cart" data-product="${json[i].id}">Add to cart</button>
            </div>`;
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

    // add items to cart

    const buttons = document.querySelectorAll(".add-to-cart");
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
