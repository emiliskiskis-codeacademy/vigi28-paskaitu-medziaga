let users;

fetch("https://62e7e5c30e5d74566afeac9f.mockapi.io/users")
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    console.log(data);
    users = data;
    showUsers();
  })
  .catch(error => {
    console.error(error);
  });

function showUsers() {
  const userContainer = document.getElementById("user-container");
  for (const user of users) {
    const userElement = document.createElement("div");
    userElement.textContent = JSON.stringify(user);
    userContainer.append(userElement);
  }
}
