# [Bin to Decimal](https://www.codewars.com/kata/57a5c31ce298a7e6b7000334)

## Description

Complete the function which converts a binary number (given as a string) to a decimal number.

## My solution:

**JavaScript**

```js
const binToDec = (binary) => parseInt(binary, 2);
```

### User Solution

**JavaScript**

```js
const binToDec = (bin) => [...bin].reduce((dec, bit) => (dec << 1) | bit, 0);
```

```js
const binToDec = (bin) => [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0);
```

## Takeways:
1. Learn formula for binary to decimal!
2. Learn bit manipulation!
