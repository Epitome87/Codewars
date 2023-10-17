# [Simple Fun #181: Rounding](https://www.codewars.com/kata/58bccdf56f25ff6b6d00002f)

## Description

Round the given number n to the nearest multiple of m.

If n is exactly in the middle of 2 multiples of m, return n instead.

Example
For n = 20, m = 3, the output should be 21.

For n = 19, m = 3, the output should be 18.

For n = 50, m = 100, the output should be 50.

**Input/Output**

- [input] integer n

1 ≤ n < 10^9.

- [input] integer m

3 ≤ m < 109.

- [output] an integer

## My Solution

**JavaScript**

```js
const rounding = (n, m) => (n / m === 0.5 ? n : Math.round(n / m) * m);
```

### User Solution

**JavaScript**

```js
function rounding(n, m) {
  return n << 1 === m ? n : Math.round(n / m) * m;
}
```
