# [Convert a Number to Money!!](https://www.codewars.com/kata/54ad586282bc65b7ec000182)

## Description

Simplified number to money converter.

Note:

- truncate to 2 decimal places
- don't keep trailing zeros
- input will be a positive number with at least two trailing digits

Examples:

2546.2562 --> '2,546.25'
1500.342626 --> '1,500.34'
100.2134 --> '100.21'

## My Solution

**JavaScript**

```js
const numberToMoney = (n) => (((n * 100) ^ 0) / 100).toLocaleString();
```

```js
const numberToMoney = (n) => (parseInt(n * 100) / 100).toLocaleString();
```