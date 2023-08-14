# [Math Engine](https://www.codewars.com/kata/587854330594a6fb7e000057)

## Description

Given an array of integers.

Return a number that is the sum of

1. The product of all the non-negative numbers
2. The sum of all the negative numbers

Edge cases

- If there are no non-negative numbers, assume the product of them to be 1.
- Similarly, if there are no negative numbers, assume the sum of them to be 0.
- If the array is null, result should be 0.

For example:

```js
mathEngine([1, 2, 3, -4, -5]); // should return -3
```

## My Solution

**JavaScript**

```js
const mathEngine = (arr) =>
  !arr
    ? 0
    : arr.filter((n) => n >= 0).reduce((acc, cur) => acc * cur, 1) +
      arr.filter((n) => n < 0).reduce((acc, cur) => acc + cur, 0);
```
