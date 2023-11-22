# [Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7)

## Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

- HH = hours, padded to 2 digits, range: 00 - 99
- MM = minutes, padded to 2 digits, range: 00 - 59
- SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

## My Solution

**JavaScript**

```js
const humanReadable = (seconds) => {
  const hh = `${Math.floor(seconds / 3600)}`;
  const mm = `${Math.floor((seconds % 3600) / 60)}`;
  const ss = `${Math.floor((seconds % 3600) % 60)}`;

  return `${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:${ss.padStart(2, '0')}`;
};
```

### User Solution

**JavaScript**

```js
// Top user solution (refactored by me):
function humanReadable(seconds) {
  const pad = (x) => (x < 10 ? '0' + x : x);

  return pad(parseInt(seconds / (60 * 60))) + ':' + pad(parseInt((seconds / 60) % 60)) + ':' + pad(seconds % 60);
}
```

```js
// Clever user solution (refactored by me):
const humanReadable = (seconds) =>
  [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map((v) => ((v = Math.floor(v)), v < 10 ? '0' + v : v))
    .join(':');
```

```js
// Alternate version of the above solution:
const humanReadable = (seconds) =>
  [seconds / 3600, (seconds % 3600) / 60, seconds % 60].map((v) => (v = `${v | 0}`.padStart(2, '0'))).join(':');
```

## Takeaways:

1. When returning an expression that repeats itself multiple times, consider putting each part in an array and calling the map function with the repeated code!
