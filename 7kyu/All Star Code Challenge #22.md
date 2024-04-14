# [All Star Code Challenge #22](https://www.codewars.com/kata/5865cff66b5699883f0001aa)

## Description

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

```
3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
```

## My Solution

**JavaScript**

```js
const toTime = (seconds) => `${(seconds / 3600) ^ 0} hour(s) and ${((seconds % 3600) / 60) ^ 0} minute(s)`;
```

```js
const toTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  return `${hours} hour(s) and ${mins} minute(s)`;
};
```

**Python**

```py
def to_time(seconds):
    return f"{seconds // 3600} hour(s) and {seconds % 3600 // 60} minute(s)"
```
