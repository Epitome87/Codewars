# [Possibilities Array](https://www.codewars.com/kata/59b710ed70a3b7dd8f000027)

## Description

A non-empty array `a` of length `n` is called an array of all possibilities if it contains all numbers between `0` and `a.length - 1` (both inclusive).

Write a function that accepts an integer array and returns `true` if the array is an array of all possibilities, else `false`.

Examples:

    [1,2,0,3] => True
    # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

    [0,1,2,2,3] => False
    # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

    [0] => True
    # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

## My Solution

**JavaScript**

```js
const isAllPossibilities = (nums) => nums.every((num, idx) => nums.includes(idx));
```

```js
const isAllPossibilities = (x) => {
  if (x.length === 0) return false;
  const set = new Set(x);
  for (let i = 0; i < x.length; i++) {
    if (!set.has(i)) return false;
  }
  return true;
};
```

```js
const isAllPossibilities = (x) => {
  if (x.length === 0) return false;
  const sorted = [...x].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) return false;
  }
  return true;
};
```

**Python**

```py
def is_all_possibilities(arr):
    return all(i in arr for i, n in enumerate(arr))
```
