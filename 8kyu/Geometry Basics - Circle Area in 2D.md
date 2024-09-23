# [Geometry Basics: Circle Area in 2D](https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0)

## Description

This series of katas will introduce you to basics of doing geometry with computers.

Write the function `circleArea`/`CircleArea` which takes in a `Circle` object and calculates the area of that circle.  
The `Circle` class can be seen below:

```js
// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}
```

And the `Point` class can be seen below:

```js
// Represents a Point where x and y are Numbers
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

## My Solution

**JavaScript**

```js
const circleArea = (circle) => Math.PI * Math.pow(circle.radius, 2);
```

**Python**

```py
from math import pi

def circle_area(circle):
    return pi * circle.radius ** 2
```
