# [Thinking & Testing: Retention and Discard](https://www.codewars.com/kata/56ee0448588cbb60740013b9)

## Description

No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!

## My Solution

**JavaScript**

```js
const testit = (n) => Array.from({ length: n }, (_, i) => i + 1).filter((el) => el % 2 && !(n % el));
```

### User Solution

**JavaScript**

```js
const testit = (n) => [...Array(n + 1).keys()].filter((el, i) => n % i === 0 && i % 2);
```
