# [Riemann Sums II (Trapezoidal Rule)](https://www.codewars.com/kata/5562b6de2f508f1adc000089)

## Description

Part 2/3 of my kata series. [Part 1](http://www.codewars.com/kata/riemann-sums-i-left-side-rule)

The description changes little in this second part. Here we simply want to improve our approximation of the integral by using trapezoids instead of rectangles. The left/right side rules have a serious bias and the trapezoidal rules averages those approximations! The same assumptions exist but are pasted here for convenience.

- f will always take a single float argument
- f will always be a "nice" function, don't worry about NaN
- n will always be a natural number (0, N]
- b > a
- and n will be chosen appropriately given the length of [a, b] (as in I will not have step sizes smaller than machine epsilon)
- !!! round answers to the nearest hundredth!!!

## My Solution

**JavaScript**

```js
const riemann_trapezoidal = (f, n, a, b) => {
  const dx = (b - a) / n;
  const sum = Array.from({ length: n + 1 }, (_, i) => (i === 0 || i === n ? 1 : 2) * f(a + i * dx)).reduce(
    (acc, cur) => acc + cur,
    0
  );
  return +(0.5 * dx * sum).toFixed(2);
};
```

```js
const riemann_trapezoidal = (f, n, a, b) => {
  const dx = (b - a) / n;
  var sum = 0;

  for (let i = 0; i <= n; i++) sum += (i === 0 || i === n ? 1 : 2) * f(a + i * dx);

  return +(0.5 * dx * sum).toFixed(2);
};
```

**Python**

```js
    dx = (b - a) / n
    trap_sum = (f(a) + f(b)) / 2
    trap_sum += sum(f(a + i * dx) for i in range(1, n))
    return round(dx * trap_sum, 2)
```

```py
def riemann_trapezoidal(f, n, a, b):
    dx = (b - a) / n
    sum = (f(a) + f(b)) / 2
    for i in range(1, n):
        sum += f(a + i * dx)
    return round(dx * sum, 2)
```
