# [Reimplement Multiplication Part 1](https://www.codewars.com/kata/563cc8c1a3895d7d30000049)

## Description

Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using \* is cheating!

You can do this iteratively or recursively.

## My Solution

**JavaScript**

```js
const mul = (a, b) => (b ? a + mul(a, --b) : 0);
```

### User Solution

**JavaScript**

```js
let mul = (a, b) => (a ? [...Array(a)].reduce((x, y) => x + b, 0) : 0);
```
