# [SpeedCode #2 - Array Madness](https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1)

## Description

Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

```js
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
```

Get your timer out. Are you ready? Ready, get set, GO!!!

## My Solution

**JavaScript**

```js
const arrayMadness = (a, b) =>
  a.reduce((acc, curr) => acc + curr ** 2, 0) > b.reduce((acc, curr) => acc + curr ** 3, 0);
```

**Python**

```py
array_madness = lambda a, b: sum([v * v for v in a]) > sum([v ** 3 for v in b])
```

```py
def array_madness(a, b):
    squares = sum([v * v for v in a])
    cubes = sum([v ** 3 for v in b])
    return squares > cubes
```
