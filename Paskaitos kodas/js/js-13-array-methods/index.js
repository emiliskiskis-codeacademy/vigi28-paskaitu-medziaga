// Kas yra callback?

function pridekPenkis(x) {
  return x + 5;
}

function pridekPenkisCallback(x, cb) {
  cb(x + 5);
}

function pridekPenkisFn(fn) {
  return pridekPenkis(fn());
}

console.log(pridekPenkis(10));

pridekPenkisCallback(10, res => {
  console.log(res);
});

console.log(
  pridekPenkisFn(() => {
    return Math.floor(Math.random() * 5) + 1;
  })
);

/*





*/

// map, forEach, filter, find, some, every

// Array.prototype.map

const skaiciai = [5, 10, 2, 4, 8];

console.log(skaiciai);

const naujiSkaiciai = skaiciai.map(el => el * 2);

console.log(naujiSkaiciai);

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const dienos = [];
for (let i = 10; i <= 25; i++) {
  const diena = {
    data: `2022-06-${i}`,
    oras: Math.random() < 0.5 ? "giedra" : "apsiniaukę",
    temperatura: generateRandom(10, 20)
  };
  dienos.push(diena);
}

console.log(dienos);

function createDayElement(day) {
  const container = document.createElement("div");

  const data = document.createElement("div");
  data.textContent = "Diena: " + day.data;

  const oras = document.createElement("div");
  oras.textContent = "Dangus: " + day.oras;

  const temperatura = document.createElement("div");
  temperatura.textContent = "Temperatūra: " + day.temperatura + "oC";

  container.append(data, oras, temperatura);
  return container;
}

// Sutaupome daug rašymo
// document.body.append(...dienos.map(diena => createDayElement(diena)));

// const darVienasSkaiciuMasyvas = [100, 200, 300, 400];
// const treciasSkaiciusMasyvas = [...skaiciai, ...darVienasSkaiciuMasyvas];
// console.log([skaiciai, darVienasSkaiciuMasyvas], treciasSkaiciusMasyvas);

// document.body.append(...dienos.map(diena => createDayElement(diena)));

// Array.prototype.forEach

dienos
  .map(diena => createDayElement(diena))
  .forEach(diena => {
    document.body.append(diena);
  });

// Array.prototype.filter

console.log(
  "Išfiltruotas masyvas:",
  naujiSkaiciai.filter(sk => sk.toString().length === 2)
);

// Array.prototype.find

const ieskomiSkaiciai = [1, 2, 3, 4, 5, 4, 3, 2, 1];

const random = [9, 1, 8, 3, 5, 2, 5, 9, 1, 1];

console.log(
  "Surastas elementas",
  random.find(sk => sk >= 5)
);

// Surask <div> elementą, kurio data yra 2022-06-13
Array.from(document.body.children)
  .filter(el => el.nodeName === "DIV")
  .find(el => el.firstChild.textContent.includes("2022-06-13"));

// Array.prototype.findIndex

console.log(skaiciai);
console.log(ieskomiSkaiciai.findIndex(sk => sk === 6));

// Array.prototype.some

/*
  Visi (every) skaičiai yra didesni už 1
  Kai kurie (some) skaičiai yra didesni už 5
  Nė vienas (!some) skaičius nėra didesnis už 10
*/

console.log(skaiciai.some(sk => sk > 1));
console.log(skaiciai.some(sk => sk > 5));
console.log(skaiciai.some(sk => sk > 10));

// Array.prototype.every

console.log(skaiciai.every(sk => sk > 1));
console.log(skaiciai.every(sk => sk > 5));
console.log(skaiciai.every(sk => sk > 10));

// Nė vienas (!some) skaičius nėra didesnis už 10
console.log(!skaiciai.some(sk => sk > 10));
console.log(skaiciai.every(sk => !(sk > 10)));
