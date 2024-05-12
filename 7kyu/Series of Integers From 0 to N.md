# [Series of Integers From 0 to N](https://www.codewars.com/kata/5841f4fb673ea2a2ae000111)

## Description

Write a function `generateIntegers` /` generate_integers` that accepts a single argument `n` / `$n` and generates an array containing the integers from `0` to `n` / `$n` inclusive.

For example, `generateIntegers(3)` / `generate_integers(3)` should return `[0, 1, 2, 3]`.

`n` / `$n` can be any integer greater than or equal to `0`.

## My Solution

**JavaScript**

```js
const generateIntegers = (n) => [...Array(n + 1).keys()];
```

```js
const generateIntegers = (n) => Array.from({ length: n + 1 }, (_, i) => i);
```

```js
const generateIntegers = (n) => [...Array(n + 1)].map((_, idx) => idx);
```

**Python**

```py
def generate_integers(n):
    return [i for i in range(n + 1)]
```

## Takeaways

1. Don't forget about the .keys() method on an Array object! Note it ONLY works when
   done like [...Array(n).keys()] -- cannot be done on an array literal?
