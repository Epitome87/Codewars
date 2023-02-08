/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

Tests round answers to 6 decimal places.
*/

// My solution:
const trianglePerimeter = (triangle) => {
  const length = (pointA, pointB) =>
    Math.sqrt(
      Math.abs((pointB.x - pointA.x) ** 2) +
        Math.abs((pointB.y - pointA.y) ** 2)
    );
  return (
    length(triangle.a, triangle.b) +
    length(triangle.b, triangle.c) +
    length(triangle.c, triangle.a)
  );
};

// Clever user solution:
function trianglePerimeter(ᐃ) {
  let ab = Math.hypot(ᐃ.a.x - ᐃ.b.x, ᐃ.a.y - ᐃ.b.y);
  let bc = Math.hypot(ᐃ.b.x - ᐃ.c.x, ᐃ.b.y - ᐃ.c.y);
  let ca = Math.hypot(ᐃ.c.x - ᐃ.a.x, ᐃ.c.y - ᐃ.a.y);
  return ab + bc + ca;
}
