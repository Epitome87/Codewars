/*
In this exercise, you will create a function that takes an integer, i. With it you must do the following:

Find all of its multiples up to and including 100,

Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),

And finally, get the total sum of each new digit sum.

Note: If the digit sum of a number is more than 9 (eg. 99 -> 9 + 9 = 18) then you do NOT have to break it down further until it reaches one digit.

Example (if i is 25):

Multiples of 25 up to 100 --> [25, 50, 75, 100]

Digit sum of each multiple --> [7, 5, 12, 1]

Sum of each new digit sum --> 25

If you can, try writing it in readable code.

Edit (3/17/2017): Added random tests
*/

// My refactored one-line solution:
const procedure = (n) =>
  [
    ...Array.from({ length: Math.floor(100 / n) }, (v, i) => n * (i + 1)).join(
      ''
    ),
  ].reduce((sum, curr) => sum + +curr, 0);

// My highly-unreadable one-line solution:
const procedure = (n) =>
  Array.from({ length: Math.floor(100 / n) }, (v, i) => n * (i + 1)).reduce(
    (acc, curr) =>
      acc + [...curr.toString()].reduce((acc2, curr2) => acc2 + +curr2, 0),
    0
  );

// My "readable" solution:
const procedure = (n) => {
  const multiples = [];
  for (let i = n; i <= 100; i++) {
    if (i % n === 0) multiples.push(i);
  }
  const digitSum = multiples.map((el) =>
    [...el.toString()].reduce((acc, curr) => acc + +curr, 0)
  );
  const sumDigitSum = digitSum.reduce((sum, curr) => sum + curr, 0);
  return sumDigitSum;
};
