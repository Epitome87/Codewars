# [Sum - Square Even, Root Odd](https://www.codewars.com/kata/5a4b16435f08299c7000274f)

## Description

Complete the function that takes a list of numbers (`nums`), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

## My Solution

**JavaScript**

```js
const sumSquareEvenRootOdd = (nums) =>
  +nums.reduce((acc, curr) => acc + Math.pow(curr, curr % 2 ? 0.5 : 2), 0).toFixed(2);
```

**Python**

```py
def sum_square_even_root_odd(nums):
    return round(sum(n ** 0.5 if n % 2 else n ** 2 for n in nums), 2)
```
