/*
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

// My eh solution:
const getDecimal = (n) => {
  const numAsString = n.toString();
  return numAsString.includes('.') ? +numAsString.substring(numAsString.indexOf('.')) : 0;
};

// Clever user solution:
const getDecimal = (n) => Math.abs(n) % 1;

// Or
const getDecimal = (n) => Math.abs(n % 1);

// Another user solution:
function getDecimal(n) {
  return n > 0 ? n - parseInt(n) : parseInt(n) - n;
}

/* Takeaways:
1) Due to the imprecise nature of decimal numbers, n % 1 does not seem to always work. Yet it's enough to pass this Kata.
*/
