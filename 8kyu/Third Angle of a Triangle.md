# [Third Angle of a Triangle](https://www.codewars.com/kata/5a023c426975981341000014)

## Description

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

## My Solution

**JavaScript**

```js
const otherAngle = (a, b) => 180 - a - b;
```

**Python**

```py
def other_angle(a, b):
    return 180 - a - b
```
