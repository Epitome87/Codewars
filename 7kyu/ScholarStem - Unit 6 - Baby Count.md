# [ScholarStem - Unit 6 - Baby Count](https://www.codewars.com/kata/)

## Description

A local birthing center is interested in names!

They have arrays of all the baby names they see each year, but the lists are sooo long! They don’t know how to calculate how many times one name is used.

Given an array of names and a specific name string, return the number of times that specific name appears in the array.

```js
countName(['Tom', 'Bob', 'Harry', 'Bob'], 'Bob'); //should return 2, since "Bob" shows up 2 times in the array
```

## My Solution

**JavaScript**

```js
const countName = (names, name) => names.filter((val) => val === name).length;
```
