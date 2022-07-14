let numbers = [];
console.log(numbers);

for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10) + 1);
  console.log(numbers);
}

console.log(numbers);

// Event-driven architecture

// const intervalHandle = setInterval(() => {
//   console.log("Praėjo 2 sekundės", new Date());
// }, 2000);

// document.querySelector("button").addEventListener("click", () => {
//   alert("Buvau paspaustas!");
//   console.log("Tikrai buvau!");
//   clearInterval(intervalHandle);
// });

// console.log("Buvau paspaustas!");

// const timeoutHandle = setTimeout(() => {
//   prompt("Praėjo trys sekundės?");
// }, 3000);

// clearTimeout(timeoutHandle);

// console.log(confirm("Praėjo trys sekundės?"));

const dialogResponse = new Promise(resolve => {
  document.getElementById("taip").addEventListener("click", () => {
    resolve(true);
  });
  document.getElementById("ne").addEventListener("click", () => {
    resolve(false);
  });
});

dialogResponse
  .then(value => {
    console.log(value);
  })
  .finally(() => {
    document.getElementById("dialogbox").remove();
  });

let promise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    reject();
  }, 1000);
});

promise
  .then(() => {
    console.log("Praėjo sekundė!");
  })
  .catch(() => {
    console.log("Įvyko laiko tėkmės klaida");
  });

console.log("Sukurtas promise");

let paspaustasMygtukas = new Promise((resolve, reject) => {
  const button = document.getElementById("paspausk");
  const onClick = () => {
    resolve();
  };
  button.addEventListener("click", onClick);
  window.setTimeout(() => {
    button.removeEventListener("click", onClick);
    reject("Mygtukas nebuvo paspaustas per 5 sekundes");
  }, 5 * 1000);
});

paspaustasMygtukas
  .then(() => {
    console.log("Mygtukas paspaustas!");
  })
  .catch(() => {
    console.log("Mygtukas nebuvo paspaustas...");
  });
