let str = "tekstas";
let num = 100;
let bool = true;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);

console.log(bool.toString());
console.log(num.toString());
console.log(str.toString());

const strToBoolean = "TRUE";

console.log(strToBoolean === "true" ? true : false);
console.log(Boolean(undefined));

// Number.prototype.toFixed

console.log((39.6414).toFixed(2));

console.log(0.1 + 0.2);
// Prarandamas tikslumas

// Number.isInteger

console.log(Number.isInteger(100));

// Number.isFinite

console.log(Number.isFinite(1 / 0));

const myNumber = Number("100");
console.log(myNumber);
console.log(Number.isNaN(myNumber));

// parseFloat / parseInt

const myParsedFloat = Number.parseFloat("  1.23 00.1435  ");
console.log(myParsedFloat);

const myParsedInt = Number.parseInt("10.23241");
console.log(myParsedInt);

// Paversk skaičių iš dešimtainės išraiškos į dvejetainę
console.log((2006651).toString(16));

// 42624623 = 4,26 * 10^7
// 4.26e7

const bigNumber = 0.00000000000000124;
console.log(bigNumber.toExponential(2));

console.log(bigNumber.toFixed(10));

const middleNumber = 1241231.31;

console.log(bigNumber.toPrecision(1));
console.log(Number.parseFloat(middleNumber.toPrecision(1)));

console.log(middleNumber.toLocaleString("zh-CN"));

// String methods

const testString = "Testinis String";

console.log(testString.length);

console.log(testString.toUpperCase());
console.log(testString);

console.log(testString.toLowerCase());

console.log(testString.toLocaleUpperCase());
console.log(testString.toLocaleLowerCase());

console.log(testString.slice(9, 12));

const inputString = `     emilis          kiškis    


      
`;

const trimmedString = inputString.trim();

console.log(trimmedString); // "emilis          kiškis"
console.log(inputString); /* "     emilis          kiškis    


      " */

console.log(testString.replaceAll("i", "a"));

// RegExp
const normalizedString = trimmedString.replace(/ +/g, " ");
console.log(normalizedString); // "emilis kiškis"

const words = normalizedString.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
  // Paimti pirmą raidę, paversti ją į didžiąją ir prijungti žodį nuo antros raidės
  words[i] = words[i][0].toUpperCase().concat(words[i].slice(1));
}

console.log(words);

const finalString = words.join(" ");
console.log(finalString);

/*
  startsWith, endsWith
  indexOf, lastIndexOf
  includes
  padStart, padEnd
  repeat
  search
*/

console.log(testString.startsWith("Test"));
console.log(testString.startsWith("test"));
console.log(testString.startsWith("aaaa"));

console.log(testString.indexOf("inis")); // Testinis
//                                              ^- 4

console.log(testString.indexOf("i")); // Testinis string
//                                           ^-4     ^-12
console.log(testString.lastIndexOf("i"));

console.log(testString.startsWith("inis"));
console.log(testString.includes("inis"));

console.log("*".repeat(10));

const hours = 5;
const minutes = 2;
const seconds = 8;

// 05:02:08

console.log(
  `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
);


console.log('Labas'.padEnd(50, '_.!._'))