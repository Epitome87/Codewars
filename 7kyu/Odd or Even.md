# [Odd or Even](https://www.codewars.com/kata/5949481f86420f59480000e7)

## Description

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching `"odd"` or `"even"`.

If the input array is empty consider it as: `[0]` (array with a zero).

**Examples:**

```
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
```

## My Solution

**JavaScript**

```js
const oddOrEven = (array) => (array.reduce((acc, cur) => acc + cur, 0) % 2 ? 'odd' : 'even');
```

**Python**

```py
def odd_or_even(arr):
    return "odd" if sum(arr) % 2 else 'even'
```
