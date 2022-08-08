const url = "https://api.publicapis.org/entries?title=dog&description=dogs";
const protocol = "https";
const host = "api.publicapis.org";
const endpoint = "/entries";
const searchParams = "title=dog&description=dogs";

const table = document.querySelector("table");
const form = document.querySelector("form");

function onResponse(data) {
  data.entries.forEach(entry => {
    const row = table.tBodies[0].insertRow();
    row.insertCell().textContent = entry.API;
    row.insertCell().textContent = entry.Description;

    const a = document.createElement("a");
    a.href = entry.Link;
    a.textContent = entry.Link;
    row.insertCell().append(a);

    row.insertCell().textContent = entry.Auth || "-";
    row.insertCell().textContent = entry.HTTPS ? "Taip" : "Ne";
    row.insertCell().textContent =
      entry.Cors === "yes" ? "Taip" : entry.Cors === "no" ? "Ne" : "Nežinoma";
  });
}

fetch(url)
  .then(res => res.json())
  .then(onResponse);

fetch("https://api.publicapis.org/categories")
  .then(res => res.json())
  .then(data => {
    const categorySelect = form.elements.category;

    data.categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category.split(" ")[0].toLowerCase();
      option.textContent = category;

      categorySelect.append(option);
    });
  })
  .catch(error => {
    console.log(error);
  });

form.addEventListener("submit", e => {
  e.preventDefault();

  const title = form.elements.title.value;
  const description = form.elements.description.value;
  const auth = form.elements.auth.value;
  const https = form.elements.https.value;
  const cors = form.elements.cors.value;
  const category = form.elements.category.value;

  console.log({
    title,
    description,
    auth,
    https,
    cors
  });

  let api = `https://api.publicapis.org/entries?`;
  if (title) {
    api += "title=" + title + "&";
  }
  if (description) {
    api += "description=" + description + "&";
  }
  if (auth) {
    api += "auth=" + auth + "&";
  }
  if (https) {
    api += "https=" + https + "&";
  }
  if (cors) {
    api += "cors=" + cors + "&";
  }
  if (category) {
    api += "category=" + category + "&";
  }

  api = api.replace(/\?$/, "");
  api = api.replace(/&$/, "");

  fetch(api)
    .then(res => res.json())
    .then(data => {
      table.tBodies[0].innerHTML = "";
      onResponse(data);
    })
    .catch(error => {
      console.log(error);
    });
});
