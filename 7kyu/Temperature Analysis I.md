# [Temperature Analysis I](https://www.codewars.com/kata/588e0f11b7b4a5b373000041)

## Description

You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.

## My Solution

**JavaScript**

```js
const lowestTemp = (t) => Math.min(...t.split(' ')) || null;
```
