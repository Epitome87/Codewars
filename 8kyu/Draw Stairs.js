/*
 */

// My solution:
const drawStairs = (n) =>
  Array.from({ length: n }, (v, i) => `${' '.repeat(i)}I`).join('\n');

// Good user solution:
function drawStairs(n) {
  return Array(n)
    .fill('I')
    .map((e, i) => e.padStart(i + 1, ' '))
    .join('\n');
}
