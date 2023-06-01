# [Simpson's Rule - Approximate Integration](https://www.codewars.com/kata/565abd876ed46506d600000d)

## Description

(Vist link for description; lots of Calculus syntax that does not seem to want to paste properly!)

## My Solution

**JavaScript**

```js
const simpson = (n) => {
  let approximation = 0;
  const deltaX = Math.PI / n;
  for (let i = 0; i <= n; i++) {
    const coefficient = i === 0 || i === n ? 1 : i % 2 ? 4 : 2;
    const x = deltaX * i;
    const fx = coefficient * 1.5 * Math.pow(Math.sin(x), 3);
    approximation += fx;
  }
  return (deltaX / 3) * approximation;
};
```

### User Solution

**JavaScript**

```js
const simpson = (n) => {
  let h = Math.PI / n;
  return (
    (h / 3) *
    (4 *
      Array(n / 2)
        .fill(0)
        .reduce((Σ, _, i) => Σ + (3 / 2) * Math.pow(Math.sin((2 * i + 1) * h), 3), 0) +
      2 *
        Array(n / 2 - 1)
          .fill(0)
          .reduce((Σ, _, i) => Σ + (3 / 2) * Math.pow(Math.sin(2 * (i + 1) * h), 3), 0))
  );
};
```
