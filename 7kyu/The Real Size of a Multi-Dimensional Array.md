# [The Real Size of a Multi-Dimensional Array](https://www.codewars.com/kata/57f032307b45ef9c8f0001dd)

## Description

Challenge:

Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

Addendum:

Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.

## My Solution

**JavaScript**

```js
const realSize = (arrays) => arrays.flat(Infinity).length;
```

```js
// Solution if the Kata actually ensured the values are integers
const realSize = (arrays) => arrays.flat(Infinity).reduce((acc, cur) => acc + Number.isInteger(cur), 0);
```

### User Solution

**JavaScript**

```js
const realSize = (arr) => arr.reduce((a, e) => a + (Array.isArray(e) ? realSize(e) : 1), 0);
```
