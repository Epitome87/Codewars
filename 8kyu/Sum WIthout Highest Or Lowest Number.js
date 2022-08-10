/*
 */

const sumArray = (array) =>
  array
    ? [...array]
        .sort((a, b) => a - b)
        .slice(1, array.length - 1)
        .reduce((acc, curr) => acc + curr, 0)
    : 0;

// Top user solution (nearly identical, just better end condition in slice!):
sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
