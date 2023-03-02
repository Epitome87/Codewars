/*
Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
And chessBoard(3,7) should return this:

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
The white spaces should be represented by an: 'O'

and the black an: 'X'

The first row should always start with a white space 'O'
*/

// My one-line solution:
const chessBoard = (rows, cols) =>
  Array.from({ length: rows }, (_, i1) =>
    Array.from({ length: cols }, (_, i2) => ((i1 + i2) % 2 ? 'X' : 'O'))
  );

// My solution:
function chessBoard(rows, columns) {
  const board = [];
  let isWhite = true;
  for (let row = 0; row < rows; row++) {
    const r = [];
    for (let col = 0; col < columns; col++) {
      if (isWhite) r.push('O');
      else r.push('X');
      isWhite = !isWhite;
    }
    board.push(r);
  }
  return board;
}

// Top user solution:
function chessBoard(rows, columns) {
  return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => 'OX'[(i + j) % 2])
  );
}

// Another good user solution:
const chessBoard = (rows, columns) =>
  [...Array(rows)].map((_, idx) =>
    [...Array(columns)].map((_, i) => `OX`[(idx + i) & 1])
  );

/* Takeaways:
1) Consider [...Array(x)].map rather than Array.from({ length: x }, (v, i) => ...) when appropriate.
*/
