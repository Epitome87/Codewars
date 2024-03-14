# [Sine, Cosine and Others](https://www.codewars.com/kata/57d52a7f76da830e43000188)

## Description

Given value of sine, implement function which will return sine, cosine, tangent, and cotangent in list. Order must be same as in the description and every number must be rounded to 2 decimal places. If tangent or cotangent can not be calculated just don't contain them in result list.

Trigonometry - https://en.wikipedia.org/wiki/Trigonometry

## My Solution

**JavaScript**

```js
const sctc = (sin) => {
  const cos = Math.sqrt(1 - sin ** 2);
  const tan = sin / cos;
  const cot = cos / sin;
  return [sin, cos, tan, cot].filter(Number.isFinite).map((v) => +v.toFixed(2));
};
```

**Python**

```py
import math

def sctc(sin):
    cos = (1 - sin ** 2) ** 0.5
    tan = sin / cos if cos else math.inf
    cot = cos / sin if sin else math.inf
    lst = [sin, cos, tan, cot]
    return [round(x, 2) for x in lst if math.isfinite(x)]
```
