# [Find the Next Perfect Square](https://www.codewars.com/kata/56269eb78ad2e4ced1000013)

## Description

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the `findNextSquare` method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then `-1` should be returned. You may assume the parameter is non-negative.

Examples: (Input --> Output)

```
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
```

## My Solution

**JavaScript**

```js
const findNextSquare = (sq) => (sq ** 0.5 % 1 ? -1 : (sq ** 0.5 + 1) ** 2);
```

```js
const findNextSquare = (square) => {
  const squaredInput = Math.sqrt(square);

  if (!Number.isInteger(squaredInput)) return -1;

  const nextNumber = squaredInput + 1;
  return Math.pow(nextNumber, 2);
};
```

**Python**

```py
def find_next_square(sq):
    return -1 if sq ** 0.5 % 1 else (sq ** 0.5 + 1) ** 2
```
