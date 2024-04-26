# [Binary Representation of an Integer](https://www.codewars.com/kata/5a5f3034cadebf76db000023)

## Description

Write a function that returns an array with each element representing one bit of a 32 bit integer in such a way that if printed it would appear as the binary representation of the integer (Least Significant Bit on the right).

e.g. 1 = 00000000000000000000000000000001

Assign either a 1 or a 0 to the array element depending on whether the bit at the corresponding position is a 1 or 0.

For example (input -> output):

```
1 -> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
-1 -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
```

The function takes one argument (n) which is the integer to be converted to binary.

## My Solution

**JavaScript**

```js
const showBits = (n) => [...(n >>> 0).toString(2).padStart(32, 0)].map(Number);
```

**Python**

```py
def show_bits(n):
    return [int(x) for x in bin(n & (2 ** 32 - 1))[2:].lstrip('-').rjust(32, '0')]
```

### User Solution

**Python**

```py
def showBits(n):
    return list(map(int, '{:032b}'.format(n if n >= 0 else 2**32 + n)))
```

## Takeaways

1. The overall effect of `x >>> 0` is convert x into a 32-bit unsigned integer. Otherwise, JavaScript simply represents a negative number in binary as the positive of that number, but with a `-` in front of it.
