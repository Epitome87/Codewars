# [One Line Task: Brick Combos](https://www.codewars.com/kata/58c21e99c80e0eac25000235)

## Description

Your task is to calculate how many ways there are to attach an 1 × 1 Lego brick to an a(width) × b(height) Lego brick and your code length should less than 31 characters.

For an 2 x 4 Lego brick, the result should be 19

## My Solution

**JavaScript**

```js
brickCombos = (a, b) => 3 * a * b - a - b + 1;
```
