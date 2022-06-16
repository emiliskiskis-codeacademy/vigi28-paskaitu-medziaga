const form = document.querySelector("form");
const skaicius1 = document.querySelector("input[name=skaicius1]");
const skaicius2 = document.querySelector("input[name=skaicius2]");

function skirtumoTekstas(r1, r2) {
  alert(`${r1} artimesnis šimtui nei ${r2}`);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  let skirtumas1 = Math.abs(+skaicius1.value - 100);
  let skirtumas2 = Math.abs(+skaicius2.value - 100);

  if (skirtumas1 < skirtumas2) {
    skirtumoTekstas(skaicius1.value, skaicius2.value);
  } else if (skirtumas2 < skirtumas1) {
    skirtumoTekstas(skaicius2.value, skaicius1.value);
  } else {
    alert("Skaičiai nutolę vienodai");
  }
});
