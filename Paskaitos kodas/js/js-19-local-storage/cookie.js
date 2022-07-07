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

  // document.cookie = "user=" + username + ';';
  document.cookie = `user=${username}; path=/`;

  onLogin(username);
});

let cookieArray = document.cookie.split("; ");
console.log("Cookie array:", cookieArray);
let userCookie = cookieArray.find(cookie => cookie.startsWith("user="));
console.log("User cookie:", userCookie);

if (userCookie) {
  let user = userCookie.slice(5);
  console.log("User:", user);

  onLogin(user);
}

logoutButton.addEventListener("click", () => {
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  onLogout();
});
