// užduotys
// Array.prototype.sort, Array.prototype.reduce

const vardai = [
  { name: "Karolina", count: 58863, lytis: "mot" },
  { name: "Laura", count: 34724, lytis: "mot" },
  { name: "Gabrielė", count: 44247, lytis: "mot" },
  { name: "Arnas", count: 32729, lytis: "vyr" },
  { name: "Jonas", count: 31451, lytis: "vyr" },
  { name: "Deividas", count: 39837, lytis: "vyr" },
  { name: "Kristina", count: 38369, lytis: "mot" },
  { name: "Mindaugas", count: 3127, lytis: "vyr" },
  { name: "Kamilė", count: 34348, lytis: "mot" },
  { name: "Dovilė", count: 35483, lytis: "mot" },
  { name: "Dominykas", count: 37831, lytis: "vyr" },
  { name: "Ieva", count: 43453, lytis: "mot" },
  { name: "Mantas", count: 39678, lytis: "vyr" },
  { name: "Miglė", count: 36518, lytis: "mot" },
  { name: "Karolis", count: 38371, lytis: "vyr" },
  { name: "Monika", count: 45068, lytis: "mot" },
  { name: "Dovydas", count: 36959, lytis: "vyr" },
  { name: "Lukas", count: 55796, lytis: "vyr" },
  { name: "Evelina", count: 34903, lytis: "mot" },
  { name: "Tomas", count: 50747, lytis: "vyr" },
  { name: "Agnė", count: 58863, lytis: "mot" }
];

const paprastiVardai = [
  "Ąžuolas",
  "Laura",
  "Gabrielė",
  "Arnas",
  "Jonas",
  "Deividas"
];
// paprastiVardai.sort();

console.log(paprastiVardai);
console.log("Ą" > "Z");

const paprastiSkaiciai = [5, 10, 10, 50, 20, 2, 4, 5, 8, 1, 10];
paprastiSkaiciai.sort((a, b) => b - a);
console.log(paprastiSkaiciai);

console.log("Laura" - "Gabrielė");
console.log("Laura" > "Gabrielė");

paprastiVardai.sort((str1, str2) => str1.localeCompare(str2));
console.log(paprastiVardai);

vardai.sort((v1, v2) => v1.name.localeCompare(v2.name));
console.log(vardai);

function sortNames(v1, v2) {
  // "vyr" > "mot"
  const lytisDifference = v2.lytis.localeCompare(v1.lytis);
  if (lytisDifference === 0) {
    return v1.name.localeCompare(v2.name);
  }
  return lytisDifference;
}

vardai.sort(
  (v1, v2) => v2.lytis.localeCompare(v1.lytis) || v1.name.localeCompare(v2.name)
);
console.log(vardai);

console.log(true || "labas");
console.log(false || "labas");

console.log(!!1, !!0, !!-1);

// Array.prototype.reduce

console.log(paprastiSkaiciai);
const suma = paprastiSkaiciai.reduce(
  (tarpineSuma, skaicius) => tarpineSuma + skaicius,
  0
);
console.log(suma);

console.log(
  paprastiSkaiciai
    .reduce((tarpineSandauga, skaicius) => tarpineSandauga * skaicius, 1)
    .toLocaleString()
);

console.log(
  paprastiSkaiciai.reduce(
    (tarpinisSkaitliukas, skaicius) =>
      tarpinisSkaitliukas + Number(skaicius >= 10),
    0
  )
);

console.log(paprastiSkaiciai.filter(skaicius => skaicius >= 10).length);

// Randomly sort array
paprastiSkaiciai.sort(() => (Math.random() >= 0.5 ? 1 : -1));
console.log(paprastiSkaiciai);

let max = Number.MIN_VALUE;
for (const skaicius of paprastiSkaiciai) {
  if (skaicius > max) {
    max = skaicius;
  }
}
console.log(max);
