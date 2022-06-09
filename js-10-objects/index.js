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
console.log(vardai);
console.log(vardai[0]);

vardai.pop();
console.log(vardai);
vardai.push("Jonas");
console.log(vardai);

vardai.shift();
console.log(vardai);
vardai.unshift("Gedas");
console.log(vardai);

vardai.splice(3, 1);
console.log(vardai);

vardai[0] = "Emilis";
console.log(vardai);
vardai[0] = 10;
console.log(vardai);
vardai[0] = true;
console.log(vardai[0]);
vardai[0] = ["Emilis", "Martynas", "Gedas"];
console.log(vardai);
console.log(vardai[0][1]);

console.log(vardai);
console.log(vardai.length);

for (let i = 0; i < vardai.length; i++) {
  vardai[i] = i % 2 === 0;
}
console.log(vardai);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
const skaiciai = [0, 1];
for (let i = skaiciai.length; i < 20; i++) {
  skaiciai[i] = skaiciai[i - 2] + skaiciai[i - 1];
}
console.log(skaiciai);
console.log(skaiciai.length);

const mixas = [1, 2, 3, "Emilis", true, null, undefined, [2, 3], {}];
console.log(mixas[7][1]);

console.clear();

// object, key-value pair, dictionary, map
let objektas1 = {
  vardas: "Emilis",
  pavarde: "Kiškis",
  gimimoData: "2000-05-12",
  ugis: 185
};

console.log(objektas1);

objektas1.gyvenamojiVieta = "Vilnius";
console.log(objektas1);

objektas1.ugis = 190;
console.log(objektas1);

delete objektas1.gimimoData;
console.log(objektas1);

const tuscias = {};
console.log(tuscias.toString());

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

// Masyvas/objektas nelygus kitam masyvui/objektui, net jeigu reikšmės sutampa
console.log([] === [], {} === {});

console.log(skaiciai);
let skaiciai2 = skaiciai;
console.log(skaiciai2);
// true tada, kai tas pats masyvas
console.log(skaiciai === skaiciai2);

skaiciai2.push(10);
console.log(skaiciai);

skaiciai.pop();
console.log(skaiciai2);

skaiciai2 = [];
console.log(skaiciai);

console.clear();
