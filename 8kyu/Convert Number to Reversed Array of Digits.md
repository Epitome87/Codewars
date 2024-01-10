# [Convert Number to Reversed Array of Digits](https://www.codewars.com/kata/5583090cbe83f4fd8c000051)

## Description

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):

```
348597 => [7,9,5,8,4,3]
0 => [0]
```

**JavaScript**

```js
const digitize = (n) => [...`${n}`].reverse().map(Number);
```

```js
const digitize = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((el) => +el);
```

**Python**

```py
def digitize(n):
    return [int(x) for x in str(n)[::-1]]
```

### User Solution

**Python**

```py
def digitize(n):
    return map(int, str(n)[::-1])
```
