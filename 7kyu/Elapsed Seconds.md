# [Elapsed Seconds](https://www.codewars.com/kata/517b25a48557c200b800000c)

## Description

Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:

- The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
- The start time will always be before the end time.

## My Solution

**JavaScript**

```js
const elapsedSeconds = (start, end) => (end - start) / 1000;
```

**Python**

```py
def elapsed_seconds(start, end):
    return (end - start).total_seconds()
```
