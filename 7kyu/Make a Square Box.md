# [Make a Square Box!](https://www.codewars.com/kata/https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/solutions/javascript)

## Description

Easy; Make a box

Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

```
[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
```

n = 3

```
[
  '---',
  '- -',
  '---'
]
```

## My Solution

**JavaScript**

```js
const box = (n) =>
  Array.from({ length: n }, (_, i) => (i === 0 || i === n - 1 ? '-'.repeat(n) : `-${' '.repeat(n - 2)}-`));
```

```js
const box = (n) => {
  const result = [];
  for (let row = 0; row < n; row++) {
    if (row === 0 || row === n - 1) result.push('-'.repeat(n));
    else result.push(`-${' '.repeat(n - 2)}-`);
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
const box = (n) => [`-`.repeat(n), ...Array(n - 2).fill(`-${` `.repeat(n - 2)}-`), `-`.repeat(n)];
```
