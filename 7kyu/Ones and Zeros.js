/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// My solution:
const binaryArrayToNumber = (arr) =>
  arr.reverse().reduce((prev, curr, index) => (prev += curr * Math.pow(2, index)), 0);

// Top user solution, relying on the fact that parseInt can work with base 2 (binary):
// const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

// TODO: Look into the details of parseInt more, especially specifying a base other than 10
