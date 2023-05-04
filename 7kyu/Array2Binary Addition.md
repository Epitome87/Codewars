# [Array2Binary Addition](https://www.codewars.com/kata/559576d984d6962f8c00003c)

## Description

Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

**Note:** The sum of an empty array is zero.

```js
arr2bin([1, 2]) == '11';
arr2bin([1, 2, 'a']) == false;
```

## My Solution

**JavaScript**

```js
const arr2bin = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return false;
    sum += arr[i];
  }
  return sum.toString(2);
};
```

### User Solution

**JavaScript**

```js
const arr2bin = (arr) => arr.every(Number.isInteger) && arr.reduce((sum, n) => sum + n, 0).toString(2);
```
