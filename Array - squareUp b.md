# [Array - squareUp b!](https://www.codewars.com/kata/5a8bcd980025e99381000099)

## Description

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

```
squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
```

0 <= n <= 1000.

## My Solution

**JavaScript**

```js
const squareUp = (n) =>
  Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (n - i - 2 < j ? n - j : 0))).flat();
```

**Python**

```py
def square_up(n):
    result = []

    for i in range(1, n + 1):
        for j in range(n, 0, -1):
            result.append(j if j <= i else 0)

    return result
```

### User Solution

**JavaScript**

```js
function squareUp(n) {
  let res = [];

  for (let i = 1; i <= n; i++) for (let j = n; j >= 1; j--) res.push(j <= i ? j : 0);

  return res;
}
```

**Python**

```py
def square_up(n):
    return [j if j <= i else 0 for i in range(1, n+1) for j in range(n, 0, -1)]
```
