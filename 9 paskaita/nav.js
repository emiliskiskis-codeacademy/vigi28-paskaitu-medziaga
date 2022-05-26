function paspaude(event) {
  console.log("Paspaudė!");
  document.getElementById("pagrindinis").removeEventListener("click", paspaude);
  console.log(event);
}

document.getElementById("pagrindinis").addEventListener("click", paspaude);
document.body.addEventListener("click");
