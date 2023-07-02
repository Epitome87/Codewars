# [Grains](https://www.codewars.com/kata/55f7eb009e6614447b000099)

## Description

Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

There are 64 squares on a chessboard.

#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

Write a program that shows how many grains were on each square.

## My Solution

**JavaScript**

```js
const square = (number) => 2 ** (number - 1);
```

### User Solution

**JavaScript**

```js
const square = (n) => 2 ** --n;
```

## Takeaways

1. Remember, as minimal as the code-savings are, consider `--n` as opposed to `(n - 1)` when doing the latter requires us to use parentheses to enforce proper precedence (and when we don't mind changing the value of n).
