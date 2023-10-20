ou Are # [You Are a Cube!](https://www.codewars.com/kata/57da5365a82a1998440000a9)

## Description

In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex.The cube is the only regular hexahedron and is one of the five Platonic solids. It has 12 edges, 6 faces and 8 vertices.The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations.

You are given a task of finding a if the provided value is a perfect cube!

## My Solution

**JavaScript**

```js
const youAreACube = (value) => !(Math.cbrt(value) % 1);
```
