# [Sum of Many Ints](https://www.codewars.com/kata/54c2fc0552791928c9000517)

## Description

Write this function:

```
for i from 1 to n, do i % m and return the sum
```

```
f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)
```

You'll need to get a little clever with performance, since n can be a very large number

## My Solution

**JavaScript**

```js
const f = (n, m) => {
  const guass = (x) => (x * (x + 1)) / 2;
  return guass(m - 1) * Math.floor(n / m) + guass(n % m);
};
```
