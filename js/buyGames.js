const gamesArr = [
  {
    id: 0,
    image: "../images/games/GenshinImpact.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Genshin Impact",
    desc:
      "Genshin Impact is an action role-playing game developed and published by miHoYo. The game features an open-world environment and action-based battle system using elemental magic and character-switching, and uses gacha game monetization for players to obtain new characters, weapons, and other resources.",
    price: "$30",
  },
  {
    id: 1,
    image: "../images/games/GTA5.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Grand Theft Auto V",
    desc:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
    price: "$45",
  },
  {
    id: 2,
    image: "../images/games/Rust.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "Rust",
    desc:
      "The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying. Despite the presence of hostile animals such as bears and wolves, the primary threat to the player is other players due to the game being solely multiplayer.",
    price: "$30",
  },
  {
    id: 3,
    image: "../images/games/MW.png",
    rating: "&#9733; &#9733; &#9733; &#9734; &#9734;",
    title: "Modern Warfare",
    desc:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. The game's Special Ops mode features cooperative play missions that follow up the campaign's story. ",
    price: "$35",
  },
  {
    id: 4,
    image: "../images/games/ApexLegends.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Apex Legends",
    desc:
      "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, and for Nintendo Switch in March 2021. Ports for Android and iOS are also scheduled to be released by 2022. The game supports cross-platform play.",
    price: "$15",
  },
  {
    id: 5,
    image: "../images/games/Skyrim.jpg",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "The Elder Scrolls V: Skyrim",
    desc:
      "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.",
    price: "$40",
  },
];

const gameContainer = document.querySelector(".product-cards");

function listGames(games) {
  for (let i = 0; i < games.length; i++) {
    gameContainer.innerHTML += `<div class="product-card">
                <a class="product-link" href="product.html"></a>
                    <div class="product-card__image-container">
                        <img src="${games[i].image}" alt="Game: ${games[i].title}">
                    </div>
                    <div class="product-card__content">
                        <p class="product-card__title text--medium"> ${games[i].title} </p>
                        <div class="product-card__info">
                            <p class="text--medium"> ${games[i].rating}</p>
                            <p class="product-card__price text--medium">${games[i].price}</p>
                        </div>
                    </div>
            </div>`;
  }
}

listGames(gamesArr);
