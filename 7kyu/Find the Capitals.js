/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// My solution:
const capitals = (word) =>
  word
    .split('')
    .map((char, index) => (char < 'a' ? index : null))
    .filter((char) => char !== null);

// Simple user solution:
var capitals = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

// Good user solution:
const capitals = (word) => word.split('').reduce((memo, v, i) => (v === v.toUpperCase() ? memo.concat(i) : memo), []);
