# [Is the Date Today](https://www.codewars.com/kata/563c13853b07a8f17c000022)

## Description

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

## My Solution

**JavaScript**

```js
const isToday = (date) => new Date().toDateString() === date.toDateString();
```

**Python**

```py
from datetime import datetime

def is_today(date : datetime) -> bool:
    return datetime.today().date() == date.date()
```
