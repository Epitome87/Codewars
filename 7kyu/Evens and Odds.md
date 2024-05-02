# [Evens and Odds](https://www.codewars.com/kata/583ade15666df5a64e000058)

## Description

This kata is about converting numbers to their binary or hexadecimal representation:

- If a number is even, convert it to binary.
- If a number is odd, convert it to hex.

Numbers will be positive. The hexadecimal string should be lowercased.

## My Solution

**JavaScript**

```js
const evensAndOdds = (n) => n.toString(n % 2 ? 16 : 2);
```

```js
const evensAndOdds = (num) => (num % 2 ? num.toString(16) : num.toString(2));
```
