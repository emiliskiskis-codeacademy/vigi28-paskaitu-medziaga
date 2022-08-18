const methods = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];

const baseURL = "https://62e7e5c30e5d74566afeac9f.mockapi.io";
const endpoint = "/products";

const form = document.querySelector("form");
const formTitle = document.getElementById("formTitle");
const notification = document.getElementById("notification");
const cancelButton = document.getElementById("cancelButton");
const submitButton = document.getElementById("submitButton");

let editing = false;
let editingProductId = null;

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
    const th = document.createElement("th");
    th.textContent = "Actions";
    headRow.append(th);

    document.body.append(this.table);
  }

  clearTable() {
    this.body.innerHTML = "";
  }

  insertRow(rowData, onEditClick, onDeleteClick) {
    const tr = this.body.insertRow();
    rowData.forEach(cellData => {
      const td = tr.insertCell();
      td.textContent = cellData;
    });
    const td = tr.insertCell();

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Redaguoti";
    editButton.addEventListener("click", onEditClick);
    td.append(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Ištrinti";
    deleteButton.addEventListener("click", onDeleteClick);
    td.append(deleteButton);
  }
}

const dataTable = new DataTable(
  "ID",
  "Name",
  "Description",
  "Old Price",
  "New Price",
  "Discount Until"
);

function onEditClick(product) {
  console.log("Editing product id " + product.id);
  console.log(product);

  form.elements.name.value = product.name;
  form.elements.description.value = product.description;
  form.elements.oldPrice.value = product.oldPrice;
  form.elements.newPrice.value = product.newPrice;
  form.elements.discountUntil.value = new Date(product.discountUntil * 1000)
    .toISOString()
    .slice(0, 10);

  formTitle.textContent = "Redaguoti prekę ID " + product.id;
  submitButton.textContent = "Išsaugoti prekę";
  cancelButton.style.display = "";

  editing = true;
  editingProductId = product.id;
}

function onDeleteClick(id) {
  if (!window.confirm(`Ar tikrai norite ištrinti prekę ID ${id}?`)) {
    return;
  }
  fetch(`${baseURL}/products/${id}`, {
    method: "DELETE"
  })
    .then(res => {
      if (res.ok) {
        getProducts();
        showNotification("Prekė sėkmingai ištrinta");
      } else {
        showNotification("Klaida ištrinant prekę");
      }
    })
    .catch(error => {
      showNotification("Klaida ištrinant prekę: " + error);
    });
}

function onAfterEdit() {
  editing = false;

  formTitle.textContent = "Sukurti naują prekę";
  submitButton.textContent = "Pridėti prekę";
  cancelButton.style.display = "none";
}

function onGetProducts(products) {
  console.log(products);

  dataTable.clearTable();
  products.forEach(product =>
    dataTable.insertRow(
      [
        product.id,
        product.name,
        product.description,
        product.oldPrice,
        product.newPrice,
        new Date(product.discountUntil * 1000).toLocaleDateString()
      ],
      () => onEditClick(product),
      () => onDeleteClick(product.id)
    )
  );
}

// GET all products
function getProducts() {
  fetch(baseURL + endpoint)
    .then(res => res.json())
    .then(onGetProducts);
}

function showNotification(text) {
  notification.textContent = text;
  notification.style.right = "20px";

  setTimeout(() => {
    notification.style.right = "";
  }, 5000);
}

getProducts();

form.addEventListener("submit", e => {
  e.preventDefault();

  const product = {
    name: form.elements.name.value,
    description: form.elements.description.value,
    oldPrice: +form.elements.oldPrice.value,
    newPrice: +form.elements.newPrice.value,
    discountUntil: new Date(form.elements.discountUntil.value).getTime() / 1000
  };

  if (editing) {
    fetch(`${baseURL}/products/${editingProductId}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          getProducts();
          onAfterEdit();
          showNotification("Prekė sėkmingai atnaujinta");
        } else {
          showNotification("Klaida atnaujinant prekę");
        }
      })
      .catch(error => {
        showNotification("Klaida atnaujinant prekę: " + error);
      });
  } else {
    fetch(`${baseURL}/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          getProducts();
          showNotification("Prekė sėkmingai sukurta");
        } else {
          showNotification("Klaida sukuriant prekę");
        }
      })
      .catch(error => {
        showNotification("Klaida sukuriant prekę: " + error);
      });
  }
});

cancelButton.addEventListener("click", () => {
  form.reset();
  onAfterEdit();
});
