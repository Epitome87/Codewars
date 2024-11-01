# [Sum of Cubes](https://www.codewars.com/kata/59a8570b570190d313000037)

## Description

Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: **(Input --> output)**

    2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
    3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

## My Solution

**JavaScript**

```js
const sumCubes = (n) => ((n * (n + 1)) / 2) ** 2;
```

```js
const sumCubes = (n) => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);
```

```js
const sumCubes = (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 3).reduce((acc, cur) => acc + cur);
```

**Python**

```py
def sum_cubes(n):
    return (n * (n + 1) // 2) ** 2
```

## Takeaways

1. Remember another useful mathematical formula: Sum of cubes from 1 to n:
   (n(n + 1)/2)^2
   In other words, the sum of the first n cubes is the square of the sum of the first n natural numbers.
2. Try to remember and make use of the Array.prototype.keys() method! It is NOT an array of keys (indices, essentially). It is an ARRAY ITERATOR object which contains the keys (indices). It Can be used in for-of loops, or if you spread the result into an array, you get an array of indices.
