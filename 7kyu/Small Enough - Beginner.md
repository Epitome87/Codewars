# [Small Enough? - Beginner](https://www.codewars.com/kata/57cc981a58da9e302a000214)

## Description

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return `true`. Else, return `false`.

You can assume all values in the array are numbers.

## My Solution

**JavaScript**

```js
const smallEnough = (a, limit) => Math.max(...a) <= limit;
```

```js
const smallEnough = (a, limit) => a.every((n) => n <= limit);
```

**Python**

```py
def small_enough(array, limit):
    return max(array) <= limit
```

```py
def small_enough(array, limit):
    return all(x <= limit for x in array)
```
