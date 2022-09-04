/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// My solution:
const findLongest = (array) =>
  array.reduce((prev, curr) =>
    String(curr).length > String(prev).length ? curr : prev
  );
