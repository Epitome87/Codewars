/*
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
*/

// My solution:
const reject = (arr, predicate) => arr.filter((n) => !predicate(n));

// My solution (not relying on Array.prototype.filter()):
const reject = (arr, predicate) => {
  const results = [];
  for (let el of arr) {
    if (!predicate(el)) results.push(el);
  }
  return results;
};
