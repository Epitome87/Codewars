# [Find the Area of the Rectangle!](https://www.codewars.com/kata/580a0347430590220e000091)

## Description

Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

## My Solution

**JavaScript**

```js
const area = (d, l) => {
  if (d <= l) return 'Not a rectangle';
  const w = (d * d - l * l) ** 0.5;
  return +(l * w).toFixed(2);
};
```
