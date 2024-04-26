# [No Oddities Here](https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce)

## Description

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

## My Solution

**JavaScript**

```js
const noOdds = (value) => value.filter((n) => !(n % 2));
```

**Python**

```py
def no_odds(values):
    return [x for x in values if not x % 2]
```
