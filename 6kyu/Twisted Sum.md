# [Twisted Sum](https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f)

## Description

Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples

```
# N = 4

1 + 2 + 3 + 4 = 10

# N = 10

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
```

## My Solution

**JavaScript**

```js
const twistedSum = (n) => [...[...Array(n + 1).keys()].join('')].reduce((acc, cur) => acc + +cur, 0);
```

```js
const twistedSum = (n) => [...[...Array(n)].map((_, i) => i + 1).join('')].reduce((acc, cur) => acc + +cur, 0);
```

```js
const twistedSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += [...`${i}`].reduce((acc, cur) => acc + +cur, 0);
  }
  return sum;
};
```
