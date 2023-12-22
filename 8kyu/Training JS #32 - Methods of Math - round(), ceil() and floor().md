# [Training JS #32: Methods of Math -- round(), ceil() and floor()](https://www.codewars.com/kata/5732d3c9791aafb0e4001236)

## Description

**Task**

Coding in function `roundIt`. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using `ceil()` method.

```
roundIt(3.45) should return 4
```

If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using `floor()` method.

```
roundIt(34.5) should return 34
```

If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using `round()` method.

```
roundIt(34.56) should return 35
```

## My Solution

**JavaScript**

```js
const roundIt = (n) => {
  const [left, right] = n.toString().split('.');
  return left.length < right.length ? Math.ceil(n) : left.length > right.length ? Math.floor(n) : Math.round(n);
};
```

**Python**

```py
import math

def round_it(n):
    left, right = str(n).split('.')
    return math.ceil(n) if len(left) < len(right) else (math.floor(n) if len(right) < len(left) else round(n))
```

```py
import math

def round_it(n):
    left, right = str(n).split('.')
    if len(left) < len(right):
        return math.ceil(n)
    if len(right) < len(left):
        return math.floor(n)
    return round(n)
```

### User Solution

**Python**

```py
from math import ceil

def round_it(n):
    left, right = (len(part) for part in str(n).split("."))
    return ceil(n) if left < right else int(n) if left > right else round(n)
```

```py
def round_it(n):
    a, b = map(len, str(n).split('.'))
    return round(n) if a == b else int(n) + (a < b)
```
