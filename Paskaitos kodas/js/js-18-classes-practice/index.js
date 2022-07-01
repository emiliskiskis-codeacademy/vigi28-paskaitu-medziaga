// map, forEach, filter, find, findIndex, some, every bendrumai

function parameterExample(par1) {
  console.log(par1);
}

parameterExample("hello");
parameterExample("hello1", "hello2"); // validu

const arr1 = [4, 6, 2, "hello"];

arr1.map(() => {});

arr1.map(value => {});

// Negausit index, gausit value
arr1.map(index => {});

// Jeigu reikia tik index
arr1.map((value, index) => {});
arr1.map((_, index) => {});
// Typescript only:
// arr1.map((, index) => {});

arr1.map((value, index) => {});

arr1.map((value, index, array) => {});

// map

// Ko reikia turėti šaldytuve?
const arr2 = [
  "pienas",
  "kiaušiniai",
  "žuvies galvos",
  "pomidorai",
  "agurkai",
  "rauginti pomidorai",
  "vėdarai",
  "šaltibarščiai"
];

// "pienas" -> { daiktas: "pienas", reikia: false }

console.log(arr2);

const arr3 = arr2.map(preke => {
  return {
    pavadinimas: preke,
    reikia: false
  };
});

console.log(arr3);

const arr4 = arr3.map(preke => {
  return preke.pavadinimas;
});

console.log(arr4);

const arr5 = [98, 78, 56, 61, 88, 6, 5, 22, 53, 41];

console.log(arr5.map(number => Math.sqrt(number)));

// forEach

// Return nieko nedaro
console.log(
  arr2.forEach(value => {
    return value + "hello";
  })
);
console.log(arr2);

arr2.forEach(value => {
  console.log(value);
});

arr2.forEach((value, index) => {
  console.log(`${index + 1}. ${value}`);
});

// filter

const arr6 = arr2.filter(value => {
  // if (value[0] === 'p') {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  // return value[0] === "p";
  // return value[0] !== "p";
  return value.length <= 8;
});

console.log(arr6);
console.log(arr3.filter(preke => preke.reikia));

// find, findIndex, includes

const preke1 = arr2.find(preke => preke.length >= 10);
console.log(preke1);

const preke2 = arr2.find(preke => preke === "apelsinai");
console.log(preke2);

const index1 = arr2.findIndex(preke => preke.length >= 10);
console.log(index1);

const index2 = arr2.findIndex(preke => preke === "apelsinai");
console.log(index2);

const index3 = arr2.reverse().findIndex(preke => preke.length >= 10);
console.log(arr2.length - 1 - index3);

const includes1 = arr2.includes("pomidorai");
console.log(includes1);

const includes2 = arr2.includes("apelsinai");
console.log(includes2);

const includes3 = arr3.includes({
  pavadinimas: "pomidorai",
  reikia: false
});
console.log(includes3);
const pomidorai2 = arr3[3];
const includes4 = arr3.includes(pomidorai2);
console.log(includes4);

// some, every

const some1 = arr2.some(preke => preke.length >= 10);
console.log(some1);

const some2 = arr2.some(preke => preke === "apelsinai");
console.log(some2);

const every1 = arr2.every(preke => preke.length >= 5);
console.log(every1);

const every2 = arr2.every(preke => preke.length >= 10);
console.log(every2);

// Ar nėra nė vieno elemento
const none1 = !arr2.some(preke => preke.length >= 10);
console.log(none1);
const none2 = !arr2.some(preke => preke.length >= 50);
console.log(none2);

// !arr.some(predicate) <=> arr.every(!predicate)
// Negali some būti false ir every būti true

// Kaip sužinoti, ar reikšmė yra number tipo?

console.log(
  [1, 5, "a", "g", "z", 6].filter(element => typeof element === "number")
);

// Kaip iš prekių pavadinimų padaryti <li>?

console.log(
  arr2.map(pavadinimas => {
    const el = document.createElement("li");
    el.textContent = pavadinimas;
    return el;
  })
);

