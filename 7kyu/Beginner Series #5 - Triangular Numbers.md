# [Beginner Series #5 - Triangular Numbers](https://www.codewars.com/kata/56d0a591c6c8b466ca00118b)

## Description

Triangular number is any amount of points that can fill an equilateral triangle.

Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

Hint!

```
T(n) = n \* (n + 1) / 2,
n - is the size of one side.
T(n) - is the triangular number.
```

Given a number T from interval [1..2147483646], find if it is triangular number or not.

## My Solution

**JavaScript**

```js
// Solving for n when using t(n) = n * (n + 1) / 2
const isTriangular = (t) => ((Math.sqrt(8 * t + 1) - 1) / 2) % 1 === 0;
```

```js
const isTriangular = (t) => {
  for (let i = 0; ; i++) {
    const sum = (i * (i + 1)) / 2;
    if (sum === t) return true;
    if (sum > t) return false;
  }
};
```

### User Solution

**JavaScript**

```js
const isTriangular = (t) => Number.isInteger((1 + (t << 3)) ** 0.5);
```
