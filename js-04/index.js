// for (let i = 49841; i > 1; i /= 2) {
//   console.log(i);
// }

let n = 1;
while (n > 1) {
  n /= 2;
}
console.log(n); // 0.5

n = 0.8;
do {
  n /= 2;
} while (n > 1);
console.log(n); // 0.4

let number = 8;
let guess = 0;
do {
  // Atsitiktinis sveikas skaičius nuo 1 iki 20
  guess = Math.ceil(Math.random() * 20);
  console.log(guess);
  console.log(guess > number ? "Daugiau" : "Mažiau arba lygu");
} while (guess !== number);

console.log("Atspėta!");

let objektas = null;

do {
  objektas = {
    reiksme: 1
  };
} while (objektas.reiksme > 2);

console.log(objektas);

console.clear();

const skaiciai = [4, 7, 2, 47, 1, 83, 7];
const ieskomasSkaicius = 7;

// let arSurastasSkaicius = false;
// let i = 0;

// while (!arSurastasSkaicius) {
//   const skaicius = skaiciai[i];
//   console.log(skaicius);
//   if (skaicius === ieskomasSkaicius) {
//     arSurastasSkaicius = true;
//   }
//   i++;
// }

// for (let i = 0; skaiciai[i] !== ieskomasSkaicius && i < skaiciai.length; i++) {
//   console.log(skaiciai[i]);
// }

for (const skaicius of skaiciai) {
  if (skaicius === ieskomasSkaicius) {
    continue;
  }
  console.log(skaicius);
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
}

console.log("Ciklo pabaiga");

// DOM (Document Object Model)

console.log(document);
const h1 = document.getElementById("pavadinimas");
h1.innerText = "DOM paskaita";

const h2 = document.getElementById("siandien");
h2.innerText = `Šiandien yra 4-ta paskaita. Dabar yra ${new Date()}`;

console.log(document.getElementById("pastraipa").innerText);

// const main = document.getElementById("main");
// main.innerHTML = "<h2 id='h2'></h2>";
// document.getElementById("h2").innerHTML = "<span>DOM naudojimo pavyzdys</span>";

// h1.innerHTML = '<script src="mano-virusas.js"></script>';
