const BASE_URL = "https://olive-bead-glazer.glitch.me";
const tbody = document.querySelector("tbody");

fetch(BASE_URL)
  .then(res => res.json())
  .then(cars => {
    cars.forEach(car => {
      const tr = tbody.insertRow();
      tr.insertCell().textContent = car.brand;
      tr.insertCell().textContent = car.model;
    });
  });
