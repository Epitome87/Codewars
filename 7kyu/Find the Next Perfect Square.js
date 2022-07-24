/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// My eh solution:
const findNextSquare = (square) => {
  const squaredInput = Math.sqrt(square);

  if (!Number.isInteger(squaredInput)) return -1;

  const nextNumber = squaredInput + 1;
  return Math.pow(nextNumber, 2);
};

// Clever user solution:
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

// Clever user solution (refactored to use Math.isInteger instead of % 1 === 0)
function findNextSquare(sq) {
  return Math.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
