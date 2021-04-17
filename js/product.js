// select containers
const productContainer = document.querySelector(".loader");

// querystirng
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
const id = params.get("id");

const url = "https://dennisl.no/wp-json/wc/v3/products/";
const key = "ck_dd349ee9bd6f31714f886f1bb0ff8f51e6e86a48";
const secret = "cs_58e5bd13e3e4cd911f0624f7bc94e7ee7089490e";

const wooAPI = `${url}${id}?consumer_key=${key}&consumer_secret=${secret}`;

console.log(wooAPI);

// redirect if id = null;
if (!id) {
  location.href = "/";
}

// run a function to fetch the data from the api
async function fetchCharacter() {
  try {
    const json = await (await fetch(wooAPI)).json();

    productContainer.innerHTML = buildHtml(json);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = error;
  } finally {
    productContainer.classList.remove("loader");
    productContainer.classList.add("product-container")
  }
}

fetchCharacter();

function buildHtml(game) {
  return `
  <div class="left">
    <h2>${game.name}</h2>
    <img src="${game.images[0].src}" alt="${game.images[0].alt}">
  </div>
  <div class="right">
    <h3>${game.attributes[0].options[0]}</h3>
    <h3 class="price">$${game.price} USD</h3>
    <div class="to-cart">
        <button class="btn-plus"><i class="fas fa-plus-circle plus"></i></button>
        <button class="btn-minus"><i class="fas fa-minus-circle minus"></i></button>
    </div>
    <p>${game.description}</p>
    <a class="btn" href="checkout.html">Go to checkout</a>`;
}
