import multiply from "./multi.js";
import { addHeader } from "./header.js";
import { addCars } from "./cars.js";

console.log(multiply(4, 5));
console.log(multiply(10, 60));

addHeader(document.body);
addCars(document.body);
