const form = document.getElementById("form");
const pranesimas = document.getElementById("success");
const logoutButton = document.getElementById("logout");

function onLogin(username) {
  pranesimas.textContent = `${username}, sėkmingai prisijungėte!`;
  pranesimas.style.display = "block";
  form.style.display = "none";
  logoutButton.style.display = "inline-block";
}

function onLogout() {
  pranesimas.style.display = "none";
  form.style.display = "block";
  logoutButton.style.display = "none";
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const username = document.getElementById("username").value;

  localStorage.setItem("user", username);

  onLogin(username);
});

let user = localStorage.getItem("user");

if (user) {
  console.log("User:", user);

  onLogin(user);
}

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  onLogout();
});
