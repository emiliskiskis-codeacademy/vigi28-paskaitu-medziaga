// import { getCircle, getSquare, data, triangleAngleCount } from "./shapes.js";
// import fn from "./shapes.js";

import fn, { // default export
  getCircle,
  getSquare,
  DataV3 as shapeInformation, // pervardinti importą
  triangleAngleCount
} from "./shapes.js";

import LogSquare, * as Shape from "./shapes/index.js";

fn();

console.log("Kvadratas:", getSquare(10, 10, 50, 50));
console.log("Figūrų skaičius:", ++shapeInformation.shapeCount);
console.log("Stačiakampis:", getSquare(50, 100, 28, 42));
console.log("Figūrų skaičius:", ++shapeInformation.shapeCount);
console.log("Apskritimas 1:", getCircle(100, 10));
console.log("Figūrų skaičius:", ++shapeInformation.shapeCount);
console.log("Apskritimas 2:", getCircle(200, 100));
console.log("Figūrų skaičius:", ++shapeInformation.shapeCount);

console.log("Trikampio kampų skaičius:", triangleAngleCount);

console.log(LogSquare, Shape);

const shapes = await import("./shapes.js");
console.log("Awaited");
console.log(shapes.DataV3.shapeCount);
