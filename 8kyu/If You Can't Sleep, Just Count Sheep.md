# [If You Can't Sleep, Just Count Sheep!](https://www.codewars.com/kata/5b077ebdaf15be5c7f000077)

## Description

Given a non-negative integer, `3` for example, return a string with a murmur: `"1 sheep...2 sheep...3 sheep..."`. Input will always be valid, i.e. no negative integers.

## My Solution

**JavaScript**

```js
const countSheep = (num) => [...Array(num).keys()].map((n) => `${++n} sheep...`).join('');
```

```js
const countSheep = (length) => Array.from({ length }, (_, idx) => `${++idx} sheep...`).join('');
```

```js
const countSheep = (num) =>
  Array(num)
    .fill('')
    .map((_, idx) => `${++idx} sheep...`)
    .join('');
```

**Python**

```py
def count_sheep(n):
    return ''.join(str(x) + ' sheep...' for x in range(1, n + 1))
```
