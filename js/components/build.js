const POSTS = "https://dennisl.no/blogAPI/wp-json/wp/v2/posts";

// querystring
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
const ID = params.get("post");

function buildError() {
  return `
  <p class="error-txt">Oops! Something went wrong while building the site. Please contact us if this issue persists</p>
  `;
}
function buildContactError(errorMessage) {
  return `
  <p class="error-txt">Oops! ${errorMessage}</p>
  `;
}

function buildCard(product) {
  const productName = product.name;
  const image = product.images[0].src;
  const price = product.price_html;
  const rating = product.attributes[0].options[0];

  return `<div class="cards__product">
                <a class="cards__product--link" href="product.html?id=${product.id}"></a>
                    <div class="cards__product--image">
                        <img src="${image}" alt="Game cover for ${productName}">
                    </div>
                    <div class="cards__product--content">
                        <p class="cards__product--title text--medium"> ${productName} </p>
                        <div class="cards__product--info">
                            <p class="text--medium"> ${rating}</p>
                            <p class="cards__product--price text--medium">${price} USD</p>
                        </div>
                    </div>
                <button class="add-to-cart" data-product="${product.id}">Add to cart</button>
            </div>`;
}

export { buildCard, buildError, buildContactError, POSTS, ID };
