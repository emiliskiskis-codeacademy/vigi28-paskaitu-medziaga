export function getRectangleArea(w, h) {
  return w * h;
}

export function getPolygonPerimeter(...sideLengths) {
  return sideLengths.reduce((prev, curr) => prev + curr);
}

export function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

export function getCircumference(radius) {
  return 2 * Math.PI * radius;
}
