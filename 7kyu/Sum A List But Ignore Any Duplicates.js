/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

// My solution:
const sumNoDuplicates = (nums) =>
  nums.filter((n, _, arr) => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((acc, curr) => acc + curr, 0);
