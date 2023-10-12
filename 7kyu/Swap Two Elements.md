# [Swap Two Elements](https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d)

## Description

Return a new array that contains exactly the same elements as the input array, but with elements a and b swapped.

- If the array has multiple copies of a, swap only the first one that appears in the array.
- If the array has multiple copies of b, swap only the last one that appears in the array.

For example:

```
([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]
```

## My Solution

**JavaScript**

```js
const swapTwo = (arr, a, b) => {
  const result = [...arr];
  result[arr.indexOf(a)] = b;
  result[arr.lastIndexOf(b)] = a;
  return result;
};
```

### User Solution

**JavaScript**

```js
const swapTwo = (array, a, b) => array.map((e, i) => (i === array.indexOf(a) ? b : array.lastIndexOf(b) === i ? a : e));
```
