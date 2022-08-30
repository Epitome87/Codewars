/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

// My solution:
function squareArea(A) {
  const theta = 90;
  const radius = A / ((2 * Math.PI * theta) / 360);
  const area = +Math.pow(radius, 2).toFixed(2);

  return area;
}
