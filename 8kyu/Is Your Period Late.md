# [Is Your Period Late?](https://www.codewars.com/kata/578a8a01e9fd1549e50001f1)

## Description

In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

## My Solution

**JavaScript**

```js
const periodIsLate = (last, today, cycleLength) => today - last > cycleLength * 8.64e7;
```

```js
const periodIsLate = (last, today, cycleLength) => {
  const msInDay = 1000 * 60 * 60 * 24;
  const deltaDays = (today - last) / msInDay;
  return deltaDays > cycleLength;
};
```

**Python**

```py
from datetime import timedelta
def period_is_late(last,today,cycle_length):
    return last + timedelta(days=cycle_length) < today
```

### User Solution

**Python**

```py
def period_is_late(last, today, cycle_length):
    return (today - last).days > cycle_length
```
