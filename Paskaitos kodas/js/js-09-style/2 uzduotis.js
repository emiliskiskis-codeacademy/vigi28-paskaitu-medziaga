const button = document.querySelector("button");

button.style.position = "absolute";
button.style.left = 0;
button.style.top = 0;

button.addEventListener("click", () => {
  if (button.style.left !== "") {
    button.style.left = "";
    button.style.top = "";

    button.style.right = 0;
    button.style.bottom = 0;
  } else {
    button.style.right = "";
    button.style.bottom = "";

    button.style.left = 0;
    button.style.top = 0;
  }
});
