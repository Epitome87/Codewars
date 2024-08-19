# [Days in the Year](https://www.codewars.com/kata/56d6c333c9ae3fc32800070f)

## Description

A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

    yearDays(2000) returns "2000 has 366 days"

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

## My Solution

**JavaScript**

```js
const yearDays = (year) => {
  let days = 365;
  if (year % 400 === 0) days = 366;
  else if (year % 4 === 0 && year % 100) days = 366;
  return `${year} has ${days} days`;
};
```

```js
const yearDays = (year) => {
  let isLeap = false;
  if (year % 100 === 0) {
    if (year % 400 === 0) isLeap = true;
    else isLeap = false;
  } else if (year % 4 === 0) isLeap = true;
  return `${year} has ${isLeap ? '366' : '365'} days`;
};
```

**Python**

```py
def year_days(year):
    return f'{year} has {366 if not year % 400 or (not year % 4 and year % 100) else 365} days'
```
