# [Figurate Numbers #2 - Pronic Number](https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034)

# Description

**Task:**

You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.

**Description:**

Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).

The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...

**Explanation:**

```
  0 = 0 × 1   // ∴  0 is a Pronic Number
  2 = 1 × 2   // ∴  2 is a Pronic Number
  6 = 2 × 3   // ∴  6 is a Pronic Number
 12 = 3 × 4   // ∴ 12 is a Pronic Number
 20 = 4 × 5   // ∴ 20 is a Pronic Number
 30 = 5 × 6   // ∴ 30 is a Pronic Number
 42 = 6 × 7   // ∴ 42 is a Pronic Number
```

**Note:**

Negative numbers are tested as well.

## My Solution

**JavaScript**

```js
const isPronic = (n, sqrt = Math.sqrt(n) ^ 0) => sqrt * (sqrt + 1) === n;
```

### User Solution

**JavaScript**

```js
const isPronic = (n) => Number.isInteger((4 * n + 1) ** 0.5);
```

### Takeaways

1. The user solution arrives at his formula with the following thought process: x(x+1) = n => x\**2 + x - n = 0
   So you need to solve this quadratic equation: x*2 + x - n = 0 The solutions(or roots) are: x1,2 = [-1 +- sqrt(1+4n)] / 2
   This has solutions if sqrt(1+4\*n) is integer.
