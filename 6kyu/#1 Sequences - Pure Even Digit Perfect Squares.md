# [#1 Sequences: Pure Even Digit Perfect Squares](https://www.codewars.com/kata/59290e641a640c53d000002c/train/javascript)

## Description

The integer 64 is the first integer that has all of its digits even and furthermore, is a perfect square.

The second one is 400 and the third one 484.

Give the numbers of this sequence that are in the range [a,b] (both values inclusive)

Examples:

```
Even digit squares between 100 to 1000:  [400, 484]  (the output should be sorted)
Even digit squares between 1000 to 4000: []
```

Features of the random tests:

```
number of tests = 167
maximum value for a = 1e10
maximum value for b = 1e12
```

You do not have to check the entries; a and b are always positive integers and a < b.

## My Solution

**JavaScript**

```js
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
```

### User Solution

**JavaScript**

```js
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
```

```js
function evenDigitSquares(a, b) {
  o = [];
  for (let i = Math.ceil(Math.sqrt(a)); i <= Math.sqrt(b); i++) {
    if (/^[02468]+$/.test(i _ i + '')) o.push(i _ i);
  }
  return o;
}
```

```js
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
```

## Takeaways:

1. Rather than iterating from a to b and seeing if that number is a perfect square
   (by checking if Math.sqrt(i) is an integer), we can iterate from Math.ceil(sqrt(a)) and
   Math.floor(sqrt(b)). So, rather than a = 5, b = 500, we can iterate from 3 to 22, calculate their
   square, and see if it consists of all even digits.
2. My (researched) solution avoids multiplication (~3x slower than addition) by using some
   mathematical observations on how one perfect square relates to the next.
