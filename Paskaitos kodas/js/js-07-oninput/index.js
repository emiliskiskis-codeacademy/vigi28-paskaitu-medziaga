const form1 = document.getElementById("form1");

form1.addEventListener("submit", event => {
  event.preventDefault();

  const years = input1.value;
  if (years === "" || isNaN(+years)) {
    form1.elements.namedItem("output").innerText = "";
    return;
  }

  let bonus = 50;
  if (years >= 10) {
    bonus += 50;
  }
  if (years >= 20) {
    bonus += 100;
  }

  form1.elements.namedItem("output").innerText = `Jūsų premija: ${bonus}`;
});

form2.addEventListener("submit", e => {
  e.preventDefault();
});

input2.addEventListener("input", () => {
  const years = input2.value;
  if (years === "" || isNaN(+years)) {
    form2.elements.namedItem("output").innerText = "";
    return;
  }

  let bonus = 50;
  if (years >= 10) {
    bonus += 50;
  }
  if (years >= 20) {
    bonus += 100;
  }

  form2.elements.namedItem("output").innerText = `Jūsų premija: ${bonus}`;
});
