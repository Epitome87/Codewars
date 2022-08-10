/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// My eh solution:
const test = (num) => {
  let numAsArray = num.toString().split('');
  let res = numAsArray.reduce((acc, curr) => acc * curr, 1);
  if (res <= 9) return 0;

  let count = 0;

  while (true) {
    count++;
    const res = numAsArray.reduce((acc, curr) => acc * curr, 1);
    if (res <= 9) return count;

    numAsArray = res.toString().split('');
  }
};

// Top user solution (Note, don't need map(Number)):
const persistence = (num) => {
  let times = 0;

  let numStr = num.toString();

  while (numStr.length > 1) {
    times++;
    numStr = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
};

// Clever user solution:
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
};