const data = [
  {
    id: 1,
    first_name: "Lief",
    gender: "Female",
    car_model: "Corolla",
    car_year: 2002,
    shirt_size: "3XL"
  },
  {
    id: 2,
    first_name: "Danya",
    gender: "Male",
    car_model: "911",
    car_year: 2008,
    shirt_size: "XS"
  },
  {
    id: 3,
    first_name: "Marsha",
    gender: "Male",
    car_model: "V50",
    car_year: 2009,
    shirt_size: "XL"
  },
  {
    id: 4,
    first_name: "Clim",
    gender: "Genderqueer",
    car_model: "Sebring",
    car_year: 2000,
    shirt_size: "XS"
  },
  {
    id: 5,
    first_name: "Merlina",
    gender: "Polygender",
    car_model: "Corvette",
    car_year: 2012,
    shirt_size: "2XL"
  },
  {
    id: 6,
    first_name: "Danila",
    gender: "Genderfluid",
    car_model: "1 Series",
    car_year: 2011,
    shirt_size: "3XL"
  },
  {
    id: 7,
    first_name: "Homere",
    gender: "Male",
    car_model: "Sunbird",
    car_year: 1983,
    shirt_size: "S"
  },
  {
    id: 8,
    first_name: "Dayna",
    gender: "Non-binary",
    car_model: "Sigma",
    car_year: 1989,
    shirt_size: "2XL"
  },
  {
    id: 9,
    first_name: "Chickie",
    gender: "Agender",
    car_model: "Esteem",
    car_year: 1997,
    shirt_size: "L"
  },
  {
    id: 10,
    first_name: "Haley",
    gender: "Bigender",
    car_model: "Neon",
    car_year: 1999,
    shirt_size: "XL"
  },
  {
    id: 11,
    first_name: "Ajay",
    gender: "Genderqueer",
    car_model: "Edge",
    car_year: 2012,
    shirt_size: "3XL"
  },
  {
    id: 12,
    first_name: "Cyb",
    gender: "Bigender",
    car_model: "Tahoe",
    car_year: 2009,
    shirt_size: "XS"
  },
  {
    id: 13,
    first_name: "Ewell",
    gender: "Agender",
    car_model: "9-7X",
    car_year: 2007,
    shirt_size: "XS"
  },
  {
    id: 14,
    first_name: "Charyl",
    gender: "Genderqueer",
    car_model: "Sidekick",
    car_year: 1994,
    shirt_size: "XL"
  },
  {
    id: 15,
    first_name: "Ottilie",
    gender: "Genderfluid",
    car_model: "Continental GTC",
    car_year: 2012,
    shirt_size: "M"
  },
  {
    id: 16,
    first_name: "Sammy",
    gender: "Genderqueer",
    car_model: "Sonata",
    car_year: 2013,
    shirt_size: "XS"
  },
  {
    id: 17,
    first_name: "Giorgio",
    gender: "Genderfluid",
    car_model: "S40",
    car_year: 2011,
    shirt_size: "2XL"
  },
  {
    id: 18,
    first_name: "Cedric",
    gender: "Agender",
    car_model: "Thunderbird",
    car_year: 2006,
    shirt_size: "S"
  },
  {
    id: 19,
    first_name: "Holli",
    gender: "Non-binary",
    car_model: "Prius c",
    car_year: 2012,
    shirt_size: "2XL"
  },
  {
    id: 20,
    first_name: "Neil",
    gender: "Genderqueer",
    car_model: "Taurus",
    car_year: 2003,
    shirt_size: "M"
  },
  {
    id: 21,
    first_name: "Lynnett",
    gender: "Female",
    car_model: "Mirage",
    car_year: 1994,
    shirt_size: "M"
  },
  {
    id: 22,
    first_name: "Thacher",
    gender: "Genderqueer",
    car_model: "Navigator L",
    car_year: 2012,
    shirt_size: "S"
  },
  {
    id: 23,
    first_name: "Glenna",
    gender: "Non-binary",
    car_model: "Aero 8",
    car_year: 2008,
    shirt_size: "2XL"
  },
  {
    id: 24,
    first_name: "Nicol",
    gender: "Agender",
    car_model: "GTO",
    car_year: 1968,
    shirt_size: "XS"
  },
  {
    id: 25,
    first_name: "Bernadine",
    gender: "Non-binary",
    car_model: "928",
    car_year: 1991,
    shirt_size: "S"
  },
  {
    id: 26,
    first_name: "Joanna",
    gender: "Genderqueer",
    car_model: "S60",
    car_year: 2013,
    shirt_size: "XS"
  },
  {
    id: 27,
    first_name: "Celesta",
    gender: "Female",
    car_model: "Esprit",
    car_year: 2001,
    shirt_size: "L"
  },
  {
    id: 28,
    first_name: "Adi",
    gender: "Agender",
    car_model: "RAV4",
    car_year: 2008,
    shirt_size: "S"
  },
  {
    id: 29,
    first_name: "Nan",
    gender: "Non-binary",
    car_model: "Town Car",
    car_year: 2007,
    shirt_size: "3XL"
  },
  {
    id: 30,
    first_name: "Reynold",
    gender: "Female",
    car_model: "Blackwood",
    car_year: 2003,
    shirt_size: "2XL"
  },
  {
    id: 31,
    first_name: "Raina",
    gender: "Non-binary",
    car_model: "Tempo",
    car_year: 1987,
    shirt_size: "S"
  },
  {
    id: 32,
    first_name: "Eward",
    gender: "Non-binary",
    car_model: "Milan",
    car_year: 2008,
    shirt_size: "2XL"
  },
  {
    id: 33,
    first_name: "Teresa",
    gender: "Genderqueer",
    car_model: "Econoline E150",
    car_year: 1997,
    shirt_size: "3XL"
  },
  {
    id: 34,
    first_name: "Delmar",
    gender: "Female",
    car_model: "Legend",
    car_year: 1990,
    shirt_size: "XL"
  },
  {
    id: 35,
    first_name: "Koral",
    gender: "Agender",
    car_model: "B-Series",
    car_year: 1992,
    shirt_size: "3XL"
  },
  {
    id: 36,
    first_name: "Karil",
    gender: "Non-binary",
    car_model: "MR2",
    car_year: 1986,
    shirt_size: "S"
  },
  {
    id: 37,
    first_name: "Stepha",
    gender: "Polygender",
    car_model: "Daewoo Magnus",
    car_year: 2004,
    shirt_size: "S"
  },
  {
    id: 38,
    first_name: "Jaclyn",
    gender: "Genderfluid",
    car_model: "Grand Marquis",
    car_year: 2000,
    shirt_size: "M"
  },
  {
    id: 39,
    first_name: "Peria",
    gender: "Polygender",
    car_model: "Evora",
    car_year: 2011,
    shirt_size: "2XL"
  },
  {
    id: 40,
    first_name: "Cecelia",
    gender: "Genderfluid",
    car_model: "Accent",
    car_year: 1998,
    shirt_size: "L"
  },
  {
    id: 41,
    first_name: "Katha",
    gender: "Female",
    car_model: "RDX",
    car_year: 2011,
    shirt_size: "XS"
  },
  {
    id: 42,
    first_name: "Beverie",
    gender: "Male",
    car_model: "Probe",
    car_year: 1992,
    shirt_size: "2XL"
  },
  {
    id: 43,
    first_name: "Pavla",
    gender: "Polygender",
    car_model: "Colt",
    car_year: 1994,
    shirt_size: "XL"
  },
  {
    id: 44,
    first_name: "Sonnie",
    gender: "Non-binary",
    car_model: "Impreza",
    car_year: 2012,
    shirt_size: "3XL"
  },
  {
    id: 45,
    first_name: "Jordan",
    gender: "Genderqueer",
    car_model: "Cougar",
    car_year: 1994,
    shirt_size: "2XL"
  },
  {
    id: 46,
    first_name: "Court",
    gender: "Female",
    car_model: "Civic",
    car_year: 2005,
    shirt_size: "2XL"
  },
  {
    id: 47,
    first_name: "Berton",
    gender: "Female",
    car_model: "xB",
    car_year: 2012,
    shirt_size: "2XL"
  },
  {
    id: 48,
    first_name: "Maryl",
    gender: "Bigender",
    car_model: "LaCrosse",
    car_year: 2010,
    shirt_size: "XS"
  },
  {
    id: 49,
    first_name: "Robinson",
    gender: "Non-binary",
    car_model: "Dakota",
    car_year: 1992,
    shirt_size: "XS"
  },
  {
    id: 50,
    first_name: "Nerissa",
    gender: "Male",
    car_model: "F150",
    car_year: 2002,
    shirt_size: "3XL"
  }
];

