const container = document.querySelector("div");
const h1 = document.querySelector("h1");

console.log(h1);

h1.addEventListener("click", () => {
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.minHeight = "100vh";

  // Dvigubai daugiau nei 2em
  // h1.style.fontSize = "4em";

  // Suskaičiuojam fontSize pagal tikrą elemento aukštį
  h1.style.lineHeight = 1;
  h1.style.fontSize = h1.clientHeight * 2 + "px";
  h1.style.lineHeight = "";

  h1.style.color = "red";

  // Praktikoje naudotina className
  // container.className = "modified";
  // h1.className = "modified";
});
