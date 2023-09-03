# [Sequences and Series](https://www.codewars.com/kata/5254bd1357d59fbbe90001ec)

## Description

Have a look at the following numbers.

```
 n | score
---+-------
 1 |  50
 2 |  150
 3 |  300
 4 |  500
 5 |  750
```

Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n.

Note Real test cases consists of 100 random cases where 1 <= n <= 10000

## My Solution

**JavaScript**

```js
const getScore = (n) => (n < 2 ? 50 : getScore(n - 1) + n * 50);
```

```js
const getScore = (n) => {
  let res = 0;
  let scale = 0;
  for (let i = 1; i <= n; i++) {
    scale += 50;
    res += scale;
  }
  return res;
};
```

### User Solution

**JavaScript**

```js
// base idea is to build the sum from 1 to n: n * (n + 1) / 2
// and then just multiply by 50
function getScore(n) {
  return n * (n + 1) * 25;
}
```
