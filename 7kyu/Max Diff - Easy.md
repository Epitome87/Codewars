# [Max Diff - Easy](https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095)

## Description

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

- lst contains integers, that means it may contain some negative numbers
- if lst is empty or contains a single element, return 0
- lst is not sorted

```js
[1, 2, 3, 4][(1, 2, 3, -4)]; //  returns 3 because 4 -   1  == 3 //  returns 7 because 3 - (-4) == 7
```

## My Solution

**JavaScript**

```js
const maxDiff = (list) => ((sorted = [...list].sort((a, b) => a - b)), sorted.at(-1) - sorted[0] || 0);
```

```js
const maxDiff = (list) => {
  const sorted = [...list].sort((a, b) => a - b);
  return sorted.slice(-1) - sorted.slice(0, 1);
};
```

```js
const maxDiff = (list) => list.length && Math.max(...list) - Math.min(...list);
```

**Python**

```py
def max_diff(list):
    return max(list) - min(list) if list else 0
```

```py
def max_diff(list):
    if len(list) < 1: return 0
    sortedList = sorted(list)
    return sortedList[-1] - sortedList[0]
```
