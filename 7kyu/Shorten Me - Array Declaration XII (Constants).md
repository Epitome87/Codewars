# [Shorten Me: Array Declaration XII (Constants)](https://www.codewars.com/kata/5a5651e8620d1d56de000168)

## Description

**Task**

You have to write an array() function returning an array object with elements as follow:

```js
[1.4142135623730951, 1.4426950408889634, 2.302585092994046, 2.718281828459045, 3.141592653589793];
```

**Coding Limitation:**

Less than 45 characters

## My Solution

**JavaScript**

```js
with (Math) array = (_) => [SQRT2, LOG2E, LN10, E, PI];
```

## Takeaways

1. Using the `with` keyword in JavaScript is very much deprecated!
