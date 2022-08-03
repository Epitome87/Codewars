/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// My solution:
const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .splice(0, 2)
    .reduce((acc, curr) => acc + curr, 0);

// My favorite user solution:
function sumTwoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
