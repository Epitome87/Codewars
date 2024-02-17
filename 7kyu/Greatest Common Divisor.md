# [Greatest Common Divisor](https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd)

## Description

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

## My Solution

**JavaScript**

```js
// Euclidean Algorithm - Recursive
const mygcd = (x, y) => (y ? mygcd(y, x % y) : x);
```

```js
// Euclidean Algorithm - Iterative
const mygcd = (x, y) => {
  let r;

  while (x % y > 0) {
    r = x % y;
    x = y;
    y = r;
  }

  return y;
};
```

```js
const mygcd = (x, y) => {
  const max = Math.max(x, y);

  for (let i = max; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) return i;
  }

  return 1;
};
```

**Python**

```py
def mygcd(x, y):
    return x if y == 0 else mygcd(y, x % y)
```

## Takeaways

1. Learn and understand why the Euclidean Algorithm works for this!
