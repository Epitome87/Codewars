/*
Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1
You may assume that the input to your function is always a positive integer.
*/

// My solution:
const largestPower = (n) => (n < 2 ? -1 : Math.floor(Math.log(n - 1) / Math.log(3)));

// Top user solution:
function largestPower(n) {
  return Math.ceil(Math.log10(n) / Math.log10(3)) - 1;
}

// Another good user solution:
largestPower = (n, a = -1) => (Math.pow(3, a) >= n ? a - 1 : largestPower(n, a + 1));
