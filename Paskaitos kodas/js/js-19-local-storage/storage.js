// Cookies - trumpalaikė momentinių duomenų saugykla

// Create/update cookie
document.cookie = "name=value;";
document.cookie = "username=Emilis Kiškis;";
document.cookie = "dark_mode=true;";
document.cookie = "session_id=14198491759181; expires=Session;";
// visos cookie reikšmės yra string tipo

// Get cookie
console.log(document.cookie); // 'name=value; username=Emilis Kiškis; dark_mode=true; session_id=14198491759181'

// Delete cookie
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
document.cookie = `username=; expires=${new Date(0).toUTCString()}`;

// Local storage - ilgalaikė laikinų duomenų saugykla

// Create/update local storage item
localStorage.setItem("name", "value");
localStorage.setItem("username", "Emilis Kiškis");
localStorage.setItem("dark_mode", true);
localStorage.setItem("session_id", 14198491759181);
const nameInput = document.querySelector("input[name=name]");
localStorage.setItem("inputtedName", nameInput.value);
// visos reikšmės yra pakeičiamos į string duomenų tipą (iškviečiamas toString metodas)

// Get local storage item
localStorage.getItem("name"); // value
localStorage.getItem("username"); // Emilis Kiškis
localStorage.getItem("dark_mode"); // "true" (string tipas)

// Delete local storage item
localStorage.removeItem("name");
localStorage.removeItem("username");

// Session storage - trumpalaikė laikinų duomenų saugykla
// Taip pat, kaip localStorage, bet sessionStorage

sessionStorage.setItem("name", "value");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
