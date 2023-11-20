# [Simple Fun #137: S2N](https://www.codewars.com/kata/58a6742c14b042a042000038)

## Description

**Task**

Your task is to find the sum for the range `0 ... m` for all powers from `0 ... n.`

**Example**

For `m = 2, n = 3`, the result should be `20`

`0^0+1^0+2^0 + 0^1+1^1+2^1 + 0^2+1^2+2^2 + 0^3+1^3+2^3 = 20`

Note, that no output ever exceeds 2e9.

**Input/Output**

- [input] integer m

`0 <= m <= 50000`

- [input] integer n

`0 <= n <= 9`

- [output] an integer(double in C#)

The sum value.

## My Solution

**JavaScript**

```js
const S2N = (m, n) =>
  [...Array(m + 1).keys()].reduce((acc, cur) => acc + [...Array(n + 1)].reduce((acc2, _, i) => acc2 + cur ** i, 0), 0);
```

```js
const S2N = (m, n) => {
  return [...Array(m + 1).keys()].reduce((acc, cur, i) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) sum += cur ** i;
    return acc + sum;
  }, 0);
};
```

```js
const S2N = (m, n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= m; j++) sum += j ** i;
  return sum;
};
```
