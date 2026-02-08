# [Area of Polygon](https://www.codewars.com/kata/574758e396b130b63e00069b)

## Description

Write the function `polygonArea(A,B,C,D)` that finds the area of polygons of this type:

(Visit URL for image)

- Assume D always equals B/2.
- Assume the angles formed by AB and BC are right angles.

## My Solution

**JavaScript**

```js
const polygonArea = (a, b, c, d) => a * b + d * (c - a);
```

```js
const polygonArea = (a, b, c, d) => {
  const areaOfSquare = a * b;
  const areaOfTriangle = d * (c - a);

  return areaOfSquare + areaOfTriangle;
};
```

**Python**

```py
def polygon_area(a, b, c, d):
    return a * b + d * (c - a)
```

### User Solution

**JavaScript**

```js
function polygonArea(A, B, C, D) {
  return D * (A + C);
}
```
