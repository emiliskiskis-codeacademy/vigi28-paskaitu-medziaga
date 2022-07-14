const LOCAL_STORAGE_ITEM_KEY = "users";
const fullName = event.target.querySelector('input[name="name"]').value;
const [name, surname] = fullName.split(" ");
localStorage.setItem(
  LOCAL_STORAGE_ITEM_KEY,
  JSON.stringify([...usersInlocalStorage, { name, surname }])
);

function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    holiday => new Date(holiday).getDate() === date.getDate()
  );
}

console.log(isItHoliday(new Date("2020-05-25")));

// Date objektai

let date = new Date(2000, 11, 12);
console.log(date.toString());

console.log(date.getDay()); // Savaitės diena
// S Pr An Tr Kt Pn Št
// 0  1  2  3  4  5  6
console.log(date.getDate());
console.log(date.setHours(20));
console.log(date.toString());
let poDesimtPenkiolika = new Date("2000-10-10T10:15:00+04:00");
console.log(poDesimtPenkiolika.toString());
console.log(poDesimtPenkiolika.getHours());
console.log(poDesimtPenkiolika.toISOString());

document.write(poDesimtPenkiolika.toString());

console.log("2020-01-01" === "2020-01-01");
console.log(
  new Date("2020-01-01T23:00:00+02:00").toDateString() ===
    new Date("2020-01-02T01:00:00+08:00").toDateString()
);

// Sudėtingesnės sintaksė

const missingNumber = array => array.find((x, i) => x + 1 !== array[i + 1]) + 1;
console.log(missingNumber([5, 6, 7, 8, 9]));

// "..." sintaksė

console.log("Emilis Kiškis".split(" "));
let raides = "EmilisKiškis".split("");
console.log(raides);
let [pirmaRaide, antraRaide, treciaRaide, ...kitosRaides] = raides;
console.log(pirmaRaide, antraRaide, treciaRaide, kitosRaides);

let zmogus = {
  vardas: "Emilis",
  pavarde: "Kiškis",
  amzius: 22
};

let { vardas, amzius, ...likeAtributai } = zmogus;
console.log(vardas, likeAtributai);

console.log(...raides);

function add(x, y) {
  return x + y;
}

let numbers = [5, 10];

console.log(add(...numbers));

let moreNumbers = [-5, 0, ...numbers, 15, 20];

console.log(moreNumbers);

let didelisZmogus = {
  miestas: "Vilnius",
  ...zmogus
};

console.log(didelisZmogus);

lvalue && rvalue;
// lvalue falsy -> lvalue
// lvalue truthy -> rvalue;

lvalue || rvalue;
// lvalue falsy -> rvalue;
// lvalue truthy -> lvalue;
