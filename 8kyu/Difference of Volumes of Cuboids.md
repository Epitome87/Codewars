# [Difference of Volumes of Cuboids](https://www.codewars.com/kata/58cb43f4256836ed95000f97)

## Description

In this simple exercise, you will create a program that will take two lists of integers, `a` and `b`. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are `([2, 2, 3], [5, 4, 1])`, the volume of `a` is 12 and the volume of `b` is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

**If you can, try writing it in one line of code.**

## My Solution

**JavaScript**

```js
const findDifference = ([a, b, c], [x, y, z]) => Math.abs(a * b * c - x * y * z);
```

```js
const findDifference = (a, b) => Math.abs(a.reduce((acc, cur) => acc * cur) - b.reduce((acc, cur) => acc * cur));
```

**Python**

```py
import functools

def find_difference(a, b):
    return abs(functools.reduce(lambda a, b: a * b, a) - functools.reduce(lambda a, b: a * b, b))
```

### User Solution

**Python**

```py
import math
def find_difference(a, b):
    return abs(math.prod(a) - math.prod(b))
```
