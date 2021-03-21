const gamesArr = [
  {
    id: 0,
    image: "../images/games/GenshinImpact.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Genshin Impact",
    desc:
      "Genshin Impact is an action role-playing game developed and published by miHoYo. The game features an open-world environment and action-based battle system using elemental magic and character-switching, and uses gacha game monetization for players to obtain new characters, weapons, and other resources.",
    price: 30,
  },
  {
    id: 1,
    image: "../images/games/GTA5.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Grand Theft Auto V",
    desc:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
    price: 45,
  },
  {
    id: 2,
    image: "../images/games/Rust.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "Rust",
    desc:
      "The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying. Despite the presence of hostile animals such as bears and wolves, the primary threat to the player is other players due to the game being solely multiplayer.",
    price: 30,
  },
  {
    id: 3,
    image: "../images/games/MW.png",
    rating: "&#9733; &#9733; &#9733; &#9734; &#9734;",
    title: "Modern Warfare",
    desc:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. The game's Special Ops mode features cooperative play missions that follow up the campaign's story. ",
    price: 35,
  },
  {
    id: 4,
    image: "../images/games/ApexLegends.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Apex Legends",
    desc:
      "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, and for Nintendo Switch in March 2021. Ports for Android and iOS are also scheduled to be released by 2022. The game supports cross-platform play.",
    price: 15,
  },
  {
    id: 5,
    image: "../images/games/Skyrim.jpg",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "The Elder Scrolls V: Skyrim",
    desc:
      "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.",
    price: 40,
  },
  {
    id: 6,
    image: "../images/games/GenshinImpact.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Genshin Impact",
    desc:
      "Genshin Impact is an action role-playing game developed and published by miHoYo. The game features an open-world environment and action-based battle system using elemental magic and character-switching, and uses gacha game monetization for players to obtain new characters, weapons, and other resources.",
    price: 30,
  },
  {
    id: 7,
    image: "../images/games/GTA5.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Grand Theft Auto V",
    desc:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
    price: 45,
  },
  {
    id: 8,
    image: "../images/games/Rust.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "Rust",
    desc:
      "The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying. Despite the presence of hostile animals such as bears and wolves, the primary threat to the player is other players due to the game being solely multiplayer.",
    price: 30,
  },
  {
    id: 9,
    image: "../images/games/MW.png",
    rating: "&#9733; &#9733; &#9733; &#9734; &#9734;",
    title: "Modern Warfare",
    desc:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. The game's Special Ops mode features cooperative play missions that follow up the campaign's story. ",
    price: 35,
  },
  {
    id: 10,
    image: "../images/games/ApexLegends.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Apex Legends",
    desc:
      "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, and for Nintendo Switch in March 2021. Ports for Android and iOS are also scheduled to be released by 2022. The game supports cross-platform play.",
    price: 15,
  },
  {
    id: 11,
    image: "../images/games/Skyrim.jpg",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "The Elder Scrolls V: Skyrim",
    desc:
      "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.",
    price: 40,
  },
  {
    id: 12,
    image: "../images/games/GenshinImpact.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Genshin Impact",
    desc:
      "Genshin Impact is an action role-playing game developed and published by miHoYo. The game features an open-world environment and action-based battle system using elemental magic and character-switching, and uses gacha game monetization for players to obtain new characters, weapons, and other resources.",
    price: 30,
  },
  {
    id: 13,
    image: "../images/games/GTA5.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Grand Theft Auto V",
    desc:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
    price: 45,
  },
  {
    id: 14,
    image: "../images/games/Rust.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "Rust",
    desc:
      "The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying. Despite the presence of hostile animals such as bears and wolves, the primary threat to the player is other players due to the game being solely multiplayer.",
    price: 30,
  },
  {
    id: 15,
    image: "../images/games/MW.png",
    rating: "&#9733; &#9733; &#9733; &#9734; &#9734;",
    title: "Modern Warfare",
    desc:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. The game's Special Ops mode features cooperative play missions that follow up the campaign's story. ",
    price: 35,
  },
  {
    id: 16,
    image: "../images/games/ApexLegends.png",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9734;",
    title: "Apex Legends",
    desc:
      "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, and for Nintendo Switch in March 2021. Ports for Android and iOS are also scheduled to be released by 2022. The game supports cross-platform play.",
    price: 15,
  },
  {
    id: 17,
    image: "../images/games/Skyrim.jpg",
    rating: "&#9733; &#9733; &#9733; &#9733; &#9733;",
    title: "The Elder Scrolls V: Skyrim",
    desc:
      "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.",
    price: 40,
  },
];

const cartInfo = document.querySelector(".cart-info");
const cartTotal = document.querySelector(".total-price");
let totalPrice = 0;

for (let i = 0; i < storedCart; i++) {
  cartInfo.innerHTML += `<p><a href="product.html">${gamesArr[i].title}</a><span class="price">$${gamesArr[i].price} USD</span></p>`;
  totalPrice += gamesArr[i].price;
}

cartTotal.innerHTML = `Total <span class="price"></span><b> $${totalPrice} USD</b>`;
