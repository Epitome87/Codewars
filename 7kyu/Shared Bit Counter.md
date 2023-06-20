# [Shared Bit Counter](https://www.codewars.com/kata/58a5aeb893b79949eb0000f1)

## Description

Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.

**Examples**

```
 7  =  0111 in binary
10  =  1010
15  =  1111
```

- 7 and 10 share only a single 1-bit (at index 2) --> false
- 7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
- 10 and 15 share 2 1-bits (at indexes 0 and 2) --> true

_Hint_: you can do this with just string manipulation, but binary operators will make your life much easier.

## My Solution

**JavaScript**

```js
const sharedBits = (a, b) => (a & b).toString(2).split('1').length > 2;
```

```js
function sharedBits(a, b) {
  const binaryA = a.toString(2).padStart(32, '0');
  const binaryB = b.toString(2).padStart(32, '0');
  let sharedBitCount = 0;

  for (let i = 0; i < binaryA.length; i++) {
    if (binaryA[i] === '1' && binaryB[i] === '1') {
      sharedBitCount++;

      if (sharedBitCount > 1) return true;
    }
  }

  return false;
}
```

### User Solution

**JavaScript**

```js
const sharedBits = (a, b) => Boolean((a &= b) & (a - 1));
```

```js
const sharedBits = (a, b) => !!(a & b & ((a & b) - 1));
/* User explanation:
It evaluates as (a & b) & ((a & b) - 1).

Let c = a & b, so you have c & c-1. That clears the top bit, if any, from c. If c == 0, a and b had no set bits in common. Otherwise, if c & c-1 == 0, a and b had exactly one set bit in common. In all other cases, they had at least two set bits in common, and the function should return true.

You can use c & c-1 iteratively to zero out all set bits from c. That's a faster way to count them than to count set bits over all of them.
*/
```
