/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

// My eh solution:
const digitize = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((el) => +el);

// Top user solution:
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

// Takeways: String(n) rather than .toString()? With implicit return, don't need argument (e.g Number)?
