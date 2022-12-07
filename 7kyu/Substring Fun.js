/*
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
*/

// My solution:
const nthChar = (words) =>
  Array.from({ length: words.length }, (_, i) => words[i][i]).join('');

// Top user solution:
const nthChar = (words) => words.reduce((a, b, idx) => a + b[idx], '');
