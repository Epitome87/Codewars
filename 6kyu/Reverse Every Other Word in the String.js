/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// My solution:
const reverse = (str) =>
  str
    .trim(' ')
    .split(' ')
    .map((x, idx) => (idx % 2 ? x.split('').reverse().join('') : x), '')
    .join(' ');

// My favorite user solution:
const reverse = (str) =>
  str
    .trim()
    .split(' ')
    .map((word, i) => (i % 2 ? [...word].reverse().join('') : word))
    .join(' ');
