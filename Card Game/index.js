const game_container = document.getElementById("game_container");

const cardValues = [
  "🏀",
  "🏀",
  "🏈",
  "🏈",
  "⚾️",
  "⚾️",
  "🥎",
  "🥎",
  "🎱",
  "🎱",
  "🥊",
  "🥊",
  "🏓",
  "🏓",
  "🎲",
  "🎲",
];

//Shuffle

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    // [array[i], array[j]] = [array[j], array[i]]

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
shuffle(cardValues);

//Create cards

cardValues.forEach((value) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = value;
  card.innerHTML = '<span class="hidden">' + value + "</span>";
  game_container.appendChild(card);
});

let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Handle card click
function flipCard(event) {
  if (lockBoard) return;
  const clickedCard = event.target;
  console.log(clickedCard);
  

  // Ignore if the same card is clicked twice

  if (clickedCard === firstCard) return;

  // Flip the card
  clickedCard.classList.add("flipped");
  clickedCard.querySelector("span").classList.remove("hidden");

  if (!firstCard) {
    // First card clicked
    firstCard = clickedCard;
  } else {
    // Second card clicked
    secondCard = clickedCard;
  }
}

// Check for match
function checkForMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;
  isMatch ? disableCards() : unflipCards();
}

// Disable matched cards
function disableCards() {
  firstCard.removeEventlistener("click", flipCard);
  secondCard.removeEventlistener("click", flipCard);
  resetBoard();
}

//Unflip cards if they don't match
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    firstCard.querySelector("span").classList.add("hidden");
    secondCard.classList.remove("flipped");
    secondCard.querySelector("span").classList.add("hidden");
    resetBoard();
  }, 1000);
}

// Reset board State
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}
// Add event listener to all cards
const array = document.querySelectorAll(".card");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", flipCard);

});

