# [Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b)

## Description

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer `number of floors`. A tower block is represented with `"*"` character.

For example, a tower with `3` floors looks like this:

    [
      "  *  ",
      " *** ",
      "*****"
    ]

And a tower with `6` floors looks like this:

    [
      "     *     ",
      "    ***    ",
      "   *****   ",
      "  *******  ",
      " ********* ",
      "***********"
    ]

## My Solution

**JavaScript**

```js
const towerBuilder = (n) =>
  [...Array(n)].map((_, i) => ' '.repeat(n - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - i - 1));
```

```js
const towerBuilder = (nFloors) => {
  const floors = [];

  for (let i = 1; i <= nFloors; i++) {
    floors.push(floorBuilder(i, nFloors));
  }

  return floors;
};

const floorBuilder = (nthFloor, size) => {
  let width = 2 * size - 1;
  let stars = 2 * nthFloor - 1;
  let spaces = width - stars;

  let floorString = '';

  for (let i = 0; i < spaces / 2; i++) floorString += ' ';
  for (let i = 0; i < stars; i++) floorString += '*';
  for (let i = 0; i < spaces / 2; i++) floorString += ' ';

  return floorString;
};
```

**Python**

```py
def tower_builder(n_floors):
    return [' ' * (n_floors - i - 1) + '*' * (i * 2 + 1) + ' ' * (n_floors - i - 1) for i in range(n_floors)]
```
