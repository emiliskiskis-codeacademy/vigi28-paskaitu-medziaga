function f(x) {
  return x ** 3 + 5 * x ** 2 - 10 * x + 5;
}

function g(x, y) {
  return 5 * x + 2 * y;
}

function suma(skaiciai) {
  if (skaiciai.length === 1) {
    return skaiciai[0];
  }
  return skaiciai[0] + suma(skaiciai.slice(1));
}

function print(reiksme) {
  if (reiksme < 10) {
    return;
  }
  console.log("Jūsų reikšmė yra:", reiksme);
  print(reiksme);
  return 5;
}

function gautiDuomenis() {
  // kreipiamės į serverį...
  // laukiam atsakymo...
  // atsisiunčiam duomenis...
  // apdorojam duomenis...
  // return duomenys;
}

console.log(print(9));
console.log(print(g(f(2), 10)));
console.log("Suma:", suma([1, 5, 4, 8, 2]));

let x = 5,
  y = 10;
{
  let x = 10,
    z = 20;
  console.log("Bloke:", x, y);
}

switch (x) {
  case 5:
    let reiksme = 20;
    console.log(reiksme);
    break;
  case 6: {
    let reiksme = 30;
    console.log(reiksme);
    break;
  }
}

console.log("Už bloko ribų:", x, y);
