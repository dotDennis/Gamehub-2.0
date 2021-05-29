const usernameContainer = document.querySelector(".username");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// get the id from the querystring
let username = params.get("u");
let password = params.get("p");

if (!username || !password) {
  location.href = "sign-in.html";
}

usernameContainer.innerHTML = username;
