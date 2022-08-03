class GameBoard {
  drawX(x, y) {}

  drawO(x, y) {}
}

class Controls {}

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
messageBoard.clearMessages();
messageBoard.addMessage("Žaidimas prasidėjo");
messageBoard.addMessage("X eilė");
messageBoard.addMessage("O eilė");
messageBoard.addMessage("X eilė");
messageBoard.addMessage("Laimėjo X");
