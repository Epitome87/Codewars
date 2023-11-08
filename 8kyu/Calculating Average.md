# [Calculate Average](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)

## Description

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

## My solution

**JavaScript** 

```js
const find_average = (array) => array.reduce((acc, cur) => acc + cur, 0) / array.length || 0;
```
