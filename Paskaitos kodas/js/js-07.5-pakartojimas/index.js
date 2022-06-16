const x = 10;
console.log("2" + "5");

// Matematiniai operatoriai:
/*
  + - sudėtis
  - - atimtis
  * - daugyba
  / - dalyba
  % - dalybos liekana (modulo)
  ** - kėlimas laipsniu (nuo ES6)

  +=
  -=
  *=
  ir t.t.

  x += 2 <==> x = x + 2;
  x *= x <==> x = x * x;
  x /= y <==> x = x / y;
*/

function pakeistiSeka(x, y) {
  return ((x - 1) % y) + 1;
}

/*
  Kaip paversti seką iš pirmos į antrą?
  Pirma seka: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
  Antra seka: 1 2 3 4 1 2 3 4 1 2 3 4 1 2 3 4 ...

  Jei skaičių daliname iš n, rezultatų aibė yra nuo 0 iki n-1 imtinai
  Kad paversti tą aibę nuo 1 iki n, pridedame prie rezultato 1:
  
  x % 4 => {0, 1, 2, 3} + 1 => {1, 2, 3, 4}

  Jeigu skaičiams nuo 1 iki n pritaikome formulę f(x) = x % 4 + 1, gauname tokį reikšmių sąryšį:
  {1: 2, 2: 3, 3: 4, 4: 1, 5: 2, ...}

  Kad paslinkti reikšmių pasikartojimą, iš x reikėtų atimti 1,
  gauname galutinę formulę f(x) = (x - 1) % 4 + 1:
  
  (1 - 1) % 4 + 1 => 1
  (2 - 1) % 4 + 1 => 2
  (3 - 1) % 4 + 1 => 3
  (4 - 1) % 4 + 1 => 4

  ((4 - 1) % 4) + 1
  {1: 1, 2: 2, 3: 3, 4: 4, 5: 1, ...}
*/

// Komentarai:
// eilutės
/* tarp žvaigdžučių */
/*
net ir per kelias
eilutes
*/

22 - 5 + 7 / 2 + 8 * 3;

let feisbukas = 22 - 5; // number
console.log(feisbukas + 7);

let instagramas = feisbukas + 7;
console.log(instagramas);
let tviteris = instagramas / 2;
console.log(tviteris);
let skaipas = tviteris + 8;
let tiktokas = skaipas * 3;
console.log(tiktokas);

let google = "Pixel"; // string
let googleSuVersija = google + " 6A";
console.log(googleSuVersija);

let arDestytojasGeras = true; // boolean (true, false)
let arYraKlausimu = false;

instagramas = instagramas + 6;
console.log(instagramas);

for (let i = 0; i < 10; i++) {
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 => 10 reikšmių
  console.log(i);
}

let a = 3;
console.log(a ** 5);
for (let i = 0; i < 5; i++) {
  // a = a + a;
  // a = a * 2;
  a *= 2;
}
// 2
// 4
// 8
// 16
// 32
console.log(a);
