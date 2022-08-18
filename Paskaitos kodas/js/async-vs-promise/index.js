function fetchPartyGuestsPromise() {
  fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(guests => {
      checkIfPersonVIP(guests, "Kristupas Lapeika");
    });
}

function fetchPartyGuestsPromiseCatch() {
  fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(guests => {
      checkIfPersonVIP(guests, "Kristupas Lapeika");
    })
    .catch(error => {
      console.error(error);
    });
}

async function fetchPartyGuestsAsync() {
  const response = await fetch(
    "https://boiling-reaches-93648.herokuapp.com/week-3/party"
  );
  if (response.ok) {
    const guests = await response.json();
    checkIfPersonVIP(guests, "Kristupas Lapeika");
  }
}

async function fetchPartyGuestsAsyncCatch() {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/party"
    );
    if (response.ok) {
      JSON.parse("fagagaga");
      const guests = await response.json();
      checkIfPersonVIP(guests, "Kristupas Lapeika");
    }
  } catch (error) {
    console.error(error);
  }
}

function tryParse() {
  try {
    JSON.parse("fagagaga");
    console.log("Duomenys sėkmingai gauti!");

    return 5;
  } catch {
    console.log("Buvo klaida");
  } finally {
    closeConnection();
  }
}

function tryData(cb, fallback) {
  try {
    return cb();
  } catch {
    return fallback;
  }
}

info = localStorage.getItem("info");
const data = tryData(() => JSON.parse(info), null);
