// Pavyzdiniai JS teiginiai:

1 + 2;
5 - 2;
2 * 3;
10 / 2;
10 / 3;

// var - sename kode kintamųjų aprašymo būdas
// Galima naudoti arba nenaudoti kabliataškių,
// tačiau yra keletas išimčių, kai kodas be kabliataškių sukelia problemų
var a_1
var a_2;

// Dabartinis naudojamas būdas aprašyt kintamuosius
let b; // b reikšmė yra undefined
b = 10;

// Iki čia c neegzistuoja
let c = 20; // Nuo čia c yra 20

// Pasitikriname kintamojo reikšmę, ją
// išvesdami į naršyklės konsolę
console.log(c)
c = 10; // Nuo čia - 10

console.log(c)

// const - konstanta (nekintamas kintamasis)
const penki = 5;
penki = 7; // klaida!
const bereiksmis; // klaida, nes nėra pradinės reikšmės

// Klaida, dėl to, kad negalima sukurti antro kintamojo
// su tuo pavadinimu tam pačiam kontekste (kol kas tai reiškia faile)
let b;
let penki;


// Kintamieji gali turėti skirtingų tipų reikšmes:
// Skaičius
let skaicius = 10;
let skaicius2 = 5 * (2.71 + 9)

// Tekstą
let tekstas = 'Vardenis Pavardenis'
let tekstas_2 = 'Aš labai myliu Lietuvą, kurioje gyvena beveik 3 000 000 gyventojų'
// Ypatingos kabutės, kuriose ${} žymėjime galima rašyti JS teiginius (statements)
let sudetingas = `Kam lygu 2 + 3? = ${2 + 3}` 

// Boolean ("būliai")
// Dvi galimos reiškmės - true ir false
let bool1 = true;
let bool2 = false;
// Atsako į klausimą "Ar ...?"
let arSvieciaSaule = true;
let durysAtidarytos = false;

// Vienos eilutės komentaras
nebe komentaras

vv
/*
  Kelių eilučių komentaras,
  leidžiantis įrašyti daugiau teksto
*/ nebe komentaras
^^

dar ne/* gali būti ir vienos eilutės komentaras */nebe

// pvz.
2 + /*šita reikšmė svarbi*/ 3;