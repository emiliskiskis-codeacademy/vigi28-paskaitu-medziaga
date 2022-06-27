let zmogus1 = {
  vardas: "Emilis",
  pavarde: "Kiškis",
  gimimoData: "2000-05-12",
  ugis: 185
};

let gyvunas = {
  rusis: "šuo",
  vardas: "Anatolijus",
  amzius: 5,
  veisle: "senbernardas",
  spalva: "rudas"
};

let objPreke1 = {
  pavadinimas: "Oro kondicionierius",
  kodas: "345678986543",
  kaina: "3000",
  savybes: [],
  likutis: 10
};

let objPreke2 = {
  pavadinimas:
    "Kavos aparato 8x nukalkinimo priemonė - 8 valymo kartai - Coffee Clean",
  kodas: "345678986543",
  kaina: "10",
  savybes: [],
  likutis: 5
};

function nupirkoPreke(preke) {
  preke.likutis--;
}

function buvoGimtadienis(gyvunas) {
  gyvunas.amzius++;
}

// Constructor function
function Preke(pavadinimas, kodas, kaina, savybes, likutis) {
  this.pavadinimas = pavadinimas;
  this.kodas = kodas;
  this.kaina = kaina;
  this.savybes = savybes;
  this.likutis = likutis;

  this.pirktiPreke = function () {
    this.likutis--;
  };
}

let preke1 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
let preke2 = new Preke(
  "Kavos aparato 8x nukalkinimo priemonė - 8 valymo kartai - Coffee Clean",
  "345678986543",
  10,
  [],
  5
);
let preke3 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);

console.log(objPreke1);
console.log(preke1);
console.log(preke2);

console.log(objPreke1 instanceof Preke);
console.log(preke1 instanceof Preke);
console.log(preke2 instanceof Preke);

console.log(preke1.likutis);
console.log(preke2.likutis);
preke1.pirktiPreke();
console.log(preke1.likutis);

console.log(preke1.likutis);
console.log(preke2.likutis);
preke2.pirktiPreke();
console.log(preke2.likutis);

function Diena(data) {
  this.data = data;
  this.oras = Math.random() < 0.5 ? "giedra" : "apsiniaukę";
  this.temperatura = generateRandom(10, 20);
}

function Savaite(dienos) {
  this.dienos = dienos;
}

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let dienos = [];

for (let i = 10; i <= 25; i++) {
  const diena = new Diena(`2022-06-${i}`);
  dienos.push(diena);
}

console.log(dienos);

console.log(
  new Savaite([
    dienos[0],
    dienos[1],
    dienos[2],
    dienos[3],
    dienos[4],
    dienos[5],
    dienos[6]
  ])
);
