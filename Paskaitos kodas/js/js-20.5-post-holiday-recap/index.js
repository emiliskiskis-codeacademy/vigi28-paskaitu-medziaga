// query selector
const boardElement = document.querySelector(".board");

// style su js
boardElement.style.gridAutoRows = boardElement.clientWidth / 3 + "px";

// event listener
window.addEventListener("resize", () => {
  boardElement.style.gridAutoRows = boardElement.clientWidth / 3 + "px";
});

let turn = "x";
let board = [[], [], []];
let started = false;

// let scoreX = localStorage.getItem("scoreX"),
//   scoreO = localStorage.getItem("scoreO");

// let scoreX = localStorage.getItem("scoreX");
// if (scoreX === null) {
//   scoreX = 0;
// } else {
//   scoreX = +scoreX;
// }

// Reikšmė iš scoreX, jeigu yra, kitu atveju 0
let scoreX = +localStorage.getItem("scoreX") || 0;

// Reikšmė iš scoreO, jeigu yra, kitu atveju 0
let scoreO = localStorage.getItem("scoreO");
if (scoreO === null) {
  scoreO = 0;
}

writeScore();

function changeTurn() {
  if (turn === "x") {
    turn = "o";
  } else {
    turn = "x";
  }
}

function onStart(startingTurn) {
  turn = startingTurn;
  Array.from(boardElement.children).forEach(child => {
    child.textContent = "";
  });
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  started = true;
}

function onCellClick(i) {
  if (!started) {
    return;
  }
  if (boardElement.children[i].textContent !== "") {
    return;
  }
  board[Math.floor(i / 3)][i % 3] = turn;
  boardElement.children[i].textContent = turn;
  checkVictory();
  changeTurn();
}

function checkLine(line) {
  return line.every(cell => cell === "x") || line.every(cell => cell === "o");
}

function checkVictory() {
  if (board.some(checkLine)) {
    onVictory();
  }
  for (let i = 0; i < 3; i++) {
    const column = [board[0][i], board[1][i], board[2][i]];
    if (checkLine(column)) {
      onVictory();
    }
  }
  const diagonals = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ];
  if (diagonals.some(checkLine)) {
    onVictory();
  }
}

function onVictory() {
  // Laimėjo tas, kurio buvo ėjimas
  console.log(`${turn.toUpperCase()} laimėjo!!!`);
  if (turn === "x") {
    scoreX += 1;
    localStorage.setItem("scoreX", scoreX);
  } else {
    scoreO += 1;
    localStorage.setItem("scoreO", scoreO);
  }
  writeScore();
  started = false;
}

function writeScore() {
  document.getElementById("scoreX").textContent = scoreX;
  document.getElementById("scoreO").textContent = scoreO;
}

document
  .getElementById("startWithX")
  .addEventListener("click", () => onStart("x"));
document
  .getElementById("startWithO")
  .addEventListener("click", () => onStart("o"));

Array.from(boardElement.children).forEach((child, index) => {
  child.addEventListener("click", () => onCellClick(index));
});
