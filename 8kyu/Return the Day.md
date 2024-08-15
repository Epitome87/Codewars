# [Return the Day](https://www.codewars.com/kata/59dd3ccdded72fc78b000b25)

## Description

Complete the function which returns the weekday according to the input number:

- `1` returns `"Sunday"`
- `2` returns `"Monday"`
- `3` returns `"Tuesday"`
- `4` returns `"Wednesday"`
- `5` returns `"Thursday"`
- `6` returns `"Friday"`
- `7` returns `"Saturday"`
- Otherwise returns `"Wrong, please enter a number between 1 and 7"`

## My Solution

**JavaScript**

```js
const whatday = (num) =>
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][num - 1] ||
  'Wrong, please enter a number between 1 and 7';
```

**Python**

```py
def whatday(num):
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][num - 1] if 0 < num < 8 else 'Wrong, please enter a number between 1 and 7';
```
