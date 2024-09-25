# [Geometry Basics: Distance Between Points in 2D](https://www.codewars.com/kata/58dced7b702b805b200000be)

## Description

This series of katas will introduce you to basics of doing geometry with computers.

`Point` objects have attributes `x` and `y`.

Write a function calculating distance between `Point a` and `Point b`.

Input coordinates fit in range −50 ⩽x, y ⩽ 50. Tests compare expected result and actual answer with tolerance of `1e-6`.

## My Solution

**JavaScript**

```js
const distanceBetweenPoints = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
```

**Python**

```py
def distance_between_points(a, b):
    return ((b.x - a.x) ** 2 + (b.y - a.y) ** 2) ** 0.5
```

### User Solution

**JavaScript**

```js
distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
```

**Python**

```py
from math import hypot

def distance_between_points(a, b):
    return hypot(a.x - b.x, a.y - b.y)
```

## Takeaways

1. Don't forget the `Math.hypot` method!
