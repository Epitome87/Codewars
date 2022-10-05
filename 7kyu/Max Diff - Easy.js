/*
 */

// My solution:
const maxDiff = (list) => {
  const sorted = [...list].sort((a, b) => a - b);
  return sorted.slice(-1) - sorted.slice(0, 1);
};

// My other solution:
const maxDiff = (list) =>
  list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;

// Good user solution:
const maxDiff = (arr) =>
  arr.sort((a, b) => a - b)[arr.length - 1] - arr[0] || 0;
