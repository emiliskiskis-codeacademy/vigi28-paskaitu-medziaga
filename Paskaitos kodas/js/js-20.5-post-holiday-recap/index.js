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
  console.log(`${turn.toUpperCase()} laimėjo!!!`);
  started = false;
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
