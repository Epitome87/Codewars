# [Halving Sum](https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d)

## Description

Given a positive integer n, calculate the following sum:

```
n + n/2 + n/4 + n/8 + ...
```

All elements of the sum are the results of integer division.

Example

```
25  =>  25 + 12 + 6 + 3 + 1 = 47
```

## My Solution

**JavaScript**

```js
const halvingSum = (n) => (n === 1 ? n : n + halvingSum((n / 2) ^ 0));
```

```js
const halvingSum = (n) => {
  let sum = n;

  while (n / 2 >= 1) {
    n = Math.floor(n / 2);
    sum += n;
  }

  return sum;
};
```

**Python**

```py
def halving_sum(n):
    return n if n == 1 else n + halving_sum(n // 2)
```