console.log(
  data.map(value => ({
    id: value.id,
    car_year: value.car_year
  }))
);

// sort

arr2.reverse();
console.log(arr2);

// arr2.sort();
// console.log(arr2);

arr2.sort((a, b) => {
  // 1 (teigiamas) / -1 (neigiamas) / 0
  // Teigiamas: [b, a]
  // Neigiamas: [a, b]
  // 0: lieka tokia pati tvarka - [a, b] arba [b, a]

  return b.localeCompare(a, "lt"); // neigiamas jei [a, b], teigiamas jei [b, a], 0 jei lygūs
});

arr5;
arr5.sort((a, b) => b - a);
console.log(arr5);

console.log(arr2);

console.log("hello".localeCompare("world"));
console.log("world".localeCompare("hello"));
console.log("hello".localeCompare("hello"));

data;
console.log(
  data
    .map(person => person.gender)
    .filter((gender, index, arr) => !arr.slice(0, index).includes(gender))
);
const genders = [
  "Female",
  "Male",
  "Non-binary",
  "Genderfluid",
  "Genderqueer",
  "Bigender",
  "Polygender",
  "Agender"
];
data.sort((a, b) => {
  return genders.indexOf(a.gender) - genders.indexOf(b.gender);
});

data;

// reduce

const sum = arr5.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(sum);
const product = arr5.reduce((prev, curr) => prev * curr);
console.log(product);
const count = arr5.reduce(prev => prev + 1, 0);
console.log(count);

const average = arr5.reduce(
  (prev, curr, index, array) => prev + curr / array.length,
  0
);
console.log(average);
console.log(sum / count);

// (a + b + c) / d <=> a/d + b/d + c/d

arr5.sort(() => (Math.random() >= 0.5 ? 1 : -1));
arr5;

const max = arr5.reduce((prev, curr) => (curr > prev ? curr : prev));
console.log(max);
