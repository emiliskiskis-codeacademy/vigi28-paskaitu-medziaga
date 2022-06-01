// 2 užduotis

// function alertVardas() {
//   alert("Emilis");
// }

// document.querySelector("#vardas").addEventListener("click", alertVardas);

document.querySelector("#vardas").addEventListener("click", function () {
  alert("Emilis");
});

// 3 užduotis
function insertAboutMe() {
  const p = document.querySelector("#pastraipa-apiemane");
  if (p.textContent === "") {
    p.textContent =
      "Ad velit do consequat non in dolor excepteur. Aliqua voluptate deserunt enim eu esse magna esse anim fugiat proident officia eiusmod. Duis officia amet eiusmod ex aute consectetur consequat nostrud mollit commodo. Non fugiat qui nostrud tempor aute quis consequat ea proident do eiusmod excepteur nisi. Excepteur velit fugiat incididunt nisi Lorem magna officia sit excepteur. Excepteur enim mollit cupidatat sit ea tempor ad esse eu amet minim laboris ea. Irure labore dolor eu eu ullamco mollit.";
  } else {
    p.textContent = "";
  }
}

document.querySelector("#apiemane").addEventListener("click", insertAboutMe);

// 4 užduotis
const h1 = document.querySelector("h1");
const plusOne = document.querySelector("#plus-one");
const minusOne = document.querySelector("#minus-one");
let counter = 0;
h1.textContent = counter;

function addOne() {
  h1.textContent = ++counter;
}

function subtractOne() {
  h1.textContent = --counter;
}

plusOne.addEventListener("click", addOne);
minusOne.addEventListener("click", subtractOne);

// 5 užduotis

const p = document.querySelector("#nekopijuojama");
p.addEventListener("copy", forbidCopying);

function forbidCopying(event) {
  event.preventDefault();
  alert("Kopijuoti negalima!");
}
