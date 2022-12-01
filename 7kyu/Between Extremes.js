/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

// My solution:
const betweenExtremes = (nums) => Math.max(...nums) - Math.min(...nums);

// My other solution:
const betweenExtremes = (nums) => {
  const sortedNums = [...nums].sort((a, b) => a - b);
  return sortedNums.slice(-1) - sortedNums[0];
};

// Unique user solution:
const betweenExtremes = (n) =>
  ((l) => l[0] - l[l.length - 1])(n.sort((a, b) => b - a));

/* Takeaways:
1) I couldn't figure out how to make my sort-based solution a one-liner.
But take note of the user solution: He passes the sorted array into an
immediately-invoked function, which takes an array and accesses the approriate indices!
*/
