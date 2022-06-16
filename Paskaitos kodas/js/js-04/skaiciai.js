const skaiciuKiekis = 10;
const min = 0;
const max = 10;
const skaiciai = Array.from(Array(skaiciuKiekis)).map(() =>
  Math.floor(Math.random() * max + min)
);

console.log(skaiciai);

const p1 = document.getElementById("el1");
p1.innerText += skaiciai;

let suma = 0;
for (const skaicius of skaiciai) {
  suma += skaicius;
}
document.getElementById("el2").innerText += suma;

const vidurkis = suma / skaiciai.length;
document.getElementById("el3").innerText += vidurkis;
// el3.innerText += vidurkis;

let arYraSkaicius = false;
for (const skaicius of skaiciai) {
  if (skaicius > 10) {
    arYraSkaicius = true;
    break;
  }
}
el4.innerText += arYraSkaicius;

let kartojasi = {};
for (const skaicius of skaiciai) {
  if (kartojasi[skaicius] === undefined) {
    kartojasi[skaicius] = 1;
  } else {
    kartojasi[skaicius]++;
  }
}
console.log(kartojasi);

kartojasi = Object.entries(kartojasi);
kartojasi = kartojasi.sort((a, b) => b[1] - a[1]);
el5.innerText += kartojasi[0][0];
