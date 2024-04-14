# [Alternate Case](https://www.codewars.com/kata/57a62154cf1fa5b25200031e)

## Description

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

## My Solution

**JavaScript**

```js
const alternateCase = (s) =>
  [...s].reduce((acc, cur) => acc + (/[a-z]/.test(cur) ? cur.toUpperCase() : cur.toLowerCase()), '');
```

```js
const alternateCase = (s) => [...s].map((x) => (/[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase())).join('');
```

```js
const alternateCase = (s) =>
  s
    .split('')
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join('');
```

**Python**

```py
def alternate_case(s):
    return "".join([c.upper() if c.islower() else c.lower() for c in s])
```

### User Solution

**Python**

```py
def alternateCase(s):
    return s.swapcase()
```
