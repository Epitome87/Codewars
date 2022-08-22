/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

// My straightforward solution:
const flattenAndSort = (array) => {
  const flatArr = [];
  for (let arr of array) flatArr.push(...arr);
  return flatArr.sort((a, b) => a - b);
};

// Top user solution:
function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

/* Takeways:
1) I knew Array.prototype.concat(arr) will merge two arrays together. But it can accept multiple arrays as an argument. Therefore, if we spread our 2D array when passing it to concat(), we are essentially just sending it multiple arrays -- all of which will be merged into one!
*/
