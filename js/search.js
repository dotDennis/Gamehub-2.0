// select containers
const searchedContainer = document.querySelector(".loader");
const bannerText = document.querySelector(".banner-txt");
const searchText = document.querySelector(".container--title");

// querystirng
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
let search = params.get("search");

if (!search) {
  search = "";
}

const url = "https://dennisl.no/wp-json/wc/v3/products";
const key = "ck_dd349ee9bd6f31714f886f1bb0ff8f51e6e86a48";
const secret = "cs_58e5bd13e3e4cd911f0624f7bc94e7ee7089490e";

const wooAPI = `${url}?search=${search}&per_page=20&consumer_key=${key}&consumer_secret=${secret}`;

// run a function to fetch the data from the api

async function fetchGame() {
  try {
    const json = await (await fetch(wooAPI)).json();

    for (let i = 0; i < json.length; i++) {
      // declarations
      const productName = json[i].name;
      const image = json[i].images[0].src;
      const price = json[i].price_html;
      const rating = json[i].attributes[0].options[0];

      if (json[i].name) {
        searchedContainer.innerHTML += `
        <div class="product-card">
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
    if (json.length === 0) {
      searchedContainer.classList.add("failed");
      searchedContainer.innerHTML = `<p class="text--medium">We found no games when searching for "${search}"</p>`;
    }
  } catch (error) {
    console.log(error);
  } finally {
    searchedContainer.classList.remove("loader");
    bannerText.innerHTML = "Results";
    if (!search) {
      searchText.innerHTML = searchText.innerHTML;
    } else {
      searchText.innerHTML = `Games related to "${search}"`;
    }
  }
}

fetchGame();
