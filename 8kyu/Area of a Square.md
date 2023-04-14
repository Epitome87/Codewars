# [Area of a Square](https://www.codewars.com/kata/5748838ce2fab90b86001b1a)

## Description

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

(Visual of an arc inside a square)

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

## My Solution

**JavaScript**

```js
function squareArea(A) {
  const theta = 90;
  const radius = A / ((2 * Math.PI * theta) / 360);
  const area = +Math.pow(radius, 2).toFixed(2);

  return area;
}
```

**TypeScript**

```ts
export const squareArea = (arc: number): number => +(((arc * 2) / Math.PI) ** 2).toFixed(2);
```
