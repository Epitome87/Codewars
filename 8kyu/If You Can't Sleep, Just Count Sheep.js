/*
 */

// My solution:
const countSheep = (num) =>
  Array(num)
    .fill('')
    .map((_, index) => `${index + 1} sheep...`)
    .join('');

// Good user solution:
const countSheep = (n) =>
  [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join('');

// Good user solution:
const countSheep = (length) =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('');

// Takeways: Learn Array.from, seems to be a way to create array and map at same time!
