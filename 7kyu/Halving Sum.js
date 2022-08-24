/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

// My straightforward solution:
const halvingSum = (n) => {
  let sum = n;

  while (n / 2 >= 1) {
    n = Math.floor(n / 2);
    sum += n;
  }

  return sum;
};

// Clever user solution, using recursion:
function halvingSum(n) {
  if (n === 1) return n;
  return n + halvingSum(Math.floor(n / 2));
}
