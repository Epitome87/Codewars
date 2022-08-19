/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// My solution (with outside research):
const addBinary = (a, b) => Number(a + b).toString(2);

// A good alternative user solution:
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

function addBinary(a, b) {
  return decimalToBinary(a + b);
}

/* Takeways:
1) The Number.toString() method can accept a 2, which will let it work with base 2 numbers! Example: Number(42).toString(2); gives "101010"
*/
