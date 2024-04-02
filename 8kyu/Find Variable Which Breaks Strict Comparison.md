# [Find Variable Which Breaks Strict Comparison](https://www.codewars.com/kata/560f8d41cf6e1fe5c900002e)

## Description

In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!

```js
var x = something;
x === x; // returns false!
```

Write a function which will return value for which strict comparison will give false!

## My Solution

**JavaScript**

```js
const findStrangeValue = () => NaN;
```

```js
// Can also write something that evaluates to NaN:
const findStrangeValue = () => +'This is NaN';
```
