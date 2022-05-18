const du = 2;
const trys = 3;
const keturi = 4;

const tekstasKeturi = "5";
const tekstas1 = "Emilis";
const tekstas2 = "Jonas";

const salyga = keturi > tekstasKeturi;

// true = 1
// false = 0

const h = document.getElementById("h");

const tikrasSlaptazodis = "password123";
const ivestasSlaptazodis = "password123";

if (tikrasSlaptazodis === ivestasSlaptazodis) {
  h.innerText = "Sveiki atvykę!";
  if (salyga === false) {
    h.innerText += " pridėjau teksto";
  }
} else {
  h.innerText = "Neleidžiama prisijungti";
}

const skaicius = 20;
const spejimas = 130;

if (skaicius === spejimas) {
  h.innerText = "Valio, atspėjai!";
} else if (spejimas > skaicius + 100) {
  h.innerText = "Gerokai mažiau!";
} else if (spejimas > skaicius) {
  h.innerText = "Mažiau!";
} else {
  h.innerText = "Daugiau!";
}

if (spejimas > skaicius) {
  h.innerText = "Mažiau!";
}

if (spejimas > skaicius + 100) {
  h.innerText = "Gerokai mažiau!";
}

/*
  10 % 3, 871 % 12
  2 ** 4, 3 ** 5

  let a = 10;
  a++;
  a--;
  ++a;
  --a;

  a += 5;
  a -= 10;
  a *= 2;
  a /= 5;
  a %= 7;
  a **= 4;

  &&
  ||
  !
*/

h.innerText = "";
const raide = "A";
const vardas = "A";
const pavarde = "C";

// if (vardas === raide) {
//   if (pavarde == raide) {
//     h.innerText = "Sutampa!";
//   } else {
//     h.innerText = "Nesutampa!";
//   }
// } else {
//   h.innerText = "Nesutampa!";
// }

if (vardas === raide && !(pavarde === raide)) {
  h.innerText = "Sutampa!";
} else {
  h.innerText = "Nesutampa!";
}
