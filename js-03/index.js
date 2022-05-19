let masyvas = [];

let vardai = [
  "Emilis",
  "Aistė",
  "Dmitrij",
  "Alvita",
  "Andrius",
  "Armandas",
  "Edvardas",
  // ...
  "Žydrūnas"
];
console.log(vardai[0]);
vardai.push("Jonas");
vardai.pop();
// Nuo 4 indekso išimk 1 elementą
vardai.splice(4, 1);

const mixas = [1, 2, 3, "Emilis", true, null, undefined, [2, 3], {}];
console.log(mixas[7][1]);

console.clear();

let objektas1 = {
  vardas: "Emilis",
  pavarde: "Kiškis",
  gimimoData: "2000-05-12",
  ugis: 185,
  vedes: false,
  zmona: null
};

let objektas2 = {
  vardas: "Vardenis",
  pavarde: "Pavardenis",
  gimimoData: "1958-06-16",
  ugis: 180,
  vedes: true,
  zmona: "Julija"
};

// Šios dvi eilutės sukurs ciklinį ryšį
/*
  objektas1.zmona = objektas2
  objektas2.zmona = objektas1
*/

let diena = {
  data: "2022-05-19",
  oras: "giedra",
  temperatura: 20
};

console.log(diena);
console.log(diena.data);
const raktas = "oras";
console.log(diena["oras"]);
console.log(diena[raktas]);

diena.temperatura += 1;
diena.svente = "Paskaita";
delete diena.svente;

console.clear();

// Switch

const kryptis = "viršun"; // kairėn, dešinėn, pirmyn, atgal

let x = 0,
  y = 0;

// if (kryptis === "kairėn") {
//   x--;
// } else if (kryptis === "dešinėn") {
//   x++;
// } else if (kryptis === "pirmyn") {
//   y++;
// } else if (kryptis === "atgal") {
//   y--;
// }

switch (kryptis) {
  case "kairėn":
    x--;
    break;
  case "dešinėn":
    x++;
    break;
  case "pirmyn":
    y++;
    break;
  case "atgal":
    y--;
    break;
}

console.log(x, y);

switch (kryptis) {
  case "kairėn":
  case "dešinėn":
    console.log(`Pasukom ${kryptis}`);
    break;
  case "pirmyn":
  case "atgal":
    console.log(`Nuvažiavom ${kryptis}`);
    break;
  default:
    console.log(`Pabandėm važiuoti ${kryptis}, bet nepavyko`);
    break;
}

console.clear();

const salyga1 = true;
const salyga2 = true;

let reiksme = salyga1
  ? salyga2
    ? "Tikrai tiesa"
    : "Nelabai tiesa"
  : "Netiesa";

console.log(reiksme);

console.clear();

// For loops

let n = 10;
for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let i = 0; i < vardai.length; i++) {
  const vardas = vardai[i];
  console.log(`${i + 1}-as vardas yra ${vardas}`);
}

console.log("for-of array");
for (const vardas of vardai) {
  console.log(vardas);
}

console.log("for-in object");
for (const raktas in objektas1) {
  console.log(`${raktas}: ${objektas1[raktas]}`);
}

console.log("for-of Object.keys:");
for (const raktas of Object.keys(objektas1)) {
  console.log(`${raktas}: ${objektas1[raktas]}`);
}

console.log("for-of Object.values:");
for (const reiksme of Object.values(objektas1)) {
  console.log(reiksme);
}

console.log("for-of Object.entries:");
for (const entry of Object.entries(objektas1)) {
  console.log(entry[0], entry[1]);
}

console.log("Ciklas pasibaigė");
