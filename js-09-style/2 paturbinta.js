const button = document.querySelector("button");

button.style.position = "absolute";
button.style.left = (window.innerWidth - button.offsetWidth) / 2 + "px";
button.style.top = (window.innerHeight - button.offsetHeight) / 2 + "px";

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener("click", () => {
  const x = generateRandom(0, window.innerWidth - button.offsetWidth);
  const y = generateRandom(0, window.innerHeight - button.offsetHeight);

  button.style.left = x + "px";
  button.style.top = y + "px";
});
