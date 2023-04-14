# Integer Difference

## Description

Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

```
[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
```

## My solution

```js
const intDiff = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) if (Math.abs(arr[i] - arr[j]) === n) count++;
  return count;
};
```

### User Solution

```js
const intDiff = (arr, n) =>
  arr.reduce((pre, val, idx) => pre + arr.slice(++idx).filter((v) => Math.abs(v - val) === n).length, 0);
```
