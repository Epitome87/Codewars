# [Double Trouble](https://www.codewars.com/kata/57f7796697d62fc93d0001b8)

## Description

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.

## My Solution

**JavaScript**

```js
const trouble = (arr, target) =>
  arr.reduce((acc, cur) => (acc[acc.length - 1] + cur === target ? acc : [...acc, cur]), []);
```

```js
const trouble = (x, t) => {
  const res = [...x];
  for (let i = 1; i < res.length; i++) if (res[i - 1] + res[i] === t) res.splice(i--, 1);
  return res;
};
```
