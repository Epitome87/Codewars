# [Closest Pair of Points](https://www.codewars.com/kata/5376343a003bf6e034000c56)

## Description

Given a number of points on a plane, your task is to find two points with the smallest distance between them.

Each points will be represented as an array with 2 coordinates.

**Example**

```
  1  2  3  4  5  6  7  8  9
1
2    . A
3                . D
4                   . F
5             . C
6
7                . E
8    . B
9                   . G
```

For the plane above, the input will be:

```js
[
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [6, 3], // D
  [6, 7], // E
  [7, 4], // F
  [7, 8], // G
];
```

The two points that are closest to each other are D and F. Expected answer should be an array with both points in any order. [[6,3],[7,4]] or [[7,4],[6,3]] are valid answers for the example above.

More information on http://en.wikipedia.org/wiki/Closest_pair_of_points_problem

## My Solution

**JavaScript**

```js
const closestPair = (points) => {
  let currentClosestDistance = Infinity;
  let currentClosestPairs = [];

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = Math.hypot(points[i][0] - points[j][0], points[i][1] - points[j][1]);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestPairs = [points[i], points[j]];
      }
    }
  }

  return currentClosestPairs;
};
```
