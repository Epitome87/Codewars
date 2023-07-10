# [Divisible by Previous Digit?](https://www.codewars.com/kata/5a2809dbe1ce0e07f800004d)

## Description

Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

**Examples**

```
73312 => [false, false, true, false, true]
2026 => [false, true, false, true]
635 => [false, false, false]
```

Remember 0 is evenly divisible by all integers but not the other way around.

## My Solution

**JavaScript**

```js
const divisibleByLast = (n) => [...`${n}`].reduce((acc, curr, idx, arr) => [...acc, +curr % +arr[idx - 1] === 0], []);
```
