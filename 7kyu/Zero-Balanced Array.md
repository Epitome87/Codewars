# [Zero-Balanced Array](https://www.codewars.com/kata/59c6fa6972851e8959000067)

## Description

An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.

## My Solution

**JavaScript**

```js
const ìsZeroBalanced = (n) =>
  n.length > 0 && [...n].sort((a, b) => a - b).every((n, i, arr) => n + arr[arr.length - i - 1] === 0);
```

```js
const ìsZeroBalanced = (n) => {
  if (!n.length) return false;
  const negatives = n.filter((val) => val < 0).sort((a, b) => b - a);
  const positives = n.filter((val) => val > 0).sort((a, b) => a - b);
  for (let i = 0; i < negatives.length; i++) {
    if (negatives[i] !== -1 * positives[i]) return false;
  }
  return n.reduce((acc, cur) => acc + cur, 0) === 0;
};
```

### User Solution

**JavaScript**

```js
const ìsZeroBalanced = (n) => n.sort((a, b) => a - b).reduce((pre, val) => pre && !(val + n.pop()), !!n.length);
```
