# [Return Two Highest Values in List](https://www.codewars.com/kata/57ab3c09bb994429df000a4a)

## Description

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

    [4, 10, 10, 9]  =>  [10, 9]
    [1, 1, 1]  =>  [1]
    []  =>  []

## My Solution

**JavaScript**

```js
const twoHighest = (arr) => [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
```

**Python**

```py
def two_highest(arg1):
    return sorted(set(arg1), reverse=True)[:2]
```

### User Solution

**JavaScript**

```js
const twoHighest = (a) =>
  a
    .filter((e, i) => i === a.lastIndexOf(e))
    .sort((x, y) => y - x)
    .slice(0, 2);
```
