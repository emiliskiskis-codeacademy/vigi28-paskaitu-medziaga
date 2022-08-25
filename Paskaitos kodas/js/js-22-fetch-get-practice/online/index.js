const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "isVipCheckbox");

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", "isVipCheckbox");
  checkboxLabel.innerText = "VIP";

  document.body.append(checkbox, checkboxLabel);
};

const createSearchForm = () => {
  const searchBox = document.createElement("input");
  searchBox.setAttribute("type", "search");
  searchBox.setAttribute("id", "search");
  searchBox.setAttribute("name", "search");
  document.body.append(searchBox);

  const searchButton = document.createElement("button");
  searchButton.innerText = "Search for name";
  searchButton.setAttribute("id", "searchButton");

  const form = document.createElement("form");
  form.append(searchBox, searchButton);
  document.body.append(form);
};

const createTableSkeleton = () => {
  const id = document.createElement("th");
  id.innerText = "ID";

  const image = document.createElement("th");
  image.innerText = "Image";

  const firstName = document.createElement("th");
  firstName.innerText = "First name";

  const lastName = document.createElement("th");
  lastName.innerText = "Last name";

  const city = document.createElement("th");
  city.innerText = "City ";

  const favColor = document.createElement("th");
  favColor.innerText = "Fav color";

  const tr = document.createElement("tr");
  tr.append(id, image, firstName, lastName, city, favColor);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.body.append(table);
};

function populateTable(robots) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  robots.forEach(robot => {
    const id = document.createElement("td");
    id.innerText = robot.id;

    const img = document.createElement("img");
    img.src = robot.image;
    img.setAttribute("alt", "UserPicture");
    const imgTd = document.createElement("td");
    imgTd.append(img);

    const [name, surname] = robot.name.split(" ");

    const firstName = document.createElement("td");
    firstName.innerText = name;

    const lastName = document.createElement("td");
    lastName.innerText = surname;

    const city = document.createElement("td");
    city.innerText = robot.city;

    const favColor = document.createElement("td");
    favColor.innerText = robot.fav_color;

    const tr = document.createElement("tr");
    tr.append(id, imgTd, firstName, lastName, city, favColor);
    tbody.append(tr);
  });
}

createCheckbox();
createSearchForm();
createTableSkeleton();

const checkbox = document.getElementById("isVipCheckbox");
const form = document.querySelector("form");

async function filterRobots() {
  const searchString = form.elements.search.value.toLocaleLowerCase();
  fetch("https://magnetic-melon-yam.glitch.me")
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res);
      }
    })
    .then(robots => {
      populateTable(
        robots
          .filter(robot =>
            robot.name.toLocaleLowerCase().includes(searchString)
          )
          .filter(robot => (checkbox.checked ? robot.vip : true))
      );
    })
    .catch(error => {
      console.error(error);
    });
}

form.addEventListener("submit", event => {
  event.preventDefault();
  filterRobots();
});

checkbox.addEventListener("change", event => {
  filterRobots();
});

async function fetchData() {
  try {
    let response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      populateTable(await response.json());
    } else {
      console.error(response);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
