/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

// My solution:
const sumStr = (a, b) => (Number(a) + Number(b)).toString();

// User solution:
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

// User solution:
sumStr = (a, b) => String(+a + +b);

// User solution:

/* Takeways:
1) Lot of weird quirks to convert to strings and numbers!
*/
