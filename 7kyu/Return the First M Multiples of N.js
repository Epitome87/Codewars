/*
 */

// My solution(s):
const multiples = (m, n) => Array.from({ length: m }, (v, i) => n * (i + 1));

const multiples = (m, n) =>
  Array(m)
    .fill(n)
    .map((x, i) => x * (i + 1));
