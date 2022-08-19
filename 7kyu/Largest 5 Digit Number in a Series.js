/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

// My eh solution:
const solution = (digits) => {
  let largestNum = 0;

  for (let i = 0; i <= digits.length - 5; i++) {
    const num = +digits.slice(i, i + 5);
    if (num > largestNum) largestNum = num;
  }

  return largestNum;
};

// My refactored solution:
const solution = (digits) =>
  digits.split('').reduce((acc, _, i) => (+digits.slice(i, i + 5) > acc ? +digits.slice(i, i + 5) : acc), 0);

// Clever user solution:
const solution = (digits) => [...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));

/* Takeways:
1) Consider Math.max when we are setting the reduce return value to the higher of current value vs accumulated value.
*/
