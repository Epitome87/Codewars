# [Array Manipulation](https://www.codewars.com/kata/58d5e6c114286c8594000027)

## Description

Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

the desired output is

[18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the resulting array.

Note: Return a new array, rather than modifying the passed array.

## My Solution

**JavaScript**

```js
const arrayManip = (array) =>
  array.map((el, idx, arr) => {
    const greater = arr.slice(idx + 1).filter((n) => n > el);
    if (greater.length) return Math.min(...greater);
    return -1;
  });
```

### User Solution

**JavaScript**

```js
const arrayManip = (array) =>
  array.map(
    (val, idx) =>
      array
        .slice(idx)
        .filter((v) => v > val)
        .sort((a, b) => a - b)[0] || -1
  );
```
