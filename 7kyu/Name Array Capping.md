# [Name Array Capping](https://www.codewars.com/kata/5356ad2cbb858025d800111d)

## Description

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

```js
capMe(['jo', 'nelson', 'jurie']); // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']); // returns ['Karly', 'Daniel', 'Kelsey']
```

## My Solution

**JavaScript**

```js
const capMe = (names) => names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
```
