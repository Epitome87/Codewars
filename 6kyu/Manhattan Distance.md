# [Manhattan Distance](https://www.codewars.com/kata/52998bf8caa22d98b800003a)

## Description

The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

**Manhattan Distance**

Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

Complete the function that accepts two points and returns the Manhattan Distance between the two points.

The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

**Examples**

```
* Input [1, 1], [1, 1] => Output 0
* Input [5, 4], [3, 2] => Output 4
* Input [1, 1], [0, 3] => Output 3
```

## My Solution

**JavaScript**

```js
const manhattanDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
```

```js
const manhattanDistance = (pointA, pointB) => Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
```

**Python**

```py
def manhattan_distance(pointA, pointB):
    return abs(pointA[0] - pointB[0]) + abs(pointA[1] - pointB[1])
```

### User Solution

**Python**

```py
def manhattan_distance(a, b):
    return sum(abs(c - d) for c, d in zip(a, b))
```
