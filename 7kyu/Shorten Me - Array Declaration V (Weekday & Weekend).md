# [Shorten Me: Array Declaration V (Weekday & Weekend)](https://www.codewars.com/kata/5a54d97dc9314252510008eb)

## Description

**Task**

You have to write an array() function returning an array object with elements as follow:

```js
['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
```

**Coding Limitation:**

Less than 75 characters

## My Solution

**JavaScript**

```js
array = (_) => 'sun,mon,tues,wednes,thurs,fri,satur'.split`,`.map((a) => a + 'day');
```

### User Solution

**JavaScript**

```js
array = (_) =>
  require('moment')
    .weekdays()
    .map((i) => i.toLowerCase());
```
