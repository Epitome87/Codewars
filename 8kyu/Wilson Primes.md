# [Wilson Primes](https://www.codewars.com/kata/55dc4520094bbaf50e0000cb)

## Description

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

```
((P-1)! + 1) / (P * P)
```

should give a whole number.

Your task is to create a function that returns `true` if the given number is a Wilson prime

## My Solution

**JavaScript**

```js
const amIWilson = (p) => [5, 13, 563].includes(n);
```

```js
const amIWilson = (p) => p === 5 || p === 13 || p === 563;
```

**Python**

```py
def am_i_wilson(n):
    return n in (5, 13, 563)
```

## Takeaways

1. Only 3 known Wilson Primes exist, so this solution is valid!
