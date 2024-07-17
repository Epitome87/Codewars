# [Failed Filter - Bug Fixing #3](https://www.codewars.com/kata/55c606e6babfc5b2c500007c)

## Description

Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.

Original JavaScript code:

```js
var FilterNumbers = function (str) {
  return str
    .split('')
    .filter((c) => !parseInt(c))
    .join('');
};
```

Original Python code:

```py
def filter_numbers(string):
    return "".join(x for x in string if int(x))
```

## My Solution

**JavaScript**

```js
const FilterNumbers = (str) => str.replace(/\d/g, '');
```

```js
const FilterNumbers = (str) => [...str].filter(isNaN).join('');
```

```js
const FilterNumbers = (str) => [...str].filter((c) => !Number.isInteger(+c)).join('');
```

**Python**

```py
def filter_numbers(string):
    return ''.join(x for x in string if not x.isdigit())
```

### User Solution

## Takeaways

1. The original code's use of `!parseInt(c)` did not work properly, as `parseInt(0)` returns `0` (a falsy value) rather than `NaN`.
