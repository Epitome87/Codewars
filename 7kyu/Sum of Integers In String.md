# [Sum of Integers In String](https://www.codewars.com/kata/598f76a44f613e0e0b000026)

## Description

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string `"The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"`, the sum of the integers is `3635`.

_Note: only positive integers will be tested._

## My Solution

**JavaScript**

```js
const sumOfIntegersInString = (s) => (s.match(/[0-9]+/g) || []).reduce((acc, cur) => acc + +cur, 0);
```
