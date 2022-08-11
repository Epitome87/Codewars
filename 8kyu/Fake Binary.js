/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// My solution:
const fakeBin = (x) =>
  x
    .split('')
    .map((char) => (char < '5' ? '0' : '1'))
    .join('');

// Clever user solution, using Regex:
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}
