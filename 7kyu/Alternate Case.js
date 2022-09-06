/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

// My solution:
const alternateCase = (s) =>
  s
    .split('')
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join('');
