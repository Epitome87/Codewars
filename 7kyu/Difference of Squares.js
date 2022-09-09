/*
Recreation of Project Euler problem #6

Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

// My solution:
const differenceOfSquares = (n) => {
  const sumOfSquares = Math.pow((n * (n + 1)) / 2, 2);
  const squareSum = Array.from({ length: n }, (v, i) =>
    Math.pow(i + 1, 2)
  ).reduce((sum, curr) => sum + curr, 0);
  return sumOfSquares - squareSum;
};

// Clever math-heavy user solution:
const differenceOfSquares = (x) =>
  Math.pow((x * (x + 1)) / 2, 2) - (x * (x + 1) * (2 * x + 1)) / 6;

/* Takeaways:
1) Apparently there's a well-established formula for the square of sums; look it up!
Sum of squares of n natural numbers	[n(n+1)(2n+1)] / 6
Sum of squares of first n even numbers	[2n(n + 1)(2n + 1)] / 3
Sum of squares of first n odd numbers	[n(2n+1)(2n-1)] / 3
*/
