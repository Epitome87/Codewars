# [The Office III - Broken Photocopier](https://www.codewars.com/kata/57ed56657b45ef922300002b/train/python)

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

## My Solution

**JavaScript**

```js
const broken = (x) => x.replace(/\d/g, (val) => val ^ 1);
```

```js
const broken = (x) =>
  x
    .split('')
    .map((b) => (b === '0' ? '1' : '0'))
    .join('');
```

**Python**

```py
def broken(inp):
    return ''.join(['0' if x == '1' else '1' for x in inp])
```
