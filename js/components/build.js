const POSTS = "https://dennisl.no/blogAPI/wp-json/wp/v2/posts";

// querystring
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
const ID = params.get("post");

function buildError() {
  return `
      <section>
        <div class="status">
          <p class="status-txt">Oops! Something went wrong while building the site. Please contact Dennis if this issue persists</p>
        </div>
      </section>`;
}
function buildContactError(errorMessage) {
  return `
        <div class="status">
          <p class="status-txt">Oops! ${errorMessage}</p>
        </div>`;
}

export { buildError, buildContactError, POSTS, ID };
