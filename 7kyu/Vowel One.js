/*
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

// My solution:
const vowelOne = (s) =>
  s
    .split('')
    .map((c) => (/[aeiou]/i.test(c) ? '1' : '0'))
    .join('');

// Top user solution:
function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}
