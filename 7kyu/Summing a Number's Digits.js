/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

// My solution:
const sumDigits = (number) => [...String(Math.abs(number))].reduce((acc, curr) => acc + +curr, 0);

// Top user solution:
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
}

// Top user solution that's less JavaScript-specific:
function sumDigits(number) {
  var i = 0;
  var sum = 0;
  number = Math.abs(number);
  while (number != 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

/* Takeways:
1) Note the user's algorithm for getting each individual digit using modulus and division.
*/
