# [Riemann Sums I (Left Side Rule)](https://www.codewars.com/kata/5562ab5d6dca8009f7000050)

## Description

Let's do a simple approximation of the integral of a continuous function.

In this kata, we will implement: left_riemann(f, n, a, b)

In the test, we will pass a function that takes a single float argument to compute the value of the function. Your job is to approximate the integral of that function on the closed interval [a,b] with n rectangles. You will use the left hand rule. For a better explanation of the assignment visit the wikipedia page on riemann sums linked below:

http://en.wikipedia.org/wiki/Riemann_sum

- f will always take a single float argument
- f will always be a "nice" function, don't worry about NaN
- n will always be a natural number (0, N]
- b > a
- and n will be chosen appropriately given the length of [a, b] (as in I will not have step sizes smaller than machine epsilon)

## My Solution

**JavaScript**

```js
const left_riemann = (f, n, a, b, dx = (b - a) / n) =>
  dx * Array.from({ length: n }, (_, i) => f(a + i * dx)).reduce((acc, cur) => acc + cur, 0);
```

```js
const left_riemann = (f, n, a, b) => {
  let sum = 0;
  const dx = (b - a) / n;

  for (let i = 0; i < n; i++) sum += f(a + i * dx);

  return dx * sum;
};
```

**Python**

```py
def left_riemann(f, n, a, b):
    dx = (b - a) / n
    return dx * sum([f(a + i * dx) for i in range(n)])
```
