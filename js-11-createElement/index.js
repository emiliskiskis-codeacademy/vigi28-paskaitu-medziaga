const container = document.getElementById("container");

function createP() {
  const p = document.createElement("p");
  p.textContent = "Hello world!";
  return p;
}

const pastraipos = [];

for (let i = 0; i < 10; i++) {
  pastraipos.push(createP());
}

console.log(pastraipos);

document.body.append(createP());
document.body.append(createP());
document.body.append(createP());
document.body.append(createP());
container.append(createP());

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

function createZmogus(vardas) {
  const div = document.createElement("div");
  div.textContent = vardas;
  div.style.fontFamily = "sans-serif";
  return div;
}

for (const vardas of vardai) {
  document.body.append(createZmogus(vardas));
}

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

const dienosEl = document.createElement("div");
dienosEl.style.display = "flex";
dienosEl.style.gap = "20px";
dienosEl.style.justifyContent = "center";

let currentStart = 3;
for (let i = currentStart; i < currentStart + 7; i++) {
  dienosEl.append(createDayElement(dienos[i]));
}

document.body.append(dienosEl);

function createButton(text) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  return button;
}

const back = createButton("<");
const forward = createButton(">");

back.addEventListener("click", () => {
  if (currentStart === 0) {
    return;
  }

  back.disabled = false;
  currentStart--;

  dienosEl.prepend(createDayElement(dienos[currentStart]));
  dienosEl.lastChild.remove();

  if (currentStart === 0) {
    back.disabled = true;
  }
});

forward.addEventListener("click", () => {
  if (currentStart + 6 === dienos.length - 1) {
    return;
  }

  forward.disabled = false;
  currentStart++;

  dienosEl.append(createDayElement(dienos[currentStart + 6]));
  dienosEl.firstChild.remove();

  if (currentStart + 6 === dienos.length - 1) {
    forward.disabled = true;
  }
});

dienosEl.before(back);
dienosEl.after(forward);

const carousel = document.createElement("div");
carousel.style.display = "flex";
carousel.style.justifyContent = "space-between";

const parentEl = dienosEl.parentElement;

carousel.append(back, dienosEl, forward);
parentEl.append(carousel);
