# [Simple Physics Problem](https://www.codewars.com/kata/57c3eb9fd6cf0ffd68000222)

## Description

This just a simple physics problem:

A race car accelerates uniformly from 18.5 m/s to 46.1 m/s in 2.47 seconds. Determine the acceleration of the car and the distance traveled.

Create a function solveit(vi, vf, t) that takes in all three values and outputs a list of acceleration and distance in format [acceleration, distance].

Formula used:

```
a = (vf-vi)/t
d = vi*t + 0.5*a*(t**2)
```

If vi > vf then it should return empty list. The solution must be rounded off to double decimal place. Example: [11.17, 79.78]

## My Solution

**JavaScript**

```js
onst solveIt = (vi, vf, t) => vi > vf ? [] : [(vf - vi) / t, vi * t + 0.5 * (vf - vi) / t * t ** 2].map(v => +v.toFixed(2));
```

```js
const solveIt = (vi, vf, t) => {
  if (vi > vf) return [];
  const acc = (vf - vi) / t;
  const dis = vi * t + 0.5 * acc * t ** 2;
  return [acc, dis].map((v) => +v.toFixed(2));
};
```