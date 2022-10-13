/*
 */

// My solution:
const partsSums = (ls) => {
  const sums = [0];
  let sum = 0;
  for (let i = ls.length - 1; i >= 0; i--) {
    sum += ls[i];
    sums.push(sum);
  }

  return [...sums].reverse();
};

// Top user solution:
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map((v) => (sum = sum - v));
}

// Another good user solution:
function partsSums(ls) {
  let res = new Array(ls.length + 1);
  res[ls.length] = 0;

  for (let i = ls.length - 1; i >= 0; i--) res[i] = res[i + 1] + ls[i];

  return res;
}

/* Takeaways:
1) For performance, push is quite a bit faster than unshift!
2) Instead of unshift, consider creating an Array of required size, and simply
using the index to set values. This will let us set values in reverse (or any) order.
*/
