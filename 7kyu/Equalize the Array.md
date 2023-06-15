# [Equalize the Array!](https://www.codewars.com/kata/580a1a4af195dbc9ed00006c)

## Description

No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!

## My Solution

**JavaScript**

```js
const equalize = (arr) => arr.map((n) => ((delta = n - arr[0]), `${delta >= 0 ? '+' : ''}${delta}`), []);
```

```js
const equalize = (arr) => arr.map((n) => Intl.NumberFormat('en-US', { signDisplay: 'always' }).format(n - arr[0]), []);
```
