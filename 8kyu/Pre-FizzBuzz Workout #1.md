# [Pre-FizzBuzz Workout #1](https://www.codewars.com/kata/569e09850a8e371ab200000b)

## Description

This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

## My Solution

**JavaScript**

```js
let preFizz = (n) => [...Array(n)].map((x, i) => i + 1);
```

```js
const preFizz = (n) => Array.from({ length: n }, (_, i) => i + 1);
```

**Python**

```py
def pre_fizz(n):
    return [x for x in range(1, n + 1)]
```

## Takeaways

1. Consider [...Array(n)].map() over Array.from() sometimes?
