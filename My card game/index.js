// const gameContainer = document.getElementById("gameContainer");

// const cardValue = [
//   "🏀",
//   "🏀",
//   "🏈",
//   "🏈",
//   "⚾️",
//   "⚾️",
//   "🥎",
//   "🥎",
//   "🎱",
//   "🎱",
//   "🥊",
//   "🥊",
//   "🏓",
//   "🏓",
//   "🎲",
//   "🎲",
// ];

// function cardShuffle(shuffle) {
//   for (let i = shuffle.length - 1; i >= 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
//   }
//   console.log(shuffle);
//   return shuffle;
// }
// cardShuffle(cardValue);

let numbers = [1, 2, 3, 4, 5];

let modifiedArray = numbers.map((number, index, array) => {
  return `Element at index ${index}: ${number * 2}`;
});

console.log(modifiedArray);

let listHTML = "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>";
console.log(listHTML);