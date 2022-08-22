import * as MathThings from "./math.js";

const triangleAngleCount = 1 + 2;
const data = {
  shapeCount: 0
};

function getSquare(x, y, w, h) {
  // return: x1, y1, x2, y2, area, perimeter
  return {
    x1: x,
    x2: x + w,
    y1: y,
    y2: y + h,
    area: MathThings.getRectangleArea(w, h),
    perimeter: MathThings.getPolygonPerimeter(w, h, w, h)
  };
}

function getCircle(center, radius) {
  // return: x1, y1, x2, y2, area, perimeter
  return {
    x1: center - radius,
    x2: center + radius,
    y1: center - radius,
    y2: center + radius,
    area: MathThings.getCircleArea(radius),
    perimeter: MathThings.getCircumference(radius)
  };
}

export default () => {
  console.log("Default exportas iš shapes.js");
};

console.log(await new Promise(resolve => resolve("Hello")));

document.getElementById("shapeCount").addEventListener("click", () => {
  console.log(data.shapeCount);
});

export { triangleAngleCount, data as DataV3, getSquare, getCircle };
