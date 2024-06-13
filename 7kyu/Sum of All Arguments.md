# [Sum of All Arguments](https://www.codewars.com/kata/540c33513b6532cd58000259)

## Description

Write a function that finds the sum of all its arguments.

eg:

```js
sum(1, 2, 3); // => 6
sum(8, 2); // => 10
sum(1, 2, 3, 4, 5); // => 15
```

## My Solution

**JavaScript**

```js
const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
```

**Python**

```py
def sum_args(*args):
    return sum(args)
```
