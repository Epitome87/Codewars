# [Euclidean Distance in n Dimensions](https://www.codewars.com/kata/595877be60d17855980013d3)

## Description

Implement a function to calculate the distance between two points in n-dimensional space. The two points will be passed to your function as arrays of the same length (tuples in Python).

Round your answers to two decimal places.

## My Solution

**JavaScript**

```js
const euclideanDistance = (p1, p2) => +(p1.reduce((acc, cur, i) => acc + (p2[i] - cur) ** 2, 0) ** 0.5).toFixed(2);
```

```js
const euclideanDistance = (point1, point2) => {
  let sumOfSquares = 0;
  for (let i = 0; i < point1.length; i++) {
    const delta = point2[i] - point1[i];
    const deltaSquared = delta ** 2;
    sumOfSquares += deltaSquared;
  }
  return +Math.sqrt(sumOfSquares).toFixed(2);
};
```

### User Solution

**JavaScript**

```js
const euclideanDistance = (p1, p2) => +p1.reduce((acc, cur, i) => Math.hypot(acc, cur - p2[i]), 0).toFixed(2);
```
