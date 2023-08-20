# [80's Kids #2: Help ALF Find His Spaceship](https://www.codewars.com/kata/5660aa3d5e011dfd6e000063)

## Description

Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

```
..........
..........
..........
.......X..
..........
..........
```

The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this example:

```
findSpaceship(map) => [7, 2]
```

If you cannot find the spaceship, the result should be

```
"Spaceship lost forever."
```

Can you help ALF?

## My Solution

**JavaScript**

```js
const findSpaceship = (map) => {
  if (!map) return 'Spaceship lost forever.';

  const mapArr = map.split('\n');

  for (let y = 0; y < mapArr.length; y++) {
    if (mapArr[y].includes('X')) {
      const x = mapArr[y].indexOf('X');
      return [x, mapArr.length - y - 1];
    }
  }

  return 'Spaceship lost forever.';
};
```

### User Solution

**JavaScript**

```js
const findSpaceship = (map) =>
  map && map.includes(`X`)
    ? map
        .split(`\n`)
        .reverse()
        .reduce((pre, val, idx) => (val.includes(`X`) ? (pre = [val.indexOf('X'), idx]) : pre), [])
    : `Spaceship lost forever.`;
```

```js
const findSpaceship = (map = '') => {
  map = map.split('\n').reverse();

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 'X') return [x, y];
    }
  }

  return 'Spaceship lost forever.';
};
```
