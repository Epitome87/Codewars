// My solution:
const countLoopIterations = (arr) => {
  const res = [];
  let product = 1;

  for (const [n, b] of arr) {
    const q = n + 1 + b;
    res.push(product * q);
    product *= q - 1;
  }

  return res;
};

// Top user solution:
const countLoopIterations = (arr) => {
  let c = 1;
  let d = 1;

  return arr.map(([n, b]) => ((d = c * (n + 1 + b)), (c *= n + b), d));
};

/* Takeaways:
1) Not understanding the second argument to .map()!
*/
