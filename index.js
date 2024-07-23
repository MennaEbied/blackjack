let cards = [];
let sum = 0;
let hasblackjack = false;
let isAlive = false;
let message = " ";
let messageEL = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");
let player = {
  name: "Menna",
  chips: 400,
};
let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum == 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardsEL.innerText = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }
  sumEL.textContent = "sum: " + sum;
  if (sum <= 21) {
    message = " Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "you've got a blackjack :)";
    hasblackjack = true;
  } else {
    message = "you're out of the game :(";
    isAlive = false;
  }
  messageEL.textContent = message;
}
function newCard() {
  if (isAlive == true && hasblackjack == false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
