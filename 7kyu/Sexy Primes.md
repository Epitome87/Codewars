# [Sexy Primes <3](https://www.codewars.com/kata/56b58d11e3a3a7cade000792)

## Description

Sexy primes are pairs of two primes that are `6` apart. In this kata, your job is to complete the function which returns `true` if `x` & `y` are sexy, `false` otherwise.

**Examples**

```
5, 11   -->  true
61, 67  -->  true
7, 13   -->  true
5, 7    -->  false
1, 7    -->  false  (1 is not a prime)
```

Note: `x` & `y` are always positive integers, but they are not always in order of precedence... For example you can be given either `(5, 11)` or `(11, 5)` - both are valid.

## My Solution

**JavaScript**

```js
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  const maxDivisor = Math.sqrt(num);

  for (let i = 2; i <= maxDivisor; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const sexyPrime = (x, y) => Math.abs(x - y) === 6 && isPrime(x) && isPrime(y);
```

**Python**

```py
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0: return False
    return True

def sexy_prime(x, y):
    return abs(x - y) == 6 and is_prime(x) and is_prime(y)
```

### User Solution

**Python**

```py
from gmpy2 import is_prime
def sexy_prime(x, y):
    return abs(x - y) == 6 and is_prime(x) and is_prime(y)
```
