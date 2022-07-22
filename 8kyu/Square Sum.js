/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. 
*/

// My solution:
const squareSum = (nums) => nums.reduce((acc, curr) => (acc += curr * curr), 0);

// Could also use the exponentiation operator (**):
// const squareSum = (nums) => nums.reduce((acc, curr) => (acc += curr ** 2), 0);
