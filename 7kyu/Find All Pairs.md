# [Find All Pairs](https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3)

## Description

You are given array of integers, your task will be to count all pairs in that array and return their count.

**Notes:**

- Array can be empty or contain only one value; in this case return `0`
- If there are more pairs of a certain number, count each pair only once. E.g.: for `[0, 0, 0, 0]` the return value is `2` (= 2 pairs of `0`s)
- Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

**Examples**

```
[1, 2, 5, 6, 5, 2] --> 2
```

...because there are 2 pairs: `2` and `5`

```
[1, 2, 2, 20, 6, 20, 2, 6, 2] --> 4
```

...because there are 4 pairs: `2`, `20`, `6` and `2` (again)

## My Solution

**JavaScript**

```js
const duplicates = (array) => {
  let counts = array.reduce((acc, c) => ((acc[c] = (acc[c] || 0) + 1), acc), {});
  return Object.values(counts).reduce((acc, c) => acc + Math.floor(c / 2), 0);
};
```

### User Solution

**JavaScript**

```js
function duplicates(array) {
  let res = 0,
    odd = new Set();
  for (let x of array) {
    if (odd.delete(x)) res++;
    else odd.add(x);
  }
  return res;
}
```
