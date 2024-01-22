# [Sum of Positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)

## Description

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

## My Solution

**JavaScript**

```js
const positiveSum = (arr) => arr.reduce((acc, cur) => acc + (cur > 0 ? cur : 0), 0);
```

```js
const positiveSum = (arr) => arr.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0);
```

**Python**

```py
def positive_sum(arr):
    return sum(x for x in arr if x > 0)
```
