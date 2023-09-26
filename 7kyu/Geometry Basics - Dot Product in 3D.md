# [Geometry Basics: Dot Product in 3D](https://www.codewars.com/kata/58e3ea29a33b52c1dc0000c0)

## Description

This series of katas will introduce you to basics of doing geometry with computers.

Vector objects have x, y, and z attributes.

Write a function calculating dot product of Vector a and Vector b.

You can read more about dot product on [Wikipedia](https://en.wikipedia.org/wiki/Dot_product).

Tests round answers to 6 decimal places.

## My Solution

**JavaScript**

```js
const dotProduct = (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
```
