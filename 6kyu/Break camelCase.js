/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// My solution (with Googling Regex):
const solution = (string) => string.replace(/([A-Z])/g, ' $1');

// Other top user solution:
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  return string.join('');
}

// My refactored version of user solution:
const solution = (string) =>
  string
    .split('')
    .map((el) => (el === el.toUpperCase() ? ` ${el}` : el))
    .join('');
