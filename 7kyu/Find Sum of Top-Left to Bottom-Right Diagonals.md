# [Find Sum of Top-Left to Bottom-Right Diagonals](https://www.codewars.com/kata/5497a3c181dd7291ce000700)

## Description

Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

**Examples**

```
array = [[1, 2],
         [3, 4]]

diagonal sum: 1 + 4 = 5
```

```
array = [[5, 9, 1, 0],
         [8, 7, 2, 3],
         [1, 4, 1, 9],
         [2, 3, 8, 2]]

diagonal sum: 5 + 7 + 1 + 2 = 15
```

## My Solution

**JavaScript**

```js
const diagonalSum = (matrix) => matrix.reduce((acc, curr, idx) => acc + curr[idx], 0);
```

```js
const diagonalSum = (matrix) => {
  let sum = 0;
  let idx = 0;
  for (let row = 0; row < matrix.length; row++) {
    sum += matrix[row][idx++];
  }
  return sum;
};
```
