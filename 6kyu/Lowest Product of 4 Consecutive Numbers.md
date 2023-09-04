# [Lowest Product of 4 Consecutive Numbers](https://www.codewars.com/kata/554e52e7232cdd05650000a0)

## Description

Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example

```
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
```

## My Solution

**JavaScript**

```js
const lowestProduct = (input) => {
  if (input < 1000) return 'Number is too small';

  return Array.from({ length: `${input}`.length - 3 }, (_, i) => `${input}`.slice(i, i + 4)).reduce((acc, cur) => {
    const product = [...cur].reduce((a, c) => a * c, 1);
    return product < acc ? product : acc;
  }, Infinity);
};
```

```js
const lowestProduct = (input) => {
  if (input < 1000) return 'Number is too small';

  const inputStr = `${input}`;
  let minProduct = input;

  for (let i = 0; i < inputStr.length - 3; i++) {
    const product = [...inputStr.slice(i, i + 4)].reduce((acc, cur) => acc * cur, 1);
    if (product < minProduct) {
      minProduct = product;
    }
  }

  return minProduct;
};
```
