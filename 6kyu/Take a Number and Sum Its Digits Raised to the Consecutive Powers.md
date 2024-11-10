# [Take a Number and Sum Its Digits Raised to the Consecutive Powers](https://www.codewars.com/kata/5626b561280a42ecc50000d1)

## Description

The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2

The next number in having this property is 135:

See this property again: 135 = 1^1 + 3^2 + 5^3

**Task**

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

**Examples**

Let's see some cases (input -> output):

    1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
    1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.

    90, 100 --> []

## My Solution

**JavaScript**

```js
const sumDigPow = (a, b) =>
  Array.from({ length: b - a + 1 }, (_, idx) => idx + a).filter(
    (num) => num === [...num.toString()].reduce((acc, cur, idx) => acc + Math.pow(cur, idx + 1), 0)
  );
```

**Python**

```py
def sum_dig_pow(a, b):
    return [i for i in range(a, b + 1) if i == sum(int(x) ** (j + 1) for j, x in enumerate(str(i)))]
```
