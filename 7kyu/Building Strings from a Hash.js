/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

// My solution:
const solution = (pairs) =>
  Object.entries(pairs)
    .map((pair) => `${pair[0]} = ${pair[1]}`)
    .join(',');

// Clever user solution:
const solution = (pairs) =>
  Object.entries(pairs)
    .map(([key, value]) => `${key} = ${value}`)
    .join(',');
