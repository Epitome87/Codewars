# [Street Fighter 2 - Character Selection](https://www.codewars.com/kata/5853213063adbd1b9b0000be)

## Description

**Short Intro**

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

UPDATE: a new kata's harder version is available here: https://www.codewars.com/kata/street-fighter-2-character-selection-part-2

**The Kata**

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Screen:

screen

Selection Grid Layout in text:

```
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
```

**Input**

- the list of game characters in a 2x6 grid;
- the initial position of the selection cursor (top-left is (0,0));
- a list of moves of the selection cursor (which are up, down, left, right);

**Output**

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

**Rules**

Selection cursor is circular _horizontally_ but _not vertically_!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

**Test**

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

**Notice:** changing some of the input data might not help you.

**Examples**

```js
fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
initial_position = (0, 0);
moves = ['up', 'left', 'right', 'left', 'left'];
```

then I should get:

```js
['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'];
```

as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

```js
fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
initial_position = (0, 0);
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right'];
```

Result:

```js
['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat'];
```

## My Solution

**JavaScript**

```js
const streetFighterSelection = (fighters, position, moves) => {
  const result = [];
  let [row, col] = position;

  for (let move of moves) {
    row = move === 'up' ? (row < 1 ? row : row - 1) : move === 'down' ? (row > 0 ? row : row + 1) : row;
    col =
      move === 'left'
        ? col < 1
          ? fighters[0].length - 1
          : col - 1
        : move === 'right'
        ? (col + 1) % fighters[0].length
        : col;
    result.push(fighters[row][col]);
  }

  return result;
};
```

```js
const streetFighterSelection = (fighters, position, moves) => {
  let currPos = [...position];
  const result = [];

  for (let move of moves) {
    switch (move) {
      case 'left':
        currPos = [currPos[0], currPos[1] < 1 ? fighters[0].length - 1 : currPos[1] - 1];
        break;
      case 'right':
        currPos = [currPos[0], (currPos[1] + 1) % fighters[0].length];
        break;
      case 'up':
        currPos = [currPos[0] < 1 ? currPos[0] : currPos[0] - 1, currPos[1]];
        break;
      case 'down':
        currPos = [currPos[0] > 0 ? currPos[0] : currPos[0] + 1, currPos[1]];
        break;
    }
    result.push(fighters[currPos[0]][currPos[1]]);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function streetFighterSelection(fighters, position, moves) {
  const boundY = fighters.length - 1;
  const boundX = fighters[0].length - 1;

  let [y, x] = position;

  const controls = {
    right: () => (x === boundX ? (x = 0) : x++),
    left: () => (x ? x-- : (x = boundX)),
    up: () => (y ? y-- : y),
    down: () => (y < boundY ? y++ : y),
  };

  return moves.map((move) => {
    controls[move]();
    return fighters[y][x];
  });
}
```
