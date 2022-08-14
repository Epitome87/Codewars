/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

// My original solution:
function powersOfTwo(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }

  return result;
}

// My refactored solution:
const powersOfTwo = (n) =>
  Array(n + 1)
    .fill(2)
    .map((el, index) => el ** index);

// Clever user solution:
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}

/* Takeways:
1) Remember Array.from and how its second argument is essentially a map!
*/
