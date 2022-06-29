class Preke {
  static prekiuSkaicius = 0;

  constructor(pavadinimas, kodas, kaina, savybes, likutis) {
    this.pavadinimas = pavadinimas;
    this.kodas = kodas;
    this.kaina = kaina;
    this.savybes = savybes;
    this.likutis = likutis;
    Preke.prekiuSkaicius++;
  }

  pirktiPreke() {
    this.likutis--;
  }

  pridetiSavybe(savybe) {
    this.savybes.push(savybe);
  }

  static gautiPrekiuSkaiciu() {
    return this.prekiuSkaicius;
  }

  // Prasta abstrakcija
  // sumazintiLikutiPerViena() {
  //   this.likutis--;
  // }
}

let preke1 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
let preke2 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
let preke3 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
let preke4 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
let preke5 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
let preke6 = new Preke("Oro kondicionierius", "345678986543", 3000, [], 10);
console.log(preke1);

console.log(preke1 instanceof Preke);
console.log(preke1.likutis);
preke1.pirktiPreke();
console.log(preke1.likutis);

console.log(Preke.prekiuSkaicius);
console.log(Preke.gautiPrekiuSkaiciu());

class Gyvunas {
  constructor(vardas, amzius, veisle, spalva) {
    this.vardas = vardas;
    this.amzius = amzius;
    this.veisle = veisle;
    this.spalva = spalva;
  }

  kalbeti() {
    console.log("ūga būga");
    return 5;
  }
}

class Augintinis extends Gyvunas {
  constructor(vardas, amzius, veisle, spalva, seimininkas) {
    super(vardas, amzius, veisle, spalva);
    this.seimininkas = seimininkas;
  }
}

class Suo extends Augintinis {
  kalbeti() {
    let x = super.kalbeti();
    console.log("Au!");
    return x + 5;
  }
}

class Kate extends Augintinis {
  kalbeti() {
    console.log("Miau!");
  }
}

class Ziurkenas extends Augintinis {
  kalbeti() {
    console.log("Cyp cyp!");
  }
}

class Senbernaras extends Suo {}

// let gyvunas = new Gyvunas("Anatolijus", 5, "senbernaras", "rudas", "Alvita");
let suo = new Suo("Anatolijus", 5, "senbernaras", "rudas", "Alvita");
let kate = new Kate("Sabrina", 8, "iš lauko parnešta", "ryža/raina", "Alvita");
let ziurkenas = new Ziurkenas(
  "1-asis žiurkėnas",
  1,
  "didelis",
  "pilkas",
  "Raimonda"
);
console.log("Gyvūnai:");
console.log(suo);
console.log(kate);
console.log(ziurkenas);

console.log(suo.kalbeti());
kate.kalbeti();
ziurkenas.kalbeti();

class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      console.log(this.getValues());
    });
  }

  getAllInputFields() {
    const elements = this.form.elements;
    const elementsArr = Array.from(elements);
    return elementsArr.filter(element => element.type !== "submit");
  }

  getValues() {
    return this.getAllInputFields().map(input => input.value);
  }
}

const form = new Form("form");
console.log(form.getAllInputFields());

class RandomImage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    const img = document.createElement("img");
    this.img = img;
    if (height === undefined) {
      height = width;
    }
    this.regenerateImage();

    img.addEventListener("click", () => {
      this.regenerateImage();
    });
  }

  getElement() {
    return this.img;
  }

  regenerateImage() {
    this.img.src = `https://picsum.photos/seed/${Math.random()
      .toString()
      .slice(2)}/${this.width}/${this.height}`;
  }
}

document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());
document.body.append(new RandomImage(200, 300).getElement());

class MySet {
  _elements = [];

  add(value) {}

  remove(value) {}

  has(value) {
    // return boolean;
  }

  // read-only property
  get elements() {
    return this._elements;
  }
}

const mySet = new MySet();
console.log(mySet.elements);
mySet.elements = 3456789;
console.log(mySet.elements);
