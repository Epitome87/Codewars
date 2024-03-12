# [Alternate Square Sum](https://www.codewars.com/kata/559d7951ce5e0da654000073)

## Description

Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

For empty arrays, result should be zero (except for Haskell).

**Note**

The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

**Example**

```
[11, 12, 13, 14, 15]  -->  379
# 1.  2.  3.  4.  5.  position

11 + 12^2 + 13 + 14^2 + 15 = 379
```

Explanation:

Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1, 13 is at position #3 and 15 at #5.

Elements at indices 1, 3 are 12 and 14 and they are at even position. So we need to add 11, 13, 15 as they are and square of 12 and 14

## My Solution

**JavaScript**

```js
const alternateSqSum = (arr) => arr.reduce((acc, cur, idx) => acc + (idx % 2 ? cur ** 2 : cur), 0);
```

**Python**

```py
def alternate_sq_sum(arr):
    return sum([x ** 2 if i % 2 else x for i, x in enumerate(arr)])
```
