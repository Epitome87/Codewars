# [Simple Comparison](https://www.codewars.com/kata/57f6ecdfcca6e045d2001207)

## Description

Write a function that will compare two values, one will be a number and one will be a string. Return `true` if they are the same character (regardless of their different data types) and return `false` if they are not.

To make this challenge harder and to prompt the challenger to read up about coercion I have disabled some of the built in methods including `.toString()`, `.join()`, `.split()`, `parseInt` and `.Number()`.

## My Solution

**JavaScript**

```js
const add = (a, b) => a == b;
```
