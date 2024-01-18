# [Training JS #8: Conditional Statement -- Switch](https://www.codewars.com/kata/572059afc2f4612825000d8a)

Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

```
+---------------+-------------+
| month | days |
+---------------+-------------+
|1,3,5,7,8,10,12| 31 |
+---------------+-------------+
|4,6,9,11 | 30 |
+---------------+-------------+
|2 | 28 | (Do not consider the leap year)
+---------------+-------------+
```

Tip: Using default for most of the cases can reduce your work.

## My Solution

**JavaScript**

```js
const howManydays = (month) => {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};
```

```js
const howManydays = (month) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
  }
};
```
