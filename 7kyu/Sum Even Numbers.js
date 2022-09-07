/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/

// My solution:
const sumEvenNumbers = (input) =>
  input.reduce((sum, curr) => (curr % 2 ? sum : sum + curr), 0);

/* Takeaways:
1) It appears as if not setting an initial value in the .reduce() function causes the initial value to be the first element?
*/
