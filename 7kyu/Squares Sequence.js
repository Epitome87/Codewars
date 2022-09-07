/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

// My original solution:
const squares = (x, n) => {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(x);
    x *= x;
  }

  return res;
};

// Clever user solution:
function squares(x, n) {
  return Array.from({ length: n }, (v, k) => Math.pow(x, Math.pow(2, k)));
}

// Another clever user solution:
const squares = (x, n) =>
  [...Array((n > 0) * n)].map((_, idx) => x ** (2 ** idx));

/* Takeaways: 
1) Note the user's alternate ways of creating a map where the value is a square of the previous value.
*/
