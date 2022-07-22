/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/
// My solution:
const doubleChar = (str) => str.split('').reduce((acc, curr) => acc + curr.repeat(2), '');

// My favorite user solution:
const doubleChar = (str) =>
  str
    .split('')
    .map((c) => c + c)
    .join('');

// Clever use of regex:
function doubleChar(str) {
  return str.replace(/(.)/g, '$1$1');
}
