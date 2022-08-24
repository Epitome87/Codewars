/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

// My eh solution:
const hasUniqueChars = (str) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (res.includes(str[i])) return false;
    res += str[i];
  }

  return true;
};

// Clever user solution:
const hasUniqueChars = (str) => new Set(str).size === str.length;

// Another good user solution:
function hasUniqueChars(str) {
  return str.split('').every(function (v, i, arr) {
    return arr.indexOf(v) == i;
  });
}

// Another good user solution, using Regex:
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}

/* Takeways:
1) Remember these various solutions, as this is probably a top interview question!
*/
