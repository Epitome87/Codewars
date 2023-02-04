/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/

// My refactored solution:
const convertHashToArray = (hash) => Array.from(Object.keys(hash), (v) => [v, hash[v]]).sort((a, b) => a > b);

// My original solution:
const convertHashToArray = (hash) => {
  const arr = [];
  for (let prop in hash) {
    arr.push([prop, hash[prop]]);
  }
  return arr.sort((a, b) => a[0] > b[0]);
};

// Top user solution:
const convertHashToArray = (o) => Object.entries(o).sort();

// Another good user solution:
const convertHashToArray = (hash) =>
  Object.keys(hash)
    .map((key) => [key, hash[key]])
    .sort();

/* Takeaways:
1) Remember, the default behavior of Array.prototype.sort already deals with string sorting.
2) Also don't forget the Object.entries(obj) method!
*/
