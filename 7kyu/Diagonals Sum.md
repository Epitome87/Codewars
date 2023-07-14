# [Diagonals Sum](https://www.codewars.com/kata/5592fc599a7f40adac0000a8)

## Description

Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

```
Matrix = array of n length whose elements are n length arrays of integers.
```

3x3 example:

```js
diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] );

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
```

## My Solution

**JavaScript**

```js
const sum = (matrix) => {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) result += matrix[i][i];

  for (let i = 0; i < matrix.length; i++) result += matrix[i][matrix.length - 1 - i];

  return result;
};
```

### User Solution

**JavaScript**

```js
const sum = (matrix) => matrix.reduce((sum, line, i) => sum + line[i] + line[matrix.length - i - 1], 0);
```
