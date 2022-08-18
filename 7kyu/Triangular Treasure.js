/*
 */

// My solution, after refactoring to use a math-based approach:
const triangular = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Area of full square minus unfilled triangle
  return n ** 2 - (n * (n - 1)) / 2;
};

// Top user solution:
function triangular(n) {
  return n > 0 ? (n * n + n) / 2 : 0;
}

// Can be refactored to the sum of nth digit
function triangular(n) {
  return n > 0 ? (n * (n + 1)) / 2 : 0;
}

/* Takeways:
1) Although my original recursive function seems like it should have worked,
always consider a mathematical approach!
2) In particular, the formula n(n + 1)/2 seems to be common!
*/
