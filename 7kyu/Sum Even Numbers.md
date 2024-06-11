# [Sum Even Numbers](https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3)

## Description

Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

**Examples**

```
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
```

## My Solution

**JavaScript**

```js
const sumEvenNumbers = (input) => input.reduce((sum, curr) => (curr % 2 ? sum : sum + curr), 0);
```

**Python**

```py
def sum_even_numbers(seq):
    return sum(n for n in seq if n % 2 == 0)
```
