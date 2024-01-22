# [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

## Description

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

## My Solution

**JavaScript**

```js
const squareSum = (nums) => nums.reduce((acc, cur) => (acc += cur ** 2), 0);
```

**Python**

```py
def square_sum(numbers):
    return sum(num ** 2 for num in numbers)
```

```py
def square_sum(numbers):
    sum = 0
    for num in numbers:
        sum += num ** 2
    return sum
```
