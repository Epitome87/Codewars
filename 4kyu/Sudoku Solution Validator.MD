# [Sudoku Solution validator](https://www.codewars.com/kata/529bf0e9bdf7657179000008)

## Description

Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

## My Solution

**JavaScript**

```js
function validSolution(board) {
  // Check rows
  const rowsAreValid = board.reduce((acc, curr) => acc && isRowValid(curr));

  // Check columns
  const columnsAreValid = board.reduce((acc, curr) => acc && isColumnValid(board, 0));

  // Check sub-grids
  const subgridsAreValid = board.reduce((acc, curr, index) => acc && isSubgridValid(board, index));

  return rowsAreValid && columnsAreValid && subgridsAreValid;
}

function isRowValid(row) {
  for (let i = 1; i <= 9; i++) {
    if (!row.includes(i)) return false;
  }

  return true;
}

function isColumnValid(board, columnNum) {
  const column = [];

  for (let i = 0; i < 9; i++) {
    column.push(board[i][columnNum]);
  }

  for (let i = 0; i < 9; i++) {
    if (!column.includes(i + 1)) return false;
  }

  return true;
}

function isSubgridValid(board, subgridNum) {
  const result = [];

  switch (subgridNum) {
    case 0:
      for (let n = 0; n < 3; n++) {
        for (let i = 0; i < 3; i++) result.push(board[n][i]);
      }
      break;
    case 1:
      for (let n = 0; n < 3; n++) {
        for (let i = 3; i < 6; i++) result.push(board[n][i]);
      }
      break;
    case 2:
      for (let n = 0; n < 3; n++) {
        for (let i = 6; i < 9; i++) result.push(board[n][i]);
      }
      break;

    // Middle subgrids
    case 3:
      for (let n = 3; n < 6; n++) {
        for (let i = 0; i < 3; i++) result.push(board[n][i]);
      }
      break;
    case 4:
      for (let n = 3; n < 6; n++) {
        for (let i = 3; i < 6; i++) result.push(board[n][i]);
      }
      break;
    case 5:
      for (let n = 3; n < 6; n++) {
        for (let i = 6; i < 9; i++) result.push(board[n][i]);
      }
      break;

    // Bottom subgrids
    case 6:
      for (let n = 6; n < 9; n++) {
        for (let i = 0; i < 3; i++) result.push(board[n][i]);
      }
      break;
    case 7:
      for (let n = 6; n < 9; n++) {
        for (let i = 3; i < 6; i++) result.push(board[n][i]);
      }
      break;
    case 8:
      for (let n = 6; n < 9; n++) {
        for (let i = 6; i < 9; i++) result.push(board[n][i]);
      }
      break;
  }

  for (let i = 1; i <= 9; i++) {
    if (!result.includes(i)) return false;
  }

  return true;
}

// Top user solution:
function equals45(n) {
  return n == 45;
}

function validSolution(board) {
  var sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  osums = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
    }
  }
  for (var i = 0; i < 3; i++) if (!osums[i].every(equals45)) return false;
  return sumh.every(equals45) && sumv.every(equals45);
}

// Another top user solution:
function validSolution(board) {
  var validSet = (s) => s.size == 9 && !s.has(0);
  var rowSet = (i) => board[i].reduce((s, v) => s.add(v), new Set());
  var columnSet = (i) => board.reduce((s, v) => s.add(v[i]), new Set());
  var boxSet = ([r, c]) =>
    board.slice(r, r + 3).reduce((s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s), new Set());
  var boxCorner = (i) => [Math.floor(i / 3) * 3, (i % 3) * 3];
  for (var i = 0; i < 9; i++)
    if (!validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i)))) return false;
  return true;
}
```

### Takeways:

1. Remember to utilize the power of a Set more often!
