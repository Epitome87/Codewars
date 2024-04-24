# [Digitize](https://www.codewars.com/kata/5417423f9e2e6c2f040002ae)

## Description

Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]

## My Solution

**JavaScript**

```js
const digitize = (n) => [...`${n}`].map(Number);
```

```js
const digitize = (n) =>
  String(n)
    .split('')
    .map((c) => Number(c));
```

**Python**

```py
def digitize(n):
    return [int(x) for x in str(n)]
```
