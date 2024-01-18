# [Find Nearest Square Number](https://www.codewars.com/kata/5a805d8cafa10f8b930005ba)

## Description

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

## My Solution

**JavaScript**

```js
const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;
```

**Python**

```py
def nearest_sq(n):
    return round(n ** 0.5) ** 2
```
