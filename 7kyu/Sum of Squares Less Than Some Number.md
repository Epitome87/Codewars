# [Sum of Squares Less Than Some Number](https://www.codewars.com/kata/57b71a89b69bfc92c7000170)

## Description

Write a function getNumberOfSquares (C, F#, Haskell) / get_number_of_squares (Python, Ruby) that will return how many integer (starting from 1, 2...) numbers raised to power of 2 and then summed up are less than some number given as a parameter.

E.g 1: For n = 6 result should be 2 because 1^2 + 2^2 = 1 + 4 = 5 and 5 < 6 E.g 2: For n = 15 result should be 3 because 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14 and 14 < 15

## My Solution

**JavaScript**

```js
const getNumberOfSquares = (n) => {
  let res = 0;
  while (n > 0) n -= (++res) ** 2;
  return --res;
};
```

```js
const getNumberOfSquares = (n) => {
  let totalSum = 0;
  let num = 0;
  for (let i = 1; i < n; i++) {
    totalSum += Math.pow(i, 2);
    if (totalSum < n) num++;
  }
  return num;
};
```

### User Solution

**JavaScript**

```js
const getNumberOfSquares = (n, m = 1) => (n > m ** 2 ? getNumberOfSquares(n - m ** 2, ++m) : --m);
```
