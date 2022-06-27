// Shift + rodyklė, Shift + pelytė = žymėti tekstą
// Ctrl + rodyklė = peršokti per žodį
// Alt + rodyklė = sukeičia eilutes vietomis
// Alt + Shift + rodyklė = nukopijuoja eilutę
// Alt + Ctrl + rodyklė, Alt + pelytė = papildomas žymeklis

const skaiciai = [1, 2, 3, 4, 5, 10, 400, 1000];
const skaiciai2 = [17, 10, 17, 15, 2, 7, 7, 12, 7, 1];
const skaiciai3 = [11, 19, 10, 18, 14, 19, 14, 20, 10, 5];
const skaiciai4 = [14, 19, 19, 6, 19, 3, 19, 13, 3, 3];
const skaiciai5 = [18, 18, 11, 3, 6, 18, 10, 10, 2, 10];
const skaiciai6 = [13, 20, 2, 4, 8, 5, 18, 15, 17, 4];
const skaiciai7 = [14, 5, 7, 15, 9, 18, 18, 16, 4, 5];
const skaiciai8 = [6, 12, 10, 17, 15, 11, 20, 8, 8, 16];
const skaiciai9 = [14, 4, 17, 5, 5, 19, 8, 6, 5, 9];
const skaiciai10 = [19, 4, 20, 5, 8, 9, 13, 13, 6, 19];
const skaiciai11 = [14, 19, 14, 1, 5, 7, 3, 8, 9, 18];

function findIndex(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(skaiciai, 10));
console.log(findIndex(skaiciai2, 10));
console.log(findIndex(skaiciai3, 10));
console.log(findIndex(skaiciai4, 10));
console.log(findIndex(skaiciai5, 10));
console.log(findIndex(skaiciai6, 10));
