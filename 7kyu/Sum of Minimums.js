/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

// My 2nd refactored solution:

const sumOfMinimums = (arr) => arr.reduce((acc, curr) => acc + Math.min(...curr), 0);

// My 1st refactored one-liner:
const sumOfMinimums = (arr) =>
  Array.from({ length: arr.length }, (_, i) => Math.min(...arr[i])).reduce((acc, curr) => acc + curr, 0);

// My straightforward solution:
const sumOfMinimums = (arr) => {
  // Find min in each row
  const mins = [];

  arr.forEach((row) => mins.push(Math.min(...row)));

  // Sum all the mins
  return mins.reduce((acc, curr) => acc + curr, 0);
};

/* Takeways:
1) Take a few minutes to refactor, after completing an original straightforward solution!
2) If we end up reducing an array eventually, perhaps it is possible to skip setting up a temp storage array (like the 'mins' array in my first solution)
*/
