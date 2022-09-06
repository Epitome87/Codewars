/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

// My solution:
const cubeOdd = (arr) =>
  arr.some((n) => typeof n !== 'number')
    ? undefined
    : arr
        .filter((n) => n % 2)
        .reduce((acc, curr) => acc + Math.pow(curr, 3), 0);

// Top user solution:
let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
};

/* Takeaways:
1) Try to remember the isNaN global method.
*/
