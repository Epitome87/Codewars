# [Consecutive Items](https://www.codewars.com/kata/5f6d533e1475f30001e47514)

## Description

You are given a list of unique integers `arr`, and two integers `a` and `b`. Your task is to find out whether or not `a` and `b` appear consecutively in `arr`, and return a boolean value (`True` if `a` and `b` are consecutive, `False` otherwise).

It is guaranteed that `a` and `b` are both present in `arr`.

## My Solution

**JavaScript**

```js
const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
```

**Python**

```py
def consecutive(arr, a, b):
    return abs(arr.index(a) - arr.index(b)) == 1
```

### User Solution

**JavaScript**

```js
const consecutive = (arr, a, b) => new RegExp(`${a},${b}|${b},${a}`).test(arr);
```
