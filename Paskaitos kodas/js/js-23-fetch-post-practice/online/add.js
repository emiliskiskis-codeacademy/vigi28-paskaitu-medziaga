const BASE_URL = "https://olive-bead-glazer.glitch.me";
const form = document.querySelector("form");
const notif = document.getElementById("notification");

form.addEventListener("submit", e => {
  e.preventDefault();

  const car = {
    brand: form.elements.brand.value,
    model: form.elements.model.value
  };

  const body = JSON.stringify(car);

  fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json"
    },
    body,
    method: "POST"
  })
    .then(async res => {
      console.debug(await res.json());
      if (res.ok) {
        notif.textContent = "Automobilis sėkmingai pridėtas!";
      } else {
        notif.textContent = "Nepavyko pridėti automobilio";
        console.debug(res);
      }
    })
    .catch(e => {
      notif.textContent = "Nepavyko pridėti automobilio";
      console.debug(e);
    });
});
