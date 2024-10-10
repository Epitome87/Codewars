# [Perfect Squares, Perfect Fun](https://www.codewars.com/kata/5705ca6a41e5be67720012c0)

## Description

Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) \* sqroot(length). If not, simply return "Not a perfect square!".

Examples:

`1212` returns:

    "12
    12"

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

`123123123` returns:

    "123
    123
    123"

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

## My Solution

**JavaScript**

```js
const squareIt = (int) => {
  const intLength = int.toString().length;
  const square = Math.sqrt(intLength);
  return Number.isInteger(square)
    ? Array.from({ length: square }, (_, i) => int.toString().slice(i * square, i * square + square)).join('\n')
    : 'Not a perfect square!';
};
```

**Python**

```py
def square_it(digits):
    length = len(str(digits))
    root = length ** 0.5
    return '\n'.join(str(digits)[int(i * root):int(i * root + root)] for i in range(int(root))) if root.is_integer() else 'Not a perfect square!'
```
