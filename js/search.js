import { buildError, buildCard } from "./components/build.js";

// select containers
const searchedContainer = document.querySelector(".loader");
const bannerText = document.querySelector(".banner__txt");
const searchText = document.querySelector(".cards__search");

// querystirng
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the querystring
let search = params.get("search");

if (!search) {
  search = "";
}

const url = "https://gamehub-api.dennisl.no/wp-json/wc/v3/products";
const key = "ck_41dc2be223a446796ff7d043052badfbbdd3dc4e";
const secret = "cs_02e2e485a33916ce70229285abcc7501887ff2c9";

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
        searchedContainer.innerHTML += buildCard(json[i])
      }
    }
    if (json.length === 0) {
      searchedContainer.classList.add("cards__search--failed");
      searchedContainer.innerHTML = `<p class="text--medium">We found no games when searching for "${search}"</p>`;
    }
  } catch (error) {
    // display error!
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
