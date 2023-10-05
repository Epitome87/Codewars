# [Sequence to 1](https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b)

## Description

Get the number n to return the sequence from n to 1. The number n can be negative and also large number. (See the range as the following)

Example

```
n=5  >> [5,4,3,2,1]
n=-1 >> [-1,0,1]

Range :
Python     -9999 < n < 9999
Javascript -9999 < n < 9999
c++        -9999 < n < 9999
Crystal    -9999 < n < 9999
Ruby       -9999 < n < 9999
```

## My Solution

**JavaScript**

```js
const seqToOne = (n) => Array.from({ length: Math.abs(n - 1) + 1 }, (_, idx) => n + (n > 0 ? -idx : idx));
```

```js
const seqToOne = (n) => {
  const result = [];

  if (n > 1) for (let i = n; i >= 1; i--) result.push(i);
  if (n < 2) for (let i = n; i <= 1; i++) result.push(i);

  return result;
};
```

### User Solution

**JavaScript**

```js
const seqToOne = (n) => [...Array(Math.abs(n - 1) + 1)].map((_, idx) => n + (n > 0 ? -idx : idx));
```
