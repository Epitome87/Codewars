# [Calculate Parity Bit](https://www.codewars.com/kata/5df261342964c80028345a0a)

## Description

A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

Your task is to return an integer (`0` or `1`), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

Example:

```
  Parity: 'even'
  Bin: '0101010'
  Result: 1
```

Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

For more information: https://en.wikipedia.org/wiki/Parity_bit

## My Solution

**JavaScript**

```js
const checkParity = (parity, bin) => +({ even: 0, odd: 1 }[parity] === bin.split('1').length % 2);
```

```js
const checkParity = (parity, bin) => {
  const numOnes = bin.split('1').length - 1;
  const isOdd = numOnes % 2;
  return (isOdd && parity === 'even') || (!isOdd && parity === 'odd') ? 1 : 0;
};
```

### User Solution

**JavaScript**

```js
const checkParity = (parity, bin) => +(parity === (bin.split('1').length % 2 ? 'odd' : 'even'));
```

```js
const checkParity = (parity, bin) => [...bin].reduce((pre, val) => pre ^ val, parity === `odd`);
```
