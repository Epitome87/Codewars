# [Principal Diagonal | VS | Secondary Diagonal](https://www.codewars.com/kata/5a8c1b06fd5777d4c00000dd)

## Description

**Principal Diagonal** -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

**Secondary Diagonal** -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.

For example:

```
matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]
```

**Task**

Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

- If the principal diagonal is larger, return "Principal Diagonal win!"
- If the secondary diagonal is larger, return "Secondary Diagonal win!"
- If they are equal, return "Draw!"

**Note:** You will always receive matrices of the same dimension.

## My Solution

**JavaScript**

```js
const diagonal = (matrix) => {
  const principal = [...Array(matrix.length)].reduce((acc, cur, idx) => acc + cur[idx], 0);
  const secondary = [...Array(matrix.length)].reduce((acc, cur, idx) => acc + cur[matrix.length - 1 - idx], 0);
  return principal > secondary
    ? 'Principal Diagonal win!'
    : principal < secondary
    ? 'Secondary Diagonal win!'
    : 'Draw!';
};
```

### User Solution

**JavaScript**

```js
const sumDiagonals = (sum, row, i) => sum + row[i] - row[row.length - i - 1];

const diagonal = (matrix) =>
  ['Secondary Diagonal win!', 'Draw!', 'Principal Diagonal win!'][Math.sign(matrix.reduce(sumDiagonals, 0)) + 1];
```
