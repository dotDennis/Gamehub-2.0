const container = document.querySelector(".product-cards");

const url = "https://dennisl.no/wp-json/wc/v3/products";
const key = "ck_dd349ee9bd6f31714f886f1bb0ff8f51e6e86a48";
const secret = "cs_58e5bd13e3e4cd911f0624f7bc94e7ee7089490e";

const wooAPI = `${url}?consumer_key=${key}&consumer_secret=${secret}`;

async function getProducts() {
  try {
    const response = await fetch(wooAPI);
    const products = await response.json();

    console.log(products);

    for (let i = 0; i < products.length; i++) {
      const productName = products[i].name;
      const image = products[i].images[0].src;
      const price = products[i].price_html;
      const rating = products[i].attributes[0].options[0];

      if (!products[i].name) {
        continue;
      }

      console.log(productName);
      container.innerHTML += `<div class="product-card">
                <a class="product-link" href="product.html"></a>
                    <div class="product-card__image-container">
                        <img src="${image}" alt="Game: ${productName}">
                    </div>
                    <div class="product-card__content">
                        <p class="product-card__title text--medium"> ${productName} </p>
                        <div class="product-card__info">
                            <p class="text--medium"> ${products.rating}</p>
                            <p class="product-card__price text--medium">${price}</p>
                        </div>
                    </div>
            </div>`;
    }
  } catch (error) {
    container.innerHTML = createError(error);
  }
}

getProducts();

function createError(error) {
  return `<div class="error"><p>${error}</p></div>`;
}
