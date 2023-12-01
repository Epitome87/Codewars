# [Print Fixed Size Two Dimensional Table](https://www.codewars.com/kata/56562ee9ae8369e9a6000089)

## Description

Create function that outputs 2 dimensional table and places a character in it. Table size is 4 x 4. Function takes row, column and a character.

Assume that row and column values are between 0 inclusive and 4 exclusive.

Assume that character has length of 1.

Example:

```
row = 2
column = 3
character = "B"

---------
| | | | | 0
---------
| | | | | 1
---------
| | | |B| 2
---------
| | | | | 3
---------
 0 1 2 3
```

## My Solution

**JavaScript**

```js
const buildTableText = (row, column, character) => {
  let table = '---------\n';

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) table += `${c === 0 ? '|' : ''}${r === row && c === column ? character : ' '}|`;
    table += '\n---------\n';
  }

  return table;
};
```