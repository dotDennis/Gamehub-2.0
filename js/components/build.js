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

export { buildError, buildContactError, POSTS, ID };
