# [Street Fighter 2 - Character Select - Part 2](https://www.codewars.com/kata/58583922c1d5b415b00000ff)

## Description

This is the rightful continuation to this easier Kata here and some rules are the same with few substantial alterations.

This time we have to deal with a situation like Super Street Fighter 2 Selection Screen:

alt text

As you may see, we now have 16 characters on 3 rows. You might think: let's make an array of 3 arrays! But that's not enough.

**Empty space**

The first character of the first row (Ryu) is not aligned with the first of the second row (Balrog) but with the second (Ken) and the same goes with the other side; therefore we need to introduce something new, like an offset: the Empty Space.

The empty space, represented as empty string "", will allow us to keep the grid aligned and rectangular, with spaces that won't be selectable. In this case we need 2 empty spaces (3 rows x 6 columns = 18 slots, 18 slots - 16 characters = 2 empty spaces). Like this:

```
|        | Ryu    | E.Honda  | Blanka  | Guile   |         |
| Balrog | Ken    | Chun Li  | Zangief | Dhalsim | Sagat   |
| Vega   | T.Hawk | Fei Long | Deejay  | Cammy   | M.Bison |
```

The moves of the selection cursor are the same as before: rotate horizontally but stop vertically. When you find empty spaces (1 or more) you need to skip them if you approach them horizontally and get to the next selectable slot with the next fighter on the left or right; and if you approach them vertically you need to just stop and stay where you are.

Example: if you are on Ryu and move left, you must get to Guile; if you are on Balrog and move up, you must stay on Balrog.

Notice: I might put empty spaces right in the middle and the rectangular grids can be any size, not only 3x6, deal with this too.

**What's new**

So, let's resume what are the new issues in this harder version of the Kata:

- The initial position might be any non-empty slot in the grid (given as input).
- The characters grid (also given as input) might have any rectangular layout, not only 3 rows.
- The grid might contain empty spaces, both on the borders or right in the middle.

**Input**

- Fighters grid;
- Initial position;
- List of moves.

The third input parameter is still the list of moves (all valid ones: left, right, up or down).

**Output**

The output is the same as before: the list of characters that have been hovered by the selection cursor after each move, successful or not.

Hopefully test cases will complete my explanation.

## My Solution

**JavaScript**

```js
const superStreetFighterSelection = (fighters, [row, col], moves) => {
  const nextRow = (fighters, [row, col], move) =>
    move === 'up'
      ? row < 1 || !fighters[row - 1][col]
        ? row
        : row - 1
      : move === 'down'
      ? row >= fighters.length - 1 || !fighters[row + 1][col]
        ? row
        : row + 1
      : row;
  const nextCol = (fighters, [row, col], move) => {
    if (move === 'left') {
      while (!fighters[row][--col]) if (col < 0) col = fighters[row].length;
    }
    if (move === 'right') {
      while (!fighters[row][++col]) if (col >= fighters[row].length) col = -1;
    }
    return col;
  };
  return moves.map(
    (move) => (
      ([row, col] = [nextRow(fighters, [row, col], move), nextCol(fighters, [row, col], move)]), fighters[row][col]
    )
  );
};
```

```js
function superStreetFighterSelection(fighters, position, moves) {
  const result = [];
  let pos = [...position];

  const nextSlot = (fighters, position, move) => {
    let [row, col] = position;

    if (move === 'left') {
      // Move left until we reach non-empty character slot
      for (let c = col - 1; ; c--) {
        // Reached left edge?
        if (c < 0) c = fighters[row].length - 1;
        if (fighters[row][c]) return [row, c];
      }
    }

    if (move === 'right') {
      // Move right until we reach non-empty character slot
      for (let c = col + 1; ; c++) {
        // Reached right edge?
        if (c >= fighters[row].length) c = 0;
        if (fighters[row][c]) return [row, c];
      }
    }

    if (move === 'down') {
      // Can't move down because out of bounds or empty slot below
      if (row >= fighters.length - 1 || !fighters[row + 1][col]) return [row, col];
      return [row + 1, col];
    }

    if (move === 'up') {
      // Can't move up because out of bounds or empty slot above
      if (row < 1 || !fighters[row - 1][col]) return [row, col];
      return [row - 1, col];
    }
  };

  for (let move of moves) {
    pos = nextSlot(fighters, pos, move);
    result.push(fighters[pos[0]][pos[1]]);
  }

  return result;
}
```

### User Solution

**JavaScript**

```js
function superStreetFighterSelection(fighters, position, moves) {
  let [i, j] = position;
  const maxI = fighters.length - 1;
  const maxJ = fighters[0].length - 1;

  const nextFighter = (dir) => {
    if (dir === 'left') j !== 0 ? j-- : (j = maxJ);
    if (dir === 'right') j !== maxJ ? j++ : (j = 0);
    if (dir === 'up' && i !== 0 && fighters[i - 1][j]) i--;
    if (dir === 'down' && i !== maxI && fighters[i + 1][j]) i++;
    return fighters[i][j] || nextFighter(dir);
  };

  return moves.map((dir) => nextFighter(dir));
}
```
