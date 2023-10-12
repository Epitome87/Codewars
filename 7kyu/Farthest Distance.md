# [Farthest Distance](https://www.codewars.com/kata/5b56e42805f04b1780000073)

## Description

You are given a array which contains sub-arrays. Each sub-array represents a point in a (2d) cartesian coordinate system.

Create a function which returns the distance of the two points which are farthest apart.

All distances are to be rounded to 2 decimal places. If the array contains two points return the distance between them. There will always be at least two points.

```
furthest_distance([[1,2], [3,8], [4,3]]) # returns 6.32
```

Distances between

[1,2] [3,8] : 6.32

[3,8] [4,3] : 5.10

[1,2] [4,3] : 3.16

This link may help if you don't know how to work out the distance between two points.

## My Solution

**JavaScript**

```js
const furthestDistance = (arr) => {
  const distances = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      distances.push(+Math.hypot(arr[i][0] - arr[j][0], arr[i][1] - arr[j][1]).toFixed(2));
    }
  }

  return Math.max(...distances);
};
```
