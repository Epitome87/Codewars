# [Shorten Me: Mad Mathematician's Algorithm II (Subtraction)](https://www.codewars.com/kata/5a685705b3bfa870f6000024)

## Description

**Task**

You have to write a madSub(a,b) function returning a value of a - b without - in your code.

**Coding Limitation:**

- Less than 30 characters

**Input:**

- a and b : integer ( 0-10000 )

## My Solution

**JavaScript**

```js
madSub = (a, b) => a + ~b + 1;
```

### User Solution

**JavaScript**

```js
madSub = (a, b) => a + ~0 * b;
```

## Takeaways

1. `~b` is equivalent to `-(b + 1)`, or `-b - 1`. So, `~42` turns into `-43`, and `~-42` turns into `41`.
