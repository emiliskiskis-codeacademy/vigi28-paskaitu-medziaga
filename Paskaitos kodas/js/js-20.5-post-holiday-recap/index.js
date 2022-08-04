class GameBoard {
  constructor(messageBoard) {
    this.messageBoard = messageBoard;
    this.boardEl = document.querySelector(".board");
    // null - nėra simbolio, 'x' - kryžiukas, 'o' - nuliukas
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.turn = null;
    this.resizeBoard();
    window.addEventListener("resize", () => this.resizeBoard());

    Array.from(this.boardEl.children).forEach((child, index) => {
      child.addEventListener("click", () => {
        this.onClick(index);
      });
    });
  }

  onClick(index) {
    console.log(this);
    this.messageBoard.addMessage(this.turn.toUpperCase() + " paėjo");
    if (this.turn === null) {
      return;
    }
    this.draw(Math.floor(index / 3), index % 3, this.turn);
    if (this.hasWon()) {
      this.stopGame();
      return;
    }
    this.turn = this.turn === "x" ? "o" : "x";
  }

  startGame(symbol) {
    if (this.turn === null) {
      this.turn = symbol;
      this.messageBoard.addMessage(
        "Žaidimas prasidėjo, pradeda " + symbol.toUpperCase()
      );
    }
  }

  stopGame() {
    this.messageBoard.addMessage("Žaidimas pasibaigė, laimėjo " + this.turn);
    this.turn = null;
  }

  resizeBoard() {
    this.boardEl.style.gridAutoRows = this.boardEl.clientWidth / 3 + "px";
  }

  draw(x, y, symbol) {
    this.board[x][y] = symbol;
    this.boardEl.children[x * 3 + y].textContent = symbol;
  }

  drawX(x, y) {
    this.draw(x, y, "x");
  }

  drawO(x, y) {
    this.draw(x, y, "o");
  }

  /*
    0 - žaidimas nesibaigė
    1 - laimėjo kryžiukai
    2 - laimėjo nuliukai
    3 - lygiosios
  */
  hasWon() {
    // patikrinti, ar sutampa iš anksto numatytose linijose
    const lines = [
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];

    if (lines.some(line => line.every(cell => cell === "x"))) {
      return 1;
    }
    if (lines.some(line => line.every(cell => cell === "o"))) {
      return 2;
    }

    // patikrinti, ar lenta pilnai užpildyta
    if (this.board.some(row => row.some(cell => cell === null))) {
      return 0;
    } else {
      return 3;
    }
  }
}

// class Controls {}

class Scoreboard {
  // laimėjimų istorija turi būti išsaugoma
  // puslapiui persikrovus
  constructor() {
    this.scoreX = +localStorage.getItem("scoreX") || 0;
    this.scoreO = +localStorage.getItem("scoreO") || 0;
    this.scoreXEl = document.getElementById("scoreX");
    this.scoreOEl = document.getElementById("scoreO");

    this.displayScore();
  }

  incrementX() {
    // padidinti scoreX per vieną
    this.scoreX++;
    this.saveScore();
    this.displayScore();
  }

  incrementO() {
    // padidinti scoreO per vieną
    this.scoreO++;
    this.saveScore();
    this.displayScore();
  }

  saveScore() {
    localStorage.setItem("scoreX", this.scoreX);
    localStorage.setItem("scoreO", this.scoreO);
  }

  displayScore() {
    this.scoreXEl.textContent = this.scoreX;
    this.scoreOEl.textContent = this.scoreO;
  }

  clearScore() {
    this.scoreX = 0;
    this.scoreO = 0;
    this.saveScore();
    this.displayScore();
  }
}

class MessageBoard {
  // Prasidėjus žaidimui, išvalomas message board
  // ir parašoma "Žaidimas pradedamas!"

  // po kiekvieno ėjimo yra parašoma "dabar 'X' arba 'O' eilė"

  // pergalės arba lygiųjų atveju parašomas rezultato pranešimas
  // pvz. "Laimėjo X.", "Lygiosios."

  constructor() {
    this.messagesEl = document.querySelector(".messages");
  }

  addMessage(message) {
    // sukurti naują <p> elementą
    // priskirti pranešimo tekstą elementui
    // įterpti naują elementą į <div id="messages">

    const messageEl = document.createElement("p");
    messageEl.textContent = `[${new Date().toISOString()}] ${message}`;
    this.messagesEl.prepend(messageEl);
  }

  clearMessages() {
    this.messagesEl.innerHTML = "";
  }
}

const scoreboard = new Scoreboard();
const messageBoard = new MessageBoard();
const gameBoard = new GameBoard(messageBoard);

document.getElementById("startWithX").addEventListener("click", () => {
  gameBoard.startGame("x");
});

document.getElementById("startWithO").addEventListener("click", () => {
  gameBoard.startGame("o");
});
