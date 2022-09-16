/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

// My solution:
const parseF = (s) => (isNaN(parseFloat(s)) ? null : parseFloat(s));

// Clever user solution:
function parseF(s) {
  return parseFloat(s) == +s ? parseFloat(s) : null;
}

/* Takeaways:
1) Instead of using isNaN(num), we can see if parseFloat(num) == +num
*/
