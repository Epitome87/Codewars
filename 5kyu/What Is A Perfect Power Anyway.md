# [What's a Perfect Power Anyway?](https://www.codewars.com/kata/54d4c8b08776e4ad92000835)

## Description

A perfect power is a classification of positive integers:

`In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.`

Your task is to check whether a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

**Examples**

```js
Test.describe('perfect powers', function () {
  Test.it('should work for some examples', function () {
    Test.assertSimilar(isPP(4), [2, 2], '4 = 2^2');
    Test.assertSimilar(isPP(9), [3, 2], '9 = 3^2');
    Test.assertEquals(isPP(5), null, "5 isn't a perfect number");
  });
});
```

## My Solution

**JavaScript**

```js
const isPP = (n) => {
  for (let m = 2; m * m <= n; m++) {
    for (let k = 2; m ** k <= n; k++) {
      if (m ** k === n) return [m, k];
    }
  }
  return null;
};
```

```js
const isPP = (n, limitM = Math.sqrt(n)) => {
  for (let m = 2; m <= limitM; m++) {
    const limitK = Math.ceil(Math.log(n) / Math.log(m));
    for (let k = 2; k <= limitK + 1; k++) if (Math.pow(m, k) === n) return [m, k];
  }

  return null;
};
```

**Python**

```py
import math

def isPP(n):
    for i in range(int(math.log(n) / math.log(2)), 1, -1):
        x = round(n ** (1 / i))
        if (x ** i == n):
            return [x, i]
    return None
```

### User Solution

**JavaScript**

```js
var isPP = function (n) {
  for (var i = Math.floor(Math.log(n) / Math.log(2)); i > 1; i--) {
    var rt = Math.round(Math.pow(n, 1 / i));
    if (Math.pow(rt, i) === n) {
      return [rt, i];
    }
  }
  return null;
};
```

## Takeaways

1. User explanation of fast-performing user solution:

```
For this kata, we want to test various numbers m and see if m to the power k is exactly n.

So let's start with the equation m^k = n
Take the log of both sides: log (m^k) = log n
Then: k log m = log n, (because in logarithms, log a^b = b log a)
So k = log n / log m
So Math.round(Math.log(n) / Math.log(m) will get us the closest power of m to n. And that's what we can test to see if there is a match.
```
