/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
 */

// My (researched) solution:
const flattened = (arr) => [].concat(...arr);

// Top user solution:
var flatten = function (lol) {
  return [].concat.apply([], lol);
};

// Good user solution:
var flatten = function (array) {
  return array.reduce(function (a, z) {
    return a.concat(z);
  }, []);
};

// Some alternative solutions, as shown on MDN:
/*
const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();

arr.reduce((acc, val) => acc.concat(val), []);

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);
*/

/* Takeaways: 
1) Even though it seems outdated, look into the apply() method!
*/
