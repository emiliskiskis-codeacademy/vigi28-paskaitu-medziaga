// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
const skaiciai = [0, 1];
for (let i = skaiciai.length; i < 20; i++) {
  skaiciai[i] = skaiciai[i - 2] + skaiciai[i - 1];
}
console.log(skaiciai);
console.log(skaiciai.length);

function isFibonacci(value, index, arr) {
  if (index < 2) {
    return;
  }
  console.log(value === arr[index - 1] + arr[index - 2]);
}

const cars = [5, 10, 10, 50, 20, 2, 4, 5, 8, 1, 10];

const sum = cars.reduce((acc, car) => {
  console.log(car);
  return acc + car;
});
console.log(sum);

let minCar = cars[0];
cars.forEach(car => {
  console.log(car);
  if (car < minCar) {
    console.log(car);
    minCar = car;
  }
});

cars.reduce((minCar, car) => {
  // if (car < minCar) {
  //   return car;
  // } else {
  //   return minCar;
  // }
  return car < minCar ? car : minCar;
});

cars.reduce((minCar, car) => (car < minCar ? car : minCar));

console.log(Number.parseFloat("1.234"));
console.log(Number.parseInt("1.234"));

const number = 256.25;
const smallNumber = 0.00000000000000124;

console.log(number.toLocaleString("ar"));

console.log(number.toFixed(1));

console.log(number.toExponential(2));

console.log(number.toPrecision(3));
console.log(smallNumber.toPrecision(3));

// String methods

const testString = "Test string";
const turkish = "iiiIII";
const lithuanian = "ąčęėįŠŲŪŽ";

console.log(testString.toString());

console.log(testString.toUpperCase());
console.log(testString.toLowerCase());

// Skirtingi
console.log(turkish.toUpperCase());
console.log(turkish.toLowerCase());
console.log(turkish.toLocaleUpperCase("tr"));
console.log(turkish.toLocaleLowerCase("tr"));

// Vienodi
console.log(lithuanian.toUpperCase("lt"));
console.log(lithuanian.toLowerCase("lt"));
console.log(lithuanian.toLocaleUpperCase("lt"));
console.log(lithuanian.toLocaleLowerCase("lt"));

const tekstasSuTarpais = "      hello   qe          ";

console.log(tekstasSuTarpais.trim());
console.log(tekstasSuTarpais.trimStart());
console.log(tekstasSuTarpais.trimEnd());

console.log(testString);

console.log(testString.slice(0, 4));
// console.log(testString.slice(i, i + n));

console.log(testString.replace("string", "text"));
console.log(testString.replace("s", "S"));
console.log(testString.replaceAll("s", "S"));

console.log(testString.split(" "));
console.log(testString.split("s"));
console.log(testString.split(""));

console.log(["Test", "array", "with", "many", "strings"].join(" "));
console.log(["Test", "array", "with", "many", "strings"].join("sss"));
console.log(["Test", "array", "with", "many", "strings"].join());

console.log(testString.startsWith("Test"));
console.log(testString.startsWith("test"));
console.log(testString.startsWith("string"));

console.log(testString.endsWith("Test"));
console.log(testString.endsWith("String"));
console.log(testString.endsWith("string"));

console.log(testString.indexOf("str"));
console.log(testString[5]);
console.log(testString.indexOf("text"));
console.log(testString[-1]);
console.log(testString.indexOf("s"));
console.log(testString.slice(2));

console.log(testString.lastIndexOf("s"));
console.log(testString.slice(5));
console.log(testString.lastIndexOf("text"));
console.log(testString[-1]);

console.log(testString.includes("Test"));
console.log(testString.includes("s"));
console.log(testString.includes("text"));
console.log(testString.includes("test"));
console.log(testString.includes("ing"));

console.log(testString.repeat(5));
console.log("*".repeat(5));
console.log("*".repeat(5).repeat(5));

console.log("1. Turinys".padEnd(49, "_").concat("1"));
console.log(
  [1, 2, 3, 4, 5, 10, 400, 1000].map(nr => nr.toString().padStart(3, "0"))
);
