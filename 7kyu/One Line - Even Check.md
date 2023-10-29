# [One Line: Even Check](https://www.codewars.com/kata/59bcde54590b86479e000d71)

## Description

Create a function that accepts a number n as a parameter and returns true if the number is even and false if the number is odd.

Notes:

`javascript 1 <= n <= 1000` The length of your code must be less than or equal to 19 characters.
You are not allowed to use %.

## My Solution

**JavaScript**

```js
evenCheck = (n) => !(n & 1);
```
