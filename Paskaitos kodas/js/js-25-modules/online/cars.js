const cars = ["BMW", "VW", "AUDI", "MB"];

export function addCars(app) {
  // su innerHTML
  app.innerHTML += `
    <ul>
      ${cars
        .map(
          name => `
        <li>${name}</li>`
        )
        .join("")}
    </ul>
  `;

  // Su document.createElement()
  const ul = document.createElement("ul");
  ul.append(
    ...cars.map(name => {
      const li = document.createElement("li");
      li.innerText = name;
      return li;
    })
  );
  app.append(ul);

  // paprasčiau
  const ul2 = document.createElement("ul");
  cars.forEach(name => {
    const li = document.createElement("li");
    li.innerText = name;
    ul2.append(li);
  });
  app.append(ul2);
}
