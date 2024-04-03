# [Sum of Multiples](https://www.codewars.com/kata/57241e0f440cd279b5000829)

## Description

**Your Job**

Find the sum of all multiples of n below m

**Keep in Mind**

- n and m are natural numbers (positive integers)
- m is excluded from the multiples

**Examples**

```
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
```

## My Solution

**JavaScript**

```js
const sumMul = (n, m) => {
  if (m <= n) return 'INVALID';

  const arr = Array.from({ length: Math.floor(m / n) }, (v, i) => (i + 1) * n);

  return arr.reduce((acc, curr) => acc + curr, 0);
};
```

```js
function sumMul(n, m) {
  if (n >= m) return 'INVALID';

  var sum = 0;
  for (var i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
```

**Python**

```py
def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"
    sum = 0
    for i in range(n, m, n):
        sum += i
    return sum
```

### User Solution

**JavaScript**

```js
const sumMul = (n, m) => (~~(m / n) * (m + n - (m % n))) / 2 || 'INVALID';
```

**Python**

```py
def sum_mul(n, m):
    return sum(range(n, m, n)) if n > 0 < m else 'INVALID'
```

## Takeaways

1. Take note of the last solution: It's using a modified Gauss `N * (N+1) / 2` used to find sum of all integers between 1...N
