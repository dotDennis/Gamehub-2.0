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
                <a aria-label="View ${productName}" class="cards__link" href="product.html?id=${product.id}"></a>
                    <div class="cards__image">
                        <img src="${image}" alt="Game cover for ${productName}">
                    </div>
                    <div class="cards__content">
                        <p class="cards__text cards__text--title"> ${productName} </p>
                        <div class="cards__info">
                            <p class="cards__text cards__text--medium"> ${rating}</p>
                            <p class="cards__text cards__text--price">${price} USD</p>
                        </div>
                    </div>
                <button class="cards__add-to-cart" data-product="${product.id}">Add to cart</button>
            </div>`;
}

function buildProductCard(game) {
  return `
  <div class="left">
    <h2>${game.name}</h2>
    <div style="background-image: url(${game.images[0].src})" class="product-image"></div>
  </div>
  <div class="right">

    <h3>${game.attributes[0].options[0]}</h3>
    <h3 class="price">$${game.price} USD</h3>

    <p>${game.description}</p>
          <div class="to-cart">
        <button class="btn-plus" data-product="${game.id}">add to cart</button>
        <button class="btn-minus" data-product="${game.id}">remove</button>
    </div>
    <a class="btn" href="checkout.html">Go to checkout</a>
    </div>`;
}

export { buildProductCard, buildCard, buildError, buildContactError, POSTS, ID };
