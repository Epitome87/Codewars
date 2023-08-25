# [Number with 3 Roots](https://www.codewars.com/kata/5932c94f6aa4d1d786000028)

## Description

In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x:

```
r^n=x,
```

Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0), return true if it exists, false if not.

```js
// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2
perfectRoots(256); // returns true
```

## My Solution

**JavaScript**

```js
const perfectRoots = (n) => [2, 4, 8].every((x) => !(n ** (1 / x) % 1));
```

```js
const perfectRoots = (n) => [2, 4, 8].map((v) => n ** (1 / v)).every((x) => !(x % 1));
```

```js
const perfectRoots = (n) => Array.from({ length: 3 }, (_, i) => n ** (1 / 2 ** (i + 1))).every((x) => x % 1 === 0);
```

### User Solution

**JavaScript**

```js
// The other roots are implied by the truthiness of the 8th root!
function perfectRoots(n) {
  return Math.pow(n, 1 / 8) % 1 === 0 ? true : false;
}
```
