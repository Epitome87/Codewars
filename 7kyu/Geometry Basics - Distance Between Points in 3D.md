# [Geometry Basics: Distance Between Points in 3D](https://www.codewars.com/kata/58dceee2c9613aacb40000b9)

## Description

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes. For Haskell there are Point data types described with record syntax with fields x, y, and z.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. Tests in Haskell will not round.

## My Solution

**JavaScript**

```js
const distanceBetweenPoints = (a, b) => Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z);
```

```js
const distanceBetweenPoints = (a, b) => ((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2) ** 0.5;
```
