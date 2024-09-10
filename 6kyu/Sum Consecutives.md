# [Sum Consecutives](https://www.codewars.com/kata/55eeddff3f64c954c2000059)

## Description

You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

**Examples:**

    [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

    """So as you can see sum of consecutives 1 is 1
    sum of 3 consecutives 4 is 12
    sum of 0... and sum of 2
    consecutives 3 is 6 ..."""

    [1,1,7,7,3] # should return [2,14,3]
    [-5,-5,7,7,12,0] # should return [-10,14,12,0]

## My Solution

**JavaScript**

```js
const sumConsecutives = (s) =>
  s.reduce((acc, cur, i, arr) => (cur !== arr[i - 1] ? acc.push(cur) : (acc[acc.length - 1] += cur), acc), []);
```

```js
const sumConsecutives = (s) => {
  const res = [];
  let sum = s[0];

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) sum += s[i];
    else {
      res.push(sum);
      sum = s[i];
    }
  }

  return res;
};
```

### User Solution

**JavaScript**

```js
const sumConsecutives = (s) => s.reduce((r, e, i) => r.concat(e + (e === s[i - 1] ? r.pop() : 0)), []);
```
