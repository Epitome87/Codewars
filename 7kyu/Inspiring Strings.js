/*
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

// My solution:
const longestWord = (strArr) => strArr.split(' ').reduce((acc, curr) => (curr.length >= acc.length ? curr : acc), '');

// Good user solution:
function longestWord(str) {
  return str
    .split(' ')
    .sort((b, a) => b.length - a.length)
    .pop();
}
