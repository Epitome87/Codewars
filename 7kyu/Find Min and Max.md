# [Find Min and Max](https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130)

## Description

Implement a function that returns the minimal and the maximal value of a list (in this order).

## My Solution

**JavaScript**

```js
const getMinMax = (arr) =>
  arr.reduce((acc, cur) => [cur < acc[0] ? cur : acc[0], cur > acc[1] ? cur : acc[1]], [Infinity, -Infinity]);
```

```js
const getMinMax = (arr) => {
  let min = Infinity;
  let max = -Infinity;

  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }

  return [min, max];
};
```

```js
const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];
```

**Python**

```py
def get_min_max(seq):
    return (min(seq), max(seq))
```
