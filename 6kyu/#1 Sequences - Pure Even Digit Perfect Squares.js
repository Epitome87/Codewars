/*
 */

// My solution:
const evenDigitSquares = (a, b) => {
  const result = [];
  let number = Math.ceil(Math.sqrt(a));
  let n2 = number * number;
  number = number * 2 + 1;

  while (n2 >= a && n2 <= b) {
    if ([...n2.toString()].every((digit) => digit % 2 === 0)) result.push(n2);
    n2 = n2 + number;
    number += 2;
  }

  return result;
};

// Good user solution:
const evenDigitSquares = (a, b) => {
  const res = [];
  const start = Math.ceil(Math.sqrt(a)),
    limit = Math.floor(Math.sqrt(b));
  for (let i = start; i <= limit; i++) {
    const sq = Math.pow(i, 2);
    const numArr = sq.toString().split('');
    if (numArr.every((num) => num % 2 === 0)) {
      res.push(sq);
    }
  }
  return res;
};

// Another good user solution:
function evenDigitSquares(a, b) {
  o = [];
  for (let i = Math.ceil(Math.sqrt(a)); i <= Math.sqrt(b); i++) {
    if (/^[02468]+$/.test(i * i + '')) o.push(i * i);
  }
  return o;
}

// My too-slow-to-pass solution:
function evenDigitSquares(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    if (i % 2) continue;
    if (Math.sqrt(i) % 1 === 0) {
      const digits = i.toString();
      if ([...digits].every((digit) => +digit % 2 === 0)) result.push(i);
    }
  }

  return result;
}

/* Takeaways:
1) Rather than iterating from a to b and seeing if that number is a perfect square 
(by checking if Math.sqrt(i) is an integer), we can iterate from Math.ceil(sqrt(a)) and
Math.floor(sqrt(b)). So, rather than a = 5, b = 500, we can iterate from 3 to 22, calculate their
square, and see if it consists of all even digits. 
2) My (researched) solution avoids multiplication (~3x slower than addition) by using some 
mathematical observations on how one perfect square relates to the next.
*/
