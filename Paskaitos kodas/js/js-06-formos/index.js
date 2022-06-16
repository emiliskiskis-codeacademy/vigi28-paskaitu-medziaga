const forma = document.getElementById("forma");
const forma2 = document.getElementById("forma2");
forma.addEventListener("submit", onFormSubmit);
forma2.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log("Pasubmitinta forma");
  const elements = event.target.elements;

  const values = {};

  for (const element of Array.from(elements)) {
    if (element.name === "") {
      continue;
    }
    if (element.type === "radio" || element.type === "checkbox") {
      if (!element.checked) {
        continue;
      }
    }
    values[element.name] = element.value;
  }

  console.log(values);
}
