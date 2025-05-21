# [Time Converter: Hours, Minutes, Seconds and Milliseconds](https://www.codewars.com/kata/56b8b0ae1d36bb86b2000eaa)

## Description

Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

```js
new Date(2016, 2, 8, 16, 42, 59);
// Should return: '16:42:59,000';
```

## My Solution

**JavaScript**

```js
const convert = (time) => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const milliseconds = String(time.getMilliseconds()).padStart(3, '0');

  return `${hours}:${minutes}:${seconds},${milliseconds}`;
};
```
