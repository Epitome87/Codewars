# [The Skiponacci Sequence](https://www.codewars.com/kata/580777ee2e14accd9f000165)

## Description

Your task is to generate the Fibonacci sequence to n places, with each alternating value as `"skip"`. For example:

`"1 skip 2 skip 5 skip 13 skip 34"`

Return the result as a string

You can presume that `n` is always a positive integer between (and including) 1 and 64.

## My Solution

**JavaScript**

```js
const skiponacci = (n) => {
  const fibSequence = Array(n + 1)
    .fill(0)
    .reduce((acc, _, i) => [...acc, i < 2 ? i : acc[i - 2] + acc[i - 1]], []);
  return fibSequence
    .slice(1)
    .map((el, i) => (i % 2 ? 'skip' : el))
    .join(' ');
};
```

```js
const skiponacci = (n) => {
  const fib = [0, 1];
  for (let i = 1; i < n; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  return fib.filter((e, i) => i % 2).join(' skip ') + (n % 2 ? '' : ' skip');
};
```

### User Solution

**JavaScript**

```js
const skiponacci = (n) =>
  [...Array(n)].map((_, idx) => (++idx & 1 ? Math.round(((1 + 5 ** 0.5) / 2) ** idx / 5 ** 0.5) : `skip`)).join(` `);
```

```js
const skiponacci = (n, i = 0, a = 1, b = 1, acc = []) =>
  i < n ? skiponacci(n, i + 1, b, a + b, acc.concat(i % 2 ? 'skip' : a)) : acc.join(' ');
```
