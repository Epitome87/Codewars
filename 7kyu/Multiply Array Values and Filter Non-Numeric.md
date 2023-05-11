# [Multiply Array Values and Filter Non-Numeric](https://www.codewars.com/kata/55ed875819ae85ca8b00005c)

## Description

Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

## My Solution

**JavaScript**

```js
const multiplyAndFilter = (array, multiplier) =>
  array.filter((el) => typeof el === 'number').map((el) => el * multiplier);
```

```js
const multiplyAndFilter = (array, multiplier) =>
  array.reduce((acc, curr) => (typeof curr === 'number' ? [...acc, curr * multiplier] : acc), []);
```

### User Solution

**JavaScript**

```js
const multiplyAndFilter = (a, m) => a.filter(Number.isFinite).map((v) => v * m);
```
