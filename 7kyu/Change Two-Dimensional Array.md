# [Change Two-Dimensional Array](https://www.codewars.com/kata/581214d54624a8232100005f)

## Description

Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate the input)

Example:

Input array

```js
[
  [-1, 4, -5, -9, 3],
  [6, -4, -7, 4, -5],
  [3, 5, 0, -9, -1],
  [1, 5, -7, -8, -9],
  [-3, 2, 1, -5, 6],
];
```

Output array

```js
[
  [0, 4, -5, -9, 3],
  [6, 0, -7, 4, -5],
  [3, 5, 1, -9, -1],
  [1, 5, -7, 0, -9],
  [-3, 2, 1, -5, 1],
];
```

## My Solution

**JavaScript**

```js
const matrix = (arr) => arr.map((el, i) => ((el[i] = +(el[i] >= 0)), el));
```

```js
const matrix = (arr) => arr.reduce((acc, cur, i) => ((cur[i] = +(cur[i] >= 0)), acc), arr);
```

```js
const matrix = (array) => {
  const result = [...array];
  for (let i = 0; i < result.length; i++) {
    result[i][i] = result[i][i] < 0 ? 0 : 1;
  }
  return result;
};
```

**Python**

```py
def matrix(array):
    for i in range(len(array)):
        array[i][i] = array[i][i] >= 0
    return array
```
