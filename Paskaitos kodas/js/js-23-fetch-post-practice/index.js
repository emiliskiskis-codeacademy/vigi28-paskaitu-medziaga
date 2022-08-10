const methods = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];

const baseURL = "https://62e7e5c30e5d74566afeac9f.mockapi.io";
const endpoint = "/products";

class DataTable {
  constructor(...headers) {
    this.table = document.createElement("table");

    this.head = this.table.createTHead();
    this.body = this.table.createTBody();

    const headRow = this.head.insertRow();
    headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headRow.append(th);
    });

    document.body.append(this.table);
  }

  clearTable() {
    this.body.innerHTML = "";
  }

  insertRow(rowData) {
    const tr = this.body.insertRow();
    rowData.forEach(cellData => {
      const td = tr.insertCell();
      td.textContent = cellData;
    });
  }
}

const dataTable = new DataTable(
  "Name",
  "Description",
  "Old Price",
  "New Price",
  "Discount Until"
);

function onGetProducts(products) {
  console.log(products);

  dataTable.clearTable();
  products.forEach(product =>
    dataTable.insertRow([
      product.name,
      product.description,
      product.oldPrice,
      product.newPrice,
      new Date(product.discountUntil * 1000).toLocaleDateString()
    ])
  );
}

// GET all products
function getProducts() {
  fetch(baseURL + endpoint)
    .then(res => res.json())
    .then(onGetProducts);
}

getProducts();

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const product = {
    name: form.elements.name.value,
    description: form.elements.description.value,
    oldPrice: +form.elements.oldPrice.value,
    newPrice: +form.elements.newPrice.value,
    discountUntil: new Date(form.elements.discountUntil.value).getTime() / 1000
  };

  const notification = document.getElementById("notification");

  fetch(baseURL + endpoint, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (res.ok) {
        getProducts();
        notification.textContent = "Prekė sėkmingai sukurta";
        notification.style.right = "20px";

        setTimeout(() => {
          notification.style.right = "";
        }, 5000);
      } else {
        notification.textContent = "Klaida sukuriant prekę";
        notification.style.right = "20px";

        setTimeout(() => {
          notification.style.right = "";
        }, 5000);
      }
    })
    .catch(error => {
      notification.textContent = "Klaida sukuriant prekę";
      notification.style.right = "20px";

      setTimeout(() => {
        notification.style.right = "";
      }, 5000);
    });
});
