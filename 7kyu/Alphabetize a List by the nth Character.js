/*
Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

Example:

function sortIt('bid, zag', 2) //=> 'zag, bid'
The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead.
*/

// My solution:
const sortIt = (list, n) =>
  list
    .split(', ')
    .sort((a, b) => a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase()) || a.localeCompare(b))
    .join(', ');
