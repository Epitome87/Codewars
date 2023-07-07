# [All Star Code Challenge #24](https://www.codewars.com/kata/5866c6cf442e3f16f9000089)

## Description

Your friend David is an architect who is working on a triangle-focused design. He needs a quick way for knowing the measurement of a right triangle's side, only knowing two of the sides.

He knows about the Pythagorean Theorem, but is too lazy to do the math. Help him by making 2 functions to ease his troubles.

Create 2 functions:

1. hypotenuse(), which takes 2 integer arguments, the length of two regular sides of a right triangle, and returns the length of the missing side, the hypotenuse, as a number.

2. leg(), which takes 2 integer arguments, the first being the length of the hypotenuse, and the second being the length of a regular side of a right triangle. This function should return the length of the missing regular side, as a number.

```js
hypotenuse(3, 4); // => 5
leg(5, 3); // => 4
```

https://en.wikipedia.org/wiki/Pythagorean_theorem

Note: Do NOT round the ouput number
You do not have to verify if the input values are "proper", assume them to be non-zero integers

## My Solution

**JavaScript**

```js
const hypotenuse = Math.hypot;
const leg = (c, a) => (c ** 2 - a ** 2) ** 0.5;
```
