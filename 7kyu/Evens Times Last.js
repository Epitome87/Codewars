/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

// My solution:
const evenLast = (numbers) =>
  numbers.length
    ? numbers.reduce((sum, curr, idx) => (idx % 2 === 0 ? sum + curr : sum), 0) * numbers[numbers.length - 1]
    : 0;

// Clever user solution:
const evenLast = (n) => n.reduce((p, c, i) => (i % 2 ? p : p + c), 0) * n[n.length - 1] || 0;
