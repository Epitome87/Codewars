# [Arrays Similar](https://www.codewars.com/kata/51e704f2d8dbace389000279)

## Description

Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

```js
const arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, '4'];
```

```js
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
```

## My Solution

**JavaScript**

```js
const arraysSimilar = (arr1, arr2) => JSON.stringify([...arr1].sort()) == JSON.stringify([...arr2].sort());
```

```js
const arraysSimilar = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const arr1Sorted = [...arr1].sort((a, b) => a - b);
  const arr2Sorted = [...arr2].sort((a, b) => a - b);
  return arr1Sorted.every((el, idx) => el === arr2Sorted[idx]);
};
```
