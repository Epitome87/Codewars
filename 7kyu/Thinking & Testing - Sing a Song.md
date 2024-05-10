# [Thinking & Testing: Sing a Song](https://www.codewars.com/kata/589dcba5e708ec509f000164)

## Description

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

## My Solution

**JavaScript**

```js
const singSong = (a, b) =>
  b
    ? a === b
      ? `I have two ${a}s.`
      : `Uhh! ${a[0].toUpperCase() + a.slice(1)}-${b}!`
    : `I have a${/^[aeo]/i.test(a) ? 'n' : ''} ${a}.`;
```

```js
const singSong = (a, b) => {
  if (b) {
    return a === b ? `I have two ${a}.` : `Uhh! ${a[0].toUpperCase() + a.slice(1)}-${b}!`;
  }
  return `I have a${/^[aeo]/i.test(a) ? 'n' : ''} ${a}.`;
};
```
