/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

// My solution:
const swap = (str) =>
  str
    .split('')
    .map((x) => (/[aeiou]/i.test(x) ? x.toUpperCase() : x))
    .join('');

// Good non-Regex user solution:
const vowels = ['a', 'e', 'i', 'o', 'u'];
const swap = (s) =>
  s
    .split('')
    .map((x) => (vowels.includes(x) ? x.toUpperCase() : x))
    .join('');
