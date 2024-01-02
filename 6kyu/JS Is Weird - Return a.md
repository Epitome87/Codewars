# [JS Is Weird: Return a](https://www.codewars.com/kata/57f90a8d5cae44a9dc000091)

## Description

There are only two tests.

1. Assign "a" to variable x
2. Only use the characters below:

```
+()[]!x=
```

## My Solution

**JavaScript**

```js
x = (![] + [])[+!![]];
```
