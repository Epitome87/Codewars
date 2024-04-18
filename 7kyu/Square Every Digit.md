# [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

## Description

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9<sup>2</sup> is 81 and 1<sup>2</sup> is 1.

Note: The function accepts an integer and returns an integer

## My Solution

**JavaScript**

```js
const squareDigits = (num) =>
  Number(
    num
      .toString()
      .split('')
      .reduce((acc, curr) => acc + Math.pow(curr, 2), '')
  );
```

**Python**

```py
def square_digits(num):
    return int(''.join(str(int(x) ** 2) for x in str(num)))
```
