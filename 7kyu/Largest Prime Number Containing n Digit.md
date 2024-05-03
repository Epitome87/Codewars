# [Largest Prime Number Containing n Digit](https://www.codewars.com/kata/5676f07029da352ba2000065)

## Description

Just as the title suggests :D . For example ->

```
largest(1); //Should return 7
largest(2); //Should return 97
```

Do not mind the pattern as it is just an incident ! And make sure to return false if the input is not an integer :D This might seem simple at first, it is, but keep an eye on the performance. Go for it !

## My Solution

**JavaScript**

```js
const isPrime = (n) => {
  for (let i = 2, limit = Math.sqrt(n); i <= limit; i++) if (!(n % i)) return false;
  return n > 1;
};

const largest = (n) => {
  if (typeof n !== 'number' || n < 1) return false;
  for (let i = 10 ** n - 1; i > 1; i--) if (isPrime(i)) return i;
};
```

**Python**

```py
from gmpy2 import is_prime

def largest(n):
    if type(n) != int or n < 1: return False
    for i in range(10 ** n - 1, 2, -1):
        if is_prime(i): return i
```

### User Solution

**Python**

```py
def largest(n):
    return [7, 97, 997, 9973, 99991, 999983][n-1] if type(n) == int and n > 0 else False
```
