# [Slope of a Line](https://www.codewars.com/kata/53222010db0eea35ad000001)

## Description

**Task**

Your challenge is to write a function named getSlope/get_slope/GetSlope that calculates the slope of the line through two points.

**Input**

Each point that the function takes in is an array 2 elements long. The first number is the x coordinate and the second number is the y coordinate.

If the line through the two points is vertical or if the same point is given twice, the function should return null/None.

## My Solution

**JavaScript**

```js
const getSlope = ([x1, y1], [x2, y2]) => (x1 === x2 ? null : (y2 - y1) / (x2 - x1));
```

**Python**

```py
def get_slope(p1, p2):
    return None if p1[0] == p2[0] else (p2[1] - p1[1]) / (p2[0] - p1[0])
```
