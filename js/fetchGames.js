// select containers
const featuredContainer = document.querySelector(".featured");
const preOrderContainer = document.querySelector(".preOrder");
const newReleaseContainer = document.querySelector(".newReleases");
const allProductsContainer = document.querySelector(".allProducts");
const loader = document.querySelector(".loader");

// select the API & add keys
const url = "https://dennisl.no/wp-json/wc/v3/products?per_page=20";
const key = "ck_dd349ee9bd6f31714f886f1bb0ff8f51e6e86a48";
const secret = "cs_58e5bd13e3e4cd911f0624f7bc94e7ee7089490e";

const wooAPI = `${url}&consumer_key=${key}&consumer_secret=${secret}`;

// get json and create product cards (turn into functions**)
async function getProducts() {
  try {
    // await response then await json
    const json = await (await fetch(wooAPI)).json();

    console.log(wooAPI);

    for (let i = 0; i < json.length; i++) {
      // declarations
      const productName = json[i].name;
      const image = json[i].images[0].src;
      const price = json[i].price_html;
      const rating = json[i].attributes[0].options[0];
      const category = json[i].categories[0].name;

      if (json[i].featured) {
        // if product is featured run this function:
        featuredContainer.innerHTML += `<div class="product-card">
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
            </div>`;
      }
      // if product is in category: 'PreOrder' run this function:
      if (category === "PreOrder") {
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
            </div>`;
      }
      // if product is in category: 'NewReleases' run this function:
      if (category === "NewReleases") {
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
            </div>`;
      }
      // then run this function if product name is not undefined:
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
            </div>`;
      }
    }
  } catch (error) {
    // if there's an error - display error to user
    featuredContainer.innerHTML = createError(error);
  } finally {
    loader.classList.remove("loader");
  }
}

getProducts();

function createError(error) {
  return `<div class="error"><p>${error}</p></div>`;
}
