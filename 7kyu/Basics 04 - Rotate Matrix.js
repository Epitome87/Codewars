/*
Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

One easy example:

Input: {{-1, 4, 5},
        { 2, 3, 4}}

Output: {{ 5, 4},
         { 4, 3},
         {-1, 2}}
First there are some static tests, later on random tests too...
*/

// My solution:
const rotateMatrix = (arr) => {
  const rotated = [];
  for (let col = arr[0].length - 1; col >= 0; col--) {
    const rotatedCol = [];
    for (let row = 0; row < arr.length; row++) {
      rotatedCol.push(arr[row][col]);
    }
    rotated.push(rotatedCol);
  }
  return rotated;
};

// Clever user solution:
let rotateMatrix = (a) => a[0].map((_, i) => a.map((r) => r[i])).reverse();

// Even better user solution:
var rotateMatrix = (arr) => {
  return arr[0].map((x, i) => arr.map((x) => x[x.length - 1 - i]));
};
