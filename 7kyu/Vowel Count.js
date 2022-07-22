/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// My solution:
const vowels = ['a', 'e', 'i', 'o', 'u'];
const getCount = (str) => str.split('').filter((char) => vowels.includes(char)).length;

// Top clever user solution:
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Clever user solution:
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// TODO: Practice Regex A LOT more!
