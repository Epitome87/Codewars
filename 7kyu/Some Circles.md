# [Some Circles](https://www.codewars.com/kata/56143efa9d32b3aa65000016)

## Description

Write a function that takes as its parameters one or more numbers which are the diameters of circles.

The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".

You don't know how many circles you will be given, but you can assume it will be at least one.

So:

```js
sumCircles(2) == 'We have this much circle: 3';
sumCircles(2, 3, 4) == 'We have this much circle: 23';
```

## My Solution

**JavaScript**

```js
const sumCircles = (...diameters) => {
  const area = Math.PI * diameters.reduce((acc, cur) => acc + (0.5 * cur) ** 2, 0);
  return `We have this much circle: ${Math.round(area)}`;
};
```
