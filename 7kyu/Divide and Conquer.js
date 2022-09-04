/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

// My solution:
const divCon = (x) =>
  x.reduce(
    (acc, curr) => (typeof curr === 'string' ? acc - +curr : acc + curr),
    0
  );

// Clever user solution:
const divCon = (x) => x.reduce((a, b) => a + (0 + b == b ? b : -+b), 0);

/* Takeaways:
1) Even though typeof === 'string' is probably the ideal approach, note how the user checked for type of a string:
If 0 + b (a potential string or number) === b, it's a number, else string.
*/
