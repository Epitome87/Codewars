# [Triple Shiftian Numbers](https://www.codewars.com/kata/56b7526481290c2ff1000c75)

## Description

Much cooler than your run-of-the-mill Fibonacci numbers, the Triple Shiftian are so defined: `T[n] = 4 * T[n-1] - 5 * T[n-2] + 3 * T[n-3]`.

You are asked to create a function which accept a base with the first 3 numbers and then returns the nth element.

```
tripleShiftian([1,1,1],25) == 1219856746
tripleShiftian([1,2,3],25) == 2052198929
tripleShiftian([6,7,2],25) == -2575238999
tripleShiftian([3,2,1],35) == 23471258855679
tripleShiftian([1,9,2],2) ==  2
```

Note: this is meant to be an interview quiz, so the description is scarce in detail on purpose

Special thanks to the first person I met in person here in London just because of CW and that assisted me during the creation of this kata ;)

## My Solution

**JavaScript**

```js
const tripleShiftian = (base, n) => {
  if (n < 3) return base[n];

  let sequence = [...base];

  for (let i = 3; i <= n; i++) {
    sequence.push(4 * sequence[i - 1] - 5 * sequence[i - 2] + 3 * sequence[i - 3]);
  }

  return sequence[sequence.length - 1];
};
```

### User Solution

**JavaScript**

```js
const tripleShiftian = ([T1, T2, T3], n) =>
  n < 3 ? [T1, T2, T3][n] : tripleShiftian([T2, T3, 4 * T3 - 5 * T2 + 3 * T1], --n);
```
