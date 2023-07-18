# [Drawing a Cross!](https://www.codewars.com/kata/5a036ecb2b651d696f00007c)

## Description

The aim of this kata is to write function drawACross / draw_a_cross which returns a cross shape with 'x' characters on a square grid of size and height of our sole input n. All non-'x' characters in the grid should be filled with a space character (" ").

For example for drawACross(7) / draw_a_cross(7), the function should draw the following grid:

```
x     x
 x   x
  x x
   x
  x x
 x   x
x     x
```

The arms of the cross must only intersect through one central 'x' character, and start in the corner of the grid, so for even values of n, return `"Centered cross not possible!"`

If n<3, function should return `"Not possible to draw cross for grids less than 3x3!"`

## My Solution

**JavaScript**

```js
const drawACross = (n) => {
  if (n < 3) return 'Not possible to draw cross for grids less than 3x3!';
  if (n % 2 === 0) return 'Centered cross not possible!';

  let cross = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i || j === n - i - 1) cross += 'x';
      else cross += ' ';
    }
    if (i < n - 1) cross += '\n';
  }

  return cross;
};
```

### User Solution

**JavaScript**

```js
const drawACross = (n) => {
  if (n < 3) {
    return 'Not possible to draw cross for grids less than 3x3!';
  }
  if (n % 2 === 0) {
    return 'Centered cross not possible!';
  }

  // Create new n x n grid array of " "
  let arr = new Array(n).fill(0).map((_) => new Array(n).fill(' '));

  // Change diagonals into "x"
  for (let i = 0; i < n; ++i) {
    arr[i][i] = 'x';
    arr[n - i - 1][i] = 'x';
  }

  // join lines and join those by a newline character
  return arr.map((s) => s.join('')).join('\n');
};
```
