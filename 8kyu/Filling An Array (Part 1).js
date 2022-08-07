/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

// My solutioN:
const arr = (N = 0) =>
  Array(N)
    .fill()
    .map((_, index) => index);

// User solution:
const arr = (n) => Array.from({ length: n }, (_, i) => i);

// Clever user solution:
const arr = (n) => (n ? [...Array(n).keys()] : []);

// (Which we can refactor to use default params):
const arr = (n = 0) => [...Array(n).keys()];
