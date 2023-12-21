# [Reversed Sequence](https://www.codewars.com/kata/5a00e05cc374cb34d100000d)

## Description

Build a function that returns an array of integers from n to 1 where n>0.

Example : `n=5` --> `[5,4,3,2,1]`

## My Solution

**JavaScript**

```js
const reverseSeq = (n) => Array.from({ length: n }, (_, i) => n - i);
```

```js
const reverseSeq = (n) => {
  const result = [];

  for (let i = n; i > 0; i--) {
    result.push(i);
  }

  return result;
};
```

**Python**

```py
def reverse_seq(n):
    return [x for x in range(n, 0, -1)]
```

```py
def reverse_seq(n):
    result = []
    for i in range(n, 0, -1):
        result.append(i)
    return result
```

### User Solution

**JavaScript**

```js
const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
```

```js
const reverseSeq = (length) => Array.from({ length }, () => length--);
```

**Python**

```py
def reverseseq(n):
    return list(range(n, 0, -1))
```
