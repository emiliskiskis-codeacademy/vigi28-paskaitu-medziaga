const title = document.querySelector("h2");
console.log(title);

const button = document.querySelector("button");
console.log(button);

/*

<div class="right">
  <img class="small" src="images/icon-cart.svg" />
  <img src="images/image-avatar.png" />
</div>
-->

{
  div: {
    children: [
      img,
      img,
      ...
    ]
  }
}

<div style="background-color: red; color: blue; font-size: 24px; ..."> </div>

-->

{
  backgroundColor: "red",
  color: "blue",
  fontSize: "24px",
  fontWeight: 400
}

*/

button.addEventListener("click", () => {
  if (title.style.cssText === "") {
    title.style.cssText = "background-color: red;";
  } else {
    title.style.cssText = "";
  }

  console.log(title.style.cssText);
});

const img = document.querySelector(".container .column>img");
console.log(img);

const width = 700 / 2 - 50;

img.style.width = width + "px";
