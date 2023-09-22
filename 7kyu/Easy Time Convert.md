# [Easy Time Convert](https://www.codewars.com/kata/5a084a098ba9146690000969)

## Description

This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

Example

If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

## My Solution

**JavaScript**

```js
const timeConvert = (minutes) =>
  minutes <= 0 ? '00:00' : `${(minutes / 60) ^ 0}`.padStart(2, '0') + ':' + `${minutes % 60}`.padStart(2, '0');
```

```js
const timeConvert = (minutes) => {
  if (minutes <= 0) return '00:00';

  const hours = `${(minutes / 60) ^ 0}`.padStart(2, '0');
  const mins = `${minutes % 60}`.padStart(2, '0');

  return `${hours}:${mins}`;
};
```

### User Solution

**JavaScript**

```js
const timeConvert = (num) => [num / 60, num % 60].map((val) => `${Math.max(0, val) ^ 0}`.padStart(2, 0)).join(`:`);
```
