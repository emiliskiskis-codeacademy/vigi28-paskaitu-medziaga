const skaiciuKiekis = 10;
const min = -20;
const max = 50;
const skaiciai = Array.from(Array(skaiciuKiekis)).map(() =>
  Math.floor(Math.random() * max + min)
);

console.log(skaiciai);

const p1 = document.getElementById("el1");
p1.innerText += skaiciai;
// p1.innerText = p1.innerText + skaiciai;

// let tekstas = p1.innerText;
// tekstas += skaiciai; NEGERAI!

let a = 5;
let b = a;
a = 10;
console.log(b); // 5

// Galioja objektam ir masyvam
let naujiSkaiciai = skaiciai;
skaiciai.push(100);
console.log(naujiSkaiciai); // [..., 100]!!!

// skaiciai = [1, 2, 3];
console.log(naujiSkaiciai); // [... (10 elementų)]

let atsakymas;
if (false) {
  atsakymas = "Teisingas";
} else {
  atsakymas = "Neteisingas";
}
console.log(atsakymas);

const asmuo = {};

asmuo.vardas = "Emilis";
asmuo.pavarde = "Kiškis";
console.log(asmuo);
