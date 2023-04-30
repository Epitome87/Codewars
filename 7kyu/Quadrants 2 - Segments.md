# [Quadrants 2: Segments](https://www.codewars.com/kata/643ea1adef815316e5389d17)

## Description

Task
Your task is to check whether a segment is completely in one quadrant or it crosses more. Return true if the segment lies in two or more quadrants. If the segment lies within only one quadrant, return false.

There are two parameters: A (coord) and B (coord), the endpoints defining the segment AB.

No coordinate will be zero; expect that all X and Y are positive or negative.

**Examples**

1. This whole segment is in the first quadrant.

`[(1, 2), (3, 4)] -> false`

Example 1

2. This segment intersects the Y axis, therefore being in two quadrants: I and II.

`[(9, 3), (-1, 6)] -> true`

Example 2

3. This segment is completely in the second quadrant.

`[(-1, 6), (-9, 1)] -> false`

Example 3

**Predefined**

There is a class named coord/Coord (see in code). It has the following members:

- (constructor): Constructs the coordinate
  - x (number): The X coordinate
  - y (number): The Y coordinate
- x (number): The X coordinate
- y (number): The Y coordinate
- equal (bool): Compares two coordinates if they're the same
  - c (coord): The coordinate to compare with
- toString (string): Turns coordinate into string

**Task Series**

1. Quadrants
2. Quadrants 2: Segments (this kata)

## My Solution

**JavaScript**

```js
const quadrant = (x, y) => (x < 0 ? (y > 0 ? 2 : 3) : y > 0 ? 1 : 4);
const quadrant_segment = (A, B) => quadrant(A.x, A.y) !== quadrant(B.x, B.y);
```

### User Solution

**JavaScript**

```js
function quadrant_segment(A, B) {
  const x1 = Math.sign(A.x);
  const y1 = Math.sign(A.y);
  const x2 = Math.sign(B.x);
  const y2 = Math.sign(B.y);

  return !(Math.sign(A.x) === Math.sign(B.x) && Math.sign(A.y) === Math.sign(B.y));
}
```
