# [Check if a Triangle is an Equable Triangle!](https://www.codewars.com/kata/57d0089e05c186ccb600035e)

## Description

A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle.

## My Solution

**JavaScript**

```js
const equableTriangle = (a, b, c, s = (a + b + c) / 2) => Math.sqrt(s * (s - a) * (s - b) * (s - c)) === s * 2;
```

```js
const equableTriangle = (a, b, c) => {
  const s = (a + b + c) / 2; // Semi-perimeter
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return s * 2 === area;
};
```

### User Solution

**JavaScript**

```js
function equableTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  return 4 * p == (p - a) * (p - b) * (p - c);
}
```
