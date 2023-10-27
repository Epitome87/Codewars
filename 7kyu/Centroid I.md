# [Centroid I](https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4)

## Description

Write a function centroid(c) to calculate the centroid of 3D coordinates.

Return the results as a list of floats. Round the values to two decimal places.

## My Solution

**JavaScript**

```js
const centroid = (c) =>
  [...Array(3)].map((_, idx) => +(c.reduce((acc, cur) => acc + cur[idx], 0) / c.length).toFixed(2));
```

```js
const centroid = (c) => {
  const x = c.reduce((acc, cur) => acc + cur[0], 0) / c.length;
  const y = c.reduce((acc, cur) => acc + cur[1], 0) / c.length;
  const z = c.reduce((acc, cur) => acc + cur[2], 0) / c.length;
  return [x, y, z].map((el) => +el.toFixed(2));
};
```
