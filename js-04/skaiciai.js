const skaiciuSkaicius = 10;
const min = -20;
const max = 50;
const skaiciai = Array.from(Array(skaiciuSkaicius)).map(() =>
  Math.floor(Math.random() * max + min)
);
