/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// My solution:
const shortcut = (string) => string.replace(/[aeoiu]/g, '');

// My non-Regex solution:
const shortcut = (string) =>
  string
    .split('')
    .filter((c) => !['a', 'e', 'i', 'o', 'u'].includes(c))
    .join('');

// User solution:
function shortcut(string) {
  return string
    .split('')
    .filter((str) => !'aeiou'.includes(str))
    .join('');
}

/* Takeways:
1) Remember, .includes() doesn't have to be on an array; it can be on a string!
*/
