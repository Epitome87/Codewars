# [Find the Remainder](https://www.codewars.com/kata/524f5125ad9c12894e00003f)

## Description

**Task:**

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

**Examples:**

```
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
```

## My Solution

**JavaScript**

```js
const remainder = (n, m) => Math.max(n, m) % Math.min(n, m);
```

**Python**

```py
def remainder(a, b):
    if a > b:
        return None if b == 0 else a % b
    return None if a == 0 else b % a
```

### User Solution

**Python**

```py
def remainder(a,b):
    return None if min(a, b) == 0 else max(a, b) % min(a, b)
```
