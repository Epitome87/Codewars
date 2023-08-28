# [Regex Validation of 24 Hours Time](https://www.codewars.com/kata/56a4a3d4043c316002000042)

## Description

Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

Accepted: 01:00 - 1:00

Not accepted:

24:00

You should check for correct length and no spaces.

## My Solution

**JavaScript**

```js
const validateTime = (time) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(time);
```

### User Solution

**JavaScript**

```js
const validateTime = (time) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(time);
```
