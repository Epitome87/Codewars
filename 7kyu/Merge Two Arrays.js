/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Inspired by https://adriann.github.io/programming_problems.html
*/

// My eh solution:
const mergeArrays = (a, b) => {
  const aCopy = [...a];
  const bCopy = [...b];
  const res = [];

  while (res.length < a.length + b.length) {
    if (aCopy.length) res.push(aCopy.shift());
    if (bCopy.length) res.push(bCopy.shift());
  }

  return res;
};

// Top user solution:
function mergeArrays(a, b) {
  var returnArray = [];
  var counter = 0;
  while (a[counter] !== undefined || b[counter] !== undefined) {
    if (a[counter]) {
      returnArray.push(a[counter]);
    }
    if (b[counter]) {
      returnArray.push(b[counter]);
    }
    counter++;
  }
  return returnArray;
}

// Clever one-line user solution:
const mergeArrays = ($, $2) =>
  [...Array($.length + $2.length)].reduce((acc, _, i) => acc.concat($[i], $2[i]), []).filter((e) => e);
