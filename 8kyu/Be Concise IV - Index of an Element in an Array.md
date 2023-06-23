# [Be Concise IV - Index of an Element in an Array](https://www.codewars.com/kata/5703c093022cd1aae90012c9)

## Description

**Task**

Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

**Original code:**

```js
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return 'Not found';
}
```

## My Solution

```js
// This doesn't work on Codewars or some REPL: Why?
const find = (arr, el) => ((idx = arr.indexOf(el)), idx < 0 ? 'Not found' : idx);
```

```js
const find = (arr, el) => (arr.includes(el) ? arr.indexOf(el) : 'Not found');
```
