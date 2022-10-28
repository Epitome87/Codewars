/*
Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

// My solution, using array helpers:
Array.prototype.numberOfOccurrences = function (num) {
  return this.reduce((acc, curr) => (curr === num ? acc + 1 : acc), 0);
};

// My straightforward solution:
Array.prototype.numberOfOccurrences = function (num) {
  let occurences = 0;
  for (let n of this) {
    if (n === num) occurences++;
  }
  return occurences;
};

// Clever user solution:
Array.prototype.numberOfOccurrences = function (f) {
  return this.filter((i) => i === f).length;
};
