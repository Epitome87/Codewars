/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
*/

// My solution:
const explode = (str) =>
  str
    .split('')
    .map((c) => c.repeat(+c))
    .join('');

// Good user solution:
const explode = (s) => s.replace(/\d/g, (d) => d.repeat(d));
