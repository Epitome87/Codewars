# [Count by X](https://www.codewars.com/kata/5513795bd3fafb56c200049e)

## Description

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

**Examples**

```
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
```

## My Solution

**JavaScript**

```js
const countBy = (x, n) => Array.from({ length: n }, (_, i) => ++idx * x);
```

```js
const countBy = (x, n) =>
  Array(n)
    .fill()
    .map((num, index) => (index + 1) * x);
```

## User Solution

**JavaScript**

```js
const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);
```

## Takeaways

1. `Array(n).fill()` will fill an array with `undefined` value at each index. Similiarly, `[...Array(4)].map(el => el)` will do the same. For situations where we want to map through an array but are not concerned with the value at that index, consider using one of the two methods above, as their values being `undefined` will be of no consequence.
