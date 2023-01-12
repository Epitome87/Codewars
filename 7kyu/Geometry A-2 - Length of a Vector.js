/*
For a given 2D vector described by cartesian coordinates of its initial point and terminal point in the following format:

[[x1, y1], [x2, y2]]
Your function must return the vector's length represented as a floating point number.
Error must be within 1e-7.

Coordinates can be integers or floating point numbers.
*/

// My solution:
const vectorLength = (vector) => {
  const [x1, y1, x2, y2] = [...vector[0], ...vector[1]];
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

// Good user solution:
function vectorLength(vector) {
  return Math.hypot(vector[0][0] - vector[1][0], vector[0][1] - vector[1][1]);
}

/* Takeaways:
1) Stop forgetting about the Math.hypot method!
*/
