# [Return Pyramids](https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b)

## Description

The task is very simple.

You must to return pyramids. Given a number n you print a pyramid with n floors

For example , given a n=4 you must to print this pyramid:

```
   /\
  /  \
 /    \
/______\
```

Other example, given a n=6 you must to print this pyramid:

```
     /\
    /  \
   /    \
  /      \
 /        \
/__________\
```

Another example, given a n=10, you must to print this pyramid:

```
         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\
```

Note: an extra line feed character is needed at the end of the string. Case n=0 should so return "\n".

## My Solution

**JavaScript**

```js
const pyramid = (n) =>
  [...Array(n)]
    .map((_, i) => (i === n - 1 ? `/${'_'.repeat(2 * i)}\\\n` : `${' '.repeat(n - i - 1)}/${' '.repeat(2 * i)}\\`))
    .join('\n');
```

```js
const pyramid = (n) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i === n - 1) result.push(`/${'_'.repeat(2 * i)}\\\n`);
    else result.push(`${' '.repeat(n - i - 1)}/${' '.repeat(2 * i)}\\`);
  }

  return result.join('\n');
};
```

### User Solution

**JavaScript**

```js
const pyramid = (n) =>
  [...Array(n)].map((_, idx) => `${` `.repeat(n - idx - 1)}/${(n === idx + 1 ? `__` : `  `).repeat(idx)}\\\n`).join(``);
```
