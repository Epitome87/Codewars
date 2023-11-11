# [Simple Fun #67: Array Change](https://www.codewars.com/kata/https://www.codewars.com/kata/5893f43b779ce54da4000124)

## Description

## My Solution

**JavaScript**

```js
const arrayChange = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    while (arr[i + 1] <= arr[i]) {
      arr[i + 1]++;
      count++;
    }
  }

  return count;
};
```

### User Solution

**JavaScript**

```js
const arrayChange = (arr) =>
  arr.reduce(
    (pre, val, idx) => (idx && val <= arr[idx - 1] && (arr[idx] += arr[idx - 1] - val + 1), pre + arr[idx] - val),
    0
  );
```
