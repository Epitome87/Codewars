/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
 */

// My solution:
const isVow = (a) => {
  const charCodes = ['a'.charCodeAt(0), 'e'.charCodeAt(0), 'i'.charCodeAt(0), 'o'.charCodeAt(0), 'u'.charCodeAt(0)];

  return a.map((n) => (charCodes.includes(n) ? String.fromCharCode(n) : n));
};

// Top solution:
function isVow(a) {
  for (var i = 0, l = a.length; i < l; ++i) {
    var char = String.fromCharCode(a[i]);
    if ('aeiou'.indexOf(char) !== -1) a[i] = char;
  }

  return a;
}

// Clever user solution:
const isVow = (a) => a.map((x) => ('aeiou'.includes((y = String.fromCharCode(x))) ? y : x));

// Another good user solution:
const v = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' };
const isVow = (a) => a.map((x) => v[x] || x);

/* Takeaways:
1) Although probably not best practice, note how the clever user solution initializes y in a function call's arguments!
*/
