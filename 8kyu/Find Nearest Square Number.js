/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers
*/

// My solution:
const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;

// Good user solution:
function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2;
}
