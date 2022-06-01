// Pasinaudokite Quokka plėtiniu

let salygineFunkcija;
if (5 < 3) {
  salygineFunkcija = function () {
    console.log("Teisinga!");
  };
} else {
  salygineFunkcija = function () {
    console.log("Neteisinga sąlyga");
  };
}
salygineFunkcija();

function pridekPenkis(f) {
  return f() + 5;
}

console.log(
  "Pridėjus penkis gauname:",
  pridekPenkis(function () {
    return 10;
  })
);

function grazinkDesimt() {
  return 10;
}

console.log(grazinkDesimt);
console.log(grazinkDesimt());

function x() {
  return 1;
}

let y = () => {
  return 2.5;
};
let z = function () {
  return 2.5;
};

// function f(x) {
//   return x ** 3 + 5 * x ** 2 - 10 * x + 5;
// }

// function g(x, y) {
//   return 5 * x + 2 * y;
// }

let y_2 = () => 2.5;
let f = x => x ** 3 + 5 * x ** 2 - 10 * x + 5;
let g = (x, y) => 5 * x + 2 * y;

console.log(y_2());
console.log(g(f(2), 3));
