/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  let shuffleCardBtn = document.querySelector("#shufflecardbtn");
  shuffleCardBtn.addEventListener("click", function() {
    // Created a random card
    const random = randomCard();

    // then set up the  text content and color of the card
    const card = document.querySelector(".card");
    card.textContent = random.number + random.suit;
    card.style.color = random.color;

    // the creation of this part will haunt me 'til the end of days (creating the HTML for the card)
    const cardContainer = document.querySelector("#card");
    const cardHTML = `
    <div id="card-symbol-top" class="cardSymbol ${random.suit}" style="color: ${random.color}">${random.icon}</div>
    <div id="card-number">
      <h2>${random.number}</h2>
    </div>
    <div id="card-symbol-bottom" class="cardSymbol ${random.suit}" style="color: ${random.color}">${random.icon}</div>
  `;
    cardContainer.innerHTML = cardHTML;
  });

  // setup and defined color & suits arrays
  const suits = ["♠", "♣", "♥", "♦"];
  const icons = ["♠", "♣", "♥", "♦"];
  const suitColors = {
    "♠": "black",
    "♣": "black",
    "♥": "red",
    "♦": "red"
  };

  // random card generator code
  const randomCard = () => {
    const num = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const randomNum = num[Math.floor(Math.random() * num.length)];
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex];
    const randomIcon = icons[randomSuitIndex];
    const color = suitColors[randomSuit];
    return {
      number: randomNum,
      suit: randomSuit,
      icon: randomIcon,
      color: color
    };
  };
};
