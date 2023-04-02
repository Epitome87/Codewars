/*
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/

// My one-line solution:
const charToAscii = (str) =>
  [...str].reduce((acc, curr) => (/[a-z]/i.test(curr) ? { ...acc, [curr]: curr.charCodeAt(0) } : acc), null);

// My solution:
function charToAscii(str) {
  if (!str) return null;
  const uniques = [...new Set(str)];
  return uniques.reduce((acc, curr) => (/[a-z]/i.test(curr) ? { ...acc, [curr]: curr.charCodeAt(0) } : acc), {});
}

// Top user solution:
const charToAscii = (string) => {
  string = string.replace(/[^0-9a-z]/gi, '');
  return string ? [...string].reduce((h, c) => ((h[c] = c.charCodeAt(0)), h), {}) : null;
};

/* Takeaways:
1) Rather than the object spread operator in the reduce function, consider using the comma separated expression syntax, where the first expression is setting the value of the object, and the 2nd expression is the overall object, which is what will be returned in each iteration of the reduce function.
*/
