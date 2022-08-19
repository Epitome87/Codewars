/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

// My straightforward solution:
const findSum = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }

  return sum;
};

// My 'clever' solution:
const findSum = (n) =>
  Array.from({ length: n }, (_, i) => i + 1)
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((acc, curr) => acc + curr, 0);

// My refactored 'clever' solution:
const findSum = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => (!(curr % 3 && curr % 5) ? acc + curr : acc), 0);
