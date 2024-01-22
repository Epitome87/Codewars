# [Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

## Description

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples

```js
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
```

Notes

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

## My Solution

**JavaScript**

```js
const makeNegative = (num) => (num > 0 ? -num : num);
```

```js
const makeNegative = (num) => -Math.abs(num);
```

**Python**

```py
def make_negative( number ):
    return -abs(number)
```

```py
def make_negative(num):
  return -num if num > 0 else num
```
