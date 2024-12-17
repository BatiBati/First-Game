const icons = [
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
function shuffle(icons) {
  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // [icons[i], icons[j]] = [icons[j], icons[i]]

    let temp = icons[i];
    icons[i] = icons[j];
    icons[j] = temp;
  }
  return icons;
}
console.log(icons);

shuffle(icons);

icons.forEach((icons) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = icons;
  document.getElementById("game_container").appendChild(card);
});
