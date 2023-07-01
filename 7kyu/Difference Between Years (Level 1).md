# [Difference Between Years (Level 1)](https://www.codewars.com/kata/588f5a38ec641b411200005b)

## Description

Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

**Examples:**

```
'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
```

At this level, you don't need validate months and days to calculate the difference.

## My Solution

**JavaScript**

```js
const howManyYears = (date1, date2) => Math.abs(date1.split('/')[0] - date2.split('/')[0]);
```

### User Solution

**JavaScript**

```js
var howManyYears = function (a, b) {
  return Math.abs(parseInt(a) - parseInt(b));
};
```
