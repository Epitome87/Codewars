# [Grid Index](https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e)

## Description

You are given an n by n ( square ) grid of characters, for example:

```js
[
  ['m', 'y', 'e'],
  ['x', 'a', 'm'],
  ['p', 'l', 'e'],
];
```

You are also given a list of integers as input, for example:

```js
[1, 3, 5, 8];
```

You have to find the characters in these indexes of the grid if you think of the indexes as:

```js
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

Remember that the indexes start from one and not zero.

Then you output a string like this:

```js
'meal';
```

All inputs will be valid.

## My Solution

**JavaScript**

```js
// Using concat to form 1D array, then reduce
const gridIndex = (grid, indices) => {
  const flatGrid = [].concat(...grid);
  return indices.reduce((acc, curr) => acc + flatGrid[curr - 1], '');
};
```

```js
// Using flat to form 1D array, then reduce
const gridIndex = (grid, indices) => {
  const flatGrid = grid.flat();
  return indices.reduce((acc, curr) => acc + flatGrid[curr - 1], '');
};
```

```js
// Using map rather than reduce
const gridIndex = (grid, indices) => {
  const flatGrid = grid.flat();
  return indices.map((index) => flatGrid[index - 1]).join('');
};
```
