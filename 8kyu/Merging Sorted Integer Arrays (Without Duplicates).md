# [Merging Sorted Integer Arrays (Without Duplicates)](https://www.codewars.com/kata/573f5c61e7752709df0005d2)

## Description

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

## My Solution

**JavaScript**

```js
const mergeArrays = (a, b) => [...new Set([...a, ...b].sort((a, b) => a - b))];
```

```js
const mergeArrays = (a, b) => {
  const mergedSorted = [...a, ...b].sort((a, b) => a - b);
  return [...new Set(mergedSorted)];
};
```
