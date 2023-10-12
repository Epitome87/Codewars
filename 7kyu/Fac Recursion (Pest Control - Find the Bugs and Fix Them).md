# [Fac Recursion (Pest Control - Find the Bugs and Fix Them)](https://www.codewars.com/kata/57fa92b25c9910e7bc0001df)

## Description

The code is a recursive attempt in calculating the result of a factorial function.
I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

The goal is to find the bugs in the source code and fix them (play a little pest control).

## My Solution

**JavaScript**

```js
function facRecursion(value) {
  if (value < 0) return 0;
  if (value < 2) return 1;
  return value * facRecursion(--value);
}
```

### User Solution

**JavaScript**

```js

```
