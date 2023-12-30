# [Sum Mixed Array](https://www.codewars.com/kata/57eaeb9578748ff92a000009)

## Description

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

## My Solution

**JavaScript**

```js
const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);
```

**Python**

```py
sum_mix = lambda arr: sum([int(x) for x in arr])
```

### User Solution

**Python**

```py
def sum_mix(arr):
    return sum(map(int, arr))
```

```py
def sum_mix(arr):
    return sum(int(n) for n in arr)
```

### Takeaways

1. You don't need to put `int(x) for x in arr` in brackets inside the `sum` method.
